import React from "react";
import { MemberEntity, createDefaultMemberEntity } from "../model/member";

export const useMembersByOrganization = () => {
  // Just return a copy of the mock data
  const getAllMembers = (organizationName: string): Promise<MemberEntity[]> => {
    const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

    return fetch(gitHubMembersUrl)
      .then(response => checkStatus(response))
      .then(response => parseJSON(response))
      .then(data => resolveMembers(data));
  };

  return {
    getAllMembers
  };
};

const checkStatus = (response: Response): Promise<Response> => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    let error = new Error(response.statusText);
    throw error;
  }
};

const parseJSON = (response: Response): any => {
  return response.json();
};

const resolveMembers = (data: any): Promise<MemberEntity[]> => {
  const members = data.map(gitHubMember => {
    var member: MemberEntity = createDefaultMemberEntity();

    member.id = gitHubMember.id;
    member.login = gitHubMember.login;
    member.avatar_url = gitHubMember.avatar_url;

    return member;
  });

  return Promise.resolve(members);
};

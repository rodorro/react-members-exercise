import React from "react";
import { MemberEntity, createDefaultMemberEntity } from "../model/member";

export const useMembersCollection = () => {

  const [membersCollection, setMembersCollection] = React.useState<MemberEntity[]>([]);

  // Just return a copy of the mock data
  const getMembersCollection = (organizationName: string) => {
    const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

    fetch(gitHubMembersUrl)
      .then(response => checkStatus(response))
      .then(response => parseJSON(response))
      .then(data => resolveMembers(data))
  };

  const resolveMembers = (data: any) => {
    const members = data.map(gitHubMember => {
       return resolveMember(gitHubMember);
    });
    setMembersCollection(members);
  };

  return {
    membersCollection,
    getMembersCollection
  };
};

export const useMember = () => {
  const getMember = (id: string): Promise<MemberEntity> => {
    const gitHubMemberUrl: string = `https://api.github.com/user/${id}`;

    return fetch(gitHubMemberUrl)
      .then(response => checkStatus(response))
      .then(response => parseJSON(response))
      .then(data => resolveMember(data));
  };

  return {
    getMember
  };
}

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

const resolveMember = (gitHubMember: MemberEntity): MemberEntity => {
  var member: MemberEntity = createDefaultMemberEntity();

  member.id = gitHubMember.id;
  member.login = gitHubMember.login;
  member.avatar_url = gitHubMember.avatar_url;
  member.company = gitHubMember.company;

  return member;
};

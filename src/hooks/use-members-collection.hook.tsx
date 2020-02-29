import React from "react";
import { MemberEntity, createDefaultMemberEntity } from "../model/member";
import { MEMBERS_PER_PAGE } from "../model/consts";
import { trackPromise} from 'react-promise-tracker';

export const useMembersCollection = () => {
  const [membersCollection, setMembersCollection] = React.useState<
    MemberEntity[]
  >([]);
  const [hashMoreElements, setHashMoreElements] = React.useState<boolean>(true);
  const [showOrganizationError, setShowOrganizationError] = React.useState(false);

  const getMembersCollection = (
    organizationName: string,
    page: number,
    refresh: boolean
  ) => {
    const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members?page=${page}`;

    trackPromise(
      fetch(gitHubMembersUrl)
        .then(response => checkStatus(response))
        .then(response => parseJSON(response))
        .then(data => resolveMembers(data, refresh))
        .catch(error => setShowOrganizationError(true))
    );
  };

  const resolveMembers = (data: any, refresh: boolean) => {
    const members = data.map(gitHubMember => {
      return resolveMember(gitHubMember);
    });

    if (members.length < MEMBERS_PER_PAGE) {
      setHashMoreElements(false);
    } else {
      setHashMoreElements(true);
    }
    refresh
      ? setMembersCollection(members)
      : setMembersCollection([...membersCollection, ...members]);
  };

  return {
    membersCollection,
    getMembersCollection,
    hashMoreElements,
    showOrganizationError,
    setShowOrganizationError
  };
};

export const useMember = () => {
  const getMember = (id: string): Promise<MemberEntity> => {
    const gitHubMemberUrl: string = `https://api.github.com/user/${id}`;

    return trackPromise(
      fetch(gitHubMemberUrl)
        .then(response => checkStatus(response))
        .then(response => parseJSON(response))
        .then(data => resolveMember(data))
      );
  };

  return {
    getMember
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

const resolveMember = (gitHubMember: MemberEntity): MemberEntity => {
  var member: MemberEntity = createDefaultMemberEntity();

  member.id = gitHubMember.id;
  member.login = gitHubMember.login;
  member.avatar_url = gitHubMember.avatar_url;
  member.company = gitHubMember.company;

  return member;
};

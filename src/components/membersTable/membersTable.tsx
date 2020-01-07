import * as React from "react";
import { MemberEntity } from "../../model/member";
import { memberAPI } from "../../api/memberAPI";
import { MemberRow } from "./memberRow";
import { MemberHead } from "./memberHead";

interface Props {}

export const MembersTableComponent = (props: Props) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organization, setOrganization] = React.useState<string>("Lemoncode");

  const loadMembers = () => {
    memberAPI.getAllMembers("lemoncode").then(members => setMembers(members));
  };

  const updateOrganization = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrganization(event.target.value);
  }

  return (
    <div className="row">
      <h2> Members Page</h2>
      <input value={organization} onChange={updateOrganization}></input>
      <button onClick={loadMembers}>Load</button>
      <table className="table">
        <thead>
          <MemberHead />
        </thead>
        <tbody>
          {members.map((member: MemberEntity) => (
            <MemberRow key={member.id} member={member} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

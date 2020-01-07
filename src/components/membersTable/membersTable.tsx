import * as React from "react";
import { MemberEntity } from "../../model/member";
import { MemberRow } from "./memberRow";
import { MemberHead } from "./memberHead";
import { useMembersByOrganization } from "../../hooks/use-members-collection.hook";

interface Props {}

export const MembersTableComponent = (props: Props) => {

  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { getAllMembers } = useMembersByOrganization();
  const [organization, setOrganization] = React.useState<string>("lemoncode");

  const loadMembers = () => {
    getAllMembers(organization)
      .then(members => setMembers(members))
      .catch(error => alert(error.message));
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

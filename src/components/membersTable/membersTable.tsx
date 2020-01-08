import * as React from "react";
import { MemberEntity } from "../../model/member";
import { MemberRow } from "./memberRow";
import { MemberHead } from "./memberHead";
import { useMembersByOrganization } from "../../hooks/use-members-collection.hook";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import { useStyles } from "./membersTable.style";

interface Props {}

export const MembersTableComponent = (props: Props) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { getAllMembers } = useMembersByOrganization();
  const [organization, setOrganization] = React.useState<string>("lemoncode");
  const classes = useStyles({});

  const loadMembers = () => {
    getAllMembers(organization)
      .then(members => setMembers(members))
      .catch(error => alert(error.message));
  };

  const updateOrganization = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrganization(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2> Members Page</h2>
      </div>
      <div className={classes.input}>
        <input value={organization} onChange={updateOrganization}></input>
        <button onClick={loadMembers}>Load</button>
      </div>
      <TableContainer>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <MemberHead />
          </TableHead>
          <TableBody>
            {members.map((member: MemberEntity) => (
              <MemberRow key={member.id} member={member} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

import React from "react";
import { MemberEntity } from "../../model/member";
import { MemberRow } from "./memberRow";
import { MemberHead } from "./memberHead";
import { useMembersByOrganization } from "../../hooks/use-members-collection.hook";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import { useStyles } from "./membersTable.style";
import { Paper } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface Props {}

export const MembersTableComponent = (props: Props) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { getAllMembers } = useMembersByOrganization();
  const [organization, setOrganization] = React.useState<string>("lemoncode");
  const classes = useStyles({});
  const [initialized, setInitialized] = React.useState(false);

  React.useEffect(() => {
    if(!initialized) {
      loadMembers();
    }
  });

  const loadMembers = () => {
    getAllMembers(organization)
      .then(members => setMembers(members))
      .catch(error => alert(error.message));
    setInitialized(true);
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
        <TextField id="standard-basic" label="Members" value={organization} 
          onChange={updateOrganization}/>
        <div className={classes.button}>
        <Button variant="contained" size="small" color="primary" 
          className={classes.margin} onClick={loadMembers}>
          Load
        </Button>
        </div>
      </div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table
          stickyHeader 
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

import React from "react";
import { MemberEntity } from "../../model/member";
import { MemberTableRowComponent } from "./components/member-table-row.component";
import { MemberTableHeadComponent } from "./components/member-table-head.component";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import { useStyles } from "./member-collection.component.style";
import { Paper } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { NotificationComponent } from "../notification";

interface Props {
  organization: string,
  members: MemberEntity[],
  onLoadMembers: (organization: string) => void;
  onMemberEdit: (id: number) => void;
  showOrganizationError: boolean;
  onCloseNotificationError: () => void;
}

export const MemberCollectionComponent = (props: Props) => {

  const { organization, members, onLoadMembers, onMemberEdit, showOrganizationError, onCloseNotificationError } = props;
  const [selectedOrganization, setSelectedOrganization] = React.useState<string>(organization);
  const classes = useStyles({});
  const history = useHistory();
  
  const updateOrganization = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOrganization(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2> Members Page</h2>
      </div>
      <div className={classes.input}>
        <TextField id="standard-basic" label="Members" value={selectedOrganization} 
          onChange={updateOrganization}/>
        <div className={classes.button}>
        <Button variant="contained" size="small" color="primary" 
          className={classes.margin} onClick={()=>onLoadMembers(selectedOrganization)}>
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
            <MemberTableHeadComponent />
          </TableHead>
          <TableBody>
            {members.map((member: MemberEntity) => (
              <MemberTableRowComponent key={member.id} member={member} onMemberEdit={onMemberEdit}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <NotificationComponent 
        message={`No existe la organización ${organization} en github`}
        show={showOrganizationError}
        onClose={onCloseNotificationError}
      />
    </div>
  );
};

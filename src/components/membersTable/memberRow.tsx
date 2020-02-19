import * as React from "react";
import { MemberEntity } from "../../model/member";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Button } from "@material-ui/core";
import { useStyles } from "./membersTable.style";

interface Props {
  member: MemberEntity
  onMemberEdit: (id: number) => void;
}

export const MemberRow = (props: Props) => {

  const classes = useStyles({});
  const { member, onMemberEdit } = props;

  const handleClick = () => {
    onMemberEdit(member.id);
  }

  return (
    <TableRow hover key={member.id}>
      <TableCell align="center">
        <img src={member.avatar_url} style={{ maxWidth: "4rem" }} />
      </TableCell>
      <TableCell align="center">
        <span>{member.id}</span>
      </TableCell>
      <TableCell align="center">
        <span>{member.login}</span>
      </TableCell>
      <TableCell align="center">
        <Button variant="contained" size="small" color="primary" 
            className={classes.margin} onClick={handleClick}>
            Edit
        </Button>
      </TableCell>
    </TableRow>
  );
}

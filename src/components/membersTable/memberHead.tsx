import * as React from "react";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useStyles } from "./membersTable.style";

export const MemberHead = () => {
  const classes = useStyles({});
  return (
  <TableRow>
    <TableCell align="center">Avatar</TableCell>
    <TableCell align="center">Id</TableCell>
    <TableCell align="center">Name</TableCell>
    <TableCell align="center"></TableCell>
  </TableRow>
  );
};

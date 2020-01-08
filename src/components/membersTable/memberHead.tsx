import * as React from "react";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export const MemberHead = () => (
  <TableRow>
    <TableCell align="center">Avatar</TableCell>
    <TableCell align="center">Id</TableCell>
    <TableCell align="center">Name</TableCell>
  </TableRow>
);

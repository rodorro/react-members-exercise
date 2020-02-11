import * as React from "react";
import { MemberEntity } from "../../model/member";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export const MemberRow = (props: { member: MemberEntity }) => (
  <TableRow hover key={props.member.id}>
    <TableCell align="center">
      <img src={props.member.avatar_url} style={{ maxWidth: "4rem" }} />
    </TableCell>
    <TableCell align="center">
      <span>{props.member.id}</span>
    </TableCell>
    <TableCell align="center">
      <span>{props.member.login}</span>
    </TableCell>
  </TableRow>
);

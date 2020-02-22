import React from "react";
import { useMember } from "../../hooks/use-members-collection.hook";
import { createDefaultMemberEntity, MemberEntity } from "../../model/member";
import { useParams } from "react-router-dom";
import { TextField } from "@material-ui/core";

interface Props {
    member: MemberEntity;
}

export const MemberEditComponent = (props: Props) => {

    const { member } = props;

    return (
        <div>
            <h2>GITHUB MEMBER {member.id}</h2>
            <label>ID: {member.id}</label>
            <label>LOGIN: {member.login}</label>
            <label>AVATAR: {member.avatar_url}</label>
            <label>COMPANY: {member.company}</label>
        </div>
    );
};
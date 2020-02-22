import React from "react";
import { useMember } from "../../hooks/use-members-collection.hook";
import { createDefaultMemberEntity, MemberEntity } from "../../model/member";
import { useParams } from "react-router-dom";
import { MemberEditComponent } from "./member-edit.component";

interface Props {}

export const MemberEditContainer = (props: Props) => {

    const [member, setMember] = React.useState<MemberEntity>(createDefaultMemberEntity());
    const { getMember } = useMember();
    const { id } = useParams();
    
    React.useEffect(() => {
        getMember(id)
        .then(member => setMember(member))
        .catch(error => alert(error.message));
    }, []);

    return (
        <MemberEditComponent member={member} />
    );
};
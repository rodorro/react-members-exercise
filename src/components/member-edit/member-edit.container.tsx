import React from "react";
import { useMember } from "../../hooks/use-members-collection.hook";
import { createDefaultMemberEntity, MemberEntity } from "../../model/member";
import { useParams, useHistory } from "react-router-dom";
import { MemberEditComponent } from "./member-edit.component";
import { routes } from "../../core/router";

interface Props {}

export const MemberEditContainer = (props: Props) => {

    const [member, setMember] = React.useState<MemberEntity>(createDefaultMemberEntity());
    const { getMember } = useMember();
    const { id } = useParams();
    const history = useHistory();
    
    React.useEffect(() => {
        getMember(id)
        .then(member => setMember(member))
        .catch(error => alert(error.message));
    }, []);

    const handleClose = () => {
        history.push(routes.membersCollection);
    }

    return (
        <MemberEditComponent member={member} onClose={handleClose}/>
    );
};
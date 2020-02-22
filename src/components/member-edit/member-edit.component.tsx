import React from "react";
import { MemberEntity } from "../../model/member";
import { Card, CardHeader, Avatar, CardContent, CardMedia, IconButton } from "@material-ui/core";
import { useStyles } from "./member-edit.component.style";
import CloseIcon from '@material-ui/icons/Close';

interface Props {
    member: MemberEntity;
    onClose: () => void;
}

export const MemberEditComponent = (props: Props) => {

    const { member, onClose } = props;
    const classes = useStyles({});

    return (
        <>
        {member.avatar_url? (
        <Card>
            <CardHeader
                avatar={<Avatar aria-label="member"></Avatar>}
                action={
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                }
                title={member.id}
                subheader={member.company}
            />
            <CardContent>
                <div className={classes.content}>
                <CardMedia
                    className={classes.media}
                    image={member.avatar_url}
                    title={String(member.id)}
                />
                </div>
            </CardContent>         
        </Card>
        ) : (
            <div>Cargando</div>
        )}
        </>
    );
};
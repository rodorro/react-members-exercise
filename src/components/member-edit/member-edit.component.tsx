import React from "react";
import { useMember } from "../../hooks/use-members-collection.hook";
import { createDefaultMemberEntity, MemberEntity } from "../../model/member";
import { useParams } from "react-router-dom";
import { Card, CardHeader, Avatar, CardContent, CardMedia, Typography, CardActions, IconButton } from "@material-ui/core";
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
        <Card className={classes.container}>
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
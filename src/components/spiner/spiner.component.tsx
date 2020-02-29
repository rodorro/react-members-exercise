import React, { Component } from 'react';
 import { usePromiseTracker } from "react-promise-tracker";
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import { useStyles } from './spiner.component.style';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
 
export const LoadingSpinerComponent = (props) => {
    const { promiseInProgress } = usePromiseTracker();
    const classes = useStyles({});
    return (
        <div className={classes.container}>
        {
            (promiseInProgress === true) ?
            <LinearProgress />
            :
            null
        }
        </div>
    )
};
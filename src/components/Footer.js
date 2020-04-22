import React from '../../node_modules/react';
import { makeStyles } from '../../node_modules/@material-ui/core';

const useStyles=makeStyles({
    footer:{
        paddingBottom: '3vw',
    },
})

export default function Footer() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.footer}/>
        </div>
    );
}

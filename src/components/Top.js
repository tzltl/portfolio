import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Top.css';

const useStyles = makeStyles({
    root: {
        display: "flex",
        width: "100vw",
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
        margin: "0",
        background: "#131313",
        color: "#fff",
        fontSize: "15vw",
        letterSpacing: "-2.2vw",
    },
    formore: {
        display: "flex",
        width: "100vw",
        height: "10vh",
        alignItems: "center",
        justifyContent: "center",
        margin: "0",
        background: "#131313",
        color: "#fff",
        fontSize: "3vw",
        letterSpacing: "0.6vw",
    }
});

export default function Top() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root} title="portfolio"> portfolio </div>
            <div className={classes.formore}> for more ↓ </div>
        </div>
    );
}
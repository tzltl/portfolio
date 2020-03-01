import React from 'react';
import './Top.css';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center"
    },
    toptitle: {
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        margin: "0",
        background: "#131313",
        color: "#fff",
        fontSize: "96px",
        letterSpacing: "-7px"
    }

});


export default function Profile() {
    const classes = useStyles();
    return ( 
        <div className = {classes.toptitle}　title = "portfolio"> portfolio < /div>
    );
}
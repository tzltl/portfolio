import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        margin: "0",
        background: "#131313",
        color: "#fff",
        fontSize: "150px",
        letterSpacing: "-7px"
    }
});

export default function Background() {
    const classes = useStyles();
    return (
        <div>
            - var n = 1
            div.container
                while n <= 30
                    div(class='ring el-' + n++)
        </div>
    );
}
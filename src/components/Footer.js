import React from '../../node_modules/react';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore.js';
// import useStyles from './Styles.js';
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

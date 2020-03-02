import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore.js';
// import useStyles from './Profile.js';

const useStyles = makeStyles(theme => ({
    root: {
        // width: '100%',
        // background: "#131313",
        // color: "#fff",
        // fontFamily: "'Courier New', Courier, monospace",
        paddingBottom: '10vh'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        fontFamily: "'Courier New', Courier, monospace",
        fontWeight: 'bold'
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        color: 'grey',
        fontFamily: 'inherit',
    },
    panel: {
        backgroundColor: "#131313",
        color: "#fff",
        border: 'thin solid #fff',
        // borderRadius: '10em',
    },
    detail: {
        backgroundColor: "#171717",
        color: "inherit",
        // border: 'thin solid #fff',
        // borderRadius: '0.4em',
    },
    ExpandMoreIcon: {
        color: '#fff'
    }
}));

export default function Developments() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.panel}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon className={classes.ExpandMoreIcon} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                // style={{ backgroundColor: '#212121' }}
                >
                    <Typography className={classes.heading}> Languages </Typography>
                    <Typography className={classes.secondaryHeading}> Programming languages ​​I've used </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.detail}>
                    <Typography style={{
                        textAlign: 'left',
                        fontFamily: "'Courier New', Courier, monospace",
                        fontWeight: '500'
                    }}>
                        &nbsp; Python &nbsp;           | I use Python in Competition programming. (like AtCoder, Paiza)<br />
                        &nbsp;&nbsp; Ruby &nbsp;&nbsp; | <a href="https://takeshify.herokuapp.com/" target="_blank" >
                            TakesHify</a> | Web app using SpotifyAPI (It may take a little bit time to start up server.)<br />
                        JavaScript                     | This portfolio page. Using React.js, Material-UI. <br />
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

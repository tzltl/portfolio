import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore.js';
import useStyles from './Styles.js';

export default function Contact() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel'} onChange={handleChange('panel')} className={classes.panel}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon className={classes.ExpandMoreIcon} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}> Contact </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.ExpansionPanelDetails}>
                    <Typography className={classes.detail} >

                        <div className={classes.contact}>
                            <img src="https://cdn.worldvectorlogo.com/logos/facebook-3.svg" alt="Facebook logo" className={classes.logoImag} id='facebook' />
                            Facebook: <a href="https://www.facebook.com/tasakeshi" target="_blank" className={classes.link} rel="noopener noreferrer">Tasaki Takeshi (田㟢 威司)</a>
                        </div>

                        <div className={classes.contact}>
                            <img src="https://www.sferalabs.cc/wp-content/uploads/github-logo-white-300x199.png" className={classes.logoImag} alt='GitHub Logo' id='github' />
                            GitHub: <a href="https://github.com/tzltl" target="_blank" className={classes.link} rel="noopener noreferrer"> tzltl </a>
                        </div>

                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

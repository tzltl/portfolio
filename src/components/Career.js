import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore.js';
import useStyles from './Styles.js';

export default function Career() {
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
                    <Typography className={classes.heading}> About me </Typography>
                    <Typography className={classes.secondaryHeading}> and my education </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.ExpansionPanelDetails}>
                    <Typography className={classes.detail} >
                        
                        Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Takeshi Tasaki (田㟢威司) <br/>
                        Birth Date : 1997/03/21 <br />
                        Born in Minamiuonuma, Niigata pref, Japan.<br />
                        <br/>
                        2012 Apr ~ 2015 Mar: Niigata Prefectural Muikamachi-Senior High School <br />
                        2015 Apr ~ 2019 Mar: Department of Electrical and Electronic Engineering, Niigata University <br />
                        2019 Apr ~ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Graduate School of Science and Technology, Niigata University<br />
                        ...<br />
                        2021 Apr~: Work for an IT company as a software engineer

                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

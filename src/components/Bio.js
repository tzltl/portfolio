import React from '../../node_modules/react';
import ExpansionPanel from './node_modules/@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from './node_modules/@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from './node_modules/@material-ui/core/ExpansionPanelSummary';
import Typography from './node_modules/@material-ui/core/Typography';
import ExpandMoreIcon from './node_modules/@material-ui/icons/ExpandMore';
import useStyles from './Styles.js';

export default function Bio() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <ExpansionPanel expanded={expanded === 'panel'} onChange={handleChange('panel')} className={classes.panel}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon className={classes.ExpandMoreIcon} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}> Bio </Typography>
                    <Typography className={classes.secondaryHeading}> About me </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.ExpansionPanelDetails}>
                    <Typography className={classes.detail} >

                        Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Tasaki Takeshi (田㟢 威司) <br />
                        Birth Date : 1997/03/21 <br />
                        Born in Minamiuonuma, Niigata pref, Japan.<br />
                        <br />
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

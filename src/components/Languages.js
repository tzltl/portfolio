import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore.js';
import useStyles from './Styles.js';

export default function Languages() {
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
                // style={{ backgroundColor: '#212121' }}
                >
                    <Typography className={classes.heading}> Languages </Typography>
                    <Typography className={classes.secondaryHeading}> Programming languages I've used </Typography>
                </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography className={classes.detail}>
                        
                        {/* Python */}
                        <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" className={classes.logoImag} />
                            &nbsp; Python &nbsp; | Use in Competition programming. (like AtCoder, Paiza)<br />
                        {/* Ruby */}
                        <img src="https://cdn.worldvectorlogo.com/logos/ruby.svg" className={classes.logoImag} />
                            &nbsp;&nbsp; Ruby &nbsp;&nbsp; | 
                            <a href="https://takeshify.herokuapp.com/" target="_blank" >TakesHify</a> | Web app using SpotifyAPI (See below "Developments" for more details.)<br />
                        {/* JavaScript */}
                        <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" className={classes.logoImag}/>
                            JavaScript | This portfolio page. Using React.js, Material-UI. <br />
                        {/* Golang */}
                        <img src="https://blog.golang.org/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg" className={classes.logoImag} />
                            &nbsp;&nbsp;&nbsp; Go &nbsp;&nbsp;&nbsp; | GOing to develop some kind of app these days.

                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

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
        <div>
            <ExpansionPanel expanded={expanded === 'panel'} onChange={handleChange('panel')} className={classes.panel}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon className={classes.ExpandMoreIcon} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}> Skills </Typography>
                    <Typography className={classes.secondaryHeading}> Programming languages & frameworks I've used </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.ExpansionPanelDetails}>

                    <span className={classes.article}>Languages</span>
                    <Typography className={classes.detail} id='progLang'>

                        {/* Python */}
                        <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" className={classes.logoImag} alt='Python Logo' />
                        &nbsp; Python &nbsp; | Use in Competition programming. (like AtCoder, Paiza)<br />

                        {/* Ruby */}
                        <img src="https://cdn.worldvectorlogo.com/logos/ruby.svg" className={classes.logoImag} alt='Ruby Logo' />
                        &nbsp;&nbsp; Ruby &nbsp;&nbsp; | Web development (See below "Developments" for more details.)<br />

                        {/* JavaScript */}
                        <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" className={classes.logoImag} alt='JavaScript Logo' />
                        JavaScript | Using in some summer internships. Node.js, React.js.<br />

                        {/* Golang */}
                        <img src="https://blog.golang.org/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg" className={classes.logoImag} id='Go' alt='Golang Logo' />
                        &nbsp;&nbsp; Go &nbsp;&nbsp;&nbsp; | GOing to develop some kind of app these days. <br />

                        {/* matlab */}
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/667px-Matlab_Logo.png" className={classes.logoImag} alt='matlab Logo' />
                        &nbsp; Matlab &nbsp; | For study at graduate school.(Analyzing radio propagetion.)

                    </Typography>

                    <span className={classes.article}>Frameworks</span>
                    <Typography className={classes.detail} id='frmwrk'>

                        {/* Ruby on Rails */}
                        <img src="https://cdn.worldvectorlogo.com/logos/rails.svg" className={classes.logoImag} alt='Ruby on Rails Logo' id='rails' />
                        Ruby on Rails |&nbsp;
                            <a href="https://takeshify.herokuapp.com/" target="_blank" className={classes.link} rel="noopener noreferrer">
                            TakesHify</a> | Web app using SpotifyAPI (See below "Developments" for more details.)<br />

                        {/* JavaScript */}
                        <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" className={classes.logoImag} alt='React.js Logo' id='react' />
                        &nbsp;&nbsp;React.js &nbsp;&nbsp;| This portfolio page. Using React.js, Material-UI. <br />


                    </Typography>

                    <span className={classes.article}>Version Control</span>
                    <Typography className={classes.detail} id='vcs'>

                        {/* GitHub */}
                        <img src="https://www.sferalabs.cc/wp-content/uploads/github-logo-white-300x199.png" className={classes.logoImag} alt='GitHub Logo' id='github' />
                        GitHub &nbsp;| For management source code.&nbsp;
                        <a href="https://github.com/tzltl" target="_blank" className={classes.link} rel="noopener noreferrer">
                            GitHub</a><br />
                    </Typography>

                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
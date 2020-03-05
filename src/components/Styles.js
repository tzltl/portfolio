import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        paddingBlock: '0.5vh',
        textAlign: 'left',
        marginInline: '2vw',
        
    },
    heading: {
        fontSize: "2vh",
        flexBasis: '33.33%',
        flexShrink: 0,
        fontWeight: 'bold',
        fontFamily: 'inherit',
        marginBlock: 'auto',
    },
    secondaryHeading: {
        color: "#909090",
        fontSize: "2vh",
        fontFamily: 'inherit',
        margin: 'auto 0 auto 7vw',
    },
    panel: {
        marginInline: '2vw',
        backgroundColor: "#131313",
        color: "#fff",
        border: 'thin solid #fff',
        fontSize: "2vh",
        textAlign: 'left',
    },
    ExpansionPanelDetails:{
        paddingTop:'0',
        marginInline:'auto',
    },
    detail: {
        width: '100vw',
        backgroundColor: "#202020",
        color: "inherit",
        fontSize: "inherit",
        fontFamily: 'inherit',
        margin:'0 auto 1vh auto',
        borderRadius: "1rem",
        padding: '0.3rem 0.5rem 0.3rem 0.5rem',
        boxShadow:'1vh 1vw #393939',
    },
    ExpandMoreIcon: {
        color: '#fff'
    },
    article: {
        fontWeight: '600',
    },
    AppImg: {
        width: '80%',
        paddingLeft: '10%',
    },
    logoImag: {
        maxHeight: '3vh',
        margin: '1vh 1vw',
        verticalAlign: 'middle',
        "&#Go": {
            maxHeight: '5vh',
            margin: '0',
        }
    },
    link: {
        color: 'lightskyblue',
    },
}));

export default useStyles;
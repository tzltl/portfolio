import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom: '1vh',
        textAlign: 'left',
    },
    heading: {
        fontSize: "2vh",
        flexBasis: '33.33%',
        flexShrink: 0,
        fontWeight: 'bold',
        fontFamily: 'inherit',
    },
    secondaryHeading: {
        fontSize: "2vh",
        color: theme.palette.text.secondary,
        fontFamily: 'inherit',
    },
    panel: {
        marginInline: '1vw',
        backgroundColor: "#131313",
        color: "#fff",
        border: 'thin solid #fff',
        fontSize: "2vh",
    },
    detail: {
        width: '90vw',
        backgroundColor: "#202020",
        // backgroundColor: "#fff",
        color: "inherit",
        fontSize: "inherit",
        fontFamily: 'inherit',
        marginInline: 'auto',
        borderRadius: "1rem",
        padding: '0.3rem 0.5rem',
        boxShadow:'1vh 1vw #393939',
    },
    ExpandMoreIcon: {
        color: '#fff'
    },
    article: {
        fontWeight: '600',
    },
    AppImg: {
        width: '75vw',
        marginInline: '7.5vw',
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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom: '1vh',
        fontFamily: "'Courier New', Courier, monospace",
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
        color: 'grey',
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
        backgroundColor: "#171717",
        color: "inherit",
        fontSize: "inherit",
        fontFamily: 'inherit',
    },
    ExpandMoreIcon: {
        color: '#fff'
    },
    article: {
        fontWeight: '600',
    },
    appimg: {
        maxWidth: '80vw',
        marginLeft: '5vw',
    },
    logoImag: {
        maxHeight: '3vh',
        marginInline: '1vw',
        marginBlock: '1vh',
        verticalAlign:'middle'
    },
    link:{
        color: 'lightskyblue',
    },
}));

export default useStyles;
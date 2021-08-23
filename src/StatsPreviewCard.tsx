import {makeStyles, createTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import headerImg from './images/image-header-mobile.jpg';
import {Grid} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core';

const Theme = createTheme({
    typography: {
        fontFamily: [
            "'Lexend Deca', sans-serif"
        ].join(','),
        h6: {
            fontFamily: "'Inter', sans-serif"
        },
    },
});

const useStyles = makeStyles((theme) => ({
    card: {
        width: 245,
        maxWidth: 245,
        height: "81.5vh",
        "&.MuiPaper-rounded": {
            borderRadius: "5px"
        },
        display: "flex",
        flexDirection: "column",
    },
    headerImg: {
        minHeight: 181,
        height: 181,
        background: `linear-gradient(to right, #660a9e80, #660a9e80), url(${headerImg}) no-repeat top center`,
        backgroundSize: "cover",
    },
    gridContainer: {
        flex: 1,
    },
    flexGrow: {
        flex: 1,
    },
    cardContent: {
        backgroundColor: "#1B1938",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "25px",
        paddingRight: "25px",
        textAlign: "center",
    },
    bold: {
        fontWeight: "bold",
    },
    h6: {
        color: "#FEFEFF",
        lineHeight: 1.2,
        marginTop: "13px",
    },
    h7: {
        color: "#FEFEFF",
        lineHeight: 1.3,
        marginTop: "22px",
        fontSize: "18px",
    },
    highlightedText: {
        color: "#A769DC",
    },
    descriptionColor: {
        color: "#8A8A9F",
    },
    description: {
        fontSize: "11px",
        paddingTop: "15px",
        lineHeight: "1.7",
    },
    label: {
        fontSize: "9px",
        paddingTop: "2px",
        letterSpacing: "0.1em",
    },
    marginTopFirst: {
        marginTop: "32px",
    },
}));

export default function StatsPreviewCard() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={Theme}>
            <Card className={classes.card} elevation={6} >
                <div
                    className={classes.headerImg}
                    title="Header Image"
                ></div>
                <Grid container direction="column" className={classes.gridContainer}>
                    <Grid item className={classes.flexGrow}>
                        <CardContent className={classes.cardContent} >
                            <Typography className={`${classes.h6} ${classes.bold}`} variant="h6">
                                Get <Typography className={`${classes.h6} ${classes.bold} ${classes.highlightedText}`} variant="h6" component="span" >insights</Typography> that help your business grow.
                            </Typography>
                            <Typography className={`${classes.descriptionColor} ${classes.description}`}>
                                Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
                            </Typography>
                            {/* COMPANIES */}
                            <Typography className={`${classes.marginTopFirst} ${classes.h7} ${classes.bold}`} variant="h6">
                                10k+
                                <Typography className={`${classes.descriptionColor} ${classes.label}`}>
                                    COMPANIES
                                </Typography>
                            </Typography>
                            {/* TEMPLATES */}
                            <Typography className={`${classes.h7} ${classes.bold}`} variant="h6">
                                314
                                <Typography className={`${classes.descriptionColor} ${classes.label}`}>
                                    TEMPLATES
                                </Typography>
                            </Typography>
                            {/* QUERIES */}
                            <Typography className={`${classes.h7} ${classes.bold}`} variant="h6">
                                12M+
                                <Typography className={`${classes.descriptionColor} ${classes.label}`}>
                                    QUERIES
                                </Typography>
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </ThemeProvider>
    );
}

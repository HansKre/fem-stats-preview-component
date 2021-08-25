import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import headerImgMobile from './images/image-header-mobile.jpg';
import headerImgDesktop from './images/image-header-desktop.jpg';
import {Grid} from '@material-ui/core';
import useBreakPoint from './useBreakPoint';

const DESKTOP_IMAGE_DIMENSIONS = {
    width: 540,
    height: 446
}

const useStyles = makeStyles((theme) => ({
    card: {
        width: 245,
        maxWidth: 245,
        height: "81.5vh",
        "&.MuiPaper-rounded": {
            borderRadius: "5px"
        },
        [theme.breakpoints.up('lg')]: {
            width: `${DESKTOP_IMAGE_DIMENSIONS.width * 2}px`,
            maxWidth: `${DESKTOP_IMAGE_DIMENSIONS.width * 2}px`,
            height: `${DESKTOP_IMAGE_DIMENSIONS.height}px`,
            "&.MuiPaper-rounded": {
                borderRadius: "10px"
            },
        },
        '@media (max-height: 670px)': {
            height: "unset",
        },
    },
    headerImg: {
        minHeight: 181,
        height: 181,
        background: `linear-gradient(to right, #660a9e80, #660a9e80), url(${headerImgMobile}) no-repeat top center`,
        backgroundSize: "cover",
        [theme.breakpoints.up('lg')]: {
            background: `linear-gradient(to right, #660a9e80, #660a9e80), url(${headerImgDesktop}) no-repeat top center`,
            height: `${DESKTOP_IMAGE_DIMENSIONS.height}px`,
        },
    },
    gridContainer: {
        height: "100%",
    },
    flexGrow: {
        flex: 1,
    },
    flexGrowLeftHalf: {
        flex: "0 1 51%",
    },
    flexGrowRightHalf: {
        flex: "0 1 49%",
    },
    flexGrowThird: {
        flex: "0 1 calc(100%/3)",
    },
    cardContent: {
        backgroundColor: "#1B1938",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "25px",
        paddingRight: "25px",
        textAlign: "center",
        [theme.breakpoints.up('lg')]: {
            textAlign: "unset",
            justifyContent: "center",
            paddingLeft: "70px",
            paddingRight: "90px",
        },
    },
    bold: {
        fontWeight: "bold",
    },
    h6: {
        color: "#FEFEFF",
        lineHeight: 1.2,
        marginTop: "13px",
        [theme.breakpoints.up('lg')]: {
            fontSize: "36px",
        },
    },
    h7: {
        color: "#FEFEFF",
        lineHeight: 1.3,
        marginTop: "22px",
        fontSize: "18px",
        [theme.breakpoints.up('lg')]: {
            fontSize: "23px",
        }
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
        [theme.breakpoints.up('lg')]: {
            paddingTop: "30px",
            fontSize: "15px",
        }
    },
    label: {
        fontSize: "9px",
        paddingTop: "2px",
        letterSpacing: "0.1em",
        [theme.breakpoints.up('lg')]: {
            fontSize: "12px",
        }
    },
    marginTopFirst: {
        marginTop: "32px",
    },
    statsContainer: {
        [theme.breakpoints.up('lg')]: {
            paddingTop: "40px",
        }
    }
}));

export default function StatsPreviewCard() {
    const classes = useStyles();

    const downMd = useBreakPoint('down', 'md');

    return (
        <Card className={classes.card} elevation={6} >
            <Grid container direction={downMd ? "column" : "row"} wrap="nowrap" className={classes.gridContainer}>
                {downMd
                    ? <Grid item><HeroImage /></Grid>
                    : ''}
                <Grid item className={downMd ? classes.flexGrow : classes.flexGrowLeftHalf}>
                    <Content />
                </Grid>
                {downMd
                    ? ''
                    : <Grid item className={classes.flexGrowRightHalf}><HeroImage /></Grid>}
            </Grid>
        </Card >
    );

    function HeroImage() {
        return <div
            className={classes.headerImg}
            title="Header Image"
        ></div>;
    }

    function Content() {
        return <CardContent className={classes.cardContent}>
            <Title />
            <Description />
            <Stats />
        </CardContent>;
    }

    function Title() {
        return <Typography className={`${classes.h6} ${classes.bold}`} variant="h6">
            Get <Typography className={`${classes.h6} ${classes.bold} ${classes.highlightedText}`} variant="h6" component="span">insights</Typography> that help your business grow.
        </Typography>;
    }

    function Description() {
        return <Typography className={`${classes.descriptionColor} ${classes.description}`}>
            Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
        </Typography>;
    }

    function Stats() {
        return <Grid container direction={downMd ? "column" : "row"} className={classes.statsContainer}>
            <Typography className={`${downMd ? classes.marginTopFirst : ''} ${classes.h7} ${classes.bold} ${downMd ? '' : classes.flexGrowThird}`} variant="h6">
                10k+
                <Typography className={`${classes.descriptionColor} ${classes.label}`}>
                    COMPANIES
                </Typography>
            </Typography>
            <Typography className={`${classes.h7} ${classes.bold} ${downMd ? '' : classes.flexGrowThird}`} variant="h6">
                314
                <Typography className={`${classes.descriptionColor} ${classes.label}`}>
                    TEMPLATES
                </Typography>
            </Typography>
            <Typography className={`${classes.h7} ${classes.bold} ${downMd ? '' : classes.flexGrowThird}`} variant="h6">
                12M+
                <Typography className={`${classes.descriptionColor} ${classes.label}`}>
                    QUERIES
                </Typography>
            </Typography>
        </Grid>
    }
}

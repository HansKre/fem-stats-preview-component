import {Grid} from '@material-ui/core';
import StatsPreviewCard from './components/StatsPreviewCard';
import {makeStyles} from '@material-ui/core/styles';
import CustomTheme from './styles/Theme';
import {ThemeProvider} from '@material-ui/core';

const useStyles = makeStyles({
  fullHeight: {
    height: "100vh"
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={CustomTheme}>
      <Grid container justifyContent="center" alignItems="center" className={classes.fullHeight}>
        <StatsPreviewCard />
      </Grid>
    </ThemeProvider>
  );
}

export default App;

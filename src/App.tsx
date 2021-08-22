import {Grid} from '@material-ui/core';
import StatsPreviewCard from './StatsPreviewCard';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  fullHeight: {
    height: "100vh"
  },
});

function App() {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" alignItems="center" className={classes.fullHeight}>
      <StatsPreviewCard />
    </Grid>
  );
}

export default App;

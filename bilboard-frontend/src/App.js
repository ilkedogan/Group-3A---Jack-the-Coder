import './App.css';
import Colors from './utils/Colors';
import { makeStyles } from '@mui/styles';
import BilboardTextField from './components/BilboardTextField';

const useStyles = makeStyles({
  root: {
    backgroundColor: Colors.BILBOARD_BLACK,
    height: '100vh',
    width: '100vw',
  },
});

function App() {
  const classes = useStyles()

  return (
    <div className="App">
      <div className={classes.root}>
        <BilboardTextField />
      </div>
    </div>
  );
}

export default App;

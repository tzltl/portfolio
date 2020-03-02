import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Top from './Top.js';
import Profile from './Profile.js';
import Developments from './Developments.js';
import Test from './test.js';
// import Achievement from './Achievement.js';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    background: 'black',
    color: 'white',
  },
});

function App() {
  // const classes = useStyles();
  return (
    <div className="App">
      <div><Top /></div>
      <div><Profile /></div>
      <div><Developments /></div>
      {/* <div><Test /></div> */}
      {/* <div style={{ display: 'flex', justifyContent: 'center'}}> */}
        {/* <div style={{margin:'30px'}}><Work /></div> */}
        {/* <div style={{ margin: '30px' }}><Achievement /></div> */}
      {/* </div> */}
    </div>
  );
}

export default App;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Profile from './Profile.js';
import Work from './Work.js'
import Achievement from './Achievement.js'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    background: 'black',
    color: 'white',
  },
  profileblock: {
    // border: 'solid',
    width: '100%',
    borderRadius: '10%'
  }
});

function App() {
  // const classes = useStyles();
  return (
    <div className="App">
      <div><Profile /></div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <div style={{margin:'30px'}}><Work /></div>
        <div style={{ margin: '30px' }}><Achievement /></div>
      </div>
    </div>
  );
}

export default App;

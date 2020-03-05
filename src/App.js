import React from 'react';
import Top from './components/Top.js';
import Career from './components/Career.js';
import Skills from './components/Skills.js';
import Developments from './components/Developments.js';
import Contact from './components/Contact.js';
import './App.css'
import useStyles from './components/Styles.js';
// import classes from '*.module.css';

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div style={{ marginTop: "1vh" }}><Top /></div>
      <div className={classes.root}><Career /></div>
      <div className={classes.root}><Skills /></div>
      <div className={classes.root}><Developments /></div>
      <div className={classes.root}><Contact /></div>
      <div style={{ paddingBottom: '3vw', background: '#131313' }} />
    </div>
  );
}

export default App;
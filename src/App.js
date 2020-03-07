import React from 'react';
import Top from './components/Top.js';
import Bio from './components/Bio.js';
import Skills from './components/Skills.js';
import Developments from './components/Developments.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './App.css'
import useStyles from './components/Styles.js';

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div style={{ marginTop: "1vh" }}><Top /></div>
      <div className={classes.root}><Bio /></div>
      <div className={classes.root}><Skills /></div>
      <div className={classes.root}><Developments /></div>
      <div className={classes.root}><Contact /></div>
      <div className={classes.root}><Footer /></div>
    </div>
  );
}

export default App;
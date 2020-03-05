import React from 'react';
import Top from './Components/Top.js';
import Career from './Components/Career.js';
import Skills from './Components/Skills.js';
import Developments from './Components/Developments.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';
import './App.css'
import useStyles from './Components/Styles.js';

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div style={{ marginTop: "1vh" }}><Top /></div>
      <div className={classes.root}><Career /></div>
      <div className={classes.root}><Skills /></div>
      <div className={classes.root}><Developments /></div>
      <div className={classes.root}><Contact /></div>
      <div className={classes.root}><Footer /></div>
    </div>
  );
}

export default App;
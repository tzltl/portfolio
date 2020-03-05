import React from 'react';
import Top from './components/Top.js';
import Career from './components/Career.js';
import Skills from './components/Skills.js';
import Developments from './components/Developments.js';
import './App.css'

function App() {

  return (
    <div className="App">
      <div style={{ marginTop: "1vh" }}><Top /></div>
      <div><Career /></div>
      <div><Skills /></div>
      <div style={{paddingBottom:'3vw',background:'#131313'}}><Developments /></div>
    </div>
  );
}

export default App;
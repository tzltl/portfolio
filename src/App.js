import React from 'react';
import Top from './components/Top.js';
import Career from './components/Career.js';
import Languages from './components/Languages.js';
import Developments from './components/Developments.js';
import './App.css'

function App() {

  return (
    <div className="App">
      <div><Top /></div>
      <div><Career /></div>
      <div><Languages /></div>
      <div style={{paddingBottom:'10vh',background:'#131313'}}><Developments /></div>
    </div>
  );
}

export default App;
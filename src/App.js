import React from 'react';
import SvarBox from './components/SvarBox';
import TextComponent from './components/TextComponent';
import HamburgerMenu from './components/HamburgerMeny'


import './index.css';

function App() {
  return (
    <div className="App">

      <HamburgerMenu/>
      <TextComponent text="List tre ting du er takknemlig for idag."  />
      <SvarBox />


    </div>
  );
}

export default App;

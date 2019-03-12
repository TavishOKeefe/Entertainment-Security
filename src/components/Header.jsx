import React from 'react';
import key from '../assets/images/Key-2.png';

function Header(){

  const headerInfo = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '5px',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const title = {
    fontFamily: 'monospace, fantasy',
    fontSize: '20px',
    paddingBottom: '5px'
  }

  return(
    <div style={headerInfo}>
      <img src={key}/>
      <div style={title}>
      <h1>E-S</h1>
      </div>
    </div>
  );
}

export default Header;

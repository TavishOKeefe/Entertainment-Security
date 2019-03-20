import React from 'react';
import key from '../assets/images/Key-2.png';

function Header(){

  const headerInfo = {
    paddingTop: '5px',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'monospace, fantasy',
    fontSize: '20px',
    paddingBottom: '5px',
    color: '#82d7ff',
    textShadow: '3px 2px black',
    opacity: '.9'
  };

  return(
    <div style={headerInfo}>
      <img src={key}/><h1>E-S</h1>
    </div>
  );
}

export default Header;

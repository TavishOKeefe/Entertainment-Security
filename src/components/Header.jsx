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
    color: 'red'
  };

  return(
    <div style={headerInfo}>
      <img src={key}/><h1>E-S</h1>
    </div>
  );
}

export default Header;

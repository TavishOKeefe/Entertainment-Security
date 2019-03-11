import React from 'react';
import { Link } from 'react-router-dom';
import lock from '../assets/images/Lock-icon.png';

function Header(){

  const headerInfo = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '25px',
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
      <img src={lock}/>
      <div style={title}>
      <h1>ES</h1>
      </div>
    </div>
  );
}

export default Header;

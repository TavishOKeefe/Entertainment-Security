import React from 'react';
import { Link } from 'react-router-dom';
import key from '../assets/images/Key.png';

function HomeScreen(){

  var myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    textAlign: 'center',
    justifyContent: 'center',
    paddingBottom: '200px'
  };

  let _email = null;

  return(
    <div style={myStyledComponentStyles}>
      <img src={key}/>
      <h1>E-S</h1>
      <input
        className='Button'
        placeholder='Email...'
        ref={(input) => {_email = input;}}
      />
      <br/>
      <br/>
      <Link to="/static"><button>Next</button></Link>
    </div>
  );
}

export default HomeScreen;

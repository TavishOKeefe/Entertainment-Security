import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

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
      <Header/>
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

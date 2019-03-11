import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen(){

  var myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    textAlign: 'center',
    justifyContent: 'center',
  };

  let _email = null;

  return(
    <div style={myStyledComponentStyles}>
      <input
        className='Button'
        placeholder='Email...'
        ref={(input) => {_email = input;}}
      />
      <Link to="/static"><button>Next</button></Link>
    </div>
  );
}

export default HomeScreen;

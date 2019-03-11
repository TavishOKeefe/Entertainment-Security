import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen(){

  let _email = null;

  return(
    <div>
      <input
        placeholder='Email...'
        ref={(input) => {_email = input;}}
      />
      <Link to="/static"><button>Next</button></Link>
    </div>
  );
}

export default HomeScreen;

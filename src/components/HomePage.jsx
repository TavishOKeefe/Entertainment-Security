import React from 'react';
import Header from './Header';
import { addEmail } from './../actions/index';
import { Link } from 'react-router-dom';
import art from '../assets/images/Art-14.jpg';

function HomeScreen(){

  var myStyledComponentStyles = {
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    textAlign: 'center',
    justifyContent: 'center',
    paddingBottom: '200px'
  };

  var buttonStyles:hover = {
    padding: '4px'
  }

  var searchBarStyle = {
    backgroundColor: '#3a3b3d',
    opacity: '.8',
    padding: '5px',
    color: '#c1cacc',
  }

  let _email = null;

  function onHandleEmailUploadClick(){
    addEmail(_email.value);
  }

  return(
    <div style={myStyledComponentStyles}>
      <Header/>
      <input
        style={searchBarStyle}
        className='Button'
        placeholder='Email...'
        ref={(input) => {_email = input;}}
      />
      <br/>
      <br/>
      <Link to='/static'><button style={buttonStyles}>Next</button></Link>
      <Link to='/static' onClick={onHandleEmailUploadClick}><button style={buttonStyles}>New User</button></Link>
    </div>
  );
}

export default HomeScreen;

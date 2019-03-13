import React from 'react';
import Header from './Header';
import { addEmail } from './../actions/index';
import { Link } from 'react-router-dom';
import art from '../assets/images/Art-14.jpg';

function HomeScreen(){

  var myStyledComponentStyles = {
    backgroundImage: 'url(' + art + ')',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    textAlign: 'center',
    justifyContent: 'center',
    paddingBottom: '200px'
  };

  let _email = null;

  function onHandleEmailUploadClick(){
    addEmail(_email.value);
  }

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
      <button onClick={onHandleEmailUploadClick}>Next</button>
    </div>
  );
}

export default HomeScreen;

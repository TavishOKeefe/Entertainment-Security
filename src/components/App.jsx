import React from 'react';
import Static from './Static';
import HomePage from './HomePage';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import art from '../assets/images/Art-2.jpg';

function App(){

  const backgroundImage = {
    backgroundImage: 'url(' + art + ')',
    backgrounSize: 'cover',
    overflow: 'hidden',
    backgroundPosition: '50% 0%',
    width:'100%',
    height: '100%',
    backgroundSize: 'contain'
  };

  return(
    <div style={backgroundImage}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/static' component={Static} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import Static from './Static';
import HomePage from './HomePage';
import { Switch, Route } from 'react-router-dom';
// import art from '../assets/images/Art-8.jpg';
import Footer from './Footer';

function App(){
  //
  // const backgroundImage = {
  //   backgroundImage: 'url(' + art + ')',
  //   backgrounSize: 'cover',
  //   overflow: 'hidden',
  //   backgroundPosition: '50% 0%',
  //   width:'100%',
  //   height: '100%',
  //   backgroundSize: 'contain',
  // };

  const relieveHeadache = {
    backgroundColor: '#ecf0f1',
  };

  return(
    <div style={relieveHeadache}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/static' component={Static} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

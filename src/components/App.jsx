import React from 'react';
import Static from './Static';
import HomePage from './HomePage';
import { Switch, Route } from 'react-router-dom';

function App(){

  return(
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/static' component={Static} />
      </Switch>
    </div>
  );
}

export default App;

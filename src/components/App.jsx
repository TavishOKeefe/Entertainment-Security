import React from 'react';
import Static from './Static';
import { Switch, Route } from 'react-router-dom';

function App(){
  
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Static} />
      </Switch>
    </div>
  );
}

export default App;
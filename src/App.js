import React from 'react';
import { Home } from './Home/Home';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return(
    <React.Fragment>
      {/* <Header /> */}
      <Switch>
        <Route 
          exact path='/' 
          render={() => (
            <Home />
            )}
        />
      </Switch>
    </React.Fragment>
  )
}

export default App;

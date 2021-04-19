import React from 'react';
import { Home } from '../Home/Home';
import { Switch, Route } from 'react-router-dom';
import registerSW from '../serviceworker';
import { swSubscribe, notificationPermission } from '../application.js'

const App = () => {
  
  registerSW();
  swSubscribe();
  notificationPermission();
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

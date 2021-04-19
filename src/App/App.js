import React, { useState } from 'react';
import { Home } from '../Home/Home';
import { Header } from '../Header/Header';
import BookDetails from '../BookDetails/BookDetails';
import { Switch, Route } from 'react-router-dom';
import registerSW from '../serviceworker';
import { swSubscribe, notificationPermission } from '../application.js'
import Login from '../Login/Login';
import { postSubscription } from '../apiCalls'
const App = () => {

  const [currentUser, setCurrentUser] = useState({});

  // console.log(currentUser)
  if (!navigator.serviceWorker.ready) {
    registerSW();
    swSubscribe(currentUser);
  }


  notificationPermission();

  return(
    <React.Fragment>
      <Switch>
        <Route
          exact path='/'
          render={() => (
            <Login setCurrentUser={setCurrentUser} currentUser={currentUser}/>
            )}
        />
        <Route
          exact path='/home'
          render={() => (
            <>
              <Header setCurrentUser={setCurrentUser} currentUser={currentUser}/>
              <Home currentUser={currentUser}/>
            </>
            )}
        />
        <Route
          exact path='/books/:bookTitle'
          render={() => (
            <>
              <Header setCurrentUser={setCurrentUser} currentUser={currentUser}/>
              <BookDetails currentUser={currentUser}/>
            </>
            )}
        />
      </Switch>
    </React.Fragment>
  )
}

export default App;

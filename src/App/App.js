import React, { useState } from 'react';
import { Home } from '../Home/Home';
import { Header } from '../Header/Header';
import BookDetails from '../BookDetails/BookDetails';
import { Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';

const App = () => {

  const [currentUser, setCurrentUser] = useState({});

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
              <Header currentUser={currentUser}/>
              <Home currentUser={currentUser}/>
            </>
            )}
        />
        <Route
          exact path='/books/:bookTitle'
          render={() => (
            <>
              <Header currentUser={currentUser}/>
              <BookDetails currentUser={currentUser}/>
            </>
            )}
        />
      </Switch>
    </React.Fragment>
  )
}

export default App;

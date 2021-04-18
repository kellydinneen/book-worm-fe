import React, { useState } from 'react';
import { Home } from '../Home/Home';
import { Header } from '../Header/Header';
import BookDetails from '../BookDetails/BookDetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';

const App = ({currentUser}) => {
  return(
    <React.Fragment>
      <Switch>
        <Route
          exact path='/'
          render={() => (
            <div>
            <Login />
            </div>
            )}
        />
        <Route
          exact path='/home'
          render={() => (
            <Home currentUser={currentUser}/>
            )}
        />
        <Route
          exact path='/books/:bookTitle'
          render={() => (
            <BookDetails />
            )}
        />
      </Switch>
    </React.Fragment>
  )
}

export default App;

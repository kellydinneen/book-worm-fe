import React from 'react';
import { Home } from '../Home/Home';
import { Header } from '../Header/Header';
import BookDetails from '../BookDetails/BookDetails';
import { Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';

const App = () => {
  return(
    <React.Fragment>

      <Header />
      <Switch>
        <Route
          exact path='/'
          render={() => (
            <div>
            <Login />
            <Logout />
            </div>
            )}
        />
        <Route
          exact path='/home'
          render={() => (
            <Home />
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

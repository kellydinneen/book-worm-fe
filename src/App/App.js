import React from 'react';
import { Home } from '../Home/Home';
import { Header } from '../Header/Header';
import BookDetails from '../BookDetails/BookDetails';
import { Switch, Route } from 'react-router-dom';
// import Login from '../Login/Login';

const App = () => {
  return(
    <React.Fragment>
      {/* pass in signout status to Header component*/}
      <Header />
      <Switch>
        {/* <Route
          exact path='/'
          render={() => (
            <div>
            <Login />
            </div>
            )}
        /> */}
        <Route
          exact path='/'
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

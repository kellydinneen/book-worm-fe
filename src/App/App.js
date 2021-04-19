import React from 'react';
import { Home } from '../Home/Home';
import BookDetails from '../BookDetails/BookDetails';
import { Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';

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
          exact path='/'
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

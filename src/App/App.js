import React, { useState } from 'react';
import { Home } from '../Home/Home';
import { Header } from '../Header/Header';
import NewBookForm from '../NewBookForm/NewBookForm';
import NewBookMarkForm from '../NewBookMarkForm/NewBookMarkForm';
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
              <Header setCurrentUser={setCurrentUser} currentUser={currentUser}/>
              <Home setCurrentUser={setCurrentUser} currentUser={currentUser}/>
            </>
            )}
        />
        <Route
          exact path='/newbook'
          render={() => (
            <>
              <Header setCurrentUser={setCurrentUser} currentUser={currentUser}/>
              <NewBookForm setCurrentUser={setCurrentUser} currentUser={currentUser}/>
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
        <Route
          exact path='/bookmark/:bookTitle'
          render={() => (
            <>
              <Header setCurrentUser={setCurrentUser} currentUser={currentUser}/>
              <NewBookMarkForm currentUser={currentUser}/>
            </>
            )}
        />
      </Switch>
    </React.Fragment>
  )
}

export default App;

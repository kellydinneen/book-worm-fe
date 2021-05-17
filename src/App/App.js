import React, { useState } from 'react';
import { Home } from '../Home/Home';
import { Header } from '../Header/Header';
import FinishedBooks from '../FinishedBooks/FinishedBooks';
import NewBookForm from '../NewBookForm/NewBookForm';
import NewBookMarkForm from '../NewBookMarkForm/NewBookMarkForm';
import BookDetails from '../BookDetails/BookDetails';
import { Route } from 'react-router-dom';
import Login from '../Login/Login';
import Celebration from '../Celebration/Celebration';
import { gsap, CSSPlugin } from 'gsap';
import { FriendList } from '../FriendList/FriendList';

gsap.registerPlugin(CSSPlugin);

const App = () => {

  const [currentUser, setCurrentUser] = useState({});

  return(
    <React.Fragment>
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
          exact path='/finishedbooks'
          render={() => (
            <>
              <Header setCurrentUser={setCurrentUser} currentUser={currentUser}/>
              <FinishedBooks />
            </>
            )}
        />
        <Route
          exact path='/friends'
          render={() => (
            <>
              <Header setCurrentUser={setCurrentUser} currentUser={currentUser}/>
              <FriendList />
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
        <Route 
          exact path='/celebration'
          render={() => (
            <>
              <Header setCurrentUser={setCurrentUser} currentUser={currentUser}/>
              <Celebration currentUser={currentUser}/>
            </>
          )}
        />
    </React.Fragment>
  )
}

export default App;

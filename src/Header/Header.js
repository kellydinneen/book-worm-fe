import React from 'react';
import { Link } from 'react-router-dom';
import homeBtnImg from '../assets/home.svg';
import wormImg from '../assets/worm.png'
import Logout from '../Logout/Logout'

export const Header = ({ setCurrentUser, currentUser }) => {


  return (
    <header className='header-wrapper'>
      <div className='header-container'>
        <Link to={{pathname: '/home', state: {currentUser}}}>
        <img
          alt='home button'
          className='button-img'
          src={homeBtnImg}
        />
        </Link>
        <div className='titleContainer'>
          <h1>
            BookWorm
          </h1>
          <img className='worm-img' src={wormImg} alt='worm'/>
        </div>
      <Logout setCurrentUser={setCurrentUser} currentUser={currentUser}/>
      </div>
      {currentUser &&
      <h2 className='greeting'>Hi, {currentUser.givenName}</h2>}
    </header>
  )
}

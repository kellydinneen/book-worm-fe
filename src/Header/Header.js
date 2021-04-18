import React from 'react';
import homeBtnImg from '../assets/home.svg';
import wormImg from '../assets/worm.png'
import Logout from '../Logout/Logout'

export const Header = () => {

  return (
    <header className='header-wrapper'>
      <div className='header-container'>
        <img 
          alt='home button'
          className='button-img'
          src={homeBtnImg}
        />
        <h1>
          BookWorm
          <img className='worm-img' src={wormImg} alt='worm'/>
        </h1>
      </div>
      <h2 className='greeting'>Hi, Student</h2>
      <Logout />
    </header>
  )
}
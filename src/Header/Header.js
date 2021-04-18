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
        <div className='titleContainer'>
          <h1>
            BookWorm
          </h1>
          <img className='worm-img' src={wormImg} alt='worm'/>
        </div>
      <Logout />
      </div>
      <h2 className='greeting'>Hi, Student</h2>
      
    </header>
  )
}
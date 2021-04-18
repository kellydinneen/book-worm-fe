import React from 'react';
import appleImg from '../assets/apple.svg';
import homeBtnImg from '../assets/home.svg';
import wormImg from '../assets/worm.png'
import Logout from '../Logout/Logout'

export const Header = () => {

  return (
    <header className='header-wrapper'>
      <div className='header-container'>
          <h1 className="titleCloud">
            BookWorm
            <img className='worm-img' src={wormImg} alt='worm'/>
          </h1>
      </div>
      <h2 className='greeting titleCloud'>Hi, Student</h2>
      <img 
          alt='home button'
          className='button-img'
          src={homeBtnImg}
        />
      <Logout />
    </header>
  )
}
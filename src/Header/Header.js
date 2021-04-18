import React from 'react';
import appleImg from '../assets/apple.svg';
import homeBtnImg from '../assets/home.svg';
import wormImg from '../assets/worm.png'


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
      <img 
        alt='apple logout button'
        className='button-img'
        src={appleImg}
      />
    </header>
  )
}
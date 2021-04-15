import React from 'react'
import apple from '../assets/apple.svg'
import star from '../assets/star.svg'


export const Header = () => {

  return (
    <header className='header-wrapper'>
      <div className='header-container'>
        <img 
          alt='star home button'
          className='button-img'
          src={star}
        />
        <h1>BookWorm</h1>
      </div>
      <h2 className='greeting'>Hi, Student</h2>
      <img 
        alt='apple logout button'
        className='button-img'
        src={apple}
      />
    </header>
  )
}
import React from 'react'
import apple from '../assets/apple.svg'
import star from '../assets/star.svg'


export const Header = () => {

  return (
    <header className='header-wrapper'>
      <h1>BookWorm</h1>
      <h2>Hi, Student</h2>
      <img 
        className='button-img'
        src={star}
      />
      <img 
        className='button-img'
        src={apple}
      />
    </header>
  )
}
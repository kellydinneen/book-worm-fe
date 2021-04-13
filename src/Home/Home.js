import React, { useState } from 'react';
import { NewBookForm } from '../NewBookForm/NewBookForm';
import { BookContainer } from '../BookContainer/BookContainer';
import mountainImg from '../assets/mountain.svg';
import treesImg from '../assets/trees.svg'
import sandhillImg from '../assets/sandhill.svg';
import sandcastleImg from '../assets/sandcastle.svg';
import CurrentBookRainbow from '../CurrentBookRainbow/CurrentBookRainbow';

const data = [
    {title: 'The Hungry Caterpillar', pages: 0.25},
    {title: 'Harry Potter', pages: 0.9}, 
    {title: 'The Babysitters Club', pages: 0},
    {title: 'Lord of the Flies', pages: 0.6}
]
export const Home = () => {
    const [displayNewBookForm, setDisplayNewBookForm] = useState(false)
    return (
        <main>
          <div className='navigation-wrapper'>
            <img 
              className='mountain' 
              src={mountainImg} 
              alt='add a book button'
              onClick={()=>setDisplayNewBookForm(true)}
            />
            <img className='trees' src={treesImg} alt='trees'/>
            <img className='sandhill' src={sandhillImg} alt='sandhill'/>
            <img className='trees' src={treesImg} alt='trees'/>
            <img 
              className='sandcastle' 
              src={sandcastleImg} 
              alt='sandcastle'
            />
          </div>
          <CurrentBookRainbow 
            data={data}
          />
          {displayNewBookForm && <NewBookForm setDisplay={setDisplayNewBookForm}/>}
        </main>
    )
}


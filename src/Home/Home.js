import React, { useState } from 'react';
import { NewBookForm } from '../NewBookForm/NewBookForm';
import { BookContainer } from '../BookContainer/BookContainer';
import mountainImg from '../assets/mountain.svg';
import treesImg from '../assets/trees.svg'
import sandhillImg from '../assets/sandhill.svg';
import sandcastleImg from '../assets/sandcastle.svg';

const data = [
    {title: 'The Hungry Caterpillar', pages: 35},
    {title: 'Harry Potter', pages: 400}
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
          <BookContainer 
            data={data}
          />
          {displayNewBookForm && <NewBookForm setDisplay={setDisplayNewBookForm}/>}
        </main>
    )
}


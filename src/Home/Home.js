import React, { useState } from 'react';
import { NewBookForm } from '../NewBookForm/NewBookForm';
import mountainImg from '../assets/mountain.svg';
import treesImg from '../assets/trees.svg'
import sandhillImg from '../assets/sandhill.svg';
import sandcastleImg from '../assets/sandcastle.svg';

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
          {displayNewBookForm && <NewBookForm setDisplay={setDisplayNewBookForm}/>}
        </main>
    )
}


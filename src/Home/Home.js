import React, { useState } from 'react';
import { NewBookForm } from '../NewBookForm/NewBookForm';
import mountainImg from '../assets/mountain.svg';
import treesImg from '../assets/trees.svg'
import sandhillImg from '../assets/sandhill.svg';
import sandcastleImg from '../assets/sandcastle.svg';
import topsoilImg from '../assets/topsoil.svg';
import CurrentBookRainbow from '../CurrentBookRainbow/CurrentBookRainbow';
import OpenBookImg from '../OpenBookImg/OpenBookImg';

const data = [
    {title: 'The Hungry Caterpillar', pages: 0},
    {title: 'Harry Potter', pages: 0.1}, 
    {title: 'The Babysitters Club', pages: 0.2},
    {title: 'Lord of the Flies', pages: 0.3}, 
    {title: 'The Hungry Caterpillar', pages: 0.4},

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
          <img className='topsoil' src={topsoilImg} alt='Feel the grass at the top of the earth and dig deep to find your books to start your journey.' />
          <CurrentBookRainbow 
            data={data}
          />
          {displayNewBookForm && <NewBookForm setDisplay={setDisplayNewBookForm}/>}
        </main>
    )
}


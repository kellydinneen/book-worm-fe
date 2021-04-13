import React, { useState } from 'react';
import { NewBookForm } from '../NewBookForm/NewBookForm';
import { BookContainer } from '../BookContainer/BookContainer';
import mountainImg from '../assets/mountain.svg';
import treesImg from '../assets/trees.svg'

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
          </div>
            <button>See Finished Books</button>
            <BookContainer 
              data={data}
            />
            {displayNewBookForm && <NewBookForm setDisplay={setDisplayNewBookForm}/>}
        </main>
    )
}


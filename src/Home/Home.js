import React, { useState } from 'react';
import { NewBookForm } from '../NewBookForm/NewBookForm';
import { BookContainer } from '../BookContainer/BookContainer';
import mountain from '../assets/mountain.svg';

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
              src={mountain} 
              alt='mountain'
              onClick={()=>setDisplayNewBookForm(true)}
            />
          </div>
            <button>See Finished Books</button>
            <BookContainer 
              data={data}
            />
            {displayNewBookForm && <NewBookForm setDisplay={setDisplayNewBookForm}/>}
        </main>
    )
}


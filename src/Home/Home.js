import React, { useState } from 'react';
import { NewBookForm } from '../NewBookForm/NewBookForm';
import { BookContainer } from '../BookContainer/BookContainer';

const data = [
    {title: 'The Hungry Caterpillar', pages: 35},
    {title: 'Harry Potter', pages: 400}
]
export const Home = () => {
    const [displayNewBookForm, setDisplayNewBookForm] = useState(false)
    return (
        <main>
            <button onClick={()=>setDisplayNewBookForm(true)}>Add a Book</button>
            <button>See Finished Books</button>
            <BookContainer data={data}/>
            {displayNewBookForm && <NewBookForm setDisplay={setDisplayNewBookForm}/>}
        </main>
    )
}


import React, { useState } from 'react';
import { postBook } from '../apiCalls.js';

export const Card = ({ book }) => {
  const [prediction, setPrediction] = useState('');

  const submitNewBook = async (event) => {
    event.preventDefault()
    const result = await postBook();
    return result;
  }

  return(
    <section className='card'>
      <h2 className='book-title'>{book.attributes.title}</h2>
      <img className='book-img' src={book.attributes.image} alt='book cover'/>
      <textarea
        aria-label="prediction input"
        className="prediction-input"
        placeholder="Type your prediction here?"
        value={prediction}
        onChange={event => setPrediction(event.target.value)}>
      </textarea>
      <button  
        className='add-book-btn' 
        disabled={!prediction} 
        onClick={event => submitNewBook(event)}>Add Book</button>
    </section>
  )
}

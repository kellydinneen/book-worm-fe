import React, { useState } from 'react';
import { postBook } from '../apiCalls.js';

export const Card = ({ book }) => {
  const [prediction, setPrediction] = useState('');

  const submitNewBook = async (book) => {
    const submitBook = {
      student_id: 1,
      prediction: prediction,
      book: {
        title: book.attributes.title,
        author: book.attributes.author,
        pages: book.attributes.pages,
        isbn: book.attributes.isbn,
        image: book.attributes.image
      }
    }
    const result = await postBook(submitBook);
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
        onClick={() => submitNewBook(book)}>Add Book</button>
    </section>
  )
}

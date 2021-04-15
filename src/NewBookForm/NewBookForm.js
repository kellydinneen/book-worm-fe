import React, { useState } from 'react';
import { getBooks, postBook } from '../apiCalls.js';

export const NewBookForm = ({ setDisplay }) => {
    const [bookList, setBookList] = useState([])
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    // const [prediction, setPrediction] = useState('');

    async function fetchAllBooks(title, author) {
      setBookList(await (getBooks(title, author)))
    }
    
    // const submitNewBook = async () => {
    //   const result = await postBook(title, author, 1);
    //   return result;
    // }

    return(
        <form className='add-a-book-form'>
          <label>What's the title of your book?</label>
          <input
              type='text'
              aria-label="title input"
              className="title-input"
              placeholder="Book Title Here"
              value={title}
              onChange={event => {
                setTitle(event.target.value)
                }
              }>
            </input>
          <label>Who is the author of your book?</label>
          <input
            type='text'
            aria-label="author input"
            className="author-input"
            placeholder="Author Here"
            value={author}
            onChange={event => {
              setAuthor(event.target.value)
              }
            }>
          </input>
          {/* <label>Tell me your prediction?</label>
          <textarea
            aria-label="prediction input"
            className="prediction-input"
            placeholder="Your Prediction Here?"
            value={prediction}
            onChange={event => setPrediction(event.target.value)}>
          </textarea> */}
          <button 
            className='start-reading-btn'
            onClick={event => {
              event.preventDefault()
              // submitNewBook();
              // setDisplay(false)
              fetchAllBooks(title, author)
              }
            }>Search
          </button>
        </form>
    )
}

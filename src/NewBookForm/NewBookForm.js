import React, { useState } from 'react';
import { postBook } from '../apiCalls.js';

export const NewBookForm = ({ setDisplay }) => {
    const [title, setTitle] = useState('');
    const [pages, setPages] = useState(0);
    const [author, setAuthor] = useState('');

    const submitNewBook = async () => {
      const result = await postBook(title, pages, author, 1);
      console.log(result);
    }

    return(
        <form className='add-a-book-form'>
          <label>What's the title of your book?</label>
          <input
              aria-label="title input"
              className="title-input"
              placeholder="tell me your book title"
              value={title}
              onChange={event => setTitle(event.target.value)}>
            </input>
          <label>
          Who is the author of your book?
            <input
              aria-label="author input"
              className="author-input"
              placeholder="who wrote this book"
              value={author}
              onChange={event => setAuthor(event.target.value)}>
            </input>
          </label>
          <label>
          How many pages does your book have?
            <input
              aria-label="pages input"
              className="pages-input"
              placeholder="tell me how many pages there are"
              value={pages}
              onChange={event => setPages(event.target.value)}>
            </input>
          </label>
          <button onClick={()=> {
            submitNewBook();
            setDisplay(false)}}>
              Start Reading!
          </button>
        </form>
    )
}

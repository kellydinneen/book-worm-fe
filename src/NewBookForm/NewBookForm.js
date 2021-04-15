import React, { useState } from 'react';
import { getBooks} from '../apiCalls.js';
import { Card } from '../Card/Card'

export const NewBookForm = () => {
    const [bookList, setBookList] = useState([])
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    async function fetchAllBooks(title, author) {
      const getBookList = await (getBooks(title, author))
      setBookList(getBookList.data)
    }

    const handleOnClick = (event) => {
      event.preventDefault()
      fetchAllBooks(title, author)
      }
  
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
          <button 
            className='start-reading-btn'
            onClick={handleOnClick}
            >Search 
          </button>
         {!!bookList.length && <Card bookList={bookList}/>}
        </form>
    )
  }
  

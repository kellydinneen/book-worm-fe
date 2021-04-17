import React, { useState } from 'react';
import { getBooks} from '../apiCalls.js';
import { useForm } from "react-hook-form";
import { Card } from '../Card/Card';

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

    const bookListCard = bookList.map((book, i) => <Card book={book} key={i}/>)


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
            disabled={!title + !author}
            onClick={handleOnClick}
            >Search
          </button>
          <div className='card-wrapper'>
            {!!bookList.length && bookListCard}
          </div>
        </form>
    )
  }

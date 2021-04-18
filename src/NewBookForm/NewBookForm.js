import React, { useState } from 'react';
import { getBooks} from '../apiCalls.js';
import { useForm } from "react-hook-form";
import { Card } from '../Card/Card';
import exitImg from '../assets/exit.png';

export const NewBookForm = ({ setDisplay }) => {
    const [bookList, setBookList] = useState([])
    const { register, handleSubmit} = useForm();
    const onSubmit = (data, event) => {
      fetchAllBooks(data.title, data.author)
      event.target.reset(); 
    };

    async function fetchAllBooks(title, author) {
      const getBookList = await (getBooks(title, author))
      setBookList(getBookList.data)
    }

    const bookListCard = bookList.map((book, i) => <Card book={book} key={i}/>)

    return(
        <section className='add-a-book-form'>
          <img 
            className='exit-img' 
            src={exitImg} 
            alt='exit'
            onClick={() => setDisplay(false)}
          />
          <form className='search-form' onSubmit={handleSubmit(onSubmit)}>
            <label>What's the title of the book?
              <input 
                className='search-input' 
                type="text" 
                placeholder="Enter title here" 
                {...register("title", {required: true, maxLength: 100})} />
            </label>
            <label>Who is the author of the book?
              <input 
                className='search-input' 
                type="text" 
                placeholder="Enter author here" 
                {...register("author", {required: true, maxLength: 100})} />
            </label>
            <button className='submit-button' type="submit">Search</button>
          </form>
          <div className='card-wrapper'>
            {!!bookList.length && bookListCard}
          </div>
        </section>
    )
  }

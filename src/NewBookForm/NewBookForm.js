import React, { useState } from 'react';
import { getBooks} from '../apiCalls.js';
import { useForm } from "react-hook-form";
import { Card } from '../Card/Card';
import exitImg from '../assets/exit.png';

export const NewBookForm = ({ setDisplay }) => {
    const [bookList, setBookList] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => fetchAllBooks(data.title, data.author);

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
            <label>What's the title of your book?
              <input 
                id='title'
                className='search-input' 
                type="text" 
                placeholder="Enter title here" 
                aria-invalid={errors.title ? "true" : "false"}
                {...register("title", {required: true, maxLength: 100})} />
            </label>
            <label>Who is the author of your book?
              <input 
                id='author'
                className='search-input' 
                type="text" 
                placeholder="Enter author here" 
                aria-invalid={errors.author ? "true" : "false"}
                {...register("author", {required: true, maxLength: 100})} />
            <input className='submit-button' type="submit" />
            </label>
            {errors.title && errors.title.type === "required" && (
              <span role="alert">Title is required</span>
            )}
             {errors.author && errors.author.type === "required" && (
              <span role="alert">Author is required</span>
            )}
          </form>
          <div className='card-wrapper'>
            {!!bookList.length && bookListCard}
          </div>
        </section>
    )
  }

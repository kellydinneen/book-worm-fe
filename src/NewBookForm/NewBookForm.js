import React, { useState } from 'react';
import { getBooks} from '../apiCalls.js';
import { useForm } from "react-hook-form";
import { Card } from '../Card/Card';

export const NewBookForm = ({ setDisplay }) => {
    const [bookList, setBookList] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => fetchAllBooks(data.title, data.author);
    console.log(errors);

    async function fetchAllBooks(title, author) {
      const getBookList = await (getBooks(title, author))
      setBookList(getBookList.data)
      console.log(bookList);
    }

    const bookListCard = bookList.map((book, i) => <Card book={book} key={i}/>)

    return(
        <section className='add-a-book-form'>
          <button onClick={() => setDisplay(false)}>Cancel</button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>What's the title of your book?</label>
            <input type="text" placeholder="title" {...register("title", {required: true, maxLength: 100})} />
            <label>Who is the author of your book?</label>
            <input type="text" placeholder="author" {...register("author", {required: true, maxLength: 100})} />
            <input type="submit" />
          </form>
          <div className='card-wrapper'>
            {!!bookList.length && bookListCard}
          </div>
        </section>
    )
  }

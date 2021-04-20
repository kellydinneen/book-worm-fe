import React, { useState } from 'react';
import { getBooks} from '../apiCalls.js';
import { useForm } from "react-hook-form";
import { Card } from '../Card/Card';
import { withRouter } from 'react-router-dom';

const NewBookForm = (props) => {
    const [bookList, setBookList] = useState([])
    const [isSearching, setIsSearching] = useState(false)
    const { register, handleSubmit, formState: { errors }} = useForm();
    const studentId = props.location.state.studentId;

    const onSubmit = (data, event) => {
      fetchAllBooks(data.title, data.author)
      setIsSearching(true)
      event.target.reset();
    };

    async function fetchAllBooks(title, author) {
      const getBookList = await (getBooks(title, author))
      setBookList(getBookList.data)
      setIsSearching(false)
    }

    const bookListCard = bookList.map((book, i) => <Card book={book} studentId={studentId} key={i}/>)
    return(
        <section className='add-a-book-form'>
          <form className='search-form' onSubmit={handleSubmit(onSubmit)}>
          <div className='formContainer'>
            <label className='search-book-label'>What's the title of the book?
              <input
                className='search-input'
                type="text"
                placeholder="Enter title here"
                {...register("title", {required: true, maxLength: 100})} />
            </label>
            <label className='search-book-label'>Who is the author of the book?
              <input
                className='search-input'
                type="text"
                placeholder="Enter author here"
                {...register("author", {required: true, maxLength: 100})} />
            </label>
            <button className='submit-button' type="submit">Search</button>
          </div>
          <div className='errorContainer'>
            {errors.title && errors.title.type === "required" && (
              <h3 role="alert">Please enter the title of the book you are looking for.</h3>
            )}
            {errors.author && errors.author.type === "required" && (
              <h3 role="alert">Please enter the author.</h3>
            )}
            {!bookList.length && isSearching && <h3>We couldn't find any books that matched your search.  Try again!</h3>}
          </div>  
          </form>
          <div className='card-wrapper'>
            {!!bookList.length && bookListCard}
          </div>
        </section>
    )
  }

  export default withRouter(NewBookForm);

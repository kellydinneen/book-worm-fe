import React, { useState, useEffect } from 'react';
import { getFinishedBooks, getBookMarks } from '../apiCalls.js';

export const FinishedBooks = ({ studentId }) => {
    const [finishedBookList, setFinishedBookList] = useState([]);
    const [finishedBookMarks, setFinishedBookMarks] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);

    const fetchFinishedBooks = async () => {
      const getFinishedBooks = await (getFinishedBooks(studentId));
      setFinishedBookList(getFinishedBooks.data);
    }

    const fetchBookMarks = async (books) => {
      let bookMarks = {}
      const marks = await Promise.all(
        books.map(async book => {
          try {
            const marksForBook = await getBookMarks(studentId, book.id);
            bookMarks[book.attributes.title] = marksForBook;
            return marksForBook;
          } catch(err) {
            setError(err)
          }
        }
      )
    );
      return bookMarks;
  }

  const loadFinishedBookInfo = async() => {
    const finishedBooks = await fetchFinishedBooks();
    const bookMarks = await fetchBookMarks(finishedBooks.data);
    setFinishedBookMarks(bookMarks);
    setFinishedBookList(finishedBooks);
    setIsLoading(false);
  }

    const finishedBooks = () => finishedBookList.map((book, i) => <></>)

    return(
        <section className='finished-books'>
          <h2>Books You've Finished</h2>
          <article className='finished-books-container'>
          </article>
        </section>
    )
  }

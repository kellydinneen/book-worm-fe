import React, { useState, useEffect } from 'react';
import { getFinishedBooks, getBookMarks } from '../apiCalls.js';
import { withRouter } from 'react-router-dom';

const FinishedBooks = (props) => {
    const [finishedBookList, setFinishedBookList] = useState([]);
    const [finishedBookMarks, setFinishedBookMarks] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const studentId = props.location.state.studentId;

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

    const finishedBooks = () => finishedBookList.map((book, i) => <FinishedBookCard book={book} bookMarks={finishedBookMarks[book.attributes.title]}/>)

    return(
      <>
        {error && <h3>Whoops!! Something's not right. Return to HOME and try again.</h3>}
        {!error &&
          <section className='finished-books'>
            <h2>Books You've Wormed Your Way All The Way Through</h2>
            <article className='finished-books-container'>
              {isLoading && <p>Hold on, we're finding all the books you've read...</p>}
              {!isLoading &&
                <>
                  {!finishedBooks.length &&
                    <>
                      <h3>You haven't finished any books yet!</h3>
                      <h4>There's no time like the present -- go pick out a book and get reading.</h4>
                      <h4>When you're done, you can mark a book as finished by visiting its details page (click the book's icon in your rainbow)</h4>
                    </>
                  }
                  {finishedBooks.length && finishedBooks}
                </>
              }
            </article>
          </section>
        }
      </>
    )
  }

  export default withRouter(FinishedBooks);

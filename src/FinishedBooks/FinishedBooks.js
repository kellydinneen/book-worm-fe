import React, { useState, useEffect } from 'react';
import { getFinishedBooks, getBookMarks } from '../apiCalls.js';
import { withRouter } from 'react-router-dom';
import { FinishedBookCard } from '../FinishedBookCard/FinishedBookCard';

const FinishedBooks = (props) => {
    const [finishedBookList, setFinishedBookList] = useState(null);
    const [finishedBookMarks, setFinishedBookMarks] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const studentId = props.location.state.studentId;

    const fetchFinishedBooks = async () => {
      const finishedBooks = await (getFinishedBooks(studentId));
      return finishedBooks.data;
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
            setError(err);
          }
        }
      )
    );
      return bookMarks;
  }

  const loadFinishedBookInfo = async() => {
    const finishedBooks = await fetchFinishedBooks();
    await setFinishedBookList(finishedBooks);
    const bookMarks = await fetchBookMarks(finishedBooks);
    await setFinishedBookMarks(bookMarks);
    setIsLoading(false);
  }

    const finishedBooks = () => {
      return finishedBookList.map((book, i) => <FinishedBookCard key={i} book={book} bookMarks={finishedBookMarks[book.attributes.title].data}/>)
    }

    useEffect(() => {
      loadFinishedBookInfo();
    }, []);

    return(
      <div className='finishedBooksWrapper'>
        {error && <h3>Whoops!! Something's not right. Return to HOME and try again.</h3>}
        {!error &&
          <section className='finished-books'>
            <h2>Books You've Wormed Your Way All The Way Through</h2>
            <article className='finished-books-container'>
              {isLoading && <p>Hold on, we're finding all the books you've read...</p>}
              {!isLoading &&
                <>
                  {!finishedBookList &&
                    <>
                      <h3>You haven't finished any books yet!</h3>
                        <h4>There's no time like the present -- go pick out a book and get reading.</h4>
                        <h4>When you're done, you can mark a book as finished by visiting its details page (click the book's icon in your rainbow)</h4>
                    </>
                  }
                  {finishedBookList && finishedBooks()}
                </>
              }
            </article>
          </section>
        }
      </div>
    )
  }

  export default withRouter(FinishedBooks);

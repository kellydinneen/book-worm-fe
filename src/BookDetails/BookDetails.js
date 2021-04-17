import React, { useState, useEffect } from 'react';
import { NewBookMarkForm } from '../NewBookMarkForm/NewBookMarkForm';
import { FinishBookForm } from '../FinishBookForm/FinishBookForm';
import { Link, withRouter } from 'react-router-dom';
import { getBookMarks } from '../apiCalls.js';

const BookDetails = (props) => {
  const [displayNewBookMarkForm, setDisplayNewBookMarkForm] = useState(false);
  const [displayFinishBookForm, setDisplayFinishBookForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [bookMarks, setBookMarks] = useState(null);
  const book = props.location.state.book;

  const fetchBookMarks = async () => {
    const allBookMarks = await getBookMarks();
    const bookMarksForThisBook = allBookMarks.data === [] ? [] : allBookMarks.data.filter(bookmark => bookmark.attributes.student_book_id === book.id);
    setBookMarks(bookMarksForThisBook);
    setIsLoading(false);
  }

  const bookMarkDisplays = () => bookMarks.map(mark =>
    <section key={mark.id}>
      <h4>{mark.attributes.date}</h4>
      <h4>{mark.attributes.minutes}</h4>
      <h4>{mark.attributes.page_number}</h4>
    </section>
  )

  useEffect(async () => {
    await fetchBookMarks()
    bookMarks.length > 0 ? bookMarkDisplays() : console.log('no bookmarks');
  }, [])

    return(
        <section>
          <Link to='/'>
            <button>Back to Current Books</button>
          </Link>
          <article>
            <img className='book-details-image' src={book.attributes.image}/>
            <h2>{book.attributes.title}</h2>
            <h3>by {book.attributes.author}</h3>
            <p>{book.attributes.pages} pages long</p>
          </article>
          <article>
            <div>
              <h2>Bookmarks</h2>
              {bookMarks && bookMarkDisplays}
              {displayNewBookMarkForm && <>
                <NewBookMarkForm book={book}/>
                <button onClick={() => setDisplayNewBookMarkForm(false)}>Cancel</button>
              </>}
              {!displayNewBookMarkForm && <button onClick={() => setDisplayNewBookMarkForm(true)}>Add A Bookmark</button>}
            </div>
            {!displayFinishBookForm && <button onClick={() => setDisplayFinishBookForm(true)}>Finish Book</button>}
            {displayFinishBookForm &&
              <>
                <button onClick={() => setDisplayFinishBookForm(false)}>Cancel</button>
                <FinishBookForm book={book}/>
              </>
            }
            <button>Abandon Book</button>
          </article>
        </section>
    )
}

export default withRouter(BookDetails);

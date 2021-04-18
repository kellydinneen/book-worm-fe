import React, { useState, useEffect } from 'react';
import { NewBookMarkForm } from '../NewBookMarkForm/NewBookMarkForm';
import { FinishBookForm } from '../FinishBookForm/FinishBookForm';
import { Link, withRouter } from 'react-router-dom';
import { getBookMarks } from '../apiCalls.js';

const BookDetails = (props) => {
  const [displayNewBookMarkForm, setDisplayNewBookMarkForm] = useState(false);
  const [displayFinishBookForm, setDisplayFinishBookForm] = useState(false);
  const [bookMarks, setBookMarks] = useState(null);
  const book = props.location.state.book;

  async function fetchBookMarks() {
    const allBookMarks = await getBookMarks();
    const bookMarksForThisBook = allBookMarks.data === [] ? null : allBookMarks.data.filter(bookmark => bookmark.attributes.student_book_id === book.id);
    setBookMarks(bookMarksForThisBook);
  }

  const bookMarkDisplays = () => bookMarks.map(mark =>
    <section key={mark.id}>
      <h4>{mark.attributes.date}</h4>
      <h4>{mark.attributes.minutes}</h4>
      <h4>{mark.attributes.page_number}</h4>
    </section>
  )

  useEffect(() => {
    async function grabBookMarks() {
      await fetchBookMarks()
       bookMarks ? bookMarkDisplays() : console.log('no bookmarks');
    } 
    grabBookMarks()
  }, [])

    return(
      <main>
        <Link to='/'>
          <button>Back to Current Books</button>
        </Link>
        <section className='book-details'>
            <article className='book-info'>
              <img className='book-details-image' src={book.attributes.image} alt='book'/>
              <h2>{book.attributes.title}</h2>
              <h3>by {book.attributes.author}</h3>
              <p>{book.attributes.pages} pages long</p>
            </article>
            <article className='bookmarks-display'>
              <h2>Bookmarks</h2>
              {bookMarks && bookMarkDisplays}
              {displayNewBookMarkForm && <>
                <NewBookMarkForm book={book}/>
                <button onClick={() => setDisplayNewBookMarkForm(false)}>Cancel</button>
              </>}
              {!displayNewBookMarkForm && <button onClick={() => setDisplayNewBookMarkForm(true)}>Add A Bookmark</button>}
            </article>
            <article className='book-options'>
              {!displayFinishBookForm && <button onClick={() => setDisplayFinishBookForm(true)}>Finish Book</button>}
              {displayFinishBookForm &&
                <>
                  <FinishBookForm book={book}/>
                  <button onClick={() => setDisplayFinishBookForm(false)}>Cancel</button>
                </>
              }
              <button>Abandon Book</button>
            </article>
        </section>
      </main>
    )
}

export default withRouter(BookDetails);

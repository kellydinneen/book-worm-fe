import React, { useState, useEffect } from 'react';
import { NewBookMarkForm } from '../NewBookMarkForm/NewBookMarkForm';
import { FinishBookForm } from '../FinishBookForm/FinishBookForm';
import { withRouter } from 'react-router-dom';
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
        <section className='book-details'>
            <article className='book-info'>
              <img 
                className='book-details-image' 
                src={book.attributes.image} 
                alt='book cover'
              />
              <h2>{book.attributes.title}</h2>
              <h3>by {book.attributes.author}</h3>
              <p>{book.attributes.pages} total pages</p>
            </article>
            <article className='bookmarks-display'>
              <h2>Bookmarks</h2>
              {bookMarks && bookMarkDisplays}
            </article>
            <article className='book-options'>
              {!displayNewBookMarkForm && 
                <button 
                  className='detail-button'
                  onClick={() => setDisplayNewBookMarkForm(true)}>Add A Bookmark
                </button>
              }
              {displayNewBookMarkForm && <>
                <NewBookMarkForm book={book}/>
                <button 
                  className='bookmark-cancel-button'
                  onClick={() => setDisplayNewBookMarkForm(false)}>Cancel
                </button>
              </>}
              {!displayFinishBookForm && 
                <button 
                  className='detail-button'
                  onClick={() => setDisplayFinishBookForm(true)}>Finish Book
                </button>
              }
              {displayFinishBookForm &&
                <>
                  <FinishBookForm book={book}/>
                  <button 
                    className='bookmark-cancel-button'
                    onClick={() => setDisplayFinishBookForm(false)}>Cancel
                  </button>
                </>
              }
              <button className='detail-button'>Abandon Book</button>
            </article>
        </section>
      </main>
    )
}

export default withRouter(BookDetails);

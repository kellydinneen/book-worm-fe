import React, { useState, useEffect } from 'react';
import { FinishBookForm } from '../FinishBookForm/FinishBookForm';
import { Link, withRouter } from 'react-router-dom';
import { getBookMarks } from '../apiCalls.js';
import Collapsible from 'react-collapsible';

const BookDetails = (props) => {
  const [displayFinishBookForm, setDisplayFinishBookForm] = useState(false);
  const [bookMarks, setBookMarks] = useState([]);
  const studentId = props.location.state.studentId;
  const book = props.location.state.book;

 const fetchBookMarks = async () => {
    const allBookMarks = await getBookMarks(studentId, book.id);
    setBookMarks(allBookMarks.data);
  }

  const bookMarkDisplays = () => {
    return bookMarks.map(mark =>
    <Collapsible trigger={mark.attributes.date} key={mark.id}>
      <section>
        <p>I read for {mark.attributes.minutes} mins!</p>
        <p> On page: {mark.attributes.page_number}</p>
        <p>Notes: {mark.attributes.notes}</p>
        <p>Reactions: {mark.attributes.reactions}</p>
      </section>
    </Collapsible>
  )}

  useEffect(() => {
    fetchBookMarks();
  })

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
              {bookMarkDisplays()}
            </article>
            <article className='book-options'>
              <Link to={{
                pathname: `/bookmark/${book.attributes.title}`,
                state: { book: book, studentId: studentId }
              }}>
                <button className='detail-button'>Add A Bookmark</button>
              </Link>
              {!displayFinishBookForm &&
                <button
                  className='detail-button'
                  onClick={() => setDisplayFinishBookForm(true)}>Finish Book
                </button>
              }
              {displayFinishBookForm &&
                <>
                  <FinishBookForm book={book} studentId={studentId}/>
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

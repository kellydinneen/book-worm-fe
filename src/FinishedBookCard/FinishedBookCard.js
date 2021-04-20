import React from 'react';
import Collapsible from 'react-collapsible';
import moment from 'moment';

export const FinishedBookCard = ({ book, bookMarks }) => {
  console.log(book);

  const bookMarkList = () => bookMarks.map(mark =>
    <Collapsible className='finishedBookmarks' trigger={mark.attributes.reactions ?
      moment(mark.attributes.date).format('LL') + '......' + mark.attributes.reactions :
      moment(mark.attributes.date).format('LL') + '......' + '🍎'
    }>
      <section className='finishedBookmarks' key={mark.id}>
        <p>I read for {mark.attributes.minutes} mins!</p>
        <p> On page: {mark.attributes.page_number}</p>
        <p>Notes: {mark.attributes.notes}</p>
      </section>
    </Collapsible>)

  return(
    <section className='finished-book-card'>
      <h2 className='finished-book-title'>{book.attributes.title}</h2>
      <img className='finished-book-img' src={book.attributes.image} alt='book cover'/>
      <h3 className='bookmarkHeading'>Bookmarks</h3>
      <div className='finished-bookmarks'>
        {!bookMarks.length ? <p>You didn't leave any bookmarks in this one</p> : bookMarkList()}
      </div>
    </section>
  )
}

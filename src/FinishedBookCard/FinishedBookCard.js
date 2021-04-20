import React from 'react';
import Collapsible from 'react-collapsible';

export const FinishedBookCard = ({ book, bookMarks }) => {
  console.log(book);

  const bookMarkList = () => bookMarks.map(mark =>
    <Collapsible trigger={mark.attributes.reactions ?
      mark.attributes.date + '......' + mark.attributes.reactions :
      mark.attributes.date + '......' + '🍎'
    }>
      <section key={mark.id}>
        <p>I read for {mark.attributes.minutes} mins!</p>
        <p> On page: {mark.attributes.page_number}</p>
        <p>Notes: {mark.attributes.notes}</p>
      </section>
    </Collapsible>)

  return(
    <section className='finished-book-card'>
      <h2 className='finished-book-title'>{book.attributes.title}</h2>
      <img className='finished-book-img' src={book.attributes.image} alt='book cover'/>
      <h3>Bookmarks</h3>
      <div className='finished-bookmarks'>
        {!bookMarks.length ? <p>You didn't leave any bookmarks in this one</p> : bookMarkList()}
      </div>
    </section>
  )
}

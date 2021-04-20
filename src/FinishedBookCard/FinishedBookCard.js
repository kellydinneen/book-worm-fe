import React from 'react';
import Collapsible from 'react-collapsible';

export const Card = ({ book, bookMarks }) => {

  const bookMarkList = bookMarks.map(mark =>
    <Collapsible trigger={mark.attributes.date + '      ' + mark.attributes.reactions}>
      <section key={mark.id}>
        <p>I read for {mark.attributes.minutes} mins!</p>
        <p> On page: {mark.attributes.page_number}</p>
        <p>Notes: {mark.attributes.notes}</p>
      </section>
    </Collapsible>)

  return(
    <section className='finished-book-card'>
      <h2 className='book-title'>{book.attributes.title}</h2>
      <img className='book-img' src={book.attributes.image} alt='book cover'/>
      <h3>Bookmarks</h3>
      <div className='bookmarks'>
      {bookMarks.length && bookMarkList}
    </section>
  )
}

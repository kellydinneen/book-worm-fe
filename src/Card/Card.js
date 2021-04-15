import React from 'react';

export const Card = ({ bookList }) => {
  const bookListCard = bookList.map(book => {
    return (
        <section className='card' key={book.attributes.title}>
          <h2 className={book.attributes.title.length > 28 ? 'long-title' : 'book-title'}>{book.attributes.title}</h2>
          <img className='book-img' src={book.attributes.image} alt='book cover'/>
        </section>
      )
  })

  return(
    <div className='card-wrapper'>
      {bookListCard}
    </div>
  )
}

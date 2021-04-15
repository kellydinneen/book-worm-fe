import React from 'react';

export const Card = ({ bookList, id }) => {
  const bookListCard = bookList.map(book => {
    return (
        <article key={id}>
          <h2>{book.attributes.title}</h2>
          <p>{book.attributes.image}</p>
        </article>
      )
  })

  return(
    <div>
      {bookListCard}
    </div>
  )
}

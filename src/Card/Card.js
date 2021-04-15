import React from 'react';

export const Card = ({ book }) =>
    <article>
      <h2>{book.title}</h2>
      <p>{book.pages}</p>
      <p>{book.image}</p>
    </article>

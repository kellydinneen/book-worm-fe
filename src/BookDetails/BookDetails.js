import React, { useState } from 'react';

export const BookDetails = ({book}) => {

    return(
        <section>
          <button>Close Details</button>
          <article>
            <img src={book.image}/>
            <h2>{book.title}</h2>
            <p>{book.summary}</p>
          </article>
          <article>
            <div>PROGRESS BAR</div>
            <button>Add A Bookmark</button>
            <button>Finish Book</button>
            <button>Abandon Book</button>
          </article>
        </section>
    )
}

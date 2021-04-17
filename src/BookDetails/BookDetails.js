import React, { useState } from 'react';
import { NewBookMarkForm } from '../NewBookMarkForm/NewBookMarkForm';
import { useLocation, withRouter } from 'react-router-dom';

const BookDetails = (props) => {
  const [displayNewBookMarkForm, setDisplayNewBookMarkForm] = useState(false);
  const book = props.location.state.book;
  console.log(book);

    return(
        <section>
          <button>Back to Current Books</button>
          <article>
            <h2>{book.attributes.title}</h2>
            <h3>by {book.attributes.author}</h3>
            <p>{book.attributes.pages} pages long</p>
          </article>
          <article>
            <div>PROGRESS BAR</div>
            <button>Add A Bookmark</button>
            <button>Finish Book</button>
            <button>Abandon Book</button>
          </article>
          {displayNewBookMarkForm && <NewBookMarkForm />}
        </section>
    )
}

export default withRouter(BookDetails);

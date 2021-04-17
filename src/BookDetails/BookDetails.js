import React, { useState } from 'react';
import { NewBookMarkForm } from '../NewBookMarkForm/NewBookMarkForm';
import { Link, withRouter } from 'react-router-dom';

const BookDetails = (props) => {
  const [displayNewBookMarkForm, setDisplayNewBookMarkForm] = useState(false);
  const book = props.location.state.book;

    return(
        <section>
          <Link to='/'>
            <button>Back to Current Books</button>
          </Link>
          <article>
            <img className='book-details-image' src={book.attributes.image}/>
            <h2>{book.attributes.title}</h2>
            <h3>by {book.attributes.author}</h3>
            <p>{book.attributes.pages} pages long</p>
          </article>
          <article>
            <div>
              <h2>Bookmarks</h2>
              {displayNewBookMarkForm && <>
                <NewBookMarkForm book={book}/>
                <button onClick={() => setDisplayNewBookMarkForm(false)}>Cancel</button>
              </>}
              {!displayNewBookMarkForm && <button onClick={() => setDisplayNewBookMarkForm(true)}>Add A Bookmark</button>}
            </div>
            <button>Finish Book</button>
            <button>Abandon Book</button>
          </article>
        </section>
    )
}

export default withRouter(BookDetails);

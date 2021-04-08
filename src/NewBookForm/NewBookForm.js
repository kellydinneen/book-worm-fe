import React, { useState } from 'react';

export const NewBookForm = ({ setDisplay }) => {
    const [title, setTitle] = useState('');
    const [pages, setPages] = useState(0);
    return(
        <form>
          <label>
          What's the title of your book?
            <input
              aria-label="title input"
              className="title-input"
              placeholder="tell me your book title"
              value={title}
              onChange={event => setTitle(event.target.value)}>
            </input>
          </label>
          <label>
          How many pages does your book have?
            <input
              aria-label="pages input"
              className="pages-input"
              placeholder="tell me how many pages there are"
              value={pages}
              onChange={event => setPages(event.target.value)}>
            </input>
          </label>
          <button onClick={()=>setDisplay(false)}>
              Start Reading!
          </button>
        </form>
    )
}
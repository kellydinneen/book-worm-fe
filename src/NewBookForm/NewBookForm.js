import React, { useState } from 'react';

export const NewBookForm = ({ setDisplay }) => {
    const [title, setTitle] = useState('');
    const [pages, setPages] = useState(0);
    
    return(
        <form className='add-a-book-form'>
          <label>What's the title of your book?</label>
          <input
              aria-label="title input"
              className="title-input"
              placeholder="tell me your book title"
              value={title}
              onChange={event => setTitle(event.target.value)}>
            </input>
          <label>How many pages does your book have?</label>
            <input
              aria-label="pages input"
              className="pages-input"
              placeholder="tell me how many pages there are"
              value={pages}
              onChange={event => setPages(event.target.value)}>
            </input>
          <button className='start-reading-btn' onClick={()=>setDisplay(false)}>
              Start Reading!
          </button>
        </form>
    )
}
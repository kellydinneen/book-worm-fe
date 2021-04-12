import React, { useState } from 'react';

export const FinishBookForm = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    return(
        <form>
          <label>
          How did you like it on a scale from 1 to 5?
            <input
              aria-label="rating input"
              className="rating-input"
              placeholder="choose a number between 1 and 5"
              value={rating}
              onChange={event => setRating(event.target.value)}>
            </input>
          </label>
          <label>
          Tell your friends a little bit about it
            <input
              aria-label="review input"
              className="review-input"
              placeholder="What did you think?"
              value={review}
              onChange={event => setReview(event.target.value)}>
            </input>
          </label>
          <button>
              All done!
          </button>
        </form>
    )
}

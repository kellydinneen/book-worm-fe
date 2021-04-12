import React, { useState } from 'react';

export const NewBookMarkForm = () => {
    const [minutesRead, setMinutesRead] = useState(0);
    const [endingPage, setEndingPage] = useState(0);
    const [notes, setNotes] = useState('');
    const [reactions, setReactions] = useState('');

    return(
        <form>
          <label>
          How many minutes did you read?
            <input
              aria-label="reading minutes input"
              className="reading-minutes-input"
              placeholder="minutes spent reading"
              value={minutesRead}
              onChange={event => setMinutesRead(event.target.value)}>
            </input>
          </label>
          <label>
          What page did you end on?
            <input
              aria-label="ending page input"
              className="ending-page-input"
              placeholder="page number of the last page you read"
              value={endingPage}
              onChange={event => setEndingPage(event.target.value)}>
            </input>
          </label>
          <label>
          Any thoughts or notes?
            <input
              aria-label="notes input"
              className="notes-input"
              placeholder="What did you think of what you read?"
              value={notes}
              onChange={event => setNotes(event.target.value)}>
            </input>
          </label>
          <label>
          Reactions?
            <input
              aria-label="reactions-input"
              className="reactions-input"
              placeholder="choose an emoji"
              value={reactions}
              onChange={event => setReactions(event.target.value)}>
            </input>
          </label>
          <button>
              Submit Bookmark
          </button>
        </form>
    )
}

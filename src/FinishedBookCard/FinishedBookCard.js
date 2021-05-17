import React from 'react';
import Collapsible from 'react-collapsible';
import moment from 'moment';

export const FinishedBookCard = ({ book, bookReflections, bookMarks }) => {

  const bookMarkList = () => bookMarks.map(mark =>
    <Collapsible className='finishedBookmarks' trigger={mark.attributes.reactions ?
      moment(mark.attributes.date).format('LL') + '......' + mark.attributes.reactions :
      moment(mark.attributes.date).format('LL') + '......' + '🍎'
    }>
      <section className='finishedBookmarks' key={mark.id}>
        <p>I read for {mark.attributes.minutes} mins!</p>
        <p> On page: {mark.attributes.page_number}</p>
        <p>Notes: {mark.attributes.notes}</p>
      </section>
    </Collapsible>)

    const stars =
      <div>
        <span className="star-review">
          {book.reflections.review > 0 ? '\u2605' : '\u2606'}
        </span>
        <span className="star-review">
          {book.reflections.review > 1 ? '\u2605' : '\u2606'}
        </span>
        <span className="star-review">
          {book.reflections.review > 2 ? '\u2605' : '\u2606'}
        </span>
        <span className="star-review">
          {book.reflections.review > 3 ? '\u2605' : '\u2606'}
        </span>
        <span className="star-review">
          {book.reflections.review > 4 ? '\u2605' : '\u2606'}
        </span>
      </div>


  return(
    <section className='finished-book-card'>
      <h2 className='finished-book-title'>{book.attributes.title}</h2>
      <img className='finished-book-img' src={book.attributes.image} alt='book cover'/>
      {stars}
      <p className='review'>{book.reflections.review_comment}</p>
      <Collapsible className='prediction' trigger='See what you predicted'>
        <p>{book.reflections.prediction}</p>
      </Collapsible>
      <h4 className='bookmarkHeading'>Bookmarks</h4>
      <div className='finished-bookmarks'>
        {!bookMarks.length ? <p>You didn't leave any bookmarks in this one</p> : bookMarkList()}
      </div>
    </section>
  )
}

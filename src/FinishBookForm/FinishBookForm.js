import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { markBookFinished } from '../apiCalls.js';
import { StarRating } from '../StarRating/StarRating';
import { Link } from 'react-router-dom';
import { gsap, CSSPlugin } from 'gsap';

gsap.registerPlugin(CSSPlugin);

export const FinishBookForm = ({ book, studentId }) => {
    const { register, handleSubmit } = useForm();
    const [ rating, setRating ] = useState(0);
    console.log("studentId", studentId);


    const submitBookReview = async (data) => {
      console.log("data", data)
      const bookReview = {
        student_id: studentId,
        book_id: book.id,
        status: "finished",
        review: rating,
        review_comment: data.review
      }
      const result = await markBookFinished(bookReview, studentId);
      console.log(result)
      return result;
    }

    const onSubmit = data => {
      submitBookReview(data);
    }
    return (
      <>
      <form className='finish-form' onSubmit={() => handleSubmit(onSubmit)}>
        <label>Rate the book on a scale from 1 to 5?</label>
        <StarRating bookRating={rating} setBookRating={setRating} totalStars={5} />
        <label>Tell your friends a little bit about it:</label>
        <textarea
          className='finished-books-textarea'
          type="text"
          placeholder="Write your review here"
          {...register("review", {required: true, maxLength: 500})}
        ></textarea>
        <Link to={{
          pathname: `/celebration`,
          state: {studentId: studentId}
        }}>
          <button
            className='finished-book-submit-button'
            type="submit">Submit
          </button>
        </Link>
      </form>
      </>
    );
}

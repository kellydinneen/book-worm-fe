import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { markBookFinished } from '../apiCalls.js';
import { StarRating } from '../StarRating/StarRating';
import { Redirect } from 'react-router-dom';
import { gsap, CSSPlugin } from 'gsap';

gsap.registerPlugin(CSSPlugin);

export const FinishBookForm = ({ book, studentId }) => {
    const { register, reset, handleSubmit, formState: { errors }} = useForm();
    const [ rating, setRating ] = useState(0);
    const [ submitted, setSubmitted ] = useState(false);

    const defaultValues = {
      textarea: ""
    };

    const submitBookReview = async (data) => {
      const bookReview = {
        student_id: studentId,
        book_id: book.id,
        status: "finished",
        review: rating,
        review_comment: data.review
      }
      const result = await markBookFinished(bookReview, studentId);
      setSubmitted(true);
      return result;
    }

    const onSubmit = data => {
      submitBookReview(data);
      reset({ defaultValues });
    }

    return (
      <>
      <form className='finish-form' onSubmit={handleSubmit(onSubmit)}>
        <label>Rate the book on a scale from 1 to 5?</label>
        <StarRating setBookRating={setRating} totalStars={5} />
        <label>Tell your friends a little bit about it:</label>
        <textarea
          className='finished-books-textarea'
          type="text"
          placeholder="Write your review here"
          {...register("review", {required: true, maxLength: 500})}
        ></textarea>
        <button
          className='finished-book-submit-button'
          type="submit">Submit
        </button>
        {submitted && <Redirect to={{
          pathname: `/celebration`,
          state: {studentId: studentId}
        }}></Redirect>}
      </form>
      </>
    );
}

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { withRouter, Redirect } from 'react-router-dom';
import { postBookMark } from '../apiCalls.js';

const NewBookMarkForm = (props) => {
  const { register, reset, handleSubmit, formState: { errors }} = useForm();
  const [refreshedBookMarks, setRefreshedBookMarks] = useState(false);
  const studentId = props.location.state.studentId;
  const book = props.location.state.book;

  const defaultValues = {
    select: "",
    input: ""
  };

  const submitBookMark = async (data) => {
    const bookMark = {
      student_id: studentId,
      book_id: book.id,
      date: data.date,
      minutes: data.minutes,
      page_number: data.page,
      notes: data.notes,
      reactions: data.reaction
    }
    const result = await postBookMark(bookMark);
    setRefreshedBookMarks(true);
    return result;
  }

  const onSubmit = data => {
    submitBookMark(data);
    reset({ defaultValues })
  };

  return (
    <div className='bookmarkFormContainer'>
      <form className='bookmark-form' onSubmit={handleSubmit(onSubmit)}>
        <label className='bookmark-label'>What page did you finish on?</label>
        <input
          className='book-mark-form-input'
          type="number"
          placeholder="Page number"
          {...register("page", {required: true})}
        />
        <label className='bookmark-label'>How many minutes did you read for?</label>
        <input
          className='book-mark-form-input'
          type="number"
          placeholder="Minutes read" {...register("minutes", {required: true})}
        />
        <label className='bookmark-label'>What day did you read?</label>
        <input
          className='book-mark-form-input'
          type="date" {...register("date", {required: true})}
        />
        <label className='bookmark-label'>Write down any thoughts or notes you have:</label>
        <textarea
        className='book-mark-form-textarea'
        type="text"
        placeholder="What did you notice? What was your favorite part? Your least favorite?" {...register("notes")}
        ></textarea>
        <label className='bookmark-label'>How did this reading make you feel?</label>
        <select {...register("reaction", {required: true})}>
          <option value="">Add a reaction</option>
          <option value="😮"> 😮 Shocked</option>
          <option value="🧐"> 🧐 Interested</option>
          <option value="😆"> 😆 Funny</option>
          <option value="😢"> 😢 Sad</option>
          <option value="😡"> 😡 Angry</option>
          <option value="😨"> 😨 Confused</option>
          <option value="😊"> 😊 Happy</option>
          <option value="🥰"> 🥰 In Love!</option>
        </select>
        <button
          className='bookmark-submit-button'
          type="submit"
        >Submit</button>
        {refreshedBookMarks && <Redirect
          to={{
            pathname: `/books/${book.attributes.title}`,
            state: { book: book, studentId: studentId }
          }}
        ></Redirect>}
        {errors.page && errors.page.type === "required" && (
          <span role="alert">Add the page number your on!</span>
        )}
        {errors.minutes && errors.minutes.type === "required" && (
          <span role="alert">Add your minutes read!</span>
        )}
        {errors.date && errors.date.type === "required" && (
          <span role="alert">Enter a date.</span>
        )}
        {errors.notes && errors.notes.type === "required" && (
          <span role="alert">Add some notes!</span>
        )}
        {errors.reaction && errors.reaction.type === "required" && (
          <span role="alert">Add an emoji reaction!</span>
        )}
      </form>
    </div>
  );
}

export default withRouter(NewBookMarkForm);

import React from 'react';
import { useForm } from "react-hook-form";
import { postBookMark } from '../apiCalls.js';

export const NewBookMarkForm = ({ book, studentId }) => {
  const { register, reset, handleSubmit} = useForm();

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
      reaction: data.reaction
    }
    const result = await postBookMark(bookMark);
    return result;
  }

  const onSubmit = data => {
    submitBookMark(data);
    reset({ defaultValues })
  };

  return (
   <form className='bookmark-form' onSubmit={handleSubmit(onSubmit)}>
     <label>What page did you finish on?</label>
     <input
        className='book-mark-form-input'
        type="number"
        placeholder="Page number"
        {...register("page", {required: true})}
      />
     <label>How many minutes did you read for?</label>
     <input
        className='book-mark-form-input'
        type="number"
        placeholder="Minutes read" {...register("minutes", {required: true})}
    />
     <label>What day did you read?</label>
     <input
      className='book-mark-form-input'
      type="date" {...register("date", {required: true})}
      />
     <label>Write down any thoughts or notes you have:</label>
     <textarea
        className='book-mark-form-textarea'
        type="text"
        placeholder="What did you notice? What was your favorite part? Your least favorite?" {...register("notes")}
      ></textarea>
     <label>How did this reading make you feel?</label>
     <select {...register("reaction")}>
        <option value="😮">😮 Shocked</option>
        <option value=" 🧐"> 🧐 Interested</option>
        <option value=" 😆"> 😆 Funny</option>
        <option value=" 😢"> 😢 Sad</option>
        <option value=" 😡"> 😡 Angry</option>
        <option value=" 😨"> 😨 Confused</option>
        <option value=" 😊"> 😊 Happy</option>
        <option value=" 🥰"> 🥰 In Love!</option>
      </select>
     <button
        className='bookmark-submit-button'
        type="submit"
      >Submit</button>
   </form>
  );
}

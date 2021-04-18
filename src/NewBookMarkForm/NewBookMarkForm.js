import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { postBookMark } from '../apiCalls.js';

export const NewBookMarkForm = ({ book }) => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  console.log(book);

  const defaultValues = {
    select: "",
    input: ""
  };

  const submitBookMark = async (data) => {
    const bookMark = {
      student_book_id: book.id,
      date: data.date,
      minutes: data.minutes
    }
    const result = await postBookMark(bookMark);
    return result;
  }

  const onSubmit = data => {
    submitBookMark(data);
    reset({ defaultValues })
  };
  console.log(errors);

  return (
   <form className='bookmark-form' onSubmit={handleSubmit(onSubmit)}>
     <label>What page did you finish on?</label>
     <input 
        className='book-mark-form-input'
        type="number" 
        placeholder="Page number" {...register("page", {required: true})} 
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
        placeholder="What did you notice? What was your favorite part? Your least favorite?" {...register} 
      ></textarea>
     <label>How did this reading make you feel?</label>
     <select {...register}>
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

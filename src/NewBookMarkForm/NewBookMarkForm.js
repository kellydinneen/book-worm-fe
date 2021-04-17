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
    console.log(bookMark);
    const result = await postBookMark(bookMark);
    console.log(result);
    return result;
  }

  const onSubmit = data => {
    console.log(data)
    submitBookMark(data);
    reset({ defaultValues })
  };
  console.log(errors);

  return (
   <form className='bookmark-form' onSubmit={handleSubmit(onSubmit)}>
     <label className='new-bookmark-label'>What page did you finish on?</label>
     <input type="number" placeholder="page number" {...register("page", {required: true})} />
     <label className='new-bookmark-label'>How many minutes did you read for?</label>
     <input type="number" placeholder="minutes" {...register("minutes", {required: true})} />
     <label className='new-bookmark-label'>What day did you read?</label>
     <input type="datetime" placeholder="choose a date" {...register("date", {required: true})} />
     <label className='new-bookmark-label'>Write down any thoughts or notes you have:</label>
     <input type="text" placeholder="What did you notice? What was your favorite part? Your least favorite?" {...register} />
     <label className='new-bookmark-label'>How did this reading make you feel?</label>
     <select {...register}>
        <option value="😮">😮</option>
        <option value=" 🧐"> 🧐</option>
        <option value=" 😆"> 😆</option>
        <option value=" 😢"> 😢</option>
        <option value=" 😡"> 😡</option>
        <option value=" 😨"> 😨</option>
        <option value=" 😊"> 😊</option>
        <option value=" 🥰"> 🥰</option>
      </select>
     <input type="submit" />
   </form>
  );
}

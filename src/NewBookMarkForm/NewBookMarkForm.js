import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export const NewBookMarkForm = ({ book }) => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const defaultValues = {
    select: "",
    input: ""
  };

  const onSubmit = data => {
    console.log(data)
    reset({ defaultValues })
  };
  console.log(errors);

  return (
   <form className='bookmark-form' onSubmit={handleSubmit(onSubmit)}>
     <label className='new-bookmark-label'>What page did you finish on?</label>
     <input type="number" placeholder="page number" {...register("ending page", {required: true})} />
     <label className='new-bookmark-label'>How many minutes did you read for?</label>
     <input type="number" placeholder="minutes" {...register("reading minutes", {required: true})} />
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

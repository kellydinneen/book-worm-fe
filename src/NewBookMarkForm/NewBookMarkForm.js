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
   <form onSubmit={handleSubmit(onSubmit)}>
     <input type="number" placeholder="What page did you finish on?" {...register("What page did you finish on?", {required: true})} />
     <input type="number" placeholder="How many minutes did you read for?" {...register("How many minutes did you read for?", {required: true})} />
     <input type="text" placeholder="Write down any thoughts or notes you have:" {...register} />
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

import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export const NewBookMarkForm = ({ book }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return(
      <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register("reading minutes", { required: true })} />
         <input type="number" {...register("ending page", { required: true, min: 18, max: book.pages })} />
         <input {...register("notes", { maxLength: 500 })} />
         <input type="submit" />
      </form>
    )
}

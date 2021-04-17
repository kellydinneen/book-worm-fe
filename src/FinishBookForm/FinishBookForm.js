import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const FinishBookForm = ({ book }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>How did you like it on a scale from 1 to 5?</label>
        <select {...register("rating", { required: true })}>
          <option value="1">⭐️</option>
          <option value="2"> ⭐️⭐️</option>
          <option value="3"> ⭐️⭐️⭐️</option>
          <option value="4"> ⭐️⭐️⭐️⭐️</option>
          <option value="5"> ⭐️⭐️⭐️⭐️⭐️</option>
        </select>
        <label>Tell your friends a little bit about it:</label>
        <input type="text" placeholder="review" {...register("review", {required: true, maxLength: 500})} />

        <input type="submit" />
      </form>
    );
}

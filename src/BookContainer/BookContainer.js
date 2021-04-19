import React from 'react';
import { Card } from '../Card/Card'

export const BookContainer = ({ data }) => {
    const books = data.map((book, i) => <Card key={i} book={book}/>)
    return (
        <section className="bookContainer">
            {books}
        </section>
    )
}

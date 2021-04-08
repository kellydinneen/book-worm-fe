import React from 'react';
import { Card } from '../Card/Card'

export const BookContainer = ({ data }) => {
    const books = data.map(book => <Card book={book}/>)
    return (
        <section>
            {books}
        </section>
    )
}
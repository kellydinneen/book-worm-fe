
export const checkResponse = (response) => {
  if (response.ok) {
  return response.json();
 }
  throw response;
}

export const postBook = async (title, pages, author, id) => {
  const book = {
    student_id: id,
    book: {
      title: title,
      author: author,
      pages: pages
    }
  }

  const response = await fetch('https://book-worm-be.herokuapp.com/api/v1/student_books', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(book)
  })
    return checkResponse(response)
}

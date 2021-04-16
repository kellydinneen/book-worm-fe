export const checkResponse = (response) => {
  if (response.ok) {
  return response.json();
 }
  throw response;
}

export const getBooks = async(title, author) => {
  const allBooks = await fetch(`https://book-worm-be.herokuapp.com/api/v1/books?title=${title}&author=${author}`)
  return checkResponse(allBooks)
}

export const getCurrentBooks = async() => {
  const currentStudentBooks = await fetch('https://book-worm-be.herokuapp.com/api/v1/students/books?id=1')
  return checkResponse(currentStudentBooks)
}

export const postBook = async(book) => {
  const response = await fetch('https://book-worm-be.herokuapp.com/api/v1/student_books', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(book)
  })
    return checkResponse(response)
}

export const checkResponse = (response) => {
  if (response.ok) {
  return response.json();
 }
  throw response;
}

export const getStudentProfile = async(email, name) => {
  const student = await fetch(`https://book-worm-be.herokuapp.com/api/v1/students/login?email=${email}&name=${name}`)
  return checkResponse(student)
}

export const getBooks = async(title, author) => {
  const allBooks = await fetch(`https://book-worm-be.herokuapp.com/api/v1/books?title=${title}&author=${author}`)
  return checkResponse(allBooks)
}

export const getBookMarks = async(studentId, bookId) => {
  const bookMarks = await fetch(`https://book-worm-be.herokuapp.com/api/v1/students/bookmarks?student_id=${studentId}&book_id=${bookId}`)
  return checkResponse(bookMarks);
}

export const getCurrentBooks = async(studentId) => {
  const currentStudentBooks = await fetch(`https://book-worm-be.herokuapp.com/api/v1/students/books?id=${studentId}&status=reading`)
    return checkResponse(currentStudentBooks)
}

export const getFinishedBooks = async(studentId) => {
  const finishedBooks = await fetch(`https://book-worm-be.herokuapp.com/api/v1/students/books?id=${studentId}&status=finished`)
    return checkResponse(finishedBooks)
}

export const postBook = async(book) => {
  const response = await fetch('https://book-worm-be.herokuapp.com/api/v1/student_books', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(book)
  })
    return checkResponse(response)
}

export const postBookMark = async(bookMark) => {
  const response = await fetch('https://book-worm-be.herokuapp.com/api/v1/bookmarks', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(bookMark)
  })
    return checkResponse(response)
}

export const markBookFinished = async(bookReview, studentId) => {
  const response = await fetch(`https://book-worm-be.herokuapp.com/api/v1/student_books/1?student_id=${studentId}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(bookReview)
  })
    return checkResponse(response)
}

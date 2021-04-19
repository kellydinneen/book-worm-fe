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

export const getBookMarks = async() => {
  const bookMarks = await fetch('https://book-worm-be.herokuapp.com/api/v1/students/bookmarks?id=1')
  return checkResponse(bookMarks)
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

export const postBookMark = async(bookMark) => {
  const response = await fetch('https://book-worm-be.herokuapp.com/api/v1/bookmarks', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(bookMark)
  })
    return checkResponse(response)
}

export const markBookFinished = async(bookReview) => {
  const response = await fetch(`https://book-worm-be.herokuapp.com/api/v1/student_books/?id=${bookReview.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(bookReview)
  })
    return checkResponse(response)
}

export const postSubscription = async(serviceWorkerRegistration) => {
  const subscription = await serviceWorkerRegistration.pushManager.getSubscription();
  const response = await fetch(`http://localhost:3001/api/v1/subscriptions`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ subscription: subscription.toJSON(), message: "You clicked a button!" })
  })
    console.log(checkResponse(response));
}
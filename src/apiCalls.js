// export const postBook = async(title, pages, author, id) => {
//   const book = {
//     student_id: id,
//     book: {
//       title: title,
//       author: author,
//       pages: parseInt(pages)
//     }
//   }
//   console.log(book);
//   try {
//     const result = await fetch('https://book-worm-be.herokuapp.com/api/v1/student_books', {
//       method: 'POST',
//       header: {'Content-Type': 'application/json'},
//       body: JSON.stringify(book)
//     })
//     return result;
//   }
//   catch (err) {
//     return err;
//   }
// }

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
  const bookToPost = JSON.stringify(book);
  console.log(bookToPost)
  const response = await fetch('https://book-worm-be.herokuapp.com/api/v1/student_books', {
    method: 'POST',
    header: {'Content-Type': 'application/json'},
    body: bookToPost
  })
    return checkResponse(response)
}

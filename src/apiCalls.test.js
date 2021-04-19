import toJson from "enzyme-to-json";
import { getBooks, getBookMarks, getCurrentBooks, postBook, postBookMark, markBookFinished } from './apiCalls';

test('book search results', async () => {
  const data = await getBooks(`https://book-worm-be.herokuapp.com/api/v1/books?title=harry%20potter%20and%20the%20chamber%20of%20secrets&author=rowling`);
  expect(data.data).toContain({
    id: null,
    type: "book",
    attributes:{
      title:"Harry Potter and the Chamber of Secrets",
      author:"J.K. Rowling",
      isbn:"1781100500",
      pages:341,
      image:"http://books.google.com/books/content?id=5iTebBW-w7QC\u0026printsec=frontcover\u0026img=1\u0026zoom=1\u0026edge=curl\u0026source=gbs_api"
    }
  });
});

test('the fetch fails because of bad search terms', async () => {
  expect.assertions(1);
  try {
    await getBooks('https://book-worm-be.herokuapp.com/api/v1/books?title=kjhkjhgkshkhg&author=jnkjngkjnkjndf');
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('the fetch fails because both search terms are missing', async () => {
  expect.assertions(1);
  try {
    await getBooks('https://book-worm-be.herokuapp.com/api/v1/books?title=&author=');
  } catch (e) {
    expect(e).toMatch('error');
  }
});
test('the fetch fails because on search term is missing', async () => {
  expect.assertions(1);
  try {
    await getBooks('https://book-worm-be.herokuapp.com/api/v1/books?title=harry');
  } catch (e) {
    expect(e).toMatch('error');
  }
});

import React, { useState, useEffect } from 'react';
import mountainImg from '../assets/mountain.svg';
import treesImg from '../assets/trees.svg'
import sandhillImg from '../assets/sandhill.svg';
import sandcastleImg from '../assets/sandcastle.svg';
import topsoilImg from '../assets/topsoil.svg';
import CurrentBookRainbow from '../CurrentBookRainbow/CurrentBookRainbow';
import { getCurrentBooks, getStudentProfile, getBookMarks } from '../apiCalls';
import { Redirect, Link } from 'react-router-dom';
import { gsap, CSSPlugin } from 'gsap';

gsap.registerPlugin(CSSPlugin);

export const Home = ({currentUser}) => {
    const [clickedBook, setClickedBook] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentBooks, setCurrentBooks] = useState([]);
    const [currentProgress, setCurrentProgress] = useState([]);
    const [studentId, setStudentId] = useState(null);
    const [setError] = useState(null);
    console.log("test")
    const fetchBookMarks = async (user, books) => {
      let bookProgressRatios = {};
        await Promise.all(
        books.map(async book => {
          try {
            let bookProgress = 0;
            const marksForBook = await getBookMarks(user.attributes.id, book.id);
            if (marksForBook.data.length) {
              const latestMark = await marksForBook.data.sort((a,b) => new Date(b.attributes.date) - new Date(a.attributes.date))[0];
              bookProgress = latestMark.attributes.page_number > book.attributes.pages ? 1 : latestMark.attributes.page_number / book.attributes.pages;
            }
            bookProgressRatios[book.attributes.title] = bookProgress;
            return bookProgress;
          } catch(err) {
            setError(err)
          }
        }
      )
    );
      return bookProgressRatios;
  }

    const fetchStudentProfile = async () => {
        const studentUser = await getStudentProfile(currentUser.email, currentUser.name);
        return studentUser.data;
      }

    const fetchCurrentBooks = async (user) => {
      const gotBooks = await getCurrentBooks(user.attributes.id);
      return gotBooks;
    }

    const loadHomeInfo = async() => {
      const studentInfo = await fetchStudentProfile();
      const studentBooks = await fetchCurrentBooks(studentInfo);
      const progressValues = await fetchBookMarks(studentInfo, studentBooks.data);
      setCurrentProgress(progressValues);
      setCurrentBooks(studentBooks);
      setStudentId(studentInfo.id);
      setIsLoading(false);
    }

    useEffect(() => {
      loadHomeInfo();
    }, []);

   


    return (
        <main>
          <div className='navigation-wrapper'>
          <Link to={{
            pathname: `/newbook`,
            state: { studentId: studentId }
          }}>
            <img
              className='mountain'
              src={mountainImg}
              alt='add a book button'
            />
          </Link>
            <img className='trees' src={treesImg} alt='trees'/>
            <img className='sandhill' src={sandhillImg} alt='sandhill'/>
            <img className='trees' src={treesImg} alt='trees'/>
            <Link to={{
              pathname: `/finishedbooks`,
              state: { studentId: studentId }
            }}>
              <img
                className='sandcastle'
                src={sandcastleImg}
                alt='sandcastle'
              />
            </Link>
          </div>
          <div className='topsoilContainer'>
            <h2 className='topsoilCaption'>Find your bookworms below the soil...</h2>
            <img className='topsoil' src={topsoilImg} alt='Feel the grass at the top of the earth and dig deep to find your books to start your journey.' />
          </div>
          {!isLoading &&
            <CurrentBookRainbow
              data={currentBooks}
              progressData={currentProgress}
              setClickedBook={setClickedBook}
            />
          }
          {clickedBook &&
            <Redirect
              to={{
                pathname: `/books/${clickedBook.attributes.title}`,
                state: { book: clickedBook, studentId: studentId }
              }}
            ></Redirect>
          }         
        </main>
    )
}

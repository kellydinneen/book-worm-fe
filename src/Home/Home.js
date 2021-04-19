import React, { useState, useEffect } from 'react';
import NewBookForm from '../NewBookForm/NewBookForm';
import mountainImg from '../assets/mountain.svg';
import treesImg from '../assets/trees.svg'
import sandhillImg from '../assets/sandhill.svg';
import sandcastleImg from '../assets/sandcastle.svg';
import topsoilImg from '../assets/topsoil.svg';
import CurrentBookRainbow from '../CurrentBookRainbow/CurrentBookRainbow';
import { getCurrentBooks, getStudentProfile } from '../apiCalls';
import { Redirect, Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import FinishedBook from '../Celebration/Celebration';


export const Home = ({currentUser, setCurrentUser}) => {
    const [clickedBook, setClickedBook] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentBooks, setCurrentBooks] = useState([]);
    const [studentId, setStudentId] = useState(null);

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
      setCurrentBooks(studentBooks);
      setStudentId(studentInfo.id);
      setIsLoading(false);
    }

    useEffect(() => {
      async function getInfo() {
        await loadHomeInfo();
      }
      getInfo()
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
            <img
              className='sandcastle'
              src={sandcastleImg}
              alt='sandcastle'
            />
          </div>
          <img className='topsoil' src={topsoilImg} alt='Feel the grass at the top of the earth and dig deep to find your books to start your journey.' />
          {!isLoading &&
            <CurrentBookRainbow
              data={currentBooks}
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
          <FinishedBook currentUser={currentUser} studentId={studentId}/>
        </main>
    )
}

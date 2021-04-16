import React from 'react';
import { Home } from '../Home/Home';
import { Header } from '../Header/Header'
import { Switch, Route } from 'react-router-dom';
// import { getCurrentBooks } from '../apiCalls';

const App = () => {
  // const [currentBooks, setCurrentBooks] = useState([]);
  //
  // const fetchCurrentBooks = async () => {
  //   const currentBooks = await getCurrentBooks();
  //   setCurrentBooks(currentBooks);
  //   console.log('in App Fetch', currentBooks)
  // }
  //
  // useEffect(() => {
  //   fetchCurrentBooks();
  // }, [])

  return(
    <React.Fragment>
      <Header />
      <Switch>
        <Route
          exact path='/'
          render={() => (
            <Home />
            )}
        />
      </Switch>
    </React.Fragment>
  )
}

export default App;


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LayOut from './Pages/LayOut';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import NoPage from './Pages/NoPage';
import MovieGrid from './Pages/MovieGrid';
import MovieList from './Pages/MovieList';
import MovieDetails from './Pages/MovieDetails';
import MovieTicketPlan from './Pages/MovieTicketPlan'
import MovieSeatPlan from './Pages/MovieSeatPlan';
import MovieCheckout from './Pages/MovieCheckout';
import Popcorn from './Pages/Popcorn';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayOut />}> 
            <Route index element={<Home />} />
            <Route path='/movie-grid' element={<MovieGrid />} />
            <Route path='/movie-list' element={<MovieList />} />
            <Route path='/movie-details' element={<MovieDetails />} />
            <Route path='/movie-ticket-plan' element={<MovieTicketPlan />} />
            <Route path='/movie-seat-plan' element={<MovieSeatPlan />} />
            <Route path='/movie-checkout' element={<MovieCheckout />} />
            <Route path='/popcorn' element={<Popcorn />} />
          </Route>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

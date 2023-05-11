import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Form from './components/Form';
import MovieItem from './components/MovieItem';

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={ <Home /> } key="/" />
            <Route exact path="/home" element={ <Home /> } key="home" />
            <Route exact path="/trending" element={ <Home /> } key="trending" />
            <Route exact path="/moviedetails" element={ <MovieItem /> } key="moviedetails" />
            <Route exact path="/booking" element={ <Form /> } key="booking" />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

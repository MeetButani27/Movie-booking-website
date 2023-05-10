import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={ <Home /> } key="/" />
            <Route exact path="/home" element={ <Home /> } key="home" />
            <Route exact path="/mobiles" element={ <Home /> } key="mobiles" />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

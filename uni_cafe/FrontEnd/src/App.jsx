import Home from './pages/Home';
import Menu from './pages/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import Table from './pages/Table';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
// import Loading from './pages/Loading';
// import { useEffect, useState } from 'react';
import SeatAvailability from './pages/SeatAvailability';
// import Hamburger from './components/Hamburger';

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000)
  // }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/> }/>
        <Route path="/availability" element={<SeatAvailability/> }/>
        <Route path="/contact" element={<Contact/> }/>
        <Route path="/about" element={<About/> }/>
        <Route path="/table" element={<Table/> }/>
        <Route path="/signup" element={<SignUp/> }/>
        <Route path="/login" element={<LogIn/> }/>
      </Routes>
    </Router>
  );
}

export default App;
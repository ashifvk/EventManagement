// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './Components/HOME/Home';
import Navbar from './Components/NAVBAR/Navbar';
import Maincards from './Components/CARDS/Maincards';
import Carousel from './Components/Carousel/Carousel';
import Booking from './Components/BOOKING/Booking';
import Blog from './Components/BLOG/Blog';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/nav' element={<Navbar />}/>
        <Route path='/card' element={<Maincards />}/>
        <Route path='/carousel' element={<Carousel />}/>
        <Route path='/booking' element={<Booking />}/>
        <Route path='/blog' element={<Blog />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

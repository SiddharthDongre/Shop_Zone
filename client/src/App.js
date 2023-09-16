// import logo from './logo.svg';
import './App.css';

import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar.js';
import Home from './Components/Home/Home.js';
import Footer1 from './Components/Footer/Footer_1/Footer_1';
import Footer2 from './Components/Footer/Footer_2/Footer_2';
import Footer3 from './Components/Footer/Footer_3/Footer_3';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
      </Routes>
      <Footer1 />
      <Footer2 />
      <Footer3 />
    </Router>
    </>
  );
}

export default App;

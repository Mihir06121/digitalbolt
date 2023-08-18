import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar'
import Routes from "./Routes";
import './App.css'
import AOS from 'aos'
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  
  return (
    <Router>
      <GoToTop/>
      <Navbar>
        <Routes />
        <Footer/>
      </Navbar>
    </Router>
  );
}

export default App;
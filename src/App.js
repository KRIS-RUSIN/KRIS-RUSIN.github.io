import React from 'react';
import './css/./App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<Home/>} />
          <Route path='/pages/about' element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

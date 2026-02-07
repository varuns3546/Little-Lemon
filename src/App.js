
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen.js';
function App() {
  return (  
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/reserve' element={<BookingScreen />} />
      </Routes>
    </Router>

  );
}

export default App;
 
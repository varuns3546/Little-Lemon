
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ReserveScreen from './screens/ReserveScreen.js';
function App() {
  return (  
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/reserve' element={<ReserveScreen />} />
      </Routes>
    </Router>

  );
}

export default App;
 
import React from 'react'

import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './component1/Login';
import Signup from './component1/Signup';
import Home from './Homepage/Home';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;

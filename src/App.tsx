import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Main from '../src/container/main';
import City from '../src/container/city';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/city' element={<City />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

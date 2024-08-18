import React, {useState, createContext, useContext} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Main from '../src/container/main';
import City from '../src/container/city';

export const WeatherContext = createContext<any>(null);

function App() {
  const [city, setCity] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  return (
    <WeatherContext.Provider value={{ city, setCity, weatherData, setWeatherData }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/city' element={<City />} />
        </Routes>
      </BrowserRouter>
    </WeatherContext.Provider>
  );
}
export default App;

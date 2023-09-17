import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Movie from "./components/Movie";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
    
    <Route Component={App} exact path='/'></Route>
    <Route Component={Movie} path='/movie'></Route>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);


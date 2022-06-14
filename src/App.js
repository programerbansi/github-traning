import logo from './logo.svg';
import './App.css';
import Header from './js_files/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './js_files/Product';
import { useState } from 'react';
import Show from './js_files/Show';
import Home from './js_files/Home';
import { Routes, Route,useRoutes } from "react-router-dom"
import CartContext from './js_files/CartContext';
import Login from './js_files/Login';
function App() {
  let element = useRoutes([
    {path: '/', element: <Home />},
    {path: '/show', element: <Home/>},
    {path: '/Login', element: <Home/>},
  ]);

  return element;
  
}

export default App;

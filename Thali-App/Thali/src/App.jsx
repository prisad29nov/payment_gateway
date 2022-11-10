
import React,{ useState } from 'react'

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Cart from './components/Cart';
import {CartProvider} from 'react-use-cart'
import { Routes,Route,Link } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      
      <CartProvider>
      <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Cart" element={<Cart />}/>
        

      
   
    </Routes>
     
      </CartProvider>
     
    </div>
  )
}

export default App


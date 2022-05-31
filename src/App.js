import './App.css';
import axios from 'axios'
import React from 'react'
import Card from './components/Card';
import Topbanner from './components/Topbanner';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Lipsticks from './components/Lipsticks';
import Bronzer from './components/Bronzer';
import NailPaint from './components/NailPaint';
import AboutUs from './components/AboutUs';
import Faq from './components/Faq';

function App() {
 return(
   <>
     <Topbanner/>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}  ></Route>
        <Route path="/products" element={<Products/>} ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
        <Route path='/lipsticks' element={<Lipsticks/>}></Route>
        <Route path='/bronzer' element={<Bronzer/>} ></Route>
        <Route path='/nail_paint' element={<NailPaint/>} ></Route>
        <Route path='/about' element={<AboutUs/>} ></Route>
        <Route path='/faq' element={<Faq/>} ></Route>
      </Routes>
      <Footer/>
   </>
 )
}

export default App;

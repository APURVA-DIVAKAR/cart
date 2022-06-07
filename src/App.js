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
import ProductDetails from './components/ProductDetails';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';

function App() {
 return(
   <>
     <Topbanner/>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}  ></Route>
        <Route path="/products" element={<Products/>} ></Route>
        <Route path='/shoppingcart' element={
            <PrivateRoute>
            <Cart/>
            </PrivateRoute>}>
        </Route>
        <Route path='/lipsticks' element={<Lipsticks/>}></Route>
        <Route path='/bronzer' element={<Bronzer/>} ></Route>
        <Route path='/nail_paint' element={<NailPaint/>} ></Route>
        <Route path='/about' element={<AboutUs/>} ></Route>
        <Route path='/faq' element={<Faq/>} ></Route>
        <Route path='/products/:id' element={<ProductDetails/>}></Route>
        <Route path='/login' element={< Login/>}></Route>
      </Routes>
      <Footer/>
   </>
 )
}

export default App;

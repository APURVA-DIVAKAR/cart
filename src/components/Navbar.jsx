import React from 'react'
import { Link } from 'react-router-dom'
import {BsCartFill} from'react-icons/bs'

const Navbar = () => {
  let iconStyles = { color: "white", fontSize: "1.5em" };
  return (
    <div style={{width:'100%',backgroundColor:'skyblue',color:'white' , display:'flex',justifyContent: 'space-around',gap:'20px', marginTop:'5px'}}>
        <Link to='/' style={{textDecoration:'none' , color:'white'}}>Home</Link>
        <Link to='/products' style={{textDecoration:'none' , color:'white'}}>Products</Link>
        <Link to='/lipsticks' style={{textDecoration:'none' , color:'white'}}>Lipsticks</Link>
        <Link to='/bronzer' style={{textDecoration:'none' , color:'white'}}>Bronzer</Link>
        <Link to='/nail_paint' style={{textDecoration:'none' , color:'white'}}>NailPaint</Link>
        <Link to='/about' style={{textDecoration:'none' , color:'white'}}>About Us</Link>
        <Link to='/faq' style={{textDecoration:'none' , color:'white'}}>FAQ</Link>
        <Link to='/shoppingcart'>< BsCartFill style={iconStyles} /></Link> 
        </div>
  )
}

export default Navbar
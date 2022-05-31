import React from 'react'
import { AiFillFacebook,AiFillInstagram,AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer style={{ backgroundColor:'skyblue',fontSize:'60px' }}>
       <div style={{margin:'40%'}}>
       <AiFillFacebook style={{fontSize:'60px',color:'darkblue' }}/>
        <AiFillInstagram style={{color:'#bc2a8d'}}/>
        <AiFillTwitterSquare style={{color:'blue'}}/>
       </div>
    </footer>
  )
}

export default Footer
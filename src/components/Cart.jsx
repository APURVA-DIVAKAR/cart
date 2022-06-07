import React,{useContext} from 'react'
import {AuthContext} from './AuthContext'
import { CartContext } from './CartContext'

const Cart = () => {
  const [setAuth,isAuth,handleSignout] = useContext(AuthContext)
  const [cart] = useContext(CartContext)
  console.log(cart)
  console.log(isAuth)
  const handle=()=>(
    handleSignout())
  return (
    <>
    <div style={{width:'20%',margin:"auto", padding:'8px' }}>
      <button style={{width:'60%',margin:"auto", padding:'8px' ,backgroundColor:'skyblue',color:'white',border:'none'}}  onClick={handle}>Sign out</button>
    </div>
    <div>
       {cart?.map((el)=>{
         return (
           <div style={{display:'flex',gap:'20px',justifyContent:'center'}} key={el.id}>
             <img style={{ height:'200px',width:'200px' }} src={el.api_featured_image} alt="" />
             <div>
               <h4>{el.name}</h4>
               <h5>${el.price}</h5>
               <h6>{el.category}</h6>
             </div>
           </div>
         )
       })}
    </div>
    </>
  )
}

export default Cart
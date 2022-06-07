import React,{useContext} from 'react'
import {AuthContext} from './AuthContext'

const Cart = () => {
  const {handleSignout} = useContext(AuthContext)
  return (
    <div>
      <button onClick={handleSignout}>Sign out</button>
    </div>
  )
}

export default Cart
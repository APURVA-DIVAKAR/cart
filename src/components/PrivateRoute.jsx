import React,{useContext} from 'react'
import { Navigate } from 'react-router-dom'
import  {AuthContext} from './AuthContext'

const PrivateRoute = ({children}) => {
    const{isAuth} =useContext(AuthContext)
    if(isAuth) {
        return children
    }
  return (
     <Navigate to='/login'/>
  )
}

export default PrivateRoute
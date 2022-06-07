import React,{ useContext} from 'react'
import {AuthContext} from './AuthContext'

const Login = () => {
    const[email,setEmail] = React.useState("")
    const[password,setPassword] = React.useState("")
    const{handleSignin}=useContext(AuthContext)
  
    const handleSubmit =(e)=>{
        e.pereventDefault();
        handleSignin({email,password})
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">Log In</button>
        </form>
    </div>
  )
}

export default Login
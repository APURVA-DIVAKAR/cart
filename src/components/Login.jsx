import React,{ useContext} from 'react'
import {AuthContext} from './AuthContext'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const[email,setEmail] = React.useState("")
    const[password,setPassword] = React.useState("")
    const [isAuth,setAuth] =useContext(AuthContext)
    const navigate = useNavigate()
   console.log(isAuth)
    const handleSubmit =()=>{
        // e.pereventDefaul handleSignin()

        setAuth(true);
        navigate('/shoppingcart')
    }
  return (
    <div style={{width:'40%',margin:'auto',marginTop:'30px'}}>
        {/* <form onSubmit={handleSubmit}>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">Log In</button>
        </form> */}
        <button style={{width:'20%',margin:"auto", padding:'8px' ,backgroundColor:'skyblue',color:'white',border:'none'}}  onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
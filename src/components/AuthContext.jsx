import {createContext,useState} from 'react';
import {useNavigate} from 'react-router-dom'

export const AuthContext = createContext();
export const AuthContextProvider = ({children})=>{
    const[isAuth,setAuth] = useState(false)
    const navigate= useNavigate()
    const handleSignin =({email,password})=>{
        if(email==="admin"&&password==="admin"){
            setAuth(true)
            navigate('/shoppingcart')
            console.log(isAuth)
        }
        else{
            alert("Wrong password!!")
        }
    }
    const handleSignout =()=>{
        setAuth(false)
    }
    return (
    <AuthContext.Provider value={[isAuth,setAuth,handleSignin,handleSignout]}>{children}</AuthContext.Provider>
    )
}
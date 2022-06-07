import {createContext,useState} from 'react';

export const CartContext = createContext();
export const CartContextProvider = ({children})=>{
    const[cart,setCart] = useState([])    
    const handleCart =(payload)=>{
        setCart(...cart,
            payload
            )
    }
    return (
    <CartContext.Provider value={[cart,handleCart]}>{children}</CartContext.Provider>
    )
}
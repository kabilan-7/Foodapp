import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{

    const [cartItems,setCartItems]=useState({})
    const addtoCart=(ItemId)=>{
        if(!cartItems[ItemId]){
            setCartItems((prev)=>({...prev,[ItemId]:1}))
        }else{
            setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
        }
    }
    const removefromCart=(ItemId)=>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
    }
    useEffect(()=>{
     console.log(cartItems);
    },[cartItems])
    const contextvalue={
     food_list,
     cartItems,
     setCartItems,
      addtoCart,
      removefromCart
    }
   return(
    <StoreContext.Provider value={contextvalue}>
        {props.children}
    </StoreContext.Provider>
   )
}
export default StoreContextProvider
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
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
            let itemInfo=food_list.find(product=> product._id===item)
            totalAmount+=itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }
    useEffect(()=>{
     console.log(cartItems);
    },[cartItems])
    const contextvalue={
     food_list,
     cartItems,
     setCartItems,
      addtoCart,
      removefromCart,
      getTotalCartAmount
    }
   return(
    <StoreContext.Provider value={contextvalue}>
        {props.children}
    </StoreContext.Provider>
   )
}
export default StoreContextProvider
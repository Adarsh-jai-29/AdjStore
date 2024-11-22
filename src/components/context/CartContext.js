import { createContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";
export const CartContext = createContext()

const InitialState = {
  cartData :[],
  totalItems : '',
  totalAmount : '',
  shippingFee : 5000,
}

export const CartProvider = ({children})=>{
  
 const [state,dispatch] = useReducer(reducer,InitialState)

 const addToCart = (amount,product)=>{
    console.log(amount)
    console.log(product)
 
return dispatch({type:'add to cart',payload:{product,amount}})
 }
 const removeItem = (id)=>{
  console.log(id)
  return  dispatch({type:'remove cart item', payload : id})}


 return <CartContext.Provider value={{...state,addToCart,removeItem}} >{children}</CartContext.Provider>
}

import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";
export const CartContext = createContext();

const getCartData = function() {
 const myStoredCartData = localStorage.getItem("myCartData")
  if (myStoredCartData){
    console.log(myStoredCartData)
   return JSON.parse(myStoredCartData)
  }
  else{
 return []
  }

}

const InitialState = {
  cartData: getCartData(),
  totalItems: "",
  totalAmount: "",
  shippingFee: 5000,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  const addToCart = (amount, product) => {
    console.log(amount);
    console.log(product);
    dispatch({ type: "add to cart", payload: { product, amount } });
  };
  const removeItem = (id) => {
    console.log(id);
    return dispatch({ type: "remove cart item", payload: id });
  };

  const clearCart = () => dispatch({ type: "clear cart all items" });
  useEffect(
    () => localStorage.setItem("myCartData", JSON.stringify(state.cartData)),
    [state.cartData]
  );

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    isLoading : false, 
    isError: false,
    products: [],
    featureProducts: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const API = "https://api.pujakaitem.com/api/products";
  
  const getProduct = async (data) => {
    dispatch({ type: "data_loading" });
    try {
      const res = await axios.get(data);
      const products = await res.data;
      console.log(products);

      dispatch({ type: "data_loaded", payload: products });
    } catch (error) {
      dispatch({ type: "set_error" });
    }
  };

  useEffect(() => {
    getProduct(API);
  }, []);
  return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>;
};

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
    isSingleProductLoading : false,
    singleProduct:{},

  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const API = "https://api.pujakaitem.com/api/products";
  
  const getProduct = async (url) => {
    dispatch({ type: "data_loading" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      console.log(products);

      dispatch({ type: "data_loaded", payload: products });
    } catch (error) {
      dispatch({ type: "set_error" });
    }
  };
  const getSingleProduct = async (data) => {
    dispatch({ type: "single_product_data_loading" });
    try {
      const res = await axios.get(data);
      const product = await res.data;
      console.log(product);

      dispatch({ type: "single_product_data_loaded", payload: product });
    } catch (error) {
      dispatch({ type: "single_product_error" });
    }
  };

  useEffect(() => {
    getProduct(API);
  }, [])
  
  return <AppContext.Provider value={{...state,getSingleProduct,API}}>{children}</AppContext.Provider>;
};

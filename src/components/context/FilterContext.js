import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./ProductContext";
import reducer from '../reducer/filterReducer'
export const FilterContext = createContext()
 
const initialState = {
  filteredProducts : [],
  allProducts : [],
  gridView : true,
  
}

export const FilterProvider = ({children})=>{

 const [state,dispatch] = useReducer(reducer,initialState)

const setGridView = ()=>{
return  dispatch({type:'setGridView',})
}
const setListView = ()=>{
return  dispatch({type:'setListView',})
}

 const {products} = useContext(AppContext)
 useEffect(()=>{
  dispatch({type:'all products loaded', payload:products })
 },[products])
 

 console.log(products)
return <FilterContext.Provider value={{...state,setGridView,setListView}} >{children}</FilterContext.Provider>
}
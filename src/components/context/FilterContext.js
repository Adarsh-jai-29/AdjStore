import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./ProductContext";
import reducer from '../reducer/filterReducer'
export const FilterContext = createContext()
 
const initialState = {
  filteredProducts : [],
  allProducts : [],
  gridView : true,
  sortValue : 'lowest',
  filters : {
  text:'',
  category:'All',
  company:'All',
  price : 0,
  minPrice : 0,
  maxPrice : 500000,
  }
}

export const FilterProvider = ({children})=>{

 const [state,dispatch] = useReducer(reducer,initialState)
const setGridView = ()=>{
return  dispatch({type:'setGridView',})
}
const setListView = ()=>{
return  dispatch({type:'setListView',})
}

const sorting = ()=>{

  dispatch({type:'get sort value' ,})
  
}

 const updateFilterValue = (e)=>{
  let name = e.target.name;
  let value = e.target.value
  // console.log(value)
  return dispatch({type:'get filter value',payload : {name,value}})
 }
 
 useEffect(()=>{
   dispatch({type:'sorting products' ,})
  },[state.sortValue])
  
  const {products} = useContext(AppContext)
  useEffect(()=>{
    dispatch({type:'all products loaded', payload:[...products] })
  },[products])
  
  // console.log(products)
  useEffect(()=>{
    dispatch({type:'update all products'})
  },[state.filters,state.sortValue])
  const clearFilters = ()=>{
    return dispatch({type:'clear all filters' })
  }


return <FilterContext.Provider value={{...state,setGridView,setListView,sorting,updateFilterValue,clearFilters}} >{children}</FilterContext.Provider>
}
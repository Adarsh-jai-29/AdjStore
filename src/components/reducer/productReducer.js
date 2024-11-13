function reducer(state,action) {
if(action.type==='data_loading'){
  return({
    ...state,isLoading : true,
  })
}
if(action.type==='data_loaded'){
   const featureData = action.payload.filter((elem)=>{
    return elem.featured === true
  })
  
 return({
  ...state,products : action.payload ,featureProducts : featureData, isLoading : false,isError : true,
})

}
if(action.type==='set_error'){
  return {
    ...state,isError : true,
  }
}
if(action.type==='single_product_data_loading'){
  return({
    ...state, isSingleProductLoading : true,
  })
}
if(action.type==='single_product_data_loaded'){
  return({
    ...state, isSingleProductLoading : false,singleProduct : action.payload
  })
}

  return (

    {...state}
  )
}


export default reducer
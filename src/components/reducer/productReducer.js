import React from 'react'

function reducer(state,action) {
if(action.type=='data_loading'){
  return({
    ...state,isLoading : true,
  })
}
if(action.type=='data_loaded'){
   const featureData = action.payload.filter((elem)=>{
    return elem.featured === true
  })
  
 return({
  ...state,products : action.payload ,featureProducts : featureData, isLoading : false
})

}
if(action.type=='set_error'){
  return {
    ...state,isError : false,
  }
}

  return (

    {...state}
  )
}


export {}
export default reducer
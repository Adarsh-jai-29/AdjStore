const filterReducer = (state,action)=>{
  if(action.type == 'all products loaded'){
    return {
      ...state, allProducts:[...action.payload],
    }
  }
if(action.type == 'setGridView' ){
   return {
    ...state, gridView : true
  }
}
if(action.type == 'setListView' ){
   return {
    ...state, gridView : false
  }
}

}
export default filterReducer
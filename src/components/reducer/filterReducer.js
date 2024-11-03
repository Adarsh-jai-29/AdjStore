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

if(action.type == 'get sort value' ){
  const SelectElement = document.getElementById('sort');
 const dropdownValue = SelectElement.options[SelectElement.selectedIndex].value;
   return {
    ...state, sortValue : dropdownValue
  }
}

  if(action.type == 'sorting products' ){
 let sortProducts;
 const {allProducts} = state
  const allProductCopy =  [...allProducts]
//  console.log(allProducts)

  const a = (a,b)=>{
    if (state.sortValue == 'lowest'){
  return a.price - b.price
    }
    if (state.sortValue == 'highest'){
  return b.price - a.price
    }
    if (state.sortValue == 'a-z'){
  return a.name.localeCompare(b.name)
    }
    if (state.sortValue == 'z-a'){
  return b.name.localeCompare(a.name)
    }
  }
  sortProducts = allProductCopy.sort(a)
 

  return{
    ...state, allProducts : sortProducts,
  }
  }
  
}




export default filterReducer
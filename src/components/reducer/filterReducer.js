const filterReducer = (state,action)=>{

  if(action.type == 'all products loaded'){
    const priceArray = action.payload.map((elem)=>
      elem.price
      )
      console.log(priceArray)
      // console.log(Math.max.apply(Math,priceArray))

   const maxPrice = priceArray.reduce(
        (prevVal,curVal)=>
          Math.max(prevVal,curVal)
        ,0)
        console.log(maxPrice)

    return {
      ...state, allProducts:[...action.payload], filteredProducts:[...action.payload],filters:{...state.filters,maxPrice:maxPrice,price:maxPrice}
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
 const {filteredProducts} = state
  const filteredProductsCopy = [...filteredProducts]

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
  sortProducts = filteredProductsCopy.sort(a)
 
  return{
    ...state, allProducts : sortProducts,
  }
  }

  if(action.type == 'get filter value' )
  {
 let {name,value} = action.payload 
  return {...state,filters:{...state.filters,[name]:value}}
  }

  if(action.type == 'update all products' )
  {
    const {filteredProducts} = state
    let filteredProductsCopy = [...filteredProducts]
    if(state.filters.text){
      filteredProductsCopy = filteredProductsCopy.filter((elem)=>{
     return elem.name.toLowerCase().includes(state.filters.text)
    })
  }

  // Category filter
    if(state.filters.category !='All'){
      filteredProductsCopy = filteredProductsCopy.filter((elem)=>{
     return elem.category === state.filters.category
    })
  }
  // Company filter
    if(state.filters.company !='All'){
      filteredProductsCopy = filteredProductsCopy.filter((elem)=>{
     return elem.company === state.filters.company
    })
  }
   // Price filter  
   if(state.filters.price){
    const {filteredProducts} = state
  const a = filteredProducts.filter(elem => elem.price <= state.filters.price)
   return {...state,allProducts:a}
  }
  
 return {
...state,
allProducts : filteredProductsCopy,

 }

  }
}




export default filterReducer
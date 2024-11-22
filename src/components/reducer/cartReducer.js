 const cartReducer = (state,action)=>{
  switch(action.type){
  case 'add to cart':
  console.log(action.payload)
 const {product:{name,price,image,stock,id},amount} = action.payload
 let cartProductData = {
   amount ,
   name,
   price,
   id,
  image : image[0].url,
  stock,
  }
  // console.log(cartProductData)

return {
  ...state,
  cartData : [...state.cartData,cartProductData]
};
case 'remove cart item' :
const revisedCartData = state.cartData.filter((elem)=>{
      return elem.id !== action.payload
    })
    // console.log(revisedCartData)
return {
  ...state,
  cartData: [...revisedCartData], 
};

default : return state
}


}
export default cartReducer
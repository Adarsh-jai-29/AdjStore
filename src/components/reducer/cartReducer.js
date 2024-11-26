const cartReducer = (state, action) => {
  switch (action.type) {
    case "add to cart":
      const {
        product: { name, price, image, stock, id },
        amount,
      } = action.payload;
      const existingProduct = state.cartData.find(
        (elem) => elem.id === id + name
      );
      if (existingProduct) {
        let updatedProduct = state.cartData.map((elem) => {
          if (elem.id === id + name) {
            let newAmount = elem.amount + amount;
          if(newAmount >= stock){
           newAmount = stock
          }
            return {
              ...elem,
              amount: newAmount,
          }
        }
          else{
            return elem
          }
        });
        return {
          ...state,
          cartData: [...updatedProduct],
        };
      } else {
        let cartProductData = {
          amount,
          name,
          price,
          id: id + name,
          image: image[0].url,
          stock,
        };

        // console.log(cartProductData)
        return {
          ...state,
          cartData: [...state.cartData, cartProductData],
        };
      }
    case 'set decrement':
  let updatedProduct = state.cartData.map(elem=>{
    if (elem.id === action.payload ){
      let decAmount = elem.amount - 1
      if(decAmount<=1){
        decAmount = 1
      }
      return {
        ...elem,
        amount: decAmount
      }
    }else{
      return elem
    }
  });
  return {
    ...state,
    cartData: updatedProduct, // Return the updated cart
  };

  case "set increment":
    const incrementedCart = state.cartData.map((elem) => {
      if (elem.id === action.payload) {
        let incAmount = elem.amount + 1;
        if (incAmount > elem.stock) {
          incAmount = elem.stock; // Limit increment to stock availability
        }
        return {
          ...elem,
          amount: incAmount,
        };
      }
      return elem; // Ensure the rest of the cart remains untouched
    });
    return {
      ...state,
      cartData: incrementedCart, // Return the updated cart
    };
  
    case "remove cart item":
      const revisedCartData = state.cartData.filter((elem) => {
        return elem.id !== action.payload;
      });
      // console.log(revisedCartData)
      return {
        ...state,
        cartData: [...revisedCartData],
      };

    case "clear cart all items":
      return {
        ...state,
        cartData: [],
      };

      case 'Cart total items' :
    const totalItem =  state.cartData.reduce((accum,curVal)=>
       accum+curVal.amount
        ,0
       )
    return{
      ...state,
      totalQuantity : totalItem,
    }


    default:
      return state;
  }
};
export default cartReducer;

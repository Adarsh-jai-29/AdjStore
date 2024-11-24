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
    default:
      return state;
  }
};
export default cartReducer;

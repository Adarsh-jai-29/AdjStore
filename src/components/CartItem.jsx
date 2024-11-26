import React, { useContext } from 'react'
import { FaTrash } from 'react-icons/fa'
import CartAmountToggle from './CartAmountToggle';
import { CartContext } from './context/CartContext';

function CartItem({ id, name, image, price, amount }) {
  const { removeItem } = useContext(CartContext);
    // const setDecrease = () => {
    //   // amount > 1 ? setQuantity(amount - 1) : setAmount(1);
    // };
  
    // const[quantity,setQuantity] = useState(amount)

    // const setIncrease = () => {
    //   // amount < stock ? setAmount(amount + 1) : setAmount(stock);
    //   quantity < amount ? setQuantity(amount + 1) : setQuantity(amount);
    // };
     const {setIncrease,setDecrease} = useContext(CartContext)
  return (
    <div className="cart_heading grid grid-five-column">
    <div className="cart-image--name">
      <div>
        <figure>
          <img src={image} alt={id} />
        </figure>
      </div>
      <div>
        <p>{name}</p>
       
      </div>
    </div>
    {/* price   */}
    <div className="cart-hide">
      <p>
      ₹{price}
      </p>
    </div>

    {/* Quantity  */}
    <CartAmountToggle
      amount={amount}
      setDecrease={()=>setDecrease(id)}
        setIncrease={()=>setIncrease(id)}
    />

    {/* //Subtotal */}
    <div className="cart-hide">
      <p>
        {/* <FormatPrice price={price * amount} /> */}
        ₹ {price*amount}
      </p>
    </div>

    <div>
      <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
    </div>
  </div>
  
  )
}

export default CartItem
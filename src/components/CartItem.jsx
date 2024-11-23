import React, { useContext, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import CartAmountToggle from './CartAmountToggle';
import { CartContext } from './context/CartContext';

function CartItem({ id, name, image, price, amount }) {
  const { removeItem } = useContext(CartContext);
  const setIncrease = () => (stock < amount ? setStock(stock + 1) : ""); 
  const setDecrease = () => stock -  1 > 0 ? setStock(stock - 1) : ''
  const [stock, setStock] = useState(1);
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
      amount={stock}
      setDecrease={setDecrease}
      setIncrease={setIncrease}
    />

    {/* //Subtotal */}
    <div className="cart-hide">
      <p>
        {/* <FormatPrice price={price * amount} /> */}
        ₹ {price*stock}
      </p>
    </div>

    <div>
      <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
    </div>
  </div>
  
  )
}

export default CartItem
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import CartAmountToggle from "./CartAmountToggle";
import { CartContext } from "./context/CartContext";

export const AddToCart = ({ stock,product }) => {
const {addToCart} = useContext(CartContext)

  const [amount, setAmount] = useState(1);
  const setIncrease = () => (amount < stock ? setAmount(amount + 1) : ""); // u can show error when user try to add extra  amount of item than ur stock(ie: <p>no stocks avaible</p>)
  const setDecrease = () => amount -  1 > 0 ? setAmount(amount - 1) : ''


  return (
    <Wrapper>
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart" onClick={()=>addToCart(amount,product)} >
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
// import { ProductContext } from "./context/ProductContext";

const Header = () => {
  // const[val] = useContext(ProductContext)
  // console.log(val)
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo3.webp" className="logo" alt="my logo img" />
      </NavLink>
      <Nav />
      
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 8rem;
    border-radius : 45%;
  }
`;
export default Header;

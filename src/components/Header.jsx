import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
// import { ProductContext } from "./context/ProductContext";

const Header = () => {
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0px 3px 12px rgb(174 176 178);
  .logo {
    height: 8rem;
    border-radius : 45%;
  }
`;
export default Header;

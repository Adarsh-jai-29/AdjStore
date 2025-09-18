import React, { useEffect } from "react";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import {  AppProvider } from "./components/context/ProductContext";
import {  FilterProvider } from "./components/context/FilterContext";
import { CartProvider } from "./components/context/CartContext";
import "./App.css"; 
import axios from "axios";
import { useAuth } from "./components/context/AuthContext";
import { useNavigate } from "react-router-dom";



const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)", 
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  const {authAPI, setUser} = useAuth()
  const navigate = useNavigate();

  // useEffect(()=>{
  //      const fetchProfile = async () => {
  //     try {
  //       const res = await axios.get(authAPI + "/profile/view", {
  //         withCredentials: true,
  //       });
  //       if (res && res.data?.user) {
  //         setUser(res.data.user);
  //       } else {
  //         navigate("/login");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching profile:", error);
  //       navigate("/login");
  //     }
  //   };

  //   fetchProfile();
  // }, []);

  
  return( 
  <>    
  <AppProvider>
<FilterProvider >
<CartProvider>  
  <ThemeProvider theme={theme} >
  <GlobalStyle />
  <Header />
    <Outlet />
    
    <Footer />
  </ThemeProvider>
    </CartProvider>
  </FilterProvider>
    </AppProvider>
   
     </>)
};
   
export default App;

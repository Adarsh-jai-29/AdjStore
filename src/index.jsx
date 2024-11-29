import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { ClerkProvider } from '@clerk/clerk-react'

const root = ReactDOM.createRoot(document.getElementById("root"));

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>An Error Occured </div>,
    children: [
      {
        path:'/',
        element : <Home />
      }
      ,
      {
        path:'/about',
        element: <About />
      },
      {
        path:'/products',
        element: <Products />
      },
      {
        path:'/contact',
        element: <Contact />
      },
      {
        path: '/singleProduct/:id',
        element: <SingleProduct />
      },
      {
        path:'/cart',
        element: <Cart />
      },
    ],
  },
  
]);

root.render(<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
  <RouterProvider router={router} />
</ClerkProvider>);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

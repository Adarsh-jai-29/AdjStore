import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>An Error Occurred</div>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/login", element: <Login /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products /> },
      { path: "/contact", element: <Contact /> },
      { path: "/singleProduct/:id", element: <SingleProduct /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

// Render root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

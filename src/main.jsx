import ReactDOM from "react-dom/client";
import App from "./App";
import { Route, Routes } from "react-router-dom";

// Components
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <AuthProvider>
  <BrowserRouter>
    
<Routes>
    <Route path="sign-up" element={<SignUp />} />
    <Route path="login" element={<Login />} />
    <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="products" element={<Products />} />
    <Route path="contact" element={<Contact />} />
    <Route path="singleProduct/:id" element={<SingleProduct />} />
    <Route path="cart" element={<Cart />} />

  </Route>
</Routes>
  </BrowserRouter>,
  </AuthProvider>
);

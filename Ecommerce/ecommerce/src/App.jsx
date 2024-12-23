import { useEffect, useState } from "react";

import Header from "./component/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import axios from "axios";
import { setUserLoginDetails } from "./redux/UserSlice";
import { useDispatch } from "react-redux";
import ProductDetail from "./pages/ProductDetail";
import CreateProduct from "./pages/CreateProduct";
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  let token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
        headers: {
          Authorization: `Bearer ${token}`,
          //token pani pathauna paarxa to get tyo particular user ko data
        },
      })
      .then((res) => dispatch(setUserLoginDetails(res.data)));
  }
  // }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route path="" element={<Products />} />
          <Route path="create" element={<ProtectedRoute role={"seller"} />}>
            <Route path="" element={<CreateProduct />} />
          </Route>
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="/cart" element={<ProtectedRoute role={"buyer"} />}>
          <Route path="" element={<Cart />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;

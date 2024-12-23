// import { useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PostProvider from "./components/PostProvider";

//1. Create a Context
// it returns a component so PostContent is Captital P
// const PostContext = createContext();

function App() {
  // const [users, setUsers] = useState([]);

  //now we have to pass users and setUsers so there is props drilling parent to child so we use Context API

  // useEffect(function () {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setUsers(res.data));
  // }, []);

  return (
    <BrowserRouter>
      {" "}
      {/* <PostContext.Provider
        value={
          // can also provide only  one value
          // users
          // we can also provide a object here
          {
            users,
            setUsers,
          }
        }
      > */}
      {/* here PostProvider is a component which is  same as postcontect.provider but here we dont have to give value in props we return value in our own component POstProvider  */}
      {/* and for consumer we made custom hook by which we dont have to specify the createContext variable name so looks clean */}
      <PostProvider>
        <Routes>
          {/* 2.provide value to the child components */}

          <Route path="/" element={<Homepage />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </PostProvider>
      {/* </PostContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;
//you have to export also the createContext you created

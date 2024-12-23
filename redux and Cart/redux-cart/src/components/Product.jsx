import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/cartSlice";
import { getProducts } from "../redux/productSlice";
import Navbar from "./Navbar";

function Product() {
  const dispatch = useDispatch();

  //Note: redux is basically used to handle the synchronous behaviour thatdont know how to deal with asynchronous logic
  // so to handle any asynchronous operation we use middleware called reduxthunk
  useEffect(function () {
    dispatch(getProducts());
  }, []);

  //destructuring the product object coz tes vitra data vanne array ma xa sabai products
  //data:product we used alias for data as products
  const { data: product, status } = useSelector((state) => state.product);
  console.log(product);

  function addToCart(product) {
    dispatch(add(product));
  }

  if (status === "loading") {
    return (
      <div className=" h-full ">
        <p className=" mt-[50%] text-2xl font-bold  text-center text-fuchsia-600">
          Loading....
        </p>
      </div>
    );
  }
  if (status === "error") {
    return (
      <div className=" h-full ">
        <p className=" mt-[50%] text-2xl font-bold  text-center text-fuchsia-600">
          Something went wrong!! Please try again Later
        </p>
      </div>
    );
  }

  return (
    <>
      <div>
        <Navbar />
        <h2 className="text-xl font-medium text-center my-4 text-purple-700">
          Product-DashBoard
        </h2>
      </div>
      <div className=" grid grid-cols-3 p-2 gap-4 md:grid-cols-6 ">
        {product.map((p) => (
          <div
            key={p.id}
            className=" p-3 flex flex-col justify-between text-center bg-white  rounded-md shadow-lg"
          >
            <img className="w-44 h-52 mx-auto" src={p.image}></img>
            <div className=" h-[1px] w-[50%] bg-fuchsia-500 my-4 mx-auto"></div>

            <h2 className="text-purple-400">{p.title}</h2>
            <p className="  font-bold text-fuchsia-800">NRP:{p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className=" bg-purple-500 rounded-lg p-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;

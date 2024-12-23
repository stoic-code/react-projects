import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const cartProducts = useSelector((state) => state.cart);

  console.log(cartProducts.length);

  return (
    <div className="flex justify-around p-2 bg-purple-500 text-white ">
      <h2 className=" text-purple-300 text-xl font-bold">ReduxToolkit</h2>
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">My Cart</NavLink>
      <div className="">
        <img className="w-7 absolute " src="cart.png"></img>
        <p className=" relative  top-3 left-5 ">{cartProducts.length}</p>
      </div>
    </div>
  );
}

export default Navbar;

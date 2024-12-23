// import "./index.css";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/UserSlice";
import { ToastContainer, toast } from "react-toastify";
import ProtectedComponent from "./ProtectedRoute/ProtectedComponent";

function Header() {
  const UserDetail = useSelector((state) => state.user.value);
  const CartDetail = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  //it gives pathName of current page if we use location.pathname
  const path = location.pathname;
  // console.log(location.pathname);
  function handleLogout() {
    toast.dark("Logout Successful");
    dispatch(logoutUser());
    // localStorage.removeItem("token");
    // window.location.reload();
  }
  function handleSearchBtn(e) {
    e.preventDefault();

    navigate(`/products?search_term=${e.target.searchBar.value}`);
    e.target.searchBar.value = "";
  }
  let totalCartItems = 0;
  CartDetail.map((item) => {
    totalCartItems += item?.quantity;
  });

  return (
    <>
      <ToastContainer />
      <header className=" bg-myBlue text-white ">
        <nav className="flex flex-col md:flex-row justify-between items-center py-2 container mx-auto">
          <div className="flex items-center gap-2">
            <AiOutlineMail className="inline" />{" "}
            <span>kumaritech@gmail.com</span>
            <AiOutlinePhone /> <span>1234567890</span>
          </div>
          <div className="flex items-center gap-2">
            {UserDetail?.name && <span>{UserDetail.name}</span>}
            {UserDetail ? (
              <span className="  cursor-pointer" onClick={() => handleLogout()}>
                Log Out
              </span>
            ) : (
              <NavLink to={"/login"}> Login</NavLink>
            )}
            <AiOutlineUser />
            <ProtectedComponent role={"buyer"}>
              <AiOutlineShoppingCart />
            </ProtectedComponent>
          </div>
        </nav>
      </header>
      <header>
        <nav className=" container flex flex-col md:flex-row items-center py-5 gap-4">
          <p className="text-4xl font-bold">Mampakha</p>
          <div className="flex flex-col md:flex-row gap-2 grow justify-between items-center">
            <ul className="flex gap-9">
              <li>
                <NavLink
                  to="/"
                  className={`${
                    path == "/" && "text-myPink"
                  } hover:text-myPink`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${
                    path == "/products" && "text-myPink"
                  } hover:text-myPink`}
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <ProtectedComponent role={"seller"}>
                <li>
                  <NavLink
                    className={`${
                      path == "/products/create" && "text-myPink"
                    } hover:text-myPink`}
                    to="/products/create"
                  >
                    Create Product
                  </NavLink>
                </li>
              </ProtectedComponent>

              <ProtectedComponent role={"buyer"}>
                <li>
                  <NavLink
                    to="/cart"
                    className={`${
                      path == "/cart" && "text-myPink"
                    } hover:text-myPink`}
                  >
                    <span> Cart </span>{" "}
                    <AiOutlineShoppingCart className="inline" />{" "}
                    {totalCartItems}
                  </NavLink>
                </li>
              </ProtectedComponent>
            </ul>
            <form onSubmit={(e) => handleSearchBtn(e)} className="flex  ">
              <input
                name="searchBar"
                className="border-2 border-r-0 px-2 focus:outline-none focus:border-myPink"
              />
              <button className="bg-myPink p-3 text-white ">
                <AiOutlineSearch />
              </button>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

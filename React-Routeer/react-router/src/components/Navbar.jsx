import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className=" bg-orange-400 flex justify-between gap-12 justify-center items-center">
      {/* by using the anchor tag or this method it refesh the page everytime we go no another page, we want single page application so we use Link or NAvlink instead of anchor tag */}
      {/* <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/product">Product</a>
        </li>
        <li>
          <a href="/login">login</a>
        </li>
      </ul> */}
      <Logo />
      <ul className=" flex gap-9 p-4 text-white">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">AboutUS</NavLink>
        </li>
        <li>
          <NavLink to="/login">login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

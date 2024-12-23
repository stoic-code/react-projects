import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

import imgNotFound from "../../assets/images/image-not-found.jpg";
import { Link } from "react-router-dom";
import ForbiddenComponent from "../ProtectedRoute/ProtectedComponent";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AddCartItem } from "../../redux/cartSlice";

function FeaturedProducts({ product }) {
  const dispatch = useDispatch();
  console.log(product);
  const { name, price, images } = product;

  function addToCart() {
    toast.dismiss();
    dispatch(AddCartItem(product));
    toast.dark("Added to cart");
  }
  return (
    <>
      <div className="relative flex flex-col justify-between bg-white   shadow-lg text-center mx-auto group hover:bg-myBlue hover:text-white hover:border-myBlue hover:border-[1px] ">
        <img
          alt="PRoduct photo"
          className=" aspect-square object-cover w-full h-48"
          src={images[0] ? images[0] : imgNotFound}
        ></img>
        <Link to={`/products/${product._id}`}>
          <div className="text-center mx-auto hover:bg-myBlue hover:text-white">
            <p className=" text-center group-hover:text-white my-2 text-lg font-semibold text-myPink">
              {name}
            </p>
            <p className="text-myBlue group-hover:text-white font-light text-sm">
              $ {price}
            </p>
          </div>
        </Link>
        <ForbiddenComponent role={"buyer"}>
          <span
            onClick={() => addToCart()}
            className=" cursor-pointer hidden group-hover:inline-block absolute opacity-60 p-2 top-1 left-2 bg-blue-200  rounded-full text-black"
          >
            <AiOutlineShoppingCart />
          </span>
        </ForbiddenComponent>
        <span className=" cursor-pointer hidden group-hover:inline-block absolute opacity-60 p-2 top-1 left-12 bg-blue-200  rounded-full text-black">
          <AiOutlineHeart />
        </span>
      </div>
    </>
  );
}

export default FeaturedProducts;

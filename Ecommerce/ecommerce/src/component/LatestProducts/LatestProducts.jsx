import { ToastContainer, toast } from "react-toastify";
import Chair from "../../assets/images/chair.jpg";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AddCartItem } from "../../redux/cartSlice";

function LatestProducts({ product }) {
  const { name, price, images } = product;
  // console.log(product);
  const UserDetail = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  function AddToCart() {
    toast.dismiss();
    UserDetail ? toast.success("Added to Cart") : toast.error("Login Required");
    console.log("Add to cart");
    dispatch(AddCartItem(product));
  }
  return (
    <div className="relative flex flex-col  bg-white   shadow-lg text-center mx-auto group hover:bg-myBlue hover:text-white hover:border-myBlue hover:border-[1px] ">
      <ToastContainer />
      <img className=" aspect-video  object-cover" src={images[0]}></img>
      <div className="text-center flex items-center justify-between px-4 mx-auto hover:bg-myBlue hover:text-white">
        <p className=" text-center group-hover:text-white my-2 text-lg font-semibold text-myPink">
          {name}
        </p>
        <p className="text-myBlue group-hover:text-white font-light text-sm">
          $ {price}
        </p>
      </div>
      <span
        onClick={() => AddToCart()}
        className="hidden group-hover:inline-block absolute opacity-60 p-2 top-1 left-2 bg-blue-200  rounded-full text-black"
      >
        <AiOutlineShoppingCart />
      </span>
      <span
        onClick={() => AddToCart()}
        className="hidden group-hover:inline-block absolute opacity-60 p-2 top-1 left-12 bg-blue-200  rounded-full text-black"
      >
        <AiOutlineHeart />
      </span>
    </div>
  );
}

export default LatestProducts;

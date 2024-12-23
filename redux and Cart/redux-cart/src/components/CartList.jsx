import { useSelector } from "react-redux";
import { remove } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import Navbar from "./Navbar";

function CartList() {
  const dispatch = useDispatch();
  const selectedProducts = useSelector((state) => state.cart);
  console.log(selectedProducts);

  function removeproduct(id) {
    console.log(id);
    dispatch(remove(id));
  }
  return (
    <div>
      <Navbar />
      <h2 className=" font-bold text-center text-fuchsia-700 text-2xl">
        {" "}
        Cart-List
      </h2>
      <div className="h-[1px] w-[70%] bg-fuchsia-600 mx-auto"></div>

      {selectedProducts.length !== 0 ? (
        <div className=" grid grid-cols-3 p-2 gap-4 md:grid-cols-6 ">
          {selectedProducts.map((p) => (
            <div
              key={p.id}
              className=" p-3 flex flex-col justify-between text-center bg-white  rounded-md shadow-lg"
            >
              <img className="w-44 h-52 mx-auto" src={p.image}></img>
              <div className=" h-[1px] w-[50%] bg-fuchsia-500 my-4 mx-auto"></div>

              <h2 className="text-purple-400">{p.title}</h2>
              <p className="  font-bold text-fuchsia-800">NRP:{p.price}</p>
              <button
                onClick={() => removeproduct(p.id)}
                className=" bg-purple-500 rounded-lg p-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className=" mt-[20%] h-full border-solid border-2 border-fuchsia-400 w-64 mx-auto rounded-xl p-4 shadow-fuchsia-400 shadow-xl ">
          <p className="  text-2xl font-bold  text-center text-fuchsia-600">
            Your Cart is Empty
          </p>
        </div>
      )}
    </div>
  );
}

export default CartList;

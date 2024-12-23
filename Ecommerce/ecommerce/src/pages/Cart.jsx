import { useDispatch, useSelector } from "react-redux";
import { DecreaseQuantity, IncreseQuantity } from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  console.log(cartItems);

  let subTotal = cartItems?.reduce(
    (total, item) => total + item?.price * item?.quantity,
    0
  );
  let salesTax = 0;

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-200 border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      S.No
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item, index) => (
                    <tr
                      key={item?._id}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item?.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <span
                          onClick={() => dispatch(DecreaseQuantity(item?._id))}
                          className="bg-myPink p-1 px-2 rounded-lg cursor-pointer "
                        >
                          -
                        </span>
                        {item?.quantity}{" "}
                        <span
                          onClick={() => dispatch(IncreseQuantity(item?._id))}
                          className="bg-myPink p-1 px-2 rounded-lg cursor-pointer"
                        >
                          +
                        </span>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item?.price}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item?.price * item?.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="w-full flex items-end justify-end">
                <table className=" min-w-half">
                  <tbody className="bg-gray-200 border-b">
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Subtotal:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ${subTotal}
                      </td>
                    </tr>
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Sales Tax:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        $ {salesTax}
                      </td>
                    </tr>
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Grand Total:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        $ {subTotal + salesTax}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className=" w-full flex justify-end mt-4">
                <button className="bg-myPink text-white px-4 py-2 rounded-lg">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;

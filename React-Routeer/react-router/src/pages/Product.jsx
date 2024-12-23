import Navbar from "../components/Navbar";
import Products from "../components/Products";
function Product() {
  return (
    <>
      <div>
        <Navbar />
        <h2 className=" my-2 underline text-2xl text-orange-700 font-bold text-center">
          {" "}
          Our-Products
        </h2>
      </div>
      <div>
        <Products />
      </div>
    </>
  );
}

export default Product;

import { useEffect, useState } from "react";
import LatestProducts from "./LatestProducts";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LatestFinalProd() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products/trending")
      .then((res) => setProd(res.data.data));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {prod.length == 0 && (
        <>
          <Skeleton height={200} />
          <Skeleton height={200} />
          <Skeleton height={200} />
          <Skeleton height={200} />
        </>
      )}

      {prod.map((product) => (
        <div key={product._id}>
          {prod.length == 0 && <Skeleton height={200} />}
          <LatestProducts product={product} key={product._id} />
        </div>
      ))}
      {/* <LatestProducts />
      <LatestProducts />
      <LatestProducts />
      <LatestProducts />
      <LatestProducts />
      <LatestProducts />
      <LatestProducts /> */}
    </div>
  );
}

export default LatestFinalProd;

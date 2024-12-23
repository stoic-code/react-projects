import axios from "axios";
import FeaturedProducts from "./FeaturedProducts";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

function FinalFeatured() {
  const [featuredProducts, SetFeaturedProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products/")
      .then((res) => SetFeaturedProducts(res.data.data[0].data));
  }, []);
  // console.log(featuredProducts);
  // console.log(featuredProducts.slice(0, 6)

  return (
    <div className="grid grid-cols-4 gap-4">
      {featuredProducts.length == 0 && (
        <>
          <Skeleton height={200} />
          <Skeleton height={200} />
          <Skeleton height={200} />
          <Skeleton height={200} />
          <Skeleton height={200} />
          <Skeleton height={200} />
          <Skeleton height={200} />
          <Skeleton height={200} />
        </>
      )}
      {featuredProducts.slice(0, 8).map((product) => (
        <FeaturedProducts product={product} key={product._id} />
      ))}
    </div>
  );
}

export default FinalFeatured;

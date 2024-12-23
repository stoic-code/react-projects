import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import FeaturedProducts from "../component/featuredProducts/FeaturedProducts";
import { useLocation, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import Pagination from "rc-pagination";
import NoDataImg from "../assets/images/nodata.png";

function Products() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [paginationData, setPaginationData] = useState({
    total: 0,
    page: 1,
    per_page: 25,
  });
  const navigate = useNavigate();
  const [currentSearchParams, setSearchParams] = useSearchParams();
  let params = useLocation();
  console.log(params);

  useEffect(() => {
    axios
      .get(
        `https://ecommerce-sagartmg2.vercel.app/api/products${params.search}`
      )
      .then((res) => {
        setIsFetching(false);
        setProducts(res.data.data[0].data);
        if (res.data.data[0].metadata[0]) {
          setPaginationData(res.data.data[0].metadata[0]);
        }
      });
  }, [params.search]);
  return (
    <>
      {/* bread crumb */}
      <section className="h-48 bg-blue-200 flex items-center">
        <div className="container">
          <h1 className="font-bold text-2xl">Product Title</h1>
          <h1 className="font-bold text-xl">Home/Products/Title</h1>
        </div>
      </section>
      <section className="mt-24">
        <div className="m-12 flex items-center justify-between container">
          <div>
            <p className=" text-myBlue text-3xl font-bold">
              Ecommerce Accessories & Fashion Items
            </p>
            {/* Pagination */}
            <Pagination
              total={paginationData.total}
              pageSize={paginationData.per_page}
              prevIcon="<"
              nextIcon=">"
              current={paginationData.page}
              onChange={(pgNumber) => {
                console.log(pgNumber);
                currentSearchParams.set("page", pgNumber);
                setSearchParams(currentSearchParams);
              }}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
              }
            />
            {/* <p>{showTotal}</p> */}
          </div>
          <div className="flex gap-4">
            <label htmlFor="sort">Per Page</label>
            <select
              onChange={(e) => {
                e.preventDefault();
                // navigate(`/products?per_page=${e.target.value}`);
                currentSearchParams.set("per_page", e.target.value);
                setSearchParams(currentSearchParams);
              }}
              className="border-2 border-myBlue rounded-md"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
              <option value={70}>70</option>
            </select>
            <label htmlFor="sort">Sort By</label>
            <select
              onChange={(e) => {
                e.preventDefault();
                // navigate(`/products?sort=${e.target.value}`);
                currentSearchParams.set("sort", e.target.value);
                // yo currentSearchParams le naya query thapxa but pahila ko lai replace gardaina
                setSearchParams(currentSearchParams);
              }}
              className="border-2 border-myBlue rounded-md"
            >
              <option value={"datedesc"}>Latest</option>
              <option value={"pricedesc"}>pricedesc</option>
            </select>
          </div>
        </div>

        <div className="container grid gap-3 grid-cols-1 md:grid-cols-4 ">
          <div className="bg-myPink">
            <h1>Filter section</h1>
          </div>
          <div className=" md:col-span-3 grid gap-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
            {isFetching && (
              <>
                <Skeleton height={300} />
                <Skeleton height={300} />
                <Skeleton height={300} />
                <Skeleton height={300} />
                <Skeleton height={300} />
                <Skeleton height={300} />
                <Skeleton height={300} />
                <Skeleton height={300} />
              </>
            )}
            {!isFetching && products.length === 0 && (
              <div className="flex justify-center items-center">
                <img src={NoDataImg} alt=""></img>
              </div>
            )}
            {products.map((product) => (
              <FeaturedProducts key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;

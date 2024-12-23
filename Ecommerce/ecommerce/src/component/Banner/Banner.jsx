// import Banner1 from "../assets/banner1.jpg";
// import Banner2 from "../assets/banner2.jpg";
// import Banner3 from "../assets/banner3.jpg";
import { Link } from "react-router-dom";

function Banner({ bno, title, body }) {
  // console.log(bno);
  return (
    <div className={` ${bno} h-[80vh] bg-cover bg-center flex items-center`}>
      <div className="container text-left">
        <div className="  w-2/4">
          <h1 className=" text-myPink text-4xl mb-8 font-bold">{title}</h1>
          <h2 className=" text-gray-100 font-semibold text-xs">{body}</h2>
          <button className="bg-myPink text-white px-3 py-1 mt-7 ">
            <Link to="/products">Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;

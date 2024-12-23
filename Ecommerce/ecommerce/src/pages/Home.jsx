import BannerCollection from "../component/Banner/BannerCollection";
import LatestFinalProd from "../component/LatestProducts/LatestFinalProd";
import FinalFeatured from "../component/featuredProducts/FinalFeatured";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Home() {
  return (
    <section>
      <div>
        <BannerCollection />
      </div>
      <div>
        <h2 className="text-5xl my-8 text-center font-bold text-myBlue">
          Latest Products
        </h2>
        <div className="container">
          {/* <Skeleton /> */}
          <LatestFinalProd />
        </div>
        <h2 className="text-5xl my-8 text-center font-bold text-myBlue">
          Featured Products
        </h2>
        <div className="container my-28">
          <FinalFeatured />
        </div>
      </div>
    </section>
  );
}

export default Home;

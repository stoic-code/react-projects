// import Banner1 from "../assets/banner1.jpg";
// import Banner2 from "../assets/banner2.jpg";
// import Banner3 from "../assets/banner3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Banner from "./Banner";

function BannerCollection() {
  const content = [
    {
      bno: "bg-banner-1",
      title: "Best Furniture For Your Home",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      bno: "bg-banner-2",
      title: "Best Furniture For Your Home",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      bno: "bg-banner-3",
      title: "Best Furniture For Your Home",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];
  return (
    <section>
      <Carousel showThumbs={false}>
        {content.map((item) => (
          <div key={item.bno}>
            <Banner bno={item.bno} title={item.title} body={item.body} />
          </div>
        ))}
      </Carousel>
      {/* <img src={Banner1} /> */}
    </section>
  );
}

export default BannerCollection;

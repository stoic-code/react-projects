import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import imgNotFound from "../assets/images/image-not-found.jpg";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

function ProductDetail() {
  const params = useParams();
  const [prodDetail, setProdDetail] = useState([]);

  console.log(params.id);

  useEffect(() => {
    axios
      .get(`https://ecommerce-sagartmg2.vercel.app/api/products/${params.id}`)
      .then((res) => setProdDetail(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(prodDetail);

  const { name, price, images } = prodDetail;

  return (
    <div className="container flex flex-col gap-8 ">
      <h1 className="text-xl text-myPink underline font-bold">
        Product Detail
      </h1>
      <div className="mx-40 ">
        <div></div>
        <div className="relative flex flex-col justify-between bg-white   shadow-lg text-center mx-auto group hover:bg-myBlue hover:text-white hover:border-myBlue hover:border-[1px] ">
          <img
            alt="PRoduct photo"
            className=" aspect-square object-cover  md:h-96 w-full"
            src={images ? images[0] : imgNotFound}
          ></img>

          <div className="text-center p-8 mx-aut bg-myBlue text-white">
            <p className=" capitalize text-center text-white my-2 text-lg font-semibold">
              {name}
            </p>
            <p className=" text-white font-light text-sm">$ {price}</p>
            <div className=" h-[2px] bg-myPink my-4"></div>
            <h1 className="text-xl font-bold text-left">Description</h1>
            <p className="text-sm font-extralight text-left ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              id, quis voluptatum quia odit blanditiis sit neque omnis eligendi
              eveniet laboriosam deleniti nemo voluptatibus sequi eum
              accusantium placeat molestiae provident commodi, et labore?
              Perspiciatis molestias id aliquam iste sit? Unde ipsa aspernatur
              ullam, cumque itaque assumenda dicta maiores accusamus optio ipsam
              aliquam laborum possimus laboriosam! Fuga, voluptatum! Commodi
              adipisci corporis nihil dolorem architecto aspernatur nam laborum
              eos tenetur. Iste totam beatae corrupti veniam voluptatem
              assumenda aperiam quam pariatur excepturi harum.
            </p>
          </div>

          <span className="hidden group-hover:inline-block absolute opacity-60 p-2 top-1 left-2 bg-blue-200  rounded-full text-black">
            <AiOutlineShoppingCart />
          </span>
          <span className="hidden group-hover:inline-block absolute opacity-60 p-2 top-1 left-12 bg-blue-200  rounded-full text-black">
            <AiOutlineHeart />
          </span>
        </div>{" "}
        *
      </div>
    </div>
  );
}

export default ProductDetail;

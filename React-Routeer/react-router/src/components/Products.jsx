import { usePosts } from "./PostProvider";
function Products() {
  const { products } = usePosts();

  return (
    <div className=" flex flex-wrap p-2 gap-3">
      {products.map((products) => (
        <div
          className="p-2 rounded-xl shadow-lg w-52 bg-orange-300 "
          key={products.id}
        >
          <img src={products.thumbnail}></img>
          <h2 className="text-xl font-bold text-center">{products.title}</h2>
          <p>{products.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;

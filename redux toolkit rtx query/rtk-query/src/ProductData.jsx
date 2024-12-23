import { useGetAllProductsQuery } from "./features/apiSlice";

function ProductData() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log(data.products);

  return (
    <div>
      {data.products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      ))}

      {/* {data.products.map((product) => <div key={product.id}><p>dsadas</p></div>} */}
    </div>
  );
}

export default ProductData;

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext();
function PostProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products));
  }, []);

  return (
    <PostContext.Provider value={{ products, setProducts }}>
      {children}
    </PostContext.Provider>
  );
}

function usePosts() {
  const productsdata = useContext(PostContext);
  return productsdata;
}
export default PostProvider;
export { usePosts };

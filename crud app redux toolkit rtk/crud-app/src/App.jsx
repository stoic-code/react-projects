import "./App.css";
import {
  useGetAllPostsQuery,
  useDeletePostMutation,
  useAddPostMutation,
} from "./services/apiSlice";

import { useState } from "react";

function App() {
  const [deletePost, response] = useDeletePostMutation();
  const [addPost] = useAddPostMutation();
  const [input, setinput] = useState("");

  //get all posts
  const { data, isLoading, isError, error } = useGetAllPostsQuery();
  // const mydata = useGetAllPostsQuery();

  //limited posts
  // const mydata = useGetPostByLimitQuery(5);
  // console.log(mydata);
  // const mydata = useGetPostByIdQuery(4);
  // console.log(mydata);
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>An error occured...{error.error}</h2>;

  console.log(response);
  async function deleteOnePost(id) {
    window.confirm("Are you sure you want to delete this post?");
    await deletePost(id);
  }
  const post = {
    title: input,
    body: "hero body",
  };
  function addnewpost() {
    addPost(post);
    setinput("");
  }
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button onClick={() => addnewpost}>Add</button>
      </div>
      <h1>All posts</h1>
      {data.map((post) => (
        <div
          style={{ border: "2px solid green", margin: "1rem", padding: "1rem" }}
          key={post.id}
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => deleteOnePost(post.id)}> Delete</button>
        </div>
      ))}
      <button onClick={() => addnewpost()}>Add post</button>
      {/* limited posts */}

      {/* <h1>All posts</h1>
      {mydata.data.map((post) => (
        <div
          style={{ border: "2px solid green", margin: "1rem", padding: "1rem" }}
          key={post.id}
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))} */}
    </>
  );
}

export default App;

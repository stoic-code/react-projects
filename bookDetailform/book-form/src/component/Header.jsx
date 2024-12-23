import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { bookAdded } from "../slice/bookSlice";
function Header() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  function ontitlechanged(e) {
    setTitle(e.target.value);
    e.preventDefault();
  }
  function onauthorchanged(e) {
    setAuthor(e.target.value);
    e.preventDefault();
  }
  function oncontentchanged(e) {
    setContent(e.target.value);
    e.preventDefault();
  }

  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    if (title && author && content) {
      dispatch(
        bookAdded({
          id: nanoid(),
          title,
          author,
          content,
        })
      );
    }

    setAuthor("");
    setContent("");
    setTitle("");
  }
  return (
    <form
      style={{
        border: "2px solid blue",
        marginBottom: "2rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label> Title</label>
      <input value={title} onChange={ontitlechanged} type="text"></input>
      <label> Author</label>
      <input value={author} onChange={onauthorchanged} type="text"></input>
      <label> Description</label>
      <input value={content} onChange={oncontentchanged} type="text"></input>
      <button onClick={onSubmit} type="submit">
        Submit
      </button>
    </form>
  );
}

export default Header;

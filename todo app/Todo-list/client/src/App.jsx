import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import TaskList from "./components/TaskList";
import axios from "axios";
import Footer from "./components/Footer";
const url = "http://localhost:8000/api/todos";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  console.log(list);

  useEffect(() => {
    // useEffect(()

    async function todoapi() {
      const res = await fetch("http://localhost:8000/api/todos");
      const data = await res.json();
      setList(data);
      console.log(data);
    }
    todoapi();
    // axios is made with concept of promise

    // axios.get(url).then((res) => console.log(res));
  }, [setList]);
  console.log(list);

  function handleNewItem(newItem) {
    setList((items) => [...items, newItem]);
  }

  function toggleItem(item) {
    // setList((lists) =>
    //   lists.map((item) =>
    //     item.id === id ? { ...item, completed: !item.completed } : item
    //   )
    // );

    const updatedData = { ...item, completed: !item.completed };

    // fetch("http://localhost:8000/api/todos/" + myid, {
    //   method: "PUT",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(updatedData),
    // });
    // .then((response) => response.json())
    // .then((data) => console.log(data));
    axios
      .put(`http://localhost:8000/api/todos/${item._id}`, updatedData)
      .then((res) => alert("Task Compoleted"));
    axios.get(url).then((res) => setList(res.data));
  }
  // function deleteItem() {
  //   // e.preventDefault();
  //   console.log(list);
  //   axios
  //     .delete(`http://localhost:8000/api/todos/completed`)
  //     .then((res) => alert("deleted"));

  //   axios.get(url).then((res) => setList(res.data));
  // }
  return (
    <>
      <Header
        input={input}
        setInput={setInput}
        list={list}
        handleNewItem={handleNewItem}
      />
      <TaskList setList={setList} list={list} toggleItem={toggleItem} />
      <Footer list={list} setList={setList} />
    </>
  );
}

export default App;

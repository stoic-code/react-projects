import axios from "axios";
import "../App.css";
const url = "http://localhost:8000/api/todos";
function Header({ input, setInput, list, initialState, handleNewItem }) {
  console.log(list);
  function handleList(e) {
    const newItem = {
      // id: Date.now(),
      todos: input,
      priority: false,
      completed: false,
    };

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    // axios.post(url, newItem).then((res) => console.log(res.data));
    handleNewItem(newItem);
    setInput("");
    e.preventDefault();
  }
  return (
    <div>
      <h1>Todo-List</h1>
      <form onSubmit={handleList}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter the task"
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Header;

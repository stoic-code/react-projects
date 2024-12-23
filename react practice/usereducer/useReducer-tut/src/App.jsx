import { useReducer } from "react";
import "./App.css";
function App() {
  const initialstate = {
    count: 0,
    userInput: "",
  };
  function reducer(state, action) {
    console.log(state, action);

    switch (action.type) {
      case "dec":
        return { count: state.count - 1 };
      case "inc":
        return { count: state.count + 1 };
      case "input":
        return { ...state, userInput: action.payload };
      default:
        return { ...state };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <>
      <input
        value={state.userInput}
        onChange={(e) => dispatch({ type: "input", payload: e.target.value })}
        type="text"
        placeholder="Items..."
      ></input>
      <div>
        <button onClick={() => dispatch({ type: "inc" })}>+</button>
        <h3>{state.count}</h3>
        <button onClick={() => dispatch({ type: "dec" })}> - </button>
      </div>
      <h2>{state.userInput}</h2>
    </>
  );
}

export default App;

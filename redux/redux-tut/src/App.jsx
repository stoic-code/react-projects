import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment, changeColor } from "./reducer/countSlice";
function App() {
  const dispatch = useDispatch();

  const data = useSelector((c) => {
    return c.count.value;
  });
  const colordata = useSelector((d) => {
    console.log(d.count.colorChange);
    console.log(d.count.colorChange);
    return d.count.colorChange;
  });
  console.log(colordata);
  return (
    <>
      <h1>Counter App </h1>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <p>{data}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button
          onClick={() => dispatch(changeColor())}
          style={{ backgroundColor: `${colordata ? "red" : "blue"}` }}
        >
          Change Color
        </button>
      </div>
    </>
  );
}

export default App;

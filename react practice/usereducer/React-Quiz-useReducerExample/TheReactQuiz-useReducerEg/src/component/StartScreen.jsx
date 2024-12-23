import "../App.css";
function StartScreen({ dispatch }) {
  return (
    <div>
      <h2>Welcome to The React Quiz!</h2>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="glow-on-hover"
      >
        Lets Start
      </button>
    </div>
  );
}

export default StartScreen;

import "../App.css";

function FinishedScreen({ dispatch, myquestions, points, highscore }) {
  const maxPossibleScore = myquestions.reduce(
    (total, cur) => total + cur.points,
    0
  );

  return (
    <>
      <p>
        You Scored <strong>{points}</strong> out of {maxPossibleScore}
      </p>
      <p>
        Highest Scored <strong>{highscore}</strong>!!!
      </p>
      <button
        className="lds-ellipsis mt-btn"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;

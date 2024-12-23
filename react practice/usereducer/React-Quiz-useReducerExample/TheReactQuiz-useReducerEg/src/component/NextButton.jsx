import "../App.css";
function NextButton({ dispatch, answer, index, myquestions }) {
  if (answer === null) return null;
  let numQuestions = myquestions.length;

  if (index < numQuestions - 1) {
    return (
      <div>
        <button
          className="lds-ellipsis mt-btn"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <div>
        <button
          className="lds-ellipsis mt-btn"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      </div>
    );
  }
}

export default NextButton;

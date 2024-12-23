import "../App.css";
function Option({ question, dispatch, answer }) {
  console.log(question);
  console.log(answer);
  const hasAnswered = answer !== null;
  console.log(hasAnswered);

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "space-between",
      }}
    >
      {question.options.map((option, index) => (
        <button
          disabled={answer !== null}
          key={option}
          className={`lds-ellipsis
        //    ${index === answer ? "answered" : ""}
            ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;

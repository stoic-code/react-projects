import "../App.css";
import Option from "./Option";
function Questions({ question, answer, dispatch }) {
  console.log(question.options);
  console.log(answer);
  return (
    <div>
      <h3>{question.question}</h3>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;

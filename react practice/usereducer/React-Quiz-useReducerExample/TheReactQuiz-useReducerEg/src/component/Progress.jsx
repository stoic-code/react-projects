import "../App.css";

function Progress({ index, myquestions, points }) {
  const maxPossibleScore = myquestions.reduce(
    (total, cur) => total + cur.points,
    0
  );
  const numQuestions = myquestions.length;

  return (
    <header className="status">
      <p>
        Question <strong>{index}</strong>/{numQuestions}
      </p>
      <p>
        <strong>
          {points}/{maxPossibleScore}
        </strong>
      </p>
    </header>
  );
}

export default Progress;

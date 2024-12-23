import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import { useReducer } from "react";
import { useEffect } from "react";
import Loader from "./component/Loader";
import StartScreen from "./component/StartScreen";
import Questions from "./component/Questions";
import NextButton from "./component/NextButton";
import Progress from "./component/Progress";
import FinishedScreen from "./component/FinishedScreen";
function App() {
  const initialState = {
    questions: [],
    //laoding,error,ready,active,finished,
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "dataRecieved":
        return { ...state, status: "ready", questions: action.payload };
      case "dataFailed":
        return { ...state, status: "error" };
      case "start":
        return { ...state, status: "active" };
      case "newAnswer":
        const question = state.questions.questions.at(state.index);

        return {
          ...state,
          answer: action.payload,
          points:
            action.payload === question.correctOption
              ? state.points + question.points
              : state.points,
        };
      case "nextQuestion":
        return { ...state, index: state.index + 1, answer: null };
      case "finish":
        return {
          ...state,
          status: "finished",
          highscore:
            state.points > state.highscore ? state.points : state.highscore,
        };
      case "restart":
        return { ...initialState, status: "ready", questions: state.questions };
      default:
        throw new Error("Action unknown");
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, questions, index, answer, points, highscore } = state;
  let myquestions = questions.questions;

  // let maxPossibleScore = questions.questions.reduce(
  //   (total, cur) => total + cur.points,
  //   0
  // );

  // console.log(numQuestions);

  useEffect(function () {
    fetch("./data/questions.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {/* short circuit operators */}
        {/* (if this part is true) && (this part will execute) */}
        {status === "ready" && <StartScreen dispatch={dispatch} />}
        {status === "active" && (
          <>
            <Progress
              index={index + 1}
              myquestions={myquestions}
              points={points}
            />

            <Questions
              dispatch={dispatch}
              answer={answer}
              question={questions.questions[index]}
            />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              index={index}
              myquestions={myquestions}
            />
          </>
        )}
        {status === "finished" && (
          <FinishedScreen
            myquestions={myquestions}
            points={points}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </>
  );
}

export default App;

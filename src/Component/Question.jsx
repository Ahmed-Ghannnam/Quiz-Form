import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CardQuestions from "./CardQuestions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NameAction } from "../Store/Slice/Slice";
import getQuestions from "../middelware/AsyncThunk";
import TimerDisplay from "./TImerDisplay";
import "../App.css";

function Question() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const store = useSelector((state) => state);
  const Name = store.nameslice.namedata;
  const questions = store.questionReducer.questions;
  const errorMessage = store.questionReducer.errorMessage;

  const [QuestionIndex, setQuestionIndex] = useState(0);
  const [title, settTitle] = useState("");
  const [choices, setChoices] = useState([]);
  const [correctAnswerstoDispatch, setcorrectAnswer] = useState([]);
  const [timer, setTimer] = useState(10);
  // Use useRef to maintain a mutable reference to the timer value
  const timerRef = useRef(10);
  const intervalRef = useRef(null);

  useEffect(() => {
    // make asynk thunk to avoid asynk operation
    // fetch data return promise .. cant dispatch direct after fetch so we use async thunk
    dispatch(getQuestions());
  }, [dispatch]);

  useEffect(() => {
    if (questions.length > 0) {
      if (QuestionIndex < questions.length) {
        settTitle(questions[QuestionIndex].title);
        setChoices(questions[QuestionIndex].choices);
        setcorrectAnswer((prevSelectedValues) => ({
          ...prevSelectedValues,
          [QuestionIndex]: questions[QuestionIndex].correctAnswer,
        }));
      } else {
        Navigate("/FinalResult");
      }
      console.log("tore.questionReducer.errorMessag");
    }
  }, [QuestionIndex, questions, Navigate]);

  const handleNextQuestion = () => {
    // This ensures that the timer value used in the update is the latest state value, not the initial value
    // instead of using   setQuestionIndex( prevIndex + 1);
    setQuestionIndex((prevIndex) => prevIndex + 1);

    // Reset the timer value using the mutable reference
    timerRef.current = 10;

    // Update the state with the new timer value
    setTimer(timerRef.current);

    // setTimer(10);

    dispatch(NameAction.catchCorrectAnswer(correctAnswerstoDispatch));
  };

  // used to start the timer when the component mounts and clear the interval when the component unmounts
  useEffect(() => {
    const interval = setInterval(() => {
      if (timerRef.current === 0) {
        handleNextQuestion();
      }
      console.log(timerRef.current);
      setTimer(timerRef.current);
      // Update the timer value using the mutable reference
      timerRef.current -= 1;
    }, 1000);

    // clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="head">
        <h1> Hello {Name} </h1>
      </div>{" "}
      {errorMessage && <h2 style={{ color: "red" }}>{errorMessage}</h2>}
      {questions.length > 0 && (
        <>
          <h5>
            Question No {QuestionIndex + 1} of {questions.length}
          </h5>
          <TimerDisplay timer={timer} />
          <CardQuestions
            title={title}
            choices={choices}
            QuestionIndex={QuestionIndex}
            handleNextQuestion={handleNextQuestion}
          />
        </>
      )}
    </>
  );
}

export default Question;

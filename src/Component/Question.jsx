import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardQuestions from "./CardQuestions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NameAction } from "../Store/Slice/Slice";
import getQuestions from "../middelware/AsyncThunk";
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

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  useEffect(() => {
    console.log(store.questionReducer.questions);

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
      console.log(store.questionReducer.errorMessage);
    }
  }, [QuestionIndex, store, dispatch, questions, Navigate]);

  const handlequestions = () => {
    setQuestionIndex(QuestionIndex + 1);
    dispatch(NameAction.catchCorrectAnswer(correctAnswerstoDispatch));
    console.log(correctAnswerstoDispatch);
  };
  return (
    <>
      <div className="head">
        <h1> Hello {Name} </h1>
      </div>{" "}
      {errorMessage && <h2 style={{ color: "red" }}>{errorMessage}</h2>}
      {questions.length > 0 && (
        <>
          <h5>Question No {QuestionIndex + 1} of 5</h5>
          <CardQuestions
            title={title}
            choices={choices}
            QuestionIndex={QuestionIndex}
            handlequestions={handlequestions}
          />
        </>
      )}
    </>
  );
}

export default Question;

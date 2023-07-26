// import logo from "./logo.svg";
import "./App.css";
import Formdata from "./Component/Formdata.jsx";
import Question from "./Component/Question";
import FinalResult from "./Component/FinalResult";
import Feedback from "./Component/Feedback";
import Thanks from "./Component/Thanks";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Formdata />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/FinalResult" element={<FinalResult />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Thanks" element={<Thanks />} />
      </>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

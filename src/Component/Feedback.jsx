import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
function Feedback() {
  const [feedBack, setFeedBack] = useState("");
  const emailfromStore = useSelector((state) => state.nameslice.emaildata);
  const Navigate = useNavigate();
  const submitForm = () => {
    axios
      .post("http://localhost:3004/feedBack", {
        body: feedBack,
        email: emailfromStore,
      })
      .then((response) => {
        console.log(response);
        if (feedBack) {
          Navigate("/Thanks");
        }
      });
  };
  const handleOnchange = (value) => {
    setFeedBack(value);
  };
  return (
    <>
      <div className="head">
        <h1>Feedback</h1>
      </div>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          onChange={(e) => {
            handleOnchange(e.target.value);
          }}
          name="description"
          //   value="description"
          as="textarea"
          rows={5}
          style={{ width: "400px", resize: "vertical" }}
          placeholder="Write your thoughts"
        />
        {/* {error.name === "description" && <Form.Text>form.text</Form.Text>} */}
      </Form.Group>
      <Button
        style={{ backgroundcolor: " rgb(232, 244, 255)" }}
        onClick={(e) => {
          submitForm(e.target.name, e.target.value);
        }}
        variant="primary"
      >
        Submit
      </Button>
    </>
  );
}

export default Feedback;

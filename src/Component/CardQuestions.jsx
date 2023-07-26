// Bootstrap CSS
// Bootstrap Bundle JS in index.js and css in index.css
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NameAction } from "../Store/Slice/Slice";
import Button from "react-bootstrap/Button";
import "../App.css";
import { Col, Row } from "react-bootstrap";

function CardQuestions(props) {
  const dispatch = useDispatch();
  const [selectedtoCheck, setselectedtoCheck] = useState("");
  const [SelectedValues, setSelectedValues] = useState({});

  const handleChange = (event) => {
    const { value } = event.target;
    setselectedtoCheck(value);
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [props.QuestionIndex]: value,
    }));
  };
  useEffect(() => {
    dispatch(NameAction.catchselected(SelectedValues));
    console.log(Object.values(SelectedValues));
  }, [SelectedValues, dispatch]);

  return (
    <div className="container">
      <Row className="mt-4">
        <p style={{ fontSize: "22px" }}>{props.title}</p>

        <Col className="choices" xs={12} md={12}>
          <label className="mt-3 bg-light rounded cursor-pointer">
            {" "}
            <input
              type="radio"
              name="demo" // لازم يبقى كلهم نفس النايم عشان تختار حاجه واحده بس ولازم الفاليو عشان هى اللى هتسخدمها
              className="card-input-element d-none"
              id={props.choices[0]}
              value={props.choices[0]}
              checked={selectedtoCheck === props.choices[0]}
              onChange={handleChange}
            />
            <div className="card card-body bg-light d-flex flex-row justify-content-between align-items-center">
              {props.choices[0]}
            </div>
          </label>
          <label className="mt-3 bg-light rounded cursor-pointer">
            {" "}
            <input
              type="radio"
              name="demo"
              className="card-input-element d-none"
              id={props.choices[1]}
              value={props.choices[1]}
              checked={selectedtoCheck === props.choices[1]}
              onChange={handleChange}
            />
            <div className="card card-body bg-light d-flex flex-row justify-content-between align-items-center">
              {props.choices[1]}
            </div>
          </label>
          <label className="mt-3 bg-light rounded cursor-pointer">
            {" "}
            <input
              type="radio"
              name="demo"
              className="card-input-element d-none"
              id={props.choices[2]}
              value={props.choices[2]}
              checked={selectedtoCheck === props.choices[2]}
              onChange={handleChange}
            />
            <div className="card card-body bg-light d-flex flex-row justify-content-between align-items-center">
              {props.choices[2]}
            </div>
          </label>
          <label className="mt-3 bg-light rounded cursor-pointer">
            <input
              type="radio"
              name="demo"
              className="card-input-element d-none"
              id={props.choices[3]}
              value={props.choices[3]}
              checked={selectedtoCheck === props.choices[3]}
              onChange={handleChange}
            />
            <div className="card card-body bg-light d-flex flex-row justify-content-between align-items-center">
              {props.choices[3]}
            </div>
          </label>
        </Col>
        <Col xs={12} md={12} className="smt-5 mt-2-md-4">
          <Button
            style={{
              color: "white",
              borderRadius: "4px",
              width: "150px",
              marginLeft: "500px",
              justifyContent: "center",
              backgroundcolor: " rgb(232, 244, 255)",
            }}
            onClick={props.handlequestions}
          >
            Next
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default CardQuestions;

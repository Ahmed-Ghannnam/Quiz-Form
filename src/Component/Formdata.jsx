import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { NameAction } from "../Store/Slice/Slice";
import { useDispatch } from "react-redux";
import { dataSchema } from "../Validation/validationData";
import Form from "react-bootstrap/Form";

function Formdata() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const formObj = {
    Name: "",
    Email: "",
    Error: "",
  };
  const errorObj = {
    name: "",
    errorMessage: "",
  };
  const [formData, setformData] = useState(formObj);
  const [error, setError] = useState(errorObj);

  const handlechange = (name, value) => {
    setformData((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };
  const handleError = (name, errorMessage) => {
    setError((prevstate) => ({
      ...prevstate,
      name,
      errorMessage,
    }));
  };
  const handleSubmit = (event) => {
    const Validation = dataSchema.validate(formData);
    console.log(Validation.error.details);
    const name = Validation.error.details[0].path[0];
    console.log(name);
    console.log(name === "Name");
    if (name === "Name" || name === "Email") {
      const name = Validation.error.details[0].path[0];
      const errorMessage = Validation.error.details[0].message;
      console.log(name);
      console.log(errorMessage);
      handleError(name, errorMessage);
      event.preventDefault();
    } else {
      Navigate("/Question");
    }
  };
  // const handleEmailValidation = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     setformData((prevstate) => ({
  //       ...prevstate,
  //       Error: "Invalid email address",
  //     }));
  //     console.log(!emailRegex.test(email));
  //   } else {
  //     setformData((prevstate) => ({
  //       ...prevstate,
  //       Error: "",
  //     }));
  //   }
  // };
  useEffect(() => {
    dispatch(NameAction.catchname(formData.Name));
    dispatch(NameAction.catchemail(formData.Email));
  }, [formData.Name, formData.Email, dispatch]);

  return (
    <>
      <div className="head">
        <h1> Form </h1>
      </div>
      <div className="Formdata">
        <form onSubmit={handleSubmit}>
          <label className="inputs">
            Name:
            <input
              className="inputarae"
              type="text"
              name="Name"
              placeholder="your Name"
              onChange={(e) => handlechange(e.target.name, e.target.value)}
            />
          </label>
          {error.name === "Name" && (
            <Form.Text style={{ color: "red" }}>{error.errorMessage}</Form.Text>
          )}

          <br></br>

          {/* <input type="text" {...register("name")} />
        <input type="email" {...register("email", { required: true })} />
        {errors.email && (
          <span style={{ color: "red" }}>*Email* is mandatory </span>
        )} */}
          <label className="inputs">
            Email:
            <input
              className="inputarae"
              type="text"
              name="Email"
              placeholder="example@gmail.com"
              onChange={(e) => handlechange(e.target.name, e.target.value)}
            />
          </label>
          {error.name === "Email" && (
            <Form.Text style={{ color: "red" }}>{error.errorMessage}</Form.Text>
          )}
          <br></br>
          <br></br>

          <br></br>
          <input
            type="submit"
            value="start"
            style={{
              backgroundColor: "rgb(0 207 255)",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "uppercase",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
              transition: "background-color 0.3s ease",
              cursor: "pointer",
            }}
          />
        </form>
      </div>
    </>
  );
}

export default Formdata;

import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
function Thanks() {
  const Navigate = useNavigate();
  return (
    <>
      <br></br>
      <div className="head">
        <h1>Thanks</h1>
      </div>
      <h3>Thank you for using our platform</h3>
      <br></br>
      <Button onClick={() => Navigate("/")}>Home Page</Button>
    </>
  );
}

export default Thanks;

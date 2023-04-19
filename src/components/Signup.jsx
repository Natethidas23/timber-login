import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SignupForm from "./SignupForm.jsx";

export default function SignUp() {

  return(
    <Container>
      <Row>
        <Col>
        <h1>Sign Up</h1>
          <SignupForm />
        </Col>
      </Row>
    </Container>
  )
}
import { Container, Nav } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import Body from "../components/Body";

export default function LoginPage() {
  
  return (
    <>
      <Body header="Login Page">
        <Container className="form-style container-theme">

        <LoginForm/>
        
        <p className="my-2">Need to Sign up? <Nav.Link href="/sign-up" className="d-inline"> Click Here to Sign Up</Nav.Link></p>

        </Container>
      </Body>
    </>
  )
}

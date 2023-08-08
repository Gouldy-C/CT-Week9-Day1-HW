import { Nav } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import Body from "../components/Body";

export default function LoginPage() {
  
  return (
    <>
      <Body header="Login Page">

        <LoginForm/>
        
        <p className="my-2">Need to Sign up? <Nav.Link href="/sign-up" className="d-inline"> Click Here to Sign Up</Nav.Link></p>

      </Body>
    </>
  )
}

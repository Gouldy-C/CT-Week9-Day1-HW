import { Nav } from "react-bootstrap";
import Body from "../components/Body";
import SignUpForm from "../components/SignUpForm";

export default function LoginPage() {
  return (
    <>
      <Body header="Sign Up Page">

        <SignUpForm/>
        
        <p className="my-2">Already have an account? <Nav.Link href="/login" className="d-inline"> Click Here to Login</Nav.Link></p>

      </Body>
    </>
  )
}

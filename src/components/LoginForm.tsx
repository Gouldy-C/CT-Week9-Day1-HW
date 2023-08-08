import { Form } from "react-bootstrap";
import FormSubmitButton from "./FormSubmitButton";



export default function LoginForm() {


  return (
    <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="rememberMe">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>

      <FormSubmitButton btnText="Login"/>
    </Form>
  )
}


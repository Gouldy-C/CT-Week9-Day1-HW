import { Container, Nav, Stack } from "react-bootstrap";

export default function FooterComp() {
  return (
    <Container fluid className="mt-auto py-3 bg-dark rounded-4 rounded-bottom-0">

    
    <div className="d-flex">
      <Container className="form-style">
        <h5 className="fs-4">D&D Helper</h5>
        <Stack direction="horizontal">
          <ul className="list-unstyled mx-5 fs-4">
              <li><Nav.Link href="/user">User</Nav.Link></li>
              <li><Nav.Link href="/user">Profile</Nav.Link></li>
              <li><Nav.Link href="/user">Characters</Nav.Link></li>
          </ul>
          <ul className="list-unstyled fs-4">
            <li><Nav.Link href="/user">Contact Us</Nav.Link></li>
            <li><Nav.Link href="/user">Legal Terms</Nav.Link></li>
            <li><Nav.Link href="/user">About</Nav.Link></li>
          </ul>
        </Stack>
      </Container>

      <Container className="form-style">
        <h5 className="text-md-right fs-4">Contact Us</h5>
        <form>
            <fieldset className="form-group">
              <input type="email" className="form-control my-2" id="exampleInputEmail1" placeholder="Enter email"/>
              <textarea className="form-control my-2" id="exampleMessage" placeholder="Message"></textarea>
              <button type="button" className="btn btn-success my-2">Send</button>
            </fieldset>
        </form>
      </Container>
    </div>

    </Container>
  )
}

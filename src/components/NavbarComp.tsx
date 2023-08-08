import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

interface UserLoggedIn {
  loggedIn: boolean
}

export default function NavbarComp({loggedIn}: UserLoggedIn){

  return (
    <>
      <Navbar sticky="top" expand="sm" data-bs-theme="dark" className="bg-dark rounded-4 rounded-top-0">
        <Container fluid className="mx-1">
          <Navbar.Brand href="/">D&D Helper</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {loggedIn ? (
                <>
                  <Nav.Link href="/user">User Home</Nav.Link>
                  <Nav.Link href="/Characters">Characters</Nav.Link>
                  <NavDropdown title="Account" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/user-profile">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/user-settings">
                      Settings
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Alert,
} from "react-bootstrap";
import "../App.css";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className="text-primary fw-bold noto-sans">
          Thailand Travel Guide
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Nav className="me-auto my-lg-0" style={{ maxHeight: "100px" }}>
            <Nav.Link href="#action1">Category</Nav.Link>
            <Nav.Link href="#action2">Log in</Nav.Link>
            <NavDropdown id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                <Button variant="primary">Login or Register </Button>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

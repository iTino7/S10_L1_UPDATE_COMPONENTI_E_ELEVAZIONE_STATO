import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container fluid>
          <Nav>
            <Nav.Link href="#" className="fs-5 text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fs-5 text-white">
              About
            </Nav.Link>
            <Nav.Link href="#" className="fs-5 text-white">
              Browse
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;

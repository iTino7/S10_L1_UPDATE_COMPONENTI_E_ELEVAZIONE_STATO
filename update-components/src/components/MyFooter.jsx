import { Button, Container } from "react-bootstrap";

const MyFooter = (props) => {
  return (
    <div>
      <Container fluid className="m-0 bg-dark py-4">
        <Container className="text-center">
          <h5 className="text-white">{props.title} &copy;</h5>
        </Container>
      </Container>
    </div>
  );
};

export default MyFooter;

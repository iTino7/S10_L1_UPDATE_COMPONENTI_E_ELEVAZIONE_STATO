import { Alert, Container } from "react-bootstrap";

const  Welcome = (props) => {
  return (
    <>
      <Container>
        <Alert variant="primary" className="text-center fs-4 mt-3">
           {props.title}
        </Alert>
      </Container>
    </>
  );
}

export default Welcome;

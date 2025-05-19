import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    const { books, onBookSelect, selected } = this.props;

    return (
      <Card
        style={{
          width: "18rem",
          margin: "20px",
          border: selected ? "2px solid red" : "none", // evidenzia se selezionato
        }}
      >
        <Card.Img
          onClick={() => onBookSelect(books.asin)}
          variant="top"
          src={books.img}
          style={{ cursor: "pointer" }}
        />
        <Card.Body>
          <Card.Title>{books.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">compra ora €{books.price}</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;

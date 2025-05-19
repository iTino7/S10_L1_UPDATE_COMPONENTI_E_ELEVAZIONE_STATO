import React, { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    search: "",
    selectedBook: null,
  };

  handleBookSelect = (asin) => {
    this.setState({ selectedBook: asin });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <Form.Control
              type="text"
              placeholder="Cerca un libro..."
              className="my-5"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <Row>
              {this.props.book
                .filter((book) =>
                  book.title
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase().trim())
                )
                .slice(0, 24)
                .map((item) => (
                  <Col xs={12} sm={6} md={4} key={item.asin}>
                    <SingleBook
                      books={item}
                      onBookSelect={this.handleBookSelect}
                      selected={item.asin === this.state.selectedBook}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={12} md={4}>
            {this.state.selectedBook && (
              <CommentArea asin={this.state.selectedBook} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;

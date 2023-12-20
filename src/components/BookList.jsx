import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';

const BookList = (props) => {
  const books = props.books;
  return (
    <Container>
      <Row>
        {books.map((book, index) => {
          return (
            <Col md={3}>
              <SingleBook key={index} book={book} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BookList;

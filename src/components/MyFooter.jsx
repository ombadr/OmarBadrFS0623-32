import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <footer className='bg-dark text-white py-3 mt-5'>
      <Container fluid>
        <Row>
          <Col md={6}>
            <h4>React - Epibooks</h4>
          </Col>
          <Col md={6}>
            <h4>Contact info:</h4>
            <p>Email: infp@epibooks.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

// class AllTheBooks extends Component {
const AllTheBooks = (props) => {
  const [cat, setCat] = useState(props.category);

  // constructor(props) {
  //   super(props);
  //   this.cat = props.category;
  // }

  return (
    <Container>
      <Row>
        {cat.map((cat) => (
          <Col md={2} key={cat.asin}>
            <Card>
              <Card.Img variant='top' src={cat.img} />
              <Card.Body>
                <Card.Title>{cat.title}</Card.Title>
                <Card.Text>{`Price: $${cat.price}`}</Card.Text>
                <Button variant='primary'>Add to card 🛒</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;

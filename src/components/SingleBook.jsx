import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

/* const SingleBook = (props) => {
  const { title, img, price } = props.book;
  return (
    <Card>
      <Card.Img variant='top' src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{`Price: $${price}`}</Card.Text>
        <Button variant='primary'>Add to card 🛒</Button>
      </Card.Body>
    </Card>
  );
};
 */

class SingleBook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, img, price } = this.props.book;

    return (
      <Card>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{`Price: $${price}`}</Card.Text>
          <Button variant='primary'>Add to card 🛒</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;

// import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleBook.css';
import { useState } from 'react';

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

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     selected: false,
  //   };

  //   this.handleSelected = this.handleSelected.bind(this);
  // }

  const handleSelected = () => {
    setSelected((prevSelected) => !prevSelected);
    props.onBookSelect(props.book.asin);
  };
  // handleSelected() {
  //   this.setState((prevState) => ({ selected: !prevState.selected }));

  //   this.props.onBookSelect(this.props.book.asin);
  // }

  const { title, img, price, asin } = props.book;

  const cardStyle = selected ? { border: '2px solid red' } : {};

  return (
    <>
      <Card style={cardStyle} onClick={handleSelected}>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{`Price: $${price}`}</Card.Text>
          <Button variant='primary'>Add to card 🛒</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;

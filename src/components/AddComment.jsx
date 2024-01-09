import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Form, Button, Alert } from 'react-bootstrap';

const AddComment = (props) => {
  const [bookComment, setBookComment] = useState({
    comment: '',
    rate: '1',
    elementId: props.asin,
  });

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     bookComment: {
  //       comment: '',
  //       rate: '1',
  //       elementId: props.asin,
  //     },
  //   };

  //   this.handleInputChange = this.handleInputChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  const handleInputChange = (property, value) => {
    setBookComment({ ...bookComment, [property]: value });
    // this.setState({
    //   bookComment: { ...this.state.bookComment, [property]: value },
    // });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(bookComment),
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZjhmNGUwZGQxZDAwMTgyZDE3MjUiLCJpYXQiOjE3MDQ3MjA2MjgsImV4cCI6MTcwNTkzMDIyOH0.5Zf9Q1qJ4dXzGh70WWz0bhqw3veu5o59t3tohE26Inw',
          },
        }
      );

      if (res.ok) {
        setBookComment({
          comment: '',
          rate: '1',
          elementId: props.asin,
        });
        // this.setState({
        //   bookComment: {
        //     comment: '',
        //     rate: '1',
        //     elementId: this.props.asin,
        //   },
        // });
      } else {
        throw new Error('Errore nel salvataggio del commento');
      }
    } catch (e) {
      console.log('ERRORE: ', e);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Comment</Form.Label>
              <Form.Control
                type='text'
                placeholder='Insert your comment'
                value={bookComment.comment}
                onChange={(e) => handleInputChange('comment', e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Rate</Form.Label>
              <Form.Select
                aria-label='Rate'
                required
                value={bookComment.rate}
                onChange={(e) => {
                  handleInputChange('rate', e.target.value);
                }}
              >
                <option selected>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>ASIN</Form.Label>
              <Form.Control
                type='text'
                placeholder='ASIN'
                value={bookComment.elementId}
                onChange={(e) => handleInputChange('elementId', e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button variant='primary' type='submit' className='my-3'>
              Add Comment!
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddComment;

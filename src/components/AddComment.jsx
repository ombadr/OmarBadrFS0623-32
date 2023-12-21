import React from 'react';
import { Row, Col, Container, Form, Button, Alert } from 'react-bootstrap';
class AddComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookComment: {
        comment: '',
        rate: '1',
        elementId: props.asin,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(property, value) {
    this.setState({
      bookComment: { ...this.state.bookComment, [property]: value },
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(this.state.bookComment),
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZjAyODBkOGEyMDAwMThhNDhiMmYiLCJpYXQiOjE3MDMxNjA3MTAsImV4cCI6MTcwNDM3MDMxMH0.BtXNd6xIEcoxpQ6JWiLh8hmtaKgbDZi8RkyAJUi98Jw',
          },
        }
      );

      if (res.ok) {
        this.setState({
          bookComment: {
            comment: '',
            rate: '1',
            elementId: this.props.asin,
          },
        });
      } else {
        throw new Error('Errore nel salvataggio del commento');
      }
    } catch (e) {
      console.log('ERRORE: ', e);
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Insert your comment'
                  value={this.state.bookComment.comment}
                  onChange={(e) =>
                    this.handleInputChange('comment', e.target.value)
                  }
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Rate</Form.Label>
                <Form.Select
                  aria-label='Rate'
                  required
                  value={this.state.bookComment.rate}
                  onChange={(e) => {
                    this.handleInputChange('rate', e.target.value);
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
                  value={this.state.bookComment.elementId}
                  onChange={(e) =>
                    this.handleInputChange('elementId', e.target.value)
                  }
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
  }
}

export default AddComment;

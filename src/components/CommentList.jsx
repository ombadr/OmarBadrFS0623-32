import React from 'react';
import {
  Container,
  Row,
  Col,
  ListGroup,
  Spinner,
  Button,
  Alert,
} from 'react-bootstrap';
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commenti: [],
    };
  }

  getCommenti(id) {
    fetch(`https://striveschool-api.herokuapp.com/api/books/${id}/comments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZjAyODBkOGEyMDAwMThhNDhiMmYiLCJpYXQiOjE3MDMxNjA3MTAsImV4cCI6MTcwNDM3MDMxMH0.BtXNd6xIEcoxpQ6JWiLh8hmtaKgbDZi8RkyAJUi98Jw',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Errore nel recupero delle prenotazioni');
        }
      })
      .then((data) => {
        console.log('Commenti: ', data);
        this.setState({ commenti: data });
      })
      .catch((err) => {
        console.log('Errore: ', err);
      });
  }

  componentDidMount() {
    this.getCommenti(this.props.asin);
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <ListGroup>
                {this.state.commenti.map((commento) => (
                  <div
                    key={commento._id}
                    className='border border-black rounded m-2'
                  >
                    <Button
                      type='button'
                      className='btn btn-danger mt-2'
                      onClick={() => {
                        fetch(
                          'https://striveschool-api.herokuapp.com/api/comments/' +
                            commento._id,
                          {
                            method: 'DELETE',
                            headers: {
                              'Content-Type': 'application/json',
                              Authorization:
                                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZjAyODBkOGEyMDAwMThhNDhiMmYiLCJpYXQiOjE3MDMxNjA3MTAsImV4cCI6MTcwNDM3MDMxMH0.BtXNd6xIEcoxpQ6JWiLh8hmtaKgbDZi8RkyAJUi98Jw',
                            },
                          }
                        )
                          .then((res) => {
                            if (res.ok) {
                              console.log('Commento eliminato');
                              this.getCommenti(this.props.asin);
                            } else {
                              throw new Error(
                                'Eliminazione del commento non riuscito'
                              );
                            }
                          })
                          .catch((err) => {
                            console.log('Error: ', err);
                          });
                      }}
                    >
                      Elimina
                    </Button>
                    <p>Commento: {commento.comment}</p>
                    <p>Rate: {commento.rate}</p>
                  </div>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default CommentList;

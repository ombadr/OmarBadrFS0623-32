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
import Loading from './Loading';
import ErrorAlert from './ErrorAlert';
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commenti: [],
      isLoading: true,
      isError: false,
    };
  }

  getCommenti(id) {
    fetch(`https://striveschool-api.herokuapp.com/api/books/${id}/comments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZjhmNGUwZGQxZDAwMTgyZDE3MjUiLCJpYXQiOjE3MDQ3MjA2MjgsImV4cCI6MTcwNTkzMDIyOH0.5Zf9Q1qJ4dXzGh70WWz0bhqw3veu5o59t3tohE26Inw',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Errore nel recupero dei commenti');
        }
      })
      .then((data) => {
        console.log('Commenti: ', data);
        this.setState({ commenti: data, isLoading: false, isError: false });
      })
      .catch((err) => {
        console.log('Errore: ', err);
        this.setState({ isError: true });
      });
  }

  componentDidMount() {
    this.getCommenti(this.props.asin);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.setState({ isLoading: true, isError: false });
      this.getCommenti(this.props.asin);
    }
  }
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              {this.state.isLoading ? (
                <Loading />
              ) : this.state.isError ? (
                <ErrorAlert />
              ) : (
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
                                  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZjhmNGUwZGQxZDAwMTgyZDE3MjUiLCJpYXQiOjE3MDQ3MjA2MjgsImV4cCI6MTcwNTkzMDIyOH0.5Zf9Q1qJ4dXzGh70WWz0bhqw3veu5o59t3tohE26Inw',
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
                      <p>Author: {commento.author}</p>
                    </div>
                  ))}
                </ListGroup>
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default CommentList;

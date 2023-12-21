import React from 'react';
import { Alert } from 'react-bootstrap';

class ErrorAlert extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Alert variant='danger'>Si è verificato un errore </Alert>;
  }
}

export default ErrorAlert;

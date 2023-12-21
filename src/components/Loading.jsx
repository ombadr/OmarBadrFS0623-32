import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    );
  }
}

export default Loading;

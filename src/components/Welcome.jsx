import React from 'react';
import { Container } from 'react-bootstrap';

const Welcome = () => {
  return (
    <div className='bg-primary text-white py-5'>
      <Container>
        <h1 className='display-4'>Benvenuti nel negozio</h1>
        <p className='lead'>Scopri i nostri libri</p>
      </Container>
    </div>
  );
};

export default Welcome;

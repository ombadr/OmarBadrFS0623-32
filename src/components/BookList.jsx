import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';

const BookList = (props) => {
  const books = props.books;
  const [searchQuery, setSearchQuery] = useState('');

  // Funzione per aggiornare la stringa di ricerca
  const getSearchQuery = (query) => {
    setSearchQuery(query);
  };

  // Filtra i libri in base alla stringa di ricerca
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className='mt-5'>
      <input
        className='mb-5'
        type='text'
        placeholder='Search by title...'
        onChange={(e) => getSearchQuery(e.target.value)}
      />
      <Row>
        {filteredBooks.map((book, index) => {
          return (
            <Col md={3} key={index}>
              <SingleBook book={book} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BookList;

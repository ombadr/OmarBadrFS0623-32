import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
    console.log('search');
  };
  return (
    <Form inline>
      <FormControl
        type='text'
        placeholder='Search...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></FormControl>
      <Button variant='outline-primary' onClick={handleSearch}></Button>
    </Form>
  );
};

export default Search;

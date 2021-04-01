import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, handleChange } = props;

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="button" onClick={(event) => handleChange(event, book)}>Remove Book</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Book;

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = (props) => {
  const { books } = props;
  const displayBooks = books.map((book) => <Book key={book.id} book={book} />);

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>{displayBooks}</tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};
const mapStateToProps = (state) => ({ books: state.bookReducer });

export default connect(mapStateToProps)(BooksList);

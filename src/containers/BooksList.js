import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import * as actions from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = (props) => {
  const { books } = props;
  const handleRemoveBook = (event, book) => {
    event.preventDefault();
    props.removeBook(book.id);
  };

  const displayBooks = books.map(
    (book) => <Book key={book.id} book={book} handleChange={handleRemoveBook} />,
  );

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{displayBooks}</tbody>
      </table>
      <CategoryFilter />
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({ books: state.bookReducer });

export default connect(mapStateToProps, actions)(BooksList);

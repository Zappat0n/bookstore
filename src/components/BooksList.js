import { connect } from 'react-redux';
import Book from './Book';

const BooksList = (props) => {
  const displayBooks = props.books.map((book) => {
    return <Book book={book} />;
  });

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

const mapStateToProps = (state) => {
  return { books: state.bookReducer };
};

export default connect(mapStateToProps)(BooksList);

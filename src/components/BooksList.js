import { connect } from 'react-redux';

const BooksList = () => {
  const displayBooks = () => {
    let books = [];
    return books;
  };

  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      <tbody>
        <tr>
          <td>1</td>
          <td>My Book</td>
          <td>Any</td>
        </tr>
      </tbody>
    </table>
  );
};

export default connect()(BooksList);

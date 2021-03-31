import React, { Component } from 'react';
import './bookForm.css';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BookForm extends Component {
  render() {
    return (
      <form>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <br />
        <div>
          <select name="categories">
            <option value="">Please choose an option</option>
            {categories.map((cate) => (
              <option key={cate} value={cate}>
                {cate}
              </option>
            ))}
          </select>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default BookForm;

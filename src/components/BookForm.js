import React, { Component } from 'react';

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
              <option value={cate}>{cate}</option>
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

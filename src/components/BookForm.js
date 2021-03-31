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
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ title: event.target.value });
  };

  render() {
    const { title } = this.state;
    return (
      <form>
        <div>
          <label htmlFor="book-title">
            Title
            <input
              type="text"
              id="book-title"
              name="book-title"
              value={title}
              onChange={this.handleChange}
            />
          </label>
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

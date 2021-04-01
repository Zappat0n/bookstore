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
      category: '',
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    if (event.target.name === 'book-title') {
      this.setState({ title: event.target.value });
    }

    if (event.target.name === 'categories') {
      this.setState({ category: event.target.value });
    }
  };

  render() {
    const { title, category } = this.state;
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
              required
            />
          </label>
        </div>
        <br />
        <div>
          <select
            name="categories"
            value={category}
            onChange={this.handleChange}
          >
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

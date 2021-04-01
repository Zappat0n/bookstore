import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './bookForm.css';

export const categories = [
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

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    const id = Math.random();
    const newBook = { id, title, category };
    createBook(newBook);
    this.setState({ title: '', category: '' });
  };

  render() {
    const { title, category } = this.state;
    return (
      <div className="book-form-container">
        <h3 className="form-header">ADD NEW BOOK</h3>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="title-input">
            <input
              type="text"
              id="book-title"
              name="book-title"
              value={title}
              onChange={this.handleChange}
              placeholder="Book title"
              required
            />
          </div>
          <div className="right-selection">
            <select
              name="categories"
              value={category}
              onChange={this.handleChange}
              className="book-categories"
            >
              {categories.map((cate) => (
                <option key={cate} value={cate}>
                  {cate}
                </option>
              ))}
            </select>
            <button className="submit-button" type="submit">
              ADD BOOK
            </button>
          </div>
        </form>
      </div>
    );
  }
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, actions)(BookForm);

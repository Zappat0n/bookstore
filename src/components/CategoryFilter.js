import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from '../actions';
import { categories } from '../containers/BookForm';
import Select from './Select';
import './CategoryFilter.css';

const CategoryFilter = (props) => {
  const { category, changeFilter } = props;

  const filters = ['All', ...categories];

  const handleFilterChange = (event) => {
    changeFilter(event.target.value);
  };

  return (
    <div className="mt">
      <Select
        name="categories"
        value={category}
        onChange={handleFilterChange}
        className="category-filter"
      >
        {filters.map((cate) => (
          <option key={cate} value={cate}>
            {cate}
          </option>
        ))}
      </Select>
    </div>
  );
};

CategoryFilter.propTypes = {
  category: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.filterReducer,
});

export default connect(mapStateToProps, action)(CategoryFilter);

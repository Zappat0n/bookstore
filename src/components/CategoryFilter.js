import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../containers/BookForm';

const CategoryFilter = (props) => {
  const { category } = props;

  const filters = [...categories, 'All'];

  return (
    <div>
      <select
        name="categories"
        value={category}
      >
        <option value="">Please choose an option</option>
        {filters.map((cate) => (
          <option key={cate} value={cate}>
            {cate}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryFilter;

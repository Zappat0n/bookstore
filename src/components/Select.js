import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Select.css';

class Select extends PureComponent {
  render() {
    const { children, className, ...rest } = this.props;
    return (
      <div className="select-wrapper">
        <select {...rest} className={`select ${className}`}>
          {children}
        </select>
        <i className="fas fa-chevron-down" />
      </div>
    );
  }
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Select.defaultProps = {
  className: '',
};

export default Select;

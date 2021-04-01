import React from 'react';
import './Navigation.css';

const Navigation = () => (
  <div className="navigation">
    <div className="left-content">
      <h2 className="brand-name">Bookstore CMS</h2>
      <p className="ml">Books</p>
      <p className="ml">Categories</p>
    </div>
    <div className="right-content">
      <div className="login-user">
        <i className="fas fa-user" />
      </div>
    </div>
  </div>
);

export default Navigation;

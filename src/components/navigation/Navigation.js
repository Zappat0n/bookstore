import React from 'react';
import './Navigation.css';

const Navigation = () => (
  <div className="navigation-wraper">
    <div className="navigation">
      <div className="left-content">
        <h2 className="brand-name">Bookstore CMS</h2>
        <p className="ml">BOOKS</p>
        <p className="ml" id="categories-tab">
          CATEGORIES
        </p>
      </div>
      <div className="right-content">
        <div className="login-user">
          <i className="fas fa-user" />
        </div>
      </div>
    </div>
  </div>
);

export default Navigation;

import React from 'react';
// import PropTypes from 'prop-types';

const Footer = ({ links, logo, year }) => (
  <footer className="login__footer">
    <div className="login__footer-links">
      {links.map((l, i) => (
        <a href={l.url} key={i}>{l.label}</a>
      ))}
    </div>
    <div className="login__footer-branding">
      <img src={logo} alt="ChatLoop Logo" />
      <span>© {year} ChatLoop</span>
    </div>
  </footer>
);

// Footer.propTypes = { ... } // TODO: Add prop types

export default Footer; 
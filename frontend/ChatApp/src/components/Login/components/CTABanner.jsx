import React from 'react';
// import PropTypes from 'prop-types';

const CTABanner = ({ onGetStarted, onSeeDemo }) => (
  <section className="login__cta-banner">
    <h2>Ready to start chatting?</h2>
    <div className="login__cta-row">
      <button className="login__cta" onClick={onGetStarted}>Get Started Free</button>
      <button className="login__cta login__cta--secondary" onClick={onSeeDemo}>See Demo</button>
    </div>
  </section>
);

// CTABanner.propTypes = { ... } // TODO: Add prop types

export default CTABanner; 
import React from 'react';
// import PropTypes from 'prop-types';

const Features = ({ features }) => (
  <section className="login__features">
    {features.map((f, i) => (
      <div className="login__features-card" key={i}>
        <span className="login__features-card-icon">{f.icon}</span>
        <h3>{f.title}</h3>
        <p>{f.desc}</p>
      </div>
    ))}
  </section>
);

// Features.propTypes = { ... } // TODO: Add prop types

export default Features; 
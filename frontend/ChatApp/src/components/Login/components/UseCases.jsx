import React from 'react';
// import PropTypes from 'prop-types';

const UseCases = ({ useCases }) => (
  <section className="login__usecases">
    {useCases.map((u, i) => (
      <div className="login__usecase-card" key={i}>
        <span className="login__usecase-icon">{u.icon}</span>
        <h4>{u.title}</h4>
        <p>{u.desc}</p>
      </div>
    ))}
  </section>
);

// UseCases.propTypes = { ... } // TODO: Add prop types

export default UseCases; 
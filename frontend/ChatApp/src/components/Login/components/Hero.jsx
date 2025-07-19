import React from 'react';
// import PropTypes from 'prop-types';

const Hero = ({ logo, title, tagline, avatars, onJoinClick, onCreateRoomClick }) => (
  <section className="login__hero">
    <img src={logo} alt="ChatLoop Logo" className="login__logo" />
    <h1 className="login__title">{title}</h1>
    <p className="login__tagline">{tagline}</p>
    <div className="login__cta-row">
      <button className="login__cta" onClick={onJoinClick}>Join Chat Now</button>
      <button className="login__cta login__cta--secondary" onClick={onCreateRoomClick}>Create a Room</button>
    </div>
    <div className="login__avatars">
      {avatars.map((a, i) => (
        <span className="login__avatar-emoji" key={i}>{a}</span>
      ))}
    </div>
  </section>
);

// Hero.propTypes = { ... } // TODO: Add prop types

export default Hero; 
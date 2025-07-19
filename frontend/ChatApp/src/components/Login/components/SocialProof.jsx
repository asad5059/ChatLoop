import React from 'react';
// import PropTypes from 'prop-types';

const SocialProof = ({ testimonials, liveUserCount }) => (
  <section className="login__socialproof">
    <div className="login__testimonials">
      {testimonials.map((t, i) => (
        <div className="login__testimonial-card" key={i}>
          <span className="login__testimonial-avatar">{t.avatar}</span>
          <div className="login__testimonial-text">{t.text}</div>
          <div className="login__testimonial-name">{t.name}</div>
        </div>
      ))}
    </div>
    <div className="login__live-users">{liveUserCount} live users online</div>
  </section>
);

// SocialProof.propTypes = { ... } // TODO: Add prop types

export default SocialProof; 
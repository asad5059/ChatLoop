import React from 'react';
// import PropTypes from 'prop-types';

const LoginModal = ({ show, onClose, onSubmit, username, onUsernameChange, title, buttonText }) => (
  show ? (
    <div className="login__modal-bg" onClick={onClose}>
      <div className="login__modal" onClick={e => e.stopPropagation()}>
        <div className="login__modal-title">{title}</div>
        <form onSubmit={onSubmit}>
          <input
            className="login__modal-input"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={onUsernameChange}
            autoFocus
          />
          <button className="login__modal-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  ) : null
);

// LoginModal.propTypes = { ... } // TODO: Add prop types

export default LoginModal; 
import React, { useState } from 'react';
import ChatLoopLogo from '../../assets/ChatLoop.svg';
import { LOGIN_TITLE, LOGIN_BUTTON_TEXT } from '../../constants';

import './styles.scss';

const avatars = [
  '🧑‍🚀', '👩‍🎤', '🧑‍💻', '👨‍🍳', '👩‍🎨', '🧑‍🔬', '👨‍🏫', '👩‍🌾'
];

const chatrooms = [
  'Gamers Dan', 'Music Lounge', 'Random', 'Sports',
  'Politics Chat',
];

const features = [
  {
    icon: '💬',
    title: 'Free Chat With Strangers',
    desc: 'Connect instantly with people from around the world. No registration required!'
  },
  {
    icon: '🌍',
    title: 'A Friendly Community',
    desc: 'Our chatrooms are moderated and welcoming to everyone.'
  },
  {
    icon: '⚡',
    title: 'Fast & Modern',
    desc: 'Enjoy a smooth, modern chat experience on any device.'
  }
];

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [showLogin, setShowLogin] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            onLogin(username);
        }
    };

    return (
        <div className="login">
            {/* Hero Section */}
            <section className="login__hero">
                <img src={ChatLoopLogo} alt="ChatLoop Logo" className="login__logo" />
                <h1 className="login__title">ChatLoop</h1>
                <p className="login__tagline">Free Chat Rooms For Everyone, Everywhere!</p>
                <button className="login__cta" onClick={() => setShowLogin(true)}>Start Chatting</button>
                <div className="login__avatars">
                  {avatars.map((a, i) => (
                    <span className="login__avatar-emoji" key={i}>{a}</span>
                  ))}
                </div>
            </section>

            {/* Chatroom Selection */}
            <section className="login__chatrooms">
                <h2 className="login__chatrooms-title">Select a Chatroom & Start Chatting!</h2>
                <div className="login__chatrooms-grid">
                  {chatrooms.map((room, i) => (
                    <button className="login__chatrooms-btn" key={i}>{room}</button>
                  ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="login__features">
              {features.map((f, i) => (
                <div className="login__features-card" key={i}>
                  <span className="login__features-card-icon">{f.icon}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </section>

            {/* Login Modal/Section */}
            {showLogin && (
              <div className="login__modal-bg" onClick={() => setShowLogin(false)}>
                <div className="login__modal" onClick={e => e.stopPropagation()}>
                  <div className="login__modal-title">{LOGIN_TITLE}</div>
                  <form onSubmit={handleSubmit}>
                      <input
                          className="login__modal-input"
                          type="text"
                          placeholder="Enter your username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          autoFocus
                      />
                      <button className="login__modal-button" type="submit">
                          {LOGIN_BUTTON_TEXT}
                      </button>
                  </form>
                </div>
              </div>
            )}
        </div>
    );
};

export default Login;
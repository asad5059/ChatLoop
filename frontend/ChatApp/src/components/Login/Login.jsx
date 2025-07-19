import React, { useState } from 'react';
import ChatLoopLogo from '../../assets/ChatLoop.svg';
import {
  AVATARS,
  FEATURES,
  USE_CASES,
  TESTIMONIALS,
  FOOTER_LINKS,
  LOGIN_TITLE,
  LOGIN_BUTTON_TEXT
} from './constants';
import { randomLiveUserCount } from './utility';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import SocialProof from './components/SocialProof';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import './styles.scss';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [liveUserCount] = useState(randomLiveUserCount());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <div className="login">
      <Hero
        logo={ChatLoopLogo}
        title="Connect Instantly. Chat Freely. Build Communities."
        tagline="A modern, real-time chatroom platform for everyone."
        avatars={AVATARS}
        onJoinClick={() => setShowLogin(true)}
        onCreateRoomClick={() => {}}
      />
      <Features features={FEATURES} />
      <UseCases useCases={USE_CASES} />
      <SocialProof
        testimonials={TESTIMONIALS}
        liveUserCount={liveUserCount}
      />
      <CTABanner
        onGetStarted={() => setShowLogin(true)}
        onSeeDemo={() => {}}
      />
      <Footer
        links={FOOTER_LINKS}
        logo={ChatLoopLogo}
        year={new Date().getFullYear()}
      />
      <LoginModal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        onSubmit={handleSubmit}
        username={username}
        onUsernameChange={e => setUsername(e.target.value)}
        title={LOGIN_TITLE}
        buttonText={LOGIN_BUTTON_TEXT}
      />
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import { LOGIN_TITLE, LOGIN_BUTTON_TEXT } from '../../constants';

import './styles.scss';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            onLogin(username);
        }
    };

    return (
        <div className="login-container">
            <div className="login-title">{LOGIN_TITLE}</div>
            <form onSubmit={handleSubmit}>
                <input
                    className="login-input"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button className="login-button" type="submit">
                    {LOGIN_BUTTON_TEXT}
                </button>
            </form>
        </div>
    );
};

export default Login;
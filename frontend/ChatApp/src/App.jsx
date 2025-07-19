import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/Login/Login';
import ChatRoom from './components/ChatRoom/ChatRoom';
import { useWebSocket } from './useWebSocket';
import "./App.scss";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [chatName, setChatName] = useState(localStorage.getItem('chatName') || '');
  const [messages, sendMessage, connectionState] = useWebSocket(chatName);

  const handleLogin = (name) => {
    setChatName(name);
    setLoggedIn(true);
    localStorage.setItem('chatName', name);
  };

  // Send message via WebSocket
  const handleSendMessage = (text) => {
    sendMessage({ username: chatName, text });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            loggedIn ? <Navigate to="/chat" replace /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/chat"
          element={
            loggedIn ? (
              <div className="app-container">
                <ChatRoom
                  username={chatName}
                  messages={messages}
                  onSendMessage={handleSendMessage}
                  connectionState={connectionState}
                />
              </div>
            ) : <Navigate to="/login" replace />
          }
        />
        <Route
          path="*"
          element={<Navigate to={loggedIn ? "/chat" : "/login"} replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;

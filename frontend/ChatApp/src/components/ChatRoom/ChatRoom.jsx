import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { CHATROOM_PLACEHOLDER } from "../../constants";

import ChatLoopLogo from "../../assets/ChatLoop.svg";

import "./ChatRoom.scss";

const ChatRoom = ({ username, messages, onSendMessage }) => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="chatroom-outer">
      <div className="chatroom-container">
        <header className="chatroom-header">
          <div className="chatroom-header__left">
            <img
              src={ChatLoopLogo}
              alt="ChatLoop Logo"
              className="chatroom-logo"
            />
            <span className="chatroom-title">ChatLoop</span>
          </div>
          <div className="chatroom-header__right">
            <span className="chatroom-user-label">Logged in as:</span>
            <span className="chatroom-user">{username}</span>
          </div>
        </header>
        <div className="message-type-section">
          <span>Messages</span>
        </div>
        <div className="messages-list">
          {messages.map((message, idx) => {
            const type = message?.type;

            if (type === "join" || type === "leave") {
              return (
                <div
                  key={idx}
                  className={`chatroom-message system-message ${type}`}
                >
                  <span className="system-message__text">
                    {message.username} {type === "join" ? "joined" : "left"} the
                    chat
                  </span>
                </div>
              );
            } else {
              const userName = message?.message?.username;
              const text = message?.message?.text;
              return (
                <div key={idx} className="chat-message">
                  <div className="chat-message__avatar">
                    {getInitials(userName)}
                  </div>
                  <div className="chat-message__card">
                    <div className="chat-message__username">{userName}</div>
                    <div className="chat-message__text">{text}</div>
                  </div>
                </div>
              );
            }
          })}
          <div ref={messagesEndRef} />
        </div>
        <form className="input-row" onSubmit={handleSend}>
          <input
            className="message-input"
            type="text"
            placeholder={CHATROOM_PLACEHOLDER}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="send-button" type="submit">
            <Send />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;

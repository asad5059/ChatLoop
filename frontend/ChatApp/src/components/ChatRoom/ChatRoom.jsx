import React, { useState, useRef, useEffect } from "react";
import { CHATROOM_PLACEHOLDER, SEND_BUTTON_TEXT } from "../../constants";

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

  return (
    <div className="chatroom-container">
      <div className="chat-header">Chat Room</div>
      <div className="messages-list">
        {messages.map((message, idx) => {
          const type = message?.type;

          if (type === 'join') {
            return <div key={idx} className="chatroom-message">{message.username} joined the chat</div>
          } else if (type === 'leave') {
            return <div key={idx} className="chatroom-message">{message.username} left the chat</div>
          } else {
          const userName = message?.message?.username;
          const text = message?.message?.text;

          return (
            <div
              key={idx}
              className={
                "message-bubble " +
                (message.username === username ? "user" : "other")
              }
            >
              <strong>{userName}: </strong>
              {text}
            </div>
          );
        }})}
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
          {SEND_BUTTON_TEXT}
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;

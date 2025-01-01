import React, { useState } from 'react';
import './ChatBot.css'; // Optional: Add styles in a separate file

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { user: 'You', text: input }]);
      setInput('');
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { user: 'Bot', text: 'Hello! How can I help you?' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chat-dashboard">
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.user === 'You' ? 'user' : 'bot'}`}
            >
              <strong>{msg.user}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

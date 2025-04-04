import React, { useState } from "react";
import styled from "styled-components";
import avatar from "../assets/avatar.png";  // Correct avatar path
import icon from "../assets/icon.png";      // Correct chatbot path

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding: 85px 20px 20px; /* Adjusted padding for navbar */
  background: linear-gradient(135deg, #a8e6cf, #dcedc1); /* Calming Pastel */
`;

const ChatBox = styled.div`
  width: 90%;
  max-width: 650px;
  height: 75vh;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 25px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  justify-content: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
`;

const MessageBubble = styled.div`
  max-width: 75%;
  padding: 14px;
  border-radius: 25px;
  font-size: 1.1rem; /* Increased Font Size */
  background: ${({ isUser }) => (isUser ? "#4CAF50" : "#f1f1f1")};
  color: ${({ isUser }) => (isUser ? "white" : "black")};
  margin-left: ${({ isUser }) => (isUser ? "10px" : "0")};
  margin-right: ${({ isUser }) => (isUser ? "0" : "10px")};
`;

const UserIcon = styled.img`
  width: 50px; /* Increased Avatar Size */
  height: 50px;
  border-radius: 50%;
`;

const InputContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 650px;
  margin-top: 15px;
`;

const Input = styled.input`
  flex: 1;
  padding: 14px;
  border-radius: 25px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 1rem; /* Increased Font Size */
`;

const SendButton = styled.button`
  margin-left: 10px;
  padding: 14px 25px;
  border-radius: 25px;
  border: none;
  background: #4CAF50;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #388E3C;
  }
`;

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() === "") return;
  
    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    const userInput = input; // Save before clearing
    setInput("");
  
    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });
  
      const data = await response.json();
  
      const botMessage = {
        text: data.response || "Sorry, I didn't understand that.",
        isUser: false,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        text: "Error connecting to the server. Please try again.",
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <ChatContainer>
      <ChatBox>
        {messages.map((msg, index) => (
          <Message key={index} isUser={msg.isUser}>
            {!msg.isUser && <UserIcon src={icon} alt="Chatbot" />} {/* Chatbot Icon */}
            <MessageBubble isUser={msg.isUser}>{msg.text}</MessageBubble>
            {msg.isUser && <UserIcon src={avatar} alt="User" />} {/* User Avatar */}
          </Message>
        ))}
      </ChatBox>
      <InputContainer>
        <Input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown} /* Enter to Send */
        />
        <SendButton onClick={sendMessage}>Send</SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chat;

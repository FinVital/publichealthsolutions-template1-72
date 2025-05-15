
import React, { useState } from 'react';
import ChatbotButton from './ChatbotButton';
import Chatbot from './Chatbot';

const ChatbotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <>
      {children}
      <ChatbotButton onClick={toggleChatbot} />
      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </>
  );
};

export default ChatbotProvider;

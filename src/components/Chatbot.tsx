
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Send, Bot } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: "Hello! I'm the Public Health Solutions assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

const Chatbot = ({ isOpen, onClose }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses: {[key: string]: string} = {
        'hello': 'Hello! How can I assist you with our health services today?',
        'programs': 'We offer many programs including nutrition assistance, maternal health, HIV/AIDS care, and more. Would you like information on a specific program?',
        'services': 'Our services include food and nutrition assistance, maternal and child health, sexual and reproductive health, and HIV/AIDS and chronic diseases. How can I help you find the right service?',
        'location': 'Our main office is located in NYC. We also have community-based centers throughout the five boroughs to better serve you.',
        'donate': 'Thank you for your interest in supporting our mission! You can make a donation through our website or contact our development team for more options.',
        'contact': 'You can reach us at info@healthsolutions.org or call 646-619-6400 during business hours.',
      };

      // Simple keyword matching for demo purposes
      const lowerInput = input.toLowerCase();
      let responseText = 'I\'m not sure how to help with that yet. For specific questions, you might want to check our Programs section or contact us directly.';
      
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (lowerInput.includes(keyword)) {
          responseText = response;
          break;
        }
      }

      const botMessage: Message = {
        id: Date.now().toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-lg shadow-xl flex flex-col border border-gray-200 overflow-hidden animate-fade-in">
      <div className="bg-phs-green p-3 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          <span className="font-semibold">Health Assistant</span>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="text-white hover:bg-phs-green-dark rounded-full h-8 w-8 p-0"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>
      </div>

      <ScrollArea className="flex-grow p-4 pb-0">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div 
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.sender === 'user' 
                    ? 'bg-phs-blue text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p>{msg.text}</p>
                <div 
                  className={`text-xs mt-1 ${
                    msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}
                >
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-4 max-w-[80%]">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <div className="p-3 border-t">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-grow"
            disabled={isLoading}
            ref={inputRef}
          />
          <Button 
            onClick={handleSend} 
            disabled={!input.trim() || isLoading}
            className="bg-phs-green hover:bg-phs-green-dark"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

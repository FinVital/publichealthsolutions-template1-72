
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ChatbotButtonProps {
  onClick: () => void;
}

const ChatbotButton = ({ onClick }: ChatbotButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg bg-phs-purple hover:bg-phs-purple-dark h-14 w-14 p-0"
      aria-label="Open chatbot"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default ChatbotButton;

import React, { useState } from 'react';
import { useChat } from '../../context/ChatContext';
import { Card, CardContent, Input, Button } from '@/components/ui/chat';

const ChatPage = () => {
  const { isChatOpen, messages, addMessage, toggleChat } = useChat();
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;
    addMessage({ id: Date.now().toString(), content: inputValue, sender: 'user' });
    setInputValue('');
  };

  if (!isChatOpen) return null;

  return (
    <div className="fixed bottom-16 right-4 w-80 h-[400px] bg-white shadow-lg rounded-xl border border-gray-200">
      <Card className="flex flex-col h-full">
        <CardContent className="overflow-y-auto p-4 space-y-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-2 rounded ${
                msg.sender === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'
              }`}
            >
              {msg.content}
            </div>
          ))}
        </CardContent>
        <div className="p-2 flex items-center space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
          />
          <Button onClick={handleSend}>Send</Button>
          <Button variant="ghost" onClick={toggleChat}>
            Close
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ChatPage;

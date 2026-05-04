"use client";
import React, { useState } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Xin chào! Tôi có thể giúp bạn tìm vé xe đi Đà Lạt ngày mai.',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Cảm ơn bạn! Để giúp bạn tốt hơn, vui lòng cho tôi biết ngày bạn muốn đi.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  const suggestedQuestions = [
    'Tìm vé Sài Gòn → Đà Lạt',
    'Giá vé bao nhiêu?',
    'Hỗ trợ thanh toán'
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-sky-600 text-white w-16 h-16 rounded-full shadow-lg hover:bg-sky-700 transition flex items-center justify-center text-2xl z-40"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-full bg-white rounded-2xl shadow-2xl flex flex-col z-50 h-96">
          {/* Header */}
          <div className="bg-sky-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <h3 className="font-semibold flex items-center gap-2">
              👤 VBUS Assistant
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl hover:text-gray-200 transition"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 py-6">
                <p className="text-lg mb-4">Xin chào! 👋</p>
                <p className="text-sm">Tôi sẵn sàng giúp bạn đặt vé xe.</p>
              </div>
            ) : (
              messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-sky-600 text-white rounded-br-none'
                        : 'bg-gray-200 text-gray-900 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Suggested Questions */}
          {messages.length <= 1 && (
            <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 space-y-2">
              <p className="text-xs text-gray-600 font-semibold">Gợi ý:</p>
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInputValue(q);
                    setTimeout(() => handleSendMessage(), 100);
                  }}
                  className="w-full text-left text-sm px-3 py-2 rounded hover:bg-gray-200 transition text-gray-700"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
              placeholder="Nhập tin nhắn..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="bg-sky-600 text-white w-10 h-10 rounded-lg hover:bg-sky-700 transition flex items-center justify-center"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

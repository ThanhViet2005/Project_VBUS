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
      text: 'Chào bạn! Tôi là Trợ lý VBUS. Tôi có thể giúp bạn tìm lịch trình, theo dõi xe thời gian thực hoặc quản lý đặt vé. Tôi có thể hỗ trợ gì cho hành trình của bạn hôm nay?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Cảm ơn bạn! Hệ thống đang xử lý yêu cầu của bạn...',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#0070B8] text-white w-14 h-14 rounded-full shadow-xl hover:bg-sky-700 transition-all flex items-center justify-center text-2xl z-40 border-2 border-white"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,1 22,12C22,17.5 17.5,22 12,22C10.3,22 8.7,21.5 7.4,20.7L2,22L3.3,16.6C2.5,15.3 2,13.7 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,14 4.7,15.8 5.8,17.3L5,20L7.7,19.2C9,20.3 10.4,21 12,21A8,8 0 0,0 20,12A8,8 0 0,0 12,4M8,11A1,1 0 0,1 9,12A1,1 0 0,1 8,13A1,1 0 0,1 7,12A1,1 0 0,1 8,11M12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11M16,11A1,1 0 0,1 17,12A1,1 0 0,1 16,13A1,1 0 0,1 15,12A1,1 0 0,1 16,11Z"/></svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[380px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col z-50 h-[550px] border border-gray-100 overflow-hidden font-sans">
          {/* Header */}
          <div className="bg-white p-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-[#0070B8]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/></svg>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Trợ lý VBUS</h3>
                <p className="text-xs text-gray-500">Đang hoạt động</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-700 transition p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-gray-50/50">
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div key={msg.id} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                  <span className={`text-[10px] font-bold mb-1 uppercase tracking-widest ${isUser ? 'text-[#0070B8] mr-1' : 'text-gray-500 ml-1'}`}>
                    {isUser ? 'BẠN' : 'TRỢ LÝ'}
                  </span>
                  <div className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                    isUser ? 'bg-[#0070B8] text-white rounded-tr-sm shadow-md shadow-[#0070B8]/20' : 'bg-gray-100 text-gray-800 rounded-tl-sm border border-gray-200'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              );
            })}
            
            {isTyping && (
              <div className="flex flex-col items-start">
                 <span className="text-[10px] font-bold mb-1 uppercase tracking-widest text-gray-500 ml-1">TRỢ LÝ</span>
                 <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm border border-gray-200 flex gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                 </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100 flex flex-col gap-3">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
                placeholder="Nhập tin nhắn..."
                className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 pr-12 focus:ring-2 focus:ring-sky-100 outline-none text-sm text-gray-700 placeholder-gray-400"
              />
              <button
                onClick={() => handleSendMessage()}
                className="absolute right-2 bg-[#0070B8] text-white w-8 h-8 rounded-lg hover:bg-sky-700 transition flex items-center justify-center shadow-md shadow-[#0070B8]/20"
              >
                <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              </button>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              <button 
                onClick={() => handleSendMessage('Theo dõi xe #402')}
                className="bg-sky-50 text-[#0070B8] px-4 py-2 rounded-full text-[11px] font-bold hover:bg-sky-100 transition whitespace-nowrap border border-sky-100"
              >
                Theo dõi xe #402
              </button>
              <button 
                onClick={() => handleSendMessage('Đổi lịch chuyến đi')}
                className="bg-sky-50 text-[#0070B8] px-4 py-2 rounded-full text-[11px] font-bold hover:bg-sky-100 transition whitespace-nowrap border border-sky-100"
              >
                Đổi lịch chuyến đi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

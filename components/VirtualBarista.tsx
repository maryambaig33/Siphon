import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Coffee, Sparkles } from 'lucide-react';
import { sendMessageToBarista } from '../services/geminiService';
import { ChatMessage } from '../types';

export const VirtualBarista: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to Siphon Coffee! I'm your virtual barista. Can I help you find the perfect brew today?", timestamp: Date.now() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: inputText, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    try {
      const responseText = await sendMessageToBarista(history, userMsg.text);
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-stone-800 rotate-90' : 'bg-amber-600 hover:bg-amber-700 hover:scale-105'
        }`}
        aria-label="Toggle Virtual Barista"
      >
        {isOpen ? <X className="text-white" /> : <MessageCircle className="text-white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-stone-900 border border-stone-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-stone-800 p-4 flex items-center gap-3 border-b border-stone-700">
            <div className="bg-amber-600 p-2 rounded-full">
              <Coffee size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-stone-100">Virtual Barista</h3>
              <p className="text-xs text-stone-400 flex items-center gap-1">
                <Sparkles size={10} className="text-amber-400" /> Powered by Gemini
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-950/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-amber-600 text-white rounded-br-none'
                      : 'bg-stone-800 text-stone-200 rounded-bl-none border border-stone-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-800 p-3 rounded-2xl rounded-bl-none border border-stone-700">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-stone-500 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-stone-500 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-stone-500 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-stone-800 border-t border-stone-700">
            <div className="flex gap-2 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about our beans..."
                className="w-full bg-stone-950 border border-stone-600 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder-stone-500"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputText.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-amber-500 hover:text-amber-400 disabled:opacity-50 disabled:hover:text-amber-500 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { sendMessageToBarista } from '../services/geminiService';
import { ChatMessage } from '../types';

export const VirtualBarista: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to Siphon. Curious about our halogen brew method or need a recommendation?", timestamp: Date.now() }
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

    // Create history for API (excluding the message we are about to send)
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
      {/* Floating Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 border border-white/10 ${
          isOpen 
            ? 'bg-coffee-800 rotate-90 text-stone-400' 
            : 'bg-amber-700 text-white hover:bg-amber-600 hover:scale-110 hover:shadow-amber-900/50'
        }`}
        aria-label="Toggle Virtual Barista"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} fill="currentColor" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 md:right-8 z-40 w-[90vw] md:w-96 h-[500px] max-h-[70vh] bg-coffee-900/90 backdrop-blur-xl border border-stone-700/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up ring-1 ring-white/5">
          {/* Header */}
          <div className="bg-gradient-to-r from-coffee-950 to-coffee-900 p-4 flex items-center gap-4 border-b border-stone-800">
            <div className="w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center border border-amber-700/30">
              <Sparkles size={18} className="text-amber-500" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-stone-100 text-lg tracking-wide">AI Barista</h3>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest">Siphon Intelligence</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-transparent">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-lg ${
                    msg.role === 'user'
                      ? 'bg-amber-700 text-white rounded-2xl rounded-br-sm'
                      : 'bg-coffee-800 text-stone-200 rounded-2xl rounded-bl-sm border border-stone-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-coffee-800 p-4 rounded-2xl rounded-bl-sm border border-stone-700">
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-amber-500/50 rounded-full animate-pulse"></span>
                    <span className="w-1.5 h-1.5 bg-amber-500/50 rounded-full animate-pulse delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-amber-500/50 rounded-full animate-pulse delay-150"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-coffee-950 border-t border-stone-800">
            <div className="flex gap-2 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about beans, brewing, or food..."
                className="w-full bg-coffee-900 border border-stone-700 rounded-lg py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700/50 transition-all placeholder-stone-600"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputText.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-amber-600 hover:text-amber-500 disabled:opacity-30 disabled:hover:text-amber-600 transition-colors"
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
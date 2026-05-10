import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getAIResponse } from '../../services/gemini';

export default function Chat() {
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: "Hello! I'm Bloom, your supportive pregnancy companion. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const history = messages.map(m => ({ 
      role: m.role, 
      parts: [{ text: m.text }] 
    }));

    const response = await getAIResponse(userMessage, history);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto bg-slate-900 overflow-hidden relative shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full -mr-32 -mt-32 blur-[100px] pointer-events-none"></div>
      
      <header className="p-6 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 shrink-0 z-20 flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg shadow-pink-500/20">
              <Bot size={22} className="text-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-slate-900 animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-sm font-bold text-white tracking-widest uppercase">
              Bloom AI
            </h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Always here to help</p>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer">
           <User size={16} />
        </div>
      </header>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-8 scroll-smooth z-10"
      >
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                y: 20, 
                rotateX: m.role === 'user' ? -10 : 10,
                scale: 0.9 
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                scale: 1 
              }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] px-6 py-4 rounded-[2rem] leading-relaxed text-sm shadow-xl ${
                m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none shadow-blue-900/40 relative' 
                  : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700/50 relative'
              }`}>
                {m.text}
                <div className={`absolute top-0 ${m.role === 'user' ? 'right-0 -mr-1' : 'left-0 -ml-1'} w-3 h-3 ${m.role === 'user' ? 'bg-blue-600' : 'bg-slate-800'} transform rotate-45`}></div>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-slate-800/30 px-6 py-4 rounded-[2rem] rounded-tl-none border border-slate-700/20 flex items-center gap-3 text-slate-500 shadow-sm">
                <Loader2 size={16} className="animate-spin text-pink-500" />
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Thinking...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-6 pb-28 md:pb-24 bg-slate-900 z-10">
        <div className="relative group">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask about symptoms..."
            className="w-full bg-slate-800/50 text-white border border-slate-700 rounded-[2rem] px-6 py-4 pr-16 outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all text-sm shadow-inner min-h-[56px] max-h-32 resize-none"
            rows={1}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-pink-500 text-white shadow-lg transition-all hover:bg-pink-600 active:scale-90 disabled:opacity-50 flex items-center justify-center"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

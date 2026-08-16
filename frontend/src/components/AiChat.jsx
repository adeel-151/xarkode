import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, role: 'bot', text: 'Hi! I am the XarKode AI assistant. How can I help you scale today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = { id: Date.now(), role: 'user', text: input };
    setMessages((prev) => [...prev, newMsg]);
    setInput('');
    setIsTyping(true);

    // Mock AI Response
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          role: 'bot',
          text: 'Thanks for reaching out! A real human from the XarKode team will review your message. Can I help you calculate a project estimate or direct you to our portfolio?'
        }
      ]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 flex w-80 flex-col overflow-hidden rounded-2xl border border-ink-600 bg-ink-800 shadow-2xl sm:w-96"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-ink-700 bg-ink-900 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-teal to-brand-blue text-ink-900">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">XarKode AI</h3>
                  <p className="text-xs text-brand-teal">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-muted-2 transition-colors hover:bg-ink-700 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex h-80 flex-col gap-4 overflow-y-auto p-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex max-w-[85%] items-start gap-2 ${
                    msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'
                  }`}
                >
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                      msg.role === 'user' ? 'bg-ink-600 text-white' : 'bg-brand-teal text-ink-900'
                    }`}
                  >
                    {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-2 text-sm ${
                      msg.role === 'user'
                        ? 'rounded-tr-sm bg-gradient-to-br from-brand-teal to-brand-blue text-ink-900'
                        : 'rounded-tl-sm bg-ink-700 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex max-w-[85%] self-start items-start gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-teal text-ink-900">
                    <Bot size={12} />
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-ink-700 px-4 py-3">
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="h-1.5 w-1.5 rounded-full bg-brand-teal/60" />
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="h-1.5 w-1.5 rounded-full bg-brand-teal/60" />
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="h-1.5 w-1.5 rounded-full bg-brand-teal/60" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="border-t border-ink-700 bg-ink-900 p-3">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full rounded-full border border-ink-600 bg-ink-800 py-2 pl-4 pr-10 text-sm text-white placeholder-muted-2 focus:border-brand-teal focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal text-ink-900 transition-transform disabled:opacity-50 disabled:hover:scale-100 hover:scale-105"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-brand-teal to-brand-blue text-ink-900 shadow-[0_8px_32px_-8px_rgba(46,230,197,0.6)]"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}

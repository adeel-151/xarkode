import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

function getBotResponse(input) {
  const text = input.toLowerCase();
  if (text.includes('price') || text.includes('cost') || text.includes('estimate') || text.includes('quote')) {
    return "Our projects typically start at $5,000 for standard web development and can go up to $50k+ for full SaaS and AI integrations. You can get a precise estimate on our /quote page!";
  }
  if (text.includes('hi') || text.includes('hello') || text.includes('hey')) {
    return "Hello there! I'm the XarKode AI. I can answer questions about our services, pricing, or direct you to our portfolio. What would you like to know?";
  }
  if (text.includes('ai') || text.includes('automation')) {
    return "We specialize in AI & Automations! We build custom AI tools, smart workflow automations, and integrate LLMs directly into your business processes to save you hours every week.";
  }
  if (text.includes('service') || text.includes('offer')) {
    return "We offer Web Development, App Development, SaaS Architecture, Graphic & UI/UX Design, and AI & Automation Systems. Basically, the full ecosystem.";
  }
  if (text.includes('portfolio') || text.includes('work') || text.includes('case study')) {
    return "We've delivered massive ROI for companies like TechNova and Yopavve. Check out our 'Work' section to see the real metrics!";
  }
  return "That's an interesting question! Since I'm an AI, I recommend talking to a real human from the XarKode team. Head over to our Contact page to send them a message!";
}

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
    if (!input.trim() || isTyping) return;

    const userText = input;
    const newMsg = { id: Date.now(), role: 'user', text: userText };
    setMessages((prev) => [...prev, newMsg]);
    setInput('');
    setIsTyping(true);

    const fullResponse = getBotResponse(userText);
    
    // Simulate short network delay before starting to stream
    setTimeout(() => {
      setIsTyping(false);
      const botMsgId = Date.now() + 1;
      setMessages((prev) => [...prev, { id: botMsgId, role: 'bot', text: '' }]);
      
      // Real-time streaming effect
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < fullResponse.length) {
          const char = fullResponse[currentIndex]; // Capture character to avoid closure issues
          setMessages((prev) => 
            prev.map(msg => 
              msg.id === botMsgId ? { ...msg, text: msg.text + char } : msg
            )
          );
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 20); // 20ms per character for fast typing feel
    }, 500);
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
            className="mb-4 flex w-[22rem] flex-col overflow-hidden rounded-2xl border border-ink-600 bg-ink-800 shadow-2xl sm:w-96"
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
                    className={`rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'rounded-tr-sm bg-gradient-to-br from-brand-teal to-brand-blue text-ink-900 font-medium'
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
                  disabled={!input.trim() || isTyping}
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

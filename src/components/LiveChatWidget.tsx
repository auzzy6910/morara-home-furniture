import { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  time: string;
}

const quickReplies = [
  'What are your delivery options?',
  'Do you offer assembly services?',
  'What is your return policy?',
  'I need help choosing furniture',
];

const botResponses: Record<string, string> = {
  'delivery': 'We offer free delivery on orders over KSh 50,000 within Nairobi. Other areas may have additional charges. Delivery typically takes 3-5 business days.',
  'assembly': 'Yes! We offer professional assembly services for all our furniture. Our team will set everything up in your home at no extra cost for orders over KSh 30,000.',
  'return': 'We have a 30-day return policy. Items must be in their original condition. Please visit our Returns page for more details or contact us to initiate a return.',
  'choosing': 'I\'d love to help! Tell me about the room you\'re furnishing - the size, your style preference, and budget range. You can also visit our Size Guide page for room planning tips.',
  'default': 'Thank you for your message! Our team will get back to you shortly. For immediate assistance, you can also call us at +254 700 000 000.',
};

function getBotResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes('deliver')) return botResponses['delivery'];
  if (lower.includes('assembl') || lower.includes('setup') || lower.includes('set up')) return botResponses['assembly'];
  if (lower.includes('return') || lower.includes('refund')) return botResponses['return'];
  if (lower.includes('help') || lower.includes('choos') || lower.includes('recommend')) return botResponses['choosing'];
  return botResponses['default'];
}

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: 'Hello! Welcome to Morara Home Furniture. How can I help you today?',
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
      time: now,
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: Date.now() + 1,
        text: getBotResponse(text),
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 hover:scale-110 transition-all duration-300"
          aria-label="Open live chat"
        >
          <MessageCircle size={26} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border dark:border-gray-700 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-red-600 text-white p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Morara Support</h4>
                <p className="text-xs text-red-200">Online - Ready to help</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-end gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                    msg.sender === 'user' ? 'bg-red-100 dark:bg-red-900' : 'bg-gray-100 dark:bg-gray-700'
                  }`}>
                    {msg.sender === 'user' ? <User size={12} className="text-red-600" /> : <Bot size={12} className="text-gray-600 dark:text-gray-300" />}
                  </div>
                  <div className={`px-3 py-2 rounded-2xl text-sm ${
                    msg.sender === 'user'
                      ? 'bg-red-600 text-white rounded-br-sm'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-sm'
                  }`}>
                    <p>{msg.text}</p>
                    <p className={`text-[10px] mt-1 ${msg.sender === 'user' ? 'text-red-200' : 'text-gray-400'}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5 shrink-0">
              {quickReplies.map(reply => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                  className="text-xs bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2.5 py-1.5 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors border border-red-200 dark:border-red-700"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t dark:border-gray-700 flex items-center gap-2 shrink-0">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
              className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              onClick={() => sendMessage(input)}
              className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

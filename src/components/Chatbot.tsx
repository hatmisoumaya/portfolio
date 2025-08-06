'use client';

import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const toggleChat = () => setIsOpen((prev) => !prev);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setChat((prev) => [...prev, { role: 'user', text: message }]);
    setMessage('');
    setLoading(true);

    try {
      const res = await fetch('https://portfolio-backend-bl1i.onrender.com/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setChat((prev) => [...prev, { role: 'bot', text: data.response }]);
    } catch (err) {
      console.error('Error:', err);
      setChat((prev) => [
        ...prev,
        { role: 'bot', text: t('chatbot.error') },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#6B79BF] text-white shadow-lg hover:scale-105 transition"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] h-[400px] max-w-[90%] bg-white dark:bg-neutral-900 border dark:border-black rounded-xl shadow-xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between dark:text-white px-4 py-3 border-b dark:border-black bg-[#f6f7fb] dark:bg-neutral-800">
            <h3 className="font-semibold text-sm">{t('chatbot.title')}</h3>
            <button onClick={toggleChat} className="text-sm hover:opacity-60">
              {t('chatbot.close')}
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-2 max-h-80">
            {chat.map((msg, i) => (
              <div key={i} className={`text-sm ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span
                  className={`inline-block px-3 py-2 rounded-xl max-w-[85%] ${
                    msg.role === 'user'
                      ? 'bg-blue-100'
                      : 'bg-gray-100 dark:bg-gray-700 text-black dark:text-gray-200'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}

            {loading && (
              <div className="text-sm text-left">
                <span className="inline-block px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-black dark:text-gray-200 max-w-[85%] animate-pulse">
                  💬 {t('chatbot.thinking')}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 dark:border-black px-4 py-3 border-t">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t('chatbot.placeholder')}
              className="flex-1 px-4 py-2 border dark:border-black rounded-full text-sm bg-white dark:bg-neutral-800"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="p-2 bg-primary text-white rounded-full hover:bg-primary-dark transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

import { useState } from 'react';
import Chatbot from './Chatbot';
import { MessageSquare } from 'lucide-react'; // Or use your current icon

const FloatingChat = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Chat button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-white  to-[#6366f1] p-3 rounded-full shadow-lg text-white hover:bg-primary-dark transition"
      >
        <MessageSquare className="w-5 h-5" />
      </button>

      {/* Chat widget */}
      {open && (
        <div className="fixed bottom-20  w-80 z-40 bg-white dark:bg-neutral-900 border shadow-lg rounded-xl p-3">
          <div className="flex justify-between items-center mb-2">
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600">
              ✕
            </button>
          </div>
          <Chatbot />
        </div>
      )}
    </div>
  );
};

export default FloatingChat;

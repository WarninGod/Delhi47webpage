import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_DETAILS, WHATSAPP_MESSAGE } from '../constants';

const WhatsAppBtn: React.FC = () => {
  const whatsappUrl = `https://wa.me/91${BUSINESS_DETAILS.phoneNumbers.main}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group flex items-center gap-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="hidden md:block font-bold pr-2">Chat with us</span>
    </a>
  );
};

export default WhatsAppBtn;
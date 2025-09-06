
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const FloatingWhatsAppButton: React.FC = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo, saya tertarik dengan mobil Suzuki. Bisa minta informasinya?')}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-110 z-40"
      aria-label="Chat on WhatsApp"
    >
      <img src="https://i.imghippo.com/files/TXv2811Gh.png" alt="WhatsApp" className="w-10 h-10" />
    </a>
  );
};

export default FloatingWhatsAppButton;
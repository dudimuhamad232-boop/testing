
import React from 'react';
import { INSTAGRAM_URL, TIKTOK_URL, WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">PT. Nusantara Jaya Sentosa</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              PT Nusantara Jaya Sentosa (NJS) adalah Main Dealer resmi mobil Suzuki di wilayah Jawa Barat sejak 1986. Kami menyediakan penjualan mobil baru, layanan purna jual lengkap termasuk suku cadang asli, servis bengkel, perbaikan body repair, konsultasi kredit, dan test drive. Komitmen kami adalah memberikan pelayanan profesional dan kepuasan pelanggan.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Layanan</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Penjualan Mobil Suzuki</li>
              <li>Servis & Suku Cadang</li>
              <li>Body & Paint Repair</li>
              <li>Konsultasi Kredit</li>
              <li>Test Drive</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
            <div className="space-y-4">
               <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                <img src="https://i.imghippo.com/files/TXv2811Gh.png" alt="WhatsApp" className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white">{'0' + WHATSAPP_NUMBER.slice(2)}</span>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                <img src="https://i.imghippo.com/files/DqQe4772yqs.png" alt="Instagram" className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white">@suzukibandung.co</span>
              </a>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                <img src="https://i.imghippo.com/files/DM1410mcc.png" alt="TikTok" className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white">@suzukibandung.co</span>
              </a>
            </div>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Suzuki Bandung | NJS Bandung. All Rights Reserved.</p>
          <p className="mt-1">Powered by PT. Nusantara Jaya Sentosa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
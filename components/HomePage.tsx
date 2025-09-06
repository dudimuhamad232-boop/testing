import React from 'react';
import { CARS_DATA, WHATSAPP_NUMBER, INSTAGRAM_URL, TIKTOK_URL } from '../constants';
import CarCard from './CarCard';
import KeyFeatures from './KeyFeatures';
import HandoverGallery from './HandoverGallery';
import { Car } from '../types';

interface HomePageProps {
  onSelectCar: (car: Car) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectCar }) => {
  const handleOfferClick = () => {
    const message = 'Halo, saya tertarik dengan penawaran mobil Suzuki. Bisa minta informasinya?';
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };
  
  const socialLinks = [
    {
      name: 'WhatsApp',
      handle: '0813-1890-2428',
      url: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo, saya ingin menanyakan informasi lebih lanjut mengenai mobil Suzuki.')}`,
      icon: 'https://i.imghippo.com/files/TXv2811Gh.png',
    },
    {
      name: 'Instagram',
      handle: '@suzukibandung.co',
      url: INSTAGRAM_URL,
      icon: 'https://i.imghippo.com/files/DqQe4772yqs.png',
    },
    {
      name: 'TikTok',
      handle: '@suzukibandung.co',
      url: TIKTOK_URL,
      icon: 'https://i.imghippo.com/files/DM1410mcc.png',
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fcontents%2Fhomepage%2Fbanner%2Fdesktop%2Fautomobiledesktoppvers_1725006834238_1730787847460.png&w=1080&q=75" 
          alt="Suzuki Cars" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-50"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 animate-fade-in-up">Temukan Mobil Suzuki Impian Anda</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">Penawaran Terbaik, Layanan Profesional, dan Kepuasan Terjamin di Suzuki Bandung.</p>
          <button 
            onClick={handleOfferClick}
            className="bg-suzuki-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400 animate-pulse-slow"
          >
            Dapatkan Penawaran
          </button>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 sm:py-20 animate-fade-in-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Hubungi Sales & Ikuti Kami</h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">Siap membantu Anda setiap saat melalui platform favorit Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl dark:shadow-none dark:border dark:border-gray-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <img src={link.icon} alt={link.name} className="w-8 h-8 mr-4" />
                <div className="flex-grow">
                  <p className="font-bold text-lg text-gray-800 dark:text-white">{link.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{link.handle}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 dark:text-gray-500 group-hover:text-suzuki-blue transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* Key Features Section */}
      <KeyFeatures />

      {/* Car Grid Section */}
      <section id="pricelist" className="py-16 sm:py-24 animate-fade-in-up bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">Daftar Mobil Suzuki Bandung</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Pilih model yang paling sesuai dengan gaya hidup Anda.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARS_DATA.map((car) => (
              // FIX: Removed onSelect prop as it's not defined on CarCard
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Handover Gallery Section */}
      <HandoverGallery />

    </div>
  );
};

export default HomePage;
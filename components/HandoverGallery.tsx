import React from 'react';
import { HANDOVER_IMAGES } from '../constants';

const HandoverGallery: React.FC = () => {
  const duplicatedImages = [...HANDOVER_IMAGES, ...HANDOVER_IMAGES];

  return (
    <section className="py-16 sm:py-24 bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Galeri Penyerahan Unit</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Momen kebahagiaan pelanggan setia kami.</p>
        </div>
      </div>

      <div className="w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
          {duplicatedImages.map((src, index) => (
            <li key={index} className="flex-shrink-0">
              <img 
                src={src} 
                alt={`Handover ${index + 1}`} 
                className="h-52 w-auto rounded-lg shadow-lg object-contain pointer-events-none"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HandoverGallery;
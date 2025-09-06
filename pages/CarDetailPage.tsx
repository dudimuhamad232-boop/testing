import React, { useState } from 'react';
import { Car, CarColor } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import { CarIcon, CreditCardIcon } from '../components/icons';

interface CarDetailPageProps {
  car: Car;
}

const CarDetailPage: React.FC<CarDetailPageProps> = ({ car }) => {
  const [selectedColorGroupIndex, setSelectedColorGroupIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<CarColor>(car.colorGroups[0].colors[0]);

  const selectedColorGroup = car.colorGroups[selectedColorGroupIndex];

  const handleColorGroupChange = (index: number) => {
    setSelectedColorGroupIndex(index);
    setSelectedColor(car.colorGroups[index].colors[0]);
  };
  
  const handleColorSelect = (color: CarColor) => {
    setSelectedColor(color);
  };
  
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });
  
  const handleContactClick = () => {
    const message = `Halo, saya tertarik dengan Suzuki ${car.name}. Bisa minta informasinya?`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <a
          href="#/"
          className="mb-8 text-suzuki-blue dark:text-blue-400 hover:underline flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Daftar Mobil
        </a>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image and Color Section */}
            <div className="p-6 md:p-8">
              <div className="flex justify-center items-center mb-6 bg-gray-50 dark:bg-gray-700/40 rounded-lg p-4 h-[28rem]">
                <img
                  src={selectedColor.imageUrl}
                  alt={`${car.name} - ${selectedColor.name}`}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
              
              <section aria-labelledby="color-selection-heading">
                <h3 id="color-selection-heading" className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Pilihan Warna</h3>
                
                {/* Color Group Selector */}
                {car.colorGroups.length > 1 && (
                   <div className="mb-4">
                    <label htmlFor="color-group-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Varian:</label>
                    <select
                      id="color-group-select"
                      value={selectedColorGroupIndex}
                      onChange={(e) => handleColorGroupChange(parseInt(e.target.value, 10))}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-suzuki-blue/50 focus:border-suzuki-blue dark:text-white transition-colors duration-200"
                    >
                      {car.colorGroups.map((group, index) => (
                        <option key={index} value={index}>{group.variantGroup}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Color Swatches */}
                 <div className="mt-6 bg-gray-50 dark:bg-gray-700/40 p-4 rounded-lg">
                   <h4 className="text-base font-medium text-gray-600 dark:text-gray-300 mb-3">
                     Warna Terpilih: <span className="font-semibold text-gray-800 dark:text-white">{selectedColor.name}</span>
                   </h4>
                   <div className="flex flex-wrap gap-3">
                     {selectedColorGroup.colors.map((color) => (
                       <button
                         key={color.name}
                         onClick={() => handleColorSelect(color)}
                         className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 p-1 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-suzuki-blue dark:focus:ring-offset-gray-800
                           ${selectedColor.name === color.name 
                             ? 'border-suzuki-red shadow-lg' 
                             : 'border-transparent hover:border-suzuki-blue/50'}`}
                         title={color.name}
                         aria-label={`Pilih warna ${color.name}`}
                         aria-pressed={selectedColor.name === color.name}
                       >
                         <img src={color.imageUrl} alt={color.name} className="w-full h-full object-cover rounded-md" />
                         {selectedColor.name === color.name && (
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                         )}
                       </button>
                     ))}
                   </div>
                </div>
              </section>

              {/* CTA Buttons */}
              <div className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href="#/kredit"
                      className="w-full flex items-center justify-center bg-suzuki-blue text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-800 transition-all duration-300"
                    >
                      <CreditCardIcon className="w-5 h-5 mr-2" />
                      Simulasi Kredit
                    </a>
                    <a
                      href="#/test-drive"
                      className="w-full flex items-center justify-center bg-gray-700 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-600 transition-all duration-300"
                    >
                      <CarIcon className="w-5 h-5 mr-2" />
                      Test Drive
                    </a>
                </div>
                 <button
                    onClick={handleContactClick}
                    className="mt-4 w-full bg-suzuki-red text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <img src="https://i.imghippo.com/files/TXv2811Gh.png" alt="WhatsApp" className="w-6 h-6 mr-2" />
                    Hubungi via WhatsApp
                  </button>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-6 md:p-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">{car.name}</h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{car.description}</p>
              
              <div className="mt-8 space-y-6">
                {/* Variants Card */}
                <div className="bg-gray-50 dark:bg-gray-700/40 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Daftar Harga</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="border-b border-gray-200 dark:border-gray-600">
                        <tr>
                          <th scope="col" className="pb-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Tipe</th>
                          <th scope="col" className="pb-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Harga</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {car.variants.map(variant => (
                          <tr key={variant.type}>
                            <td className="py-3 pr-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{variant.type}</td>
                            <td className="py-3 pl-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 text-right font-semibold">{formatter.format(variant.price)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Specifications Card */}
                <div className="bg-gray-50 dark:bg-gray-700/40 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Spesifikasi Utama</h2>
                  <ul className="space-y-3">
                    {car.specifications.map(spec => (
                      <li key={spec.key} className="flex justify-between items-center text-sm border-b border-gray-200 dark:border-gray-700 pb-3 last:border-b-0">
                        <span className="font-medium text-gray-600 dark:text-gray-400">{spec.key}</span>
                        <span className="font-semibold text-gray-800 dark:text-white text-right">{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Interior Features Card */}
                {car.interiorImageUrl && car.interiorFeatures && (
                  <div className="bg-gray-50 dark:bg-gray-700/40 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Fitur Interior</h2>
                    <img 
                      src={car.interiorImageUrl} 
                      alt={`${car.name} Interior`}
                      className="w-full rounded-lg shadow-md mb-6"
                      loading="lazy"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                      {car.interiorFeatures.map(feature => (
                        <div key={feature.title} className="bg-white dark:bg-gray-800/60 p-4 rounded-lg">
                          <h4 className="font-bold text-gray-800 dark:text-white">{feature.title}</h4>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;

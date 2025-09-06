import React, { useState } from 'react';
import { CARS_DATA, WHATSAPP_NUMBER } from '../constants';
import { Car } from '../types';

const CreditSimulationPage: React.FC = () => {
  const [nama, setNama] = useState('');
  const [unit, setUnit] = useState(CARS_DATA[0].id);
  const [selectedCar, setSelectedCar] = useState<Car>(CARS_DATA[0]);
  const [tipe, setTipe] = useState(CARS_DATA[0].variants[0].type);
  const [dp, setDp] = useState('');
  const [tenor, setTenor] = useState('1');

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const carId = e.target.value;
    const car = CARS_DATA.find(c => c.id === carId);
    if (car) {
      setUnit(carId);
      setSelectedCar(car);
      setTipe(car.variants[0].type);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo, saya ingin mengajukan simulasi kredit.
Nama: ${nama}
Unit: ${selectedCar.name}
Tipe: ${tipe}
DP: ${dp}
Tenor: ${tenor} tahun

Mohon bantuannya untuk perhitungannya. Terima kasih.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const inputStyles = "w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-suzuki-blue/50 focus:border-suzuki-blue dark:text-white transition-colors duration-200";

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-suzuki-blue dark:text-blue-400">Simulasi Kredit</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Isi form di bawah ini untuk mendapatkan perhitungan kredit terbaik.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nama" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama Lengkap</label>
              <input type="text" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} required className={inputStyles} />
            </div>
            <div>
              <label htmlFor="unit" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Unit Mobil</label>
              <select id="unit" value={unit} onChange={handleUnitChange} className={inputStyles}>
                {CARS_DATA.map(car => <option key={car.id} value={car.id}>{car.name}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="tipe" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tipe</label>
              <select id="tipe" value={tipe} onChange={(e) => setTipe(e.target.value)} className={inputStyles}>
                {selectedCar.variants.map(variant => <option key={variant.type} value={variant.type}>{variant.type}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="dp" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Down Payment (DP)</label>
              <input type="number" id="dp" placeholder="Contoh: 50000000" value={dp} onChange={(e) => setDp(e.target.value)} required className={inputStyles} />
            </div>
            <div>
              <label htmlFor="tenor" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tenor (Tahun)</label>
              <select id="tenor" value={tenor} onChange={(e) => setTenor(e.target.value)} className={inputStyles}>
                {Array.from({ length: 8 }, (_, i) => i + 1).map(year => <option key={year} value={year}>{year} tahun</option>)}
              </select>
            </div>
            <button type="submit" className="w-full bg-suzuki-red text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
              Kirim via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreditSimulationPage;

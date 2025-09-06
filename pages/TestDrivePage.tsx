import React, { useState } from 'react';
import { CARS_DATA, WHATSAPP_NUMBER } from '../constants';

const TestDrivePage: React.FC = () => {
  const [nama, setNama] = useState('');
  const [unit, setUnit] = useState(CARS_DATA[0].name);
  const [tanggal, setTanggal] = useState('');
  const [alamat, setAlamat] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo, saya ingin menjadwalkan test drive.
Nama: ${nama}
Unit: ${unit}
Tanggal: ${tanggal}
Alamat: ${alamat}

Mohon konfirmasinya. Terima kasih.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };
  
  const inputStyles = "w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-suzuki-blue/50 focus:border-suzuki-blue dark:text-white transition-colors duration-200";

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-suzuki-blue dark:text-blue-400">Jadwalkan Test Drive</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Rasakan langsung pengalaman berkendara dengan mobil Suzuki pilihan Anda.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nama" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama Lengkap</label>
              <input type="text" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} required className={inputStyles} />
            </div>
            <div>
              <label htmlFor="unit" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Unit Mobil</label>
              <select id="unit" value={unit} onChange={(e) => setUnit(e.target.value)} className={inputStyles}>
                {CARS_DATA.map(car => <option key={car.id} value={car.name}>{car.name}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tanggal Test Drive</label>
              <input 
                type="text" 
                id="tanggal" 
                value={tanggal} 
                onChange={(e) => setTanggal(e.target.value)} 
                placeholder="Isi tanggal yang Anda inginkan"
                required 
                className={inputStyles} />
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Mohon isi tanggal beserta waktu. Contoh: 25 Desember 2024, jam 14:00.
              </p>
            </div>
            <div>
              <label htmlFor="alamat" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Alamat Lengkap</label>
              <textarea id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} rows={4} required className={inputStyles}></textarea>
            </div>
            <button type="submit" className="w-full bg-suzuki-blue text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
              Kirim via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestDrivePage;

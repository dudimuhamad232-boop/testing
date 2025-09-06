import React from 'react';
import { TagIcon, CarIcon, CreditCardIcon, BriefcaseIcon } from './icons';

const features = [
  {
    icon: TagIcon,
    title: 'Promo Terbaik',
    description: 'Dapatkan penawaran dan hitungan harga terbaik untuk mobil Suzuki impian Anda.',
    color: 'text-suzuki-red',
    bgColor: 'bg-red-100 dark:bg-red-900/50',
  },
  {
    icon: CarIcon,
    title: 'Test Drive di Rumah',
    description: 'Kami siap datang ke lokasi Anda untuk sesi test drive gratis tanpa repot.',
    color: 'text-suzuki-blue',
    bgColor: 'bg-blue-100 dark:bg-blue-900/50',
  },
  {
    icon: CreditCardIcon,
    title: 'Pembayaran Fleksibel',
    description: 'Tersedia opsi cash, kredit, hingga tukar tambah dengan mobil dari semua merek.',
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/50',
  },
  {
    icon: BriefcaseIcon,
    title: 'Layanan Komersial',
    description: 'Melayani pembelian fleet, COP, custom box, hingga unit ambulans.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-100 dark:bg-orange-900/50',
  },
];

const KeyFeatures: React.FC = () => {
  return (
    <section className="pt-8 sm:pt-12 pb-16 sm:pb-20 animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Keunggulan Layanan Kami</h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">Komitmen kami untuk kepuasan dan kemudahan Anda.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${feature.bgColor}`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-800 dark:text-gray-100">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
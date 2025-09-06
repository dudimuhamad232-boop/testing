import React from 'react';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  const startingPrice = Math.min(...car.variants.map(v => v.price));

  return (
    <a 
      href={`#/mobil/${car.id}`}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-none dark:border dark:border-gray-700 overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-lg dark:hover:shadow-suzuki-blue/20 transition-all duration-300 group block"
    >
      <img className="w-full h-48 object-cover" src={car.image} alt={car.name} loading="lazy" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{car.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Mulai dari</p>
        <p className="text-xl font-semibold text-suzuki-red mt-1">{formatter.format(startingPrice)}</p>
        <div className="mt-4 w-full bg-suzuki-blue text-white font-bold py-2 px-4 rounded-lg group-hover:bg-suzuki-red transition-colors duration-300 text-center">
          Lihat Detail
        </div>
      </div>
    </a>
  );
};

export default CarCard;

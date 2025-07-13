import React from 'react';
import pdchData from '../data/pdch-data.json';

const PDChPloskosti: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">ПДЧ плоскости</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pdchData.products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-500 font-bold">{product.price}</span>
                  <button className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition">
                    Поръчай
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PDChPloskosti;
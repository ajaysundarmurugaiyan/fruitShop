import React from 'react';
import * as images from '../assets';

const Fruitscard = ({ fruit }) => {
  return (
    <div className='rounded-lg overflow-hidden shadow-lg transform hover:scale-110 duration-300 relative group'>
      <img 
        src={images[`img${fruit.image}`]} 
        alt={fruit.name} 
        className='w-full h-60 object-cover'

      />
      <div className='flex flex-col items-center my-1 font-body text-slate-500 py-1 space-y-1'>
        <span>{fruit.name}</span>
        <span>₹{fruit.price}</span>
        <span className='text-yellow-400 uppercase text-xs invisible group-hover:visible'>Add to Cart</span>
      </div>
      <span className='absolute top-1 right-3 bg-yellow-300 text-white text-sm border-2 border-yellow-400 rounded-lg p-1'>1% off</span>
    </div>
  );
};

export default Fruitscard;

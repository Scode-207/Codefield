
import React from 'react';
import { CoderProfile } from '../types';

interface CoderCardProps {
  coder: CoderProfile;
  onSelect: (coder: CoderProfile) => void;
}

const CoderCard: React.FC<CoderCardProps> = ({ coder, onSelect }) => {
  return (
    <div 
      className="group relative border-thin border-gray-200 p-8 cursor-pointer hover:border-black transition-all duration-500 bg-white"
      onClick={() => onSelect(coder)}
    >
      <div className="flex justify-between items-start mb-6">
        <img 
          src={coder.avatar} 
          alt={coder.name} 
          className="w-16 h-16 grayscale group-hover:grayscale-0 transition-all duration-700 object-cover"
        />
        <span className="font-cursive text-sm text-gray-400">{coder.rate}</span>
      </div>
      <h3 className="font-serif text-2xl mb-2">{coder.name}</h3>
      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4">{coder.specialty}</p>
      <p className="text-gray-600 text-sm font-light leading-relaxed line-clamp-3">
        {coder.bio}
      </p>
      
      <div className="mt-8 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-widest uppercase font-semibold">View Field Log</span>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
        </svg>
      </div>
    </div>
  );
};

export default CoderCard;

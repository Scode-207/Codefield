
import React from 'react';
import { CoderProfile } from '../types';

interface ProfileModalProps {
  coder: CoderProfile | null;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ coder, onClose }) => {
  if (!coder) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-white/95 backdrop-blur-xl">
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-black hover:opacity-50 transition-opacity"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 overflow-y-auto max-h-[90vh] py-12 scrollbar-hide">
        <div>
          <img src={coder.avatar} alt={coder.name} className="w-full grayscale h-96 object-cover border-thin border-black p-2" />
          <div className="mt-8">
            <h2 className="font-serif text-4xl mb-2">{coder.name}</h2>
            <p className="font-cursive text-xl text-gray-400 mb-6">{coder.specialty}</p>
            <div className="flex space-x-4">
              <div className="text-[10px] tracking-widest uppercase bg-black text-white px-3 py-1">Experience: {coder.experience}</div>
              <div className="text-[10px] tracking-widest uppercase border border-black px-3 py-1">Rate: {coder.rate}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <p className="text-gray-600 font-light leading-relaxed mb-8 italic">"{coder.bio}"</p>
            <h4 className="font-serif text-xl mb-4">Past Contributions</h4>
            <div className="space-y-6">
              {coder.projects.map(proj => (
                <div key={proj.id} className="border-l border-black pl-6 py-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-serif text-lg">{proj.title}</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400">{proj.bounty}</span>
                  </div>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <button className="w-full bg-black text-white py-4 font-serif text-xl hover:bg-neutral-800 transition-colors">
              Initiate Collaboration
            </button>
            <p className="text-center text-[10px] uppercase tracking-widest text-gray-400 mt-4">Direct message via Field-Link</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

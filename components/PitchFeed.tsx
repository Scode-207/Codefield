
import React from 'react';
import { MOCK_PITCHES } from '../constants';

const PitchFeed: React.FC = () => {
  return (
    <div className="relative w-full max-w-[340px] mx-auto h-[600px] bg-neutral-900 rounded-[3rem] border-[10px] border-neutral-900 shadow-2xl overflow-hidden group">
      {/* Inner Screen */}
      <div className="relative w-full h-full bg-black overflow-hidden rounded-[2.2rem]">
        
        {/* Animated Feed Container */}
        <div className="flex flex-col animate-vertical-scroll">
          {/* Loop twice for seamless scrolling */}
          {[...MOCK_PITCHES, ...MOCK_PITCHES].map((pitch, idx) => (
            <div key={`${pitch.id}-${idx}`} className="relative flex-shrink-0 w-full h-[600px] overflow-hidden">
              <img 
                src={pitch.videoThumb} 
                alt={pitch.name} 
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Top Progress Bars (Reel Style) */}
              <div className="absolute top-6 left-4 right-4 flex space-x-1 z-20">
                <div className="h-0.5 flex-1 bg-white/50 overflow-hidden">
                  <div className="h-full bg-white w-1/2"></div>
                </div>
                <div className="h-0.5 flex-1 bg-white/20"></div>
                <div className="h-0.5 flex-1 bg-white/20"></div>
              </div>

              {/* Sidebar Action Buttons */}
              <div className="absolute right-4 bottom-32 flex flex-col space-y-6 items-center z-20">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer border border-white/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="opacity-90">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <span className="text-[10px] text-white mt-1 font-bold">1.2k</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer border border-white/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <span className="text-[10px] text-white mt-1 font-bold">42</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer border border-white/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                  </div>
                  <span className="text-[10px] text-white mt-1 font-bold">Share</span>
                </div>
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-32">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-9 h-9 rounded-full border border-white/30 overflow-hidden bg-neutral-800">
                    <img src={`https://picsum.photos/seed/${pitch.id}/100/100?grayscale`} alt="founder" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl leading-none">{pitch.name}</h4>
                    <p className="text-[9px] uppercase tracking-widest text-neutral-400 mt-1">Founder @ Active Build</p>
                  </div>
                </div>

                <p className="font-cursive text-lg text-neutral-300 mb-3 leading-tight">{pitch.tagline}</p>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed mb-6 line-clamp-2 italic">
                  "{pitch.description}"
                </p>
                
                <button className="w-full bg-white text-black py-4 font-serif text-sm tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors rounded-xl shadow-lg border border-black/10">
                  Join The Sprint
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Static Camera / Notch Overlay */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-neutral-900 rounded-b-[1.5rem] z-30 flex justify-center items-end pb-1.5">
          <div className="w-10 h-1 rounded-full bg-neutral-800"></div>
        </div>
      </div>
      
      {/* Visual Instruction (Floating Side Text) */}
      <div className="absolute -right-36 top-1/2 -translate-y-1/2 hidden xl:block text-left max-w-[120px] pointer-events-none">
        <p className="font-cursive text-2xl text-neutral-400">Find the mission that moves you.</p>
        <div className="w-12 h-[1px] bg-neutral-300 mt-4"></div>
      </div>
    </div>
  );
};

export default PitchFeed;

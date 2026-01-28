
import React from 'react';
import { MOCK_SOCIAL_POSTS } from '../constants';

const StartupSocialFeed: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto h-[600px] bg-neutral-900 rounded-[3rem] border-[8px] border-neutral-900 shadow-2xl overflow-hidden group">
      {/* Inner Screen */}
      <div className="relative w-full h-full bg-white overflow-hidden rounded-[2.2rem] flex flex-col">
        {/* Header */}
        <div className="pt-10 pb-4 px-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div className="flex flex-col">
            <span className="font-serif text-xl">Resolution Pulse</span>
            <span className="text-[8px] uppercase tracking-widest text-neutral-400 font-bold">Capital & Skill Injection</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[8px] font-bold text-neutral-300">LIVE</span>
          </div>
        </div>

        {/* Animated Feed Container */}
        <div className="flex flex-col animate-vertical-scroll">
          {/* Loop twice for seamless scrolling */}
          {[...MOCK_SOCIAL_POSTS, ...MOCK_SOCIAL_POSTS].map((post, idx) => (
            <div key={`${post.id}-${idx}`} className="p-6 border-b border-gray-50 bg-white hover:bg-neutral-50/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center font-serif text-[10px] text-white">
                    {post.founder[0]}
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold tracking-wider flex items-center">
                      {post.founder} <span className="mx-1 opacity-30">•</span> {post.startup}
                    </div>
                    <div className="text-[9px] text-gray-400">{post.time}</div>
                  </div>
                </div>
                {/* Bounty Badge */}
                <div className="text-right">
                  <div className="font-serif text-lg leading-none text-black group-hover:scale-110 transition-transform duration-500">
                    {post.bounty}
                  </div>
                  <div className="text-[7px] uppercase tracking-tighter text-neutral-400 font-bold">Per Solve</div>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="font-serif text-sm leading-relaxed text-gray-800 italic">
                  "{post.problem}"
                </p>
              </div>

              {/* Action Area */}
              <div className="space-y-4">
                <div className="flex justify-between items-center px-1">
                   <div className="text-[9px] text-gray-400 font-light italic">
                    {post.applicants} experts queuing
                  </div>
                  <div className="text-[9px] font-bold text-neutral-300">
                    VALUATION: {post.valuation}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-black text-white text-[9px] px-4 py-2.5 uppercase tracking-widest hover:bg-neutral-800 transition-all active:scale-95 flex items-center justify-center space-x-1">
                    <span>Resolve</span>
                  </button>
                  <button className="border border-black text-black text-[9px] px-4 py-2.5 uppercase tracking-widest hover:bg-black hover:text-white transition-all active:scale-95 flex items-center justify-center space-x-1">
                    <span>Invest</span>
                  </button>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-2">
                <div className="h-[2px] flex-1 bg-black/5 rounded-full overflow-hidden">
                   <div className="h-full bg-black/20 w-1/3 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Static Camera / Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-neutral-900 rounded-b-2xl z-20"></div>

        {/* Bottom Tab Indicator */}
        <div className="h-2 px-12 pb-2 bg-white flex items-center justify-center">
          <div className="w-16 h-1 bg-neutral-100 rounded-full"></div>
        </div>
      </div>
      
      {/* Side Label */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 hidden lg:block text-right max-w-[120px]">
        <p className="font-cursive text-xl text-neutral-400 italic">Bounty Ledgers.</p>
        <div className="w-12 h-[1px] bg-neutral-300 mt-4 ml-auto"></div>
      </div>
    </div>
  );
};

export default StartupSocialFeed;

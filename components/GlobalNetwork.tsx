
import React, { useState, useEffect } from 'react';

const GlobalNetwork: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [interactionType, setInteractionType] = useState<'resolve' | 'fund' | null>(null);

  const startupData = [
    {
      name: "Nexus AI",
      tagline: "Neural Infrastructure",
      roadblock: "Tensor mismatch in inference engine under high concurrency. Latency spike at 10k RPS.",
      bounty: "₹13,200",
      valuation: "$12.5M",
      founder: "Marcus J."
    },
    {
      name: "Verda",
      tagline: "Precision Agritech",
      roadblock: "Broken environment variable in our staging config. Deployment is stuck in a loop.",
      bounty: "₹1,200",
      valuation: "$0.4M",
      founder: "Sarah L."
    },
    {
      name: "Lumina",
      tagline: "Quantum Security",
      roadblock: "Entropy depletion in random number generator. Seeking low-level C++ architect for core optimization.",
      bounty: "₹7,600",
      valuation: "$4.2M",
      founder: "Kenji T."
    }
  ];

  useEffect(() => {
    const cycle = setInterval(() => {
      if (!isInteracting) {
        // Start Interaction
        setTimeout(() => {
          setIsInteracting(true);
          const type = Math.random() > 0.5 ? 'resolve' : 'fund';
          setInteractionType(type);

          // End Interaction & Scroll
          setTimeout(() => {
            setIsInteracting(false);
            setInteractionType(null);
            setActiveIndex((prev) => (prev + 1) % startupData.length);
          }, 2000);
        }, 1000);
      }
    }, 5000);

    return () => clearInterval(cycle);
  }, [isInteracting, startupData.length]);

  return (
    <div className="w-full py-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Animated Discovery Phone */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-[320px] h-[600px] bg-neutral-900 rounded-[3rem] border-[8px] border-neutral-900 shadow-2xl overflow-hidden">
              <div className="relative w-full h-full bg-white flex flex-col overflow-hidden rounded-[2.2rem]">
                
                {/* App Header */}
                <div className="pt-12 pb-4 px-6 border-b border-neutral-50 flex justify-between items-center sticky top-0 bg-white z-20">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-400">Resolution Pulse</span>
                    <span className="font-serif text-lg italic">Active Build Logs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[8px] font-bold text-neutral-300">LIVE</span>
                  </div>
                </div>

                {/* Animated List Container */}
                <div className="flex-1 relative">
                  <div 
                    className="absolute inset-0 transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                  >
                    {startupData.map((startup, idx) => (
                      <div key={idx} className="w-full h-full p-8 flex flex-col justify-center flex-shrink-0">
                        <div className="mb-8">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center font-serif text-[10px] text-white">
                              {startup.founder[0]}
                            </div>
                            <div>
                              <p className="text-[10px] font-bold tracking-widest">{startup.founder}</p>
                              <p className="text-[8px] text-neutral-400 uppercase tracking-tighter">Founder @ {startup.name}</p>
                            </div>
                          </div>
                          
                          <h3 className="font-serif text-3xl mb-1">{startup.name}</h3>
                          <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-300 font-bold mb-6">{startup.tagline}</p>
                          
                          <div className="border-l border-black pl-6 py-2 mb-8">
                            <span className="text-[8px] font-bold text-neutral-300 block mb-2 uppercase tracking-widest">Active Roadblock</span>
                            <p className="font-serif text-base italic leading-relaxed text-neutral-700">
                              "{startup.roadblock}"
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-8">
                            <div>
                              <span className="text-[8px] font-bold text-neutral-300 block mb-1 uppercase tracking-tighter">Bounty</span>
                              <span className="font-serif text-2xl">{startup.bounty}</span>
                            </div>
                            <div>
                              <span className="text-[8px] font-bold text-neutral-300 block mb-1 uppercase tracking-tighter">Valuation</span>
                              <span className="font-serif text-2xl">{startup.valuation}</span>
                            </div>
                          </div>
                        </div>

                        {/* Buttons Area */}
                        <div className="grid grid-cols-2 gap-3 mt-auto">
                          <div className="relative">
                            <button 
                              className={`w-full py-4 text-[9px] uppercase tracking-widest transition-all duration-300 ${interactionType === 'resolve' && activeIndex === idx ? 'bg-green-500 text-white border-green-500' : 'bg-black text-white'}`}
                            >
                              {interactionType === 'resolve' && activeIndex === idx ? 'Applied' : 'Resolve'}
                            </button>
                            {interactionType === 'resolve' && activeIndex === idx && (
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-ping"></div>
                            )}
                          </div>
                          
                          <div className="relative">
                            <button 
                              className={`w-full py-4 text-[9px] uppercase tracking-widest border border-black transition-all duration-300 ${interactionType === 'fund' && activeIndex === idx ? 'bg-black text-white' : 'text-black bg-transparent'}`}
                            >
                              {interactionType === 'fund' && activeIndex === idx ? 'Invested' : 'Fund'}
                            </button>
                            {interactionType === 'fund' && activeIndex === idx && (
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-black rounded-full border-2 border-white animate-ping"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Notch Detail */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-neutral-900 rounded-b-2xl z-30"></div>
                <div className="h-2 px-12 pb-2 bg-white flex items-center justify-center border-t border-neutral-50">
                  <div className="w-12 h-1 bg-neutral-100 rounded-full"></div>
                </div>
              </div>

              {/* Simulated Cursor */}
              {isInteracting && (
                <div 
                  className={`absolute pointer-events-none z-50 w-6 h-6 border-2 border-black rounded-full bg-black/10 transition-all duration-700 ease-in-out ${interactionType === 'resolve' ? 'bottom-24 left-24' : 'bottom-24 left-56'} animate-pulse`}
                  style={{ transform: 'scale(0.8)' }}
                ></div>
              )}
            </div>

            {/* Float Labels */}
            <div className="absolute -right-20 top-20 bg-white border border-neutral-100 p-6 shadow-xl hidden md:block max-w-[150px] -rotate-3 hover:rotate-0 transition-transform">
              <p className="font-cursive text-lg text-neutral-400">Direct injection of skill.</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-12 order-1 lg:order-2">
            <h2 className="font-serif text-6xl md:text-8xl leading-none">The <span className="italic">Resolution</span> Pulse</h2>
            <p className="font-cursive text-3xl text-neutral-400">A ledger of action, not just a social feed.</p>
            
            <div className="space-y-10 max-w-lg">
              <div className="border-l-2 border-black pl-8 transition-colors">
                <h4 className="font-serif text-2xl mb-2">Technical Roadblocks</h4>
                <p className="text-gray-500 font-light leading-relaxed">
                  Startups broadcast their friction in real-time. These aren't posts; they are technical distress signals awaiting an architect's touch.
                </p>
              </div>
              
              <div className="border-l-2 border-neutral-200 pl-8 transition-colors">
                <h4 className="font-serif text-2xl mb-2">Immediate Resolve</h4>
                <p className="text-gray-500 font-light leading-relaxed">
                  Qualified specialists apply to solve specific hurdles with one tap. No resume filtering—just a direct commitment to the build.
                </p>
              </div>

              <div className="border-l-2 border-neutral-100 pl-8 transition-colors">
                <h4 className="font-serif text-2xl mb-2">Flash Fast Investments</h4>
                <p className="text-gray-500 font-light leading-relaxed">
                   Bypass traditional bureaucracy. Invest in real-world solutions across a broad field of startups with high-speed capital injections directly into the source.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-50">
               <p className="font-cursive text-3xl text-neutral-300">Browse. Apply. Invest.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GlobalNetwork;

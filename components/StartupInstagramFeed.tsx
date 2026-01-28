
import React, { useState, useEffect } from 'react';

const StartupInstagramFeed: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const fullText = "Need a systems architect to scale our real-time mesh. Packet loss is critical.";

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    const type = () => {
      const current = isDeleting 
        ? fullText.substring(0, charIndex - 1) 
        : fullText.substring(0, charIndex + 1);
      
      setTypedText(current);

      if (!isDeleting && current === fullText) {
        setTimeout(() => {
          setShowNotification(true);
          setTimeout(() => {
            setShowNotification(false);
            isDeleting = true;
            type();
          }, 3000);
        }, 800);
      } else if (isDeleting && current === '') {
        isDeleting = false;
        charIndex = 0;
        setTimeout(type, 1500);
      } else {
        charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        setTimeout(type, isDeleting ? 25 : 70);
      }
    };

    const timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto h-[600px] bg-neutral-900 rounded-[3rem] border-[8px] border-neutral-900 shadow-2xl overflow-hidden group">
      {/* Inner Screen */}
      <div className="relative w-full h-full bg-white overflow-hidden rounded-[2.2rem] flex flex-col">
        
        {/* Minimalist Header */}
        <div className="pt-12 pb-6 px-6 flex justify-between items-center bg-white z-10">
          <div className="flex flex-col">
            <span className="font-serif text-xl leading-none">Field Log</span>
            <span className="font-cursive text-xs text-neutral-400 mt-1">Live Architectural Pulse</span>
          </div>
          <div className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></div>
          </div>
        </div>

        {/* Card Content Area */}
        <div className="flex-1 px-6 space-y-6 overflow-hidden">
          
          {/* Active Broadcast Card (The Typing Card) */}
          <div className="relative bg-white border border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] transform transition-transform duration-500 hover:translate-y-[-2px]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-neutral-300 italic">Broadcasting Roadblock...</span>
              <span className="text-[8px] uppercase tracking-widest font-bold text-black bg-neutral-50 px-2 py-1">Priority I</span>
            </div>
            
            <div className="min-h-[100px] flex items-center">
              <p className="font-serif text-lg leading-snug text-neutral-800 italic">
                "{typedText}"<span className="inline-block w-[1.5px] h-5 bg-black animate-pulse ml-1 align-middle"></span>
              </p>
            </div>

            <div className="mt-6 flex justify-between items-center border-t border-neutral-50 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border border-white bg-neutral-100 overflow-hidden">
                    <img src={`https://picsum.photos/seed/arch${i}/50/50?grayscale`} alt="avatar" />
                  </div>
                ))}
              </div>
              <span className="text-[9px] text-neutral-400 uppercase tracking-widest font-light">3 Architects Active</span>
            </div>
          </div>

          {/* Background/Stacking Cards */}
          <div className="relative bg-white border border-neutral-100 p-6 opacity-40 blur-[0.5px]">
            <div className="h-4 w-24 bg-neutral-100 mb-4"></div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-neutral-50"></div>
              <div className="h-2 w-2/3 bg-neutral-50"></div>
            </div>
          </div>

          <div className="relative bg-white border border-neutral-100 p-6 opacity-20 blur-[1px]">
             <div className="h-4 w-24 bg-neutral-100 mb-4"></div>
             <div className="h-2 w-full bg-neutral-50"></div>
          </div>
        </div>

        {/* Floating Notification Component */}
        <div className={`absolute top-12 left-6 right-6 transition-all duration-700 ease-in-out transform ${showNotification ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-95'}`}>
          <div className="bg-black text-white p-4 rounded-xl shadow-2xl flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full border border-neutral-700 overflow-hidden flex-shrink-0">
               <img src="https://picsum.photos/seed/elias/100/100?grayscale" alt="avatar" className="grayscale contrast-125" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-bold text-neutral-500 uppercase tracking-[0.4em]">Direct Synthesis</p>
              <p className="text-[11px] font-serif italic truncate mt-0.5">"Elias Thorne: Architecture mapped. Ready to resolve."</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
          </div>
        </div>

        {/* Bottom Tab Bar */}
        <div className="h-20 flex justify-around items-center px-10 border-t border-neutral-50 bg-white">
          <div className="w-1 h-1 rounded-full bg-black"></div>
          <div className="w-5 h-[1px] bg-black"></div>
          <div className="w-1 h-1 rounded-full bg-neutral-200"></div>
        </div>

        {/* Physical Detail: Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-neutral-900 rounded-b-[1.5rem] z-20 flex justify-center items-end pb-1.5">
          <div className="w-10 h-1 rounded-full bg-neutral-800"></div>
        </div>
      </div>
    </div>
  );
};

export default StartupInstagramFeed;

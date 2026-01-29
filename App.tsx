
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProfileModal from './components/ProfileModal';
import WaitlistModal from './components/WaitlistModal';
import PitchFeed from './components/PitchFeed';
import NewsTicker from './components/NewsTicker';
import MechanismFlow from './components/MechanismFlow';
import StartupInstagramFeed from './components/StartupInstagramFeed';
import GlobalNetwork from './components/GlobalNetwork';
import { MOCK_CODERS } from './constants';
import { CoderProfile } from './types';

const App: React.FC = () => {
  const [selectedCoder, setSelectedCoder] = useState<CoderProfile | null>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenWaitlist = () => setIsWaitlistOpen(true);

  return (
    <div className="min-h-screen bg-white selection:bg-neutral-100">
      <Navigation 
        currentPage="" 
        onNavigate={scrollToSection} 
        onJoinWaitlist={handleOpenWaitlist}
      />
      
      <main>
        {/* Section: Hero */}
        <section id="home">
          <Hero 
            onExplore={() => scrollToSection('Vision')} 
            onChallenge={handleOpenWaitlist} 
          />
        </section>

        {/* Section: Vision / The Problem */}
        <section id="vision" className="py-48 px-6 md:px-12 border-t border-gray-50 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 space-y-16">
              <div className="fade-in">
                <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
                  The Gap between <br/><span className="italic">Vibes</span> and <span className="font-cursive text-neutral-400 lowercase">Reality</span>.
                </h2>
                <div className="w-24 h-[1px] bg-black mb-12"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div className="space-y-6">
                  <span className="text-[10px] tracking-[0.5em] uppercase text-gray-400 font-semibold">The Problem</span>
                  <p className="font-serif text-xl leading-relaxed text-gray-800 italic border-l-2 border-black pl-6">
                    "India births 1,200+ startups yearly, but 80% face crippling technical talent gaps as 2M+ skilled grads chase scarce Big Tech jobs via LeetCode amid AI wiping entry roles."
                  </p>
                </div>
                
                <div className="space-y-6 md:mt-24">
                  <span className="text-[10px] tracking-[0.5em] uppercase text-gray-400 font-semibold">The Synthesis</span>
                  <p className="font-serif text-2xl leading-relaxed text-gray-800">
                    We inject <span className="font-cursive">human architecture</span>.
                  </p>
                  <p className="text-gray-500 font-light leading-relaxed">
                    Codefield empowers entry-level engineers sidelined by AI and Big Tech gatekeepers with genuine, paid project experience. Startups gain reliable technical talent without FAANG salary wars or endless recruiting. We bridge the chasm.
                  </p>
                </div>
              </div>
            </div>

            {/* The Animated Instagram-style Phone */}
            <div className="relative order-last lg:order-none">
              <StartupInstagramFeed />
              <div className="absolute -bottom-12 -left-12 lg:block hidden">
                <p className="font-cursive text-2xl text-neutral-300 -rotate-12">From Vibe to Build.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Industry Context (The Noise) */}
        <section className="py-24 border-t border-neutral-50 overflow-hidden bg-neutral-50/10">
          <div className="max-w-5xl mx-auto px-6 mb-12 text-center">
            <h3 className="font-cursive text-3xl text-neutral-300 mb-2 italic">The noise of the machine...</h3>
            <p className="text-[10px] tracking-[0.6em] uppercase text-neutral-400 font-bold">Real skill. Needs real world action.</p>
          </div>
          <NewsTicker />
          <div className="max-w-5xl mx-auto px-6 mt-12 text-center">
             <p className="font-serif text-lg text-neutral-400 italic">...cannot silence human mastery.</p>
          </div>
        </section>

        {/* Section: Network / The Resolution Pulse */}
        <section id="network" className="py-48 px-6 md:px-12 border-t border-gray-50 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <GlobalNetwork />
          </div>
        </section>

        {/* Section: Pitches / The Feed */}
        <section id="pitches" className="py-48 px-6 md:px-12 bg-neutral-50/30 border-t border-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="font-serif text-6xl md:text-8xl leading-none">The <span className="italic">Field</span> Feed</h2>
              <p className="font-cursive text-3xl text-neutral-400">Swipe through the future of work.</p>
              
              <div className="space-y-8 max-w-lg">
                <div className="border-l-2 border-black pl-8">
                  <h4 className="font-serif text-2xl mb-2">Raw Startup Stories</h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    Watch founders share their unfiltered journey and the raw truth of building in the field through vertical video logs.
                  </p>
                </div>
                <div className="border-l-2 border-neutral-200 pl-8">
                  <h4 className="font-serif text-2xl mb-2">The Friction Feed</h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    Every reel highlights a specific technical roadblock. Swipe until you hit the one that needs your architectural edge.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <PitchFeed />
            </div>
          </div>
        </section>

        {/* Section: Philosophy */}
        <section id="philosophy" className="py-48 px-6 md:px-12 border-t border-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="mb-24">
              <h2 className="font-serif text-6xl md:text-8xl leading-tight mb-8">Human Capital <br/><span className="italic">Accelerator.</span></h2>
              <div className="flex items-center space-x-4">
                 <div className="h-[1px] w-20 bg-black"></div>
                 <p className="font-cursive text-3xl text-gray-400">Networking for those who build.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <div className="col-span-1 space-y-8">
                <p className="font-serif text-2xl leading-snug">
                  Capital is abundant. Precision is rare.
                </p>
                <div className="text-gray-400 font-light text-sm tracking-widest uppercase leading-loose">
                  Field Logs. Real Work. Zero Noise.
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 space-y-10">
                <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl">
                  Codefield bypasses the vanity metrics of traditional social media. We provide a space where the quality of your contributions is your only currency.
                </p>
                <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl">
                  By mapping technical debt to architectural mastery, we ensure that every 'swipe' leads to a solution. This is the birth of the technical ledger.
                </p>
                <div className="pt-8">
                  <button onClick={() => scrollToSection('Pitches')} className="text-[11px] uppercase tracking-[0.4em] font-semibold border-b-2 border-black pb-2 hover:text-gray-400 hover:border-gray-200 transition-all">
                    Browse the Field Log
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Mechanism */}
        <section id="mechanism" className="py-48 px-6 md:px-12 border-t border-gray-50 bg-neutral-50/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-32">
              <h2 className="font-serif text-6xl md:text-8xl leading-none mb-8">The <span className="italic">Mechanism</span></h2>
              <div className="flex flex-col items-center">
                 <p className="font-cursive text-3xl text-gray-400">How we accelerate human architecture.</p>
                 <div className="w-1 h-24 bg-black/10 mt-8"></div>
              </div>
            </div>
            
            <MechanismFlow />
          </div>
        </section>
      </main>

      <ProfileModal 
        coder={selectedCoder} 
        onClose={() => setSelectedCoder(null)} 
      />

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />

      <footer className="py-32 border-t border-gray-50 text-center bg-white flex flex-col items-center">
        <div className="text-3xl font-serif mb-6 tracking-tight">Codefield<span className="font-cursive text-lg">.</span></div>
        <div className="text-[10px] tracking-[0.6em] uppercase text-gray-400 max-w-sm mx-auto leading-loose mb-12">
          Absolute Minimalism in Human Collaboration
        </div>
        
        {/* New Contact Section */}
        <div className="max-w-md px-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500 font-medium leading-relaxed">
            Contact <a href="mailto:ksathvik.officials@gmail.com" className="text-black border-b border-black hover:text-neutral-400 hover:border-neutral-400 transition-all">ksathvik.officials@gmail.com</a> for any suggestions or to join our team
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

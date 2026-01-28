
import React from 'react';

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
  onJoinWaitlist: () => void;
  currentPage: string;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, onJoinWaitlist }) => {
  const links = ['Vision', 'Network', 'Pitches', 'Philosophy', 'Mechanism'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-50 px-6 py-8 md:px-12 flex justify-between items-center transition-all duration-500">
      <div 
        className="text-3xl font-serif cursor-pointer hover:opacity-70 transition-opacity tracking-tight"
        onClick={() => onNavigate('Home')}
      >
        Codefield<span className="font-cursive text-sm ml-1 text-gray-400">.</span>
      </div>
      
      <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.4em] font-light">
        {links.map(link => (
          <button
            key={link}
            onClick={() => onNavigate(link)}
            className="transition-all hover:text-black text-gray-400 hover:tracking-[0.5em]"
          >
            {link}
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-6">
        <button 
          onClick={onJoinWaitlist}
          className="text-[10px] uppercase tracking-[0.3em] font-medium border-b border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all"
        >
          Join Waitlist
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

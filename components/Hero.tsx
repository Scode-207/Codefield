
import React from 'react';

interface HeroProps {
  onExplore: () => void;
  onChallenge: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore, onChallenge }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <div className="mb-12 fade-in" style={{ animationDelay: '0.1s' }}>
        <p className="font-cursive text-2xl text-gray-400">
          A quiet space for the exceptional
        </p>
      </div>
      
      <div className="max-w-5xl fade-in" style={{ animationDelay: '0.3s' }}>
        <h1 className="font-serif text-5xl md:text-8xl leading-[1.1] mb-12">
          Solving <span className="relative inline-block">
            problems
            <span className="absolute left-0 top-1/2 w-full h-[2.5px] bg-black/60 -rotate-3"></span>
          </span>
          <br />
          <span className="font-cursive text-4xl md:text-6xl text-neutral-400 block mt-4 md:inline md:ml-4">
            Solving real world problems.
          </span>
        </h1>
      </div>

      <p className="mt-12 text-gray-500 max-w-xl text-lg md:text-xl font-light leading-relaxed fade-in" style={{ animationDelay: '0.5s' }}>
        Find the architecture for your vision with the effortless simplicity of a swipe through the field.
      </p>
      
      <div className="mt-20 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 fade-in" style={{ animationDelay: '0.7s' }}>
        <button 
          onClick={onExplore}
          className="bg-black text-white px-12 py-5 font-serif text-xl hover:bg-neutral-800 transition-all hover:scale-[1.02]"
        >
          View The Field
        </button>
        <button 
          onClick={onChallenge}
          className="border border-black px-12 py-5 font-serif text-xl hover:bg-black hover:text-white transition-all hover:scale-[1.02]"
        >
          I'm interested
        </button>
      </div>

      <div className="absolute bottom-12 animate-bounce opacity-20 hidden md:block">
        <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 2C7.77614 2 8 2.22386 8 2.5V11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.65829 13.0488 7.34171 13.0488 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929V2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

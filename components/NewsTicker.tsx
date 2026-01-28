
import React from 'react';
import { MOCK_AI_NEWS } from '../constants';

const NewsTicker: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-12 bg-white">
      <div className="flex animate-horizontal-scroll space-x-8">
        {/* Triple the list for a really smooth, never-ending loop */}
        {[...MOCK_AI_NEWS, ...MOCK_AI_NEWS, ...MOCK_AI_NEWS].map((news, idx) => (
          <div 
            key={`${news.id}-${idx}`} 
            className="flex-shrink-0 w-[340px] p-8 border border-neutral-100 bg-white hover:border-black transition-all duration-500 group relative"
          >
            {/* Category Tag */}
            <div className="flex justify-between items-start mb-6">
              <span className={`text-[8px] uppercase tracking-[0.3em] font-bold px-2 py-1 ${
                news.category === 'AI Displacement' ? 'bg-red-50 text-red-400' :
                news.category === 'Layoffs' ? 'bg-neutral-900 text-white' :
                news.category === 'Hiring Crisis' ? 'bg-orange-50 text-orange-400' :
                'bg-blue-50 text-blue-400'
              }`}>
                {news.category}
              </span>
              <span className="text-[9px] text-neutral-300 font-medium">{news.date}</span>
            </div>

            {/* Headline */}
            <h5 className="font-serif text-xl leading-snug italic text-neutral-800 mb-8 group-hover:text-black transition-colors">
              "{news.headline}"
            </h5>

            {/* Footer / Link */}
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-50">
              <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-neutral-300">Source</span>
                <span className="text-[10px] font-serif text-neutral-500">{news.source}</span>
              </div>
              <a 
                href={news.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[9px] uppercase tracking-widest font-bold text-black border-b border-black pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Read Log
              </a>
            </div>

            {/* Subtle Alert Indicator */}
            <div className="absolute top-0 right-0 w-1 h-full bg-neutral-50 group-hover:bg-black transition-colors duration-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;

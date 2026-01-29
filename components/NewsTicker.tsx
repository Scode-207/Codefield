
import React, { useState, useEffect } from 'react';
import { NewsHeadline, MOCK_AI_NEWS } from '../constants';

const NEWS_API_KEY = 'b2da199f49254daf87ba9c12da428b10';

const NewsTicker: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsHeadline[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=AI+layoffs+tech+hiring+coding&language=en&sortBy=publishedAt&pageSize=10&apiKey=${NEWS_API_KEY}`
        );
        const data = await response.json();

        if (data.status === 'ok' && data.articles) {
          const mappedNews: NewsHeadline[] = data.articles.map((art: any, index: number) => {
            const title = (art.title || '').toLowerCase();
            let category: NewsHeadline['category'] = 'Market Shift';
            
            if (title.includes('layoff') || title.includes('cut')) category = 'Layoffs';
            else if (title.includes('hiring') || title.includes('job')) category = 'Hiring Crisis';
            else if (title.includes('ai') || title.includes('bot')) category = 'AI Displacement';

            return {
              id: `api-${index}`,
              source: art.source.name,
              headline: art.title,
              description: art.description,
              date: new Date(art.publishedAt).toLocaleDateString('en-US', { 
                day: 'numeric',
                month: 'short', 
                year: 'numeric' 
              }),
              url: art.url,
              category: category
            };
          });
          setNewsItems(mappedNews);
        } else {
          setNewsItems(MOCK_AI_NEWS);
        }
      } catch (error) {
        console.error("News Fetch Error:", error);
        setNewsItems(MOCK_AI_NEWS);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="w-full overflow-hidden py-12 bg-white relative z-10 flex justify-center">
        <div className="flex space-x-8 animate-pulse">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-shrink-0 w-[400px] h-[300px] border border-neutral-50 bg-neutral-50/30"></div>
          ))}
        </div>
      </div>
    );
  }

  const displayItems = newsItems.length > 0 ? newsItems : MOCK_AI_NEWS;

  return (
    <div className="w-full overflow-hidden py-12 bg-white relative z-10">
      <div className="flex animate-horizontal-scroll space-x-8">
        {[...displayItems, ...displayItems, ...displayItems].map((news, idx) => (
          <div 
            key={`${news.id}-${idx}`} 
            className="flex-shrink-0 w-[420px] p-10 border border-neutral-100 bg-white group relative block select-none"
          >
            {/* Header: Category & Log ID */}
            <div className="flex justify-between items-start mb-8">
              <span className={`text-[9px] uppercase tracking-[0.4em] font-bold px-3 py-1.5 ${
                news.category === 'AI Displacement' ? 'bg-red-50 text-red-600' :
                news.category === 'Layoffs' ? 'bg-neutral-900 text-white' :
                news.category === 'Hiring Crisis' ? 'bg-orange-50 text-orange-600' :
                'bg-blue-50 text-blue-600'
              }`}>
                {news.category}
              </span>
              <span className="text-[8px] text-neutral-300 font-mono tracking-widest">
                VERIFICATION-LOG_{idx.toString().padStart(3, '0')}
              </span>
            </div>

            {/* Headline */}
            <h5 className="font-serif text-2xl leading-snug italic text-neutral-800 mb-6 min-h-[4rem]">
              "{news.headline}"
            </h5>

            {/* Description / Summary */}
            <div className="mb-10">
              <span className="text-[7px] uppercase tracking-[0.5em] font-bold text-neutral-300 block mb-3">Synthesis</span>
              <p className="text-sm text-neutral-500 font-light leading-relaxed line-clamp-4">
                {news.description || "Historical data point regarding the integration of automated systems into the existing labor market architecture. Specific implications for human capital are being monitored."}
              </p>
            </div>

            {/* Footer: Detailed Citation */}
            <div className="mt-auto pt-8 border-t border-neutral-50">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-[7px] uppercase tracking-[0.4em] font-bold text-neutral-300 mb-1">Source Outlet</span>
                  <span className="text-xs font-serif text-neutral-800">{news.source}</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[7px] uppercase tracking-[0.4em] font-bold text-neutral-300 mb-1">Release Date</span>
                  <span className="text-xs font-mono text-neutral-800 uppercase">{news.date}</span>
                </div>
              </div>
              
              <div className="mt-6 flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-200"></div>
                <span className="text-[7px] uppercase tracking-[0.6em] font-bold text-neutral-300">Journalistic Integrity Mapping Active</span>
              </div>
            </div>

            {/* Vertical Accent Line */}
            <div className="absolute top-0 right-0 w-[1px] h-full bg-neutral-50 group-hover:bg-neutral-200 transition-colors duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;

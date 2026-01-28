
import React, { useState } from 'react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [role, setRole] = useState<'founder' | 'builder' | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [suggestions, setSuggestions] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!role || !email || !name) return;

    setLoading(true);
    setError(false);

    try {
      // Updated to use your specific Formspree ID
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykwrvar"; 

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          role: role,
          suggestions: suggestions,
          message: `Interest Signal from ${name}: ${role === 'founder' ? 'Founder' : 'Builder'}. Suggestions for team: ${suggestions}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error("Interest Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 bg-white/98 backdrop-blur-2xl transition-all duration-500 overflow-y-auto py-12">
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-black hover:opacity-50 transition-opacity z-10"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>

      <div className="max-w-xl w-full text-center">
        {!submitted ? (
          <div className="fade-in space-y-12">
            <div className="space-y-4">
              <h2 className="font-serif text-5xl md:text-6xl italic">I'm interested<span className="font-cursive text-2xl text-neutral-300">.</span></h2>
              <p className="font-cursive text-2xl text-neutral-400">Help us architect the future of building.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole('founder')}
                  className={`py-6 border-thin transition-all duration-500 flex flex-col items-center space-y-2 ${role === 'founder' ? 'border-black bg-neutral-50 scale-[1.02]' : 'border-neutral-100 opacity-60 hover:opacity-100'}`}
                >
                  <span className="font-serif text-xl italic">Founder</span>
                  <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-light">I have roadblocks</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole('builder')}
                  className={`py-6 border-thin transition-all duration-500 flex flex-col items-center space-y-2 ${role === 'builder' ? 'border-black bg-neutral-50 scale-[1.02]' : 'border-neutral-100 opacity-60 hover:opacity-100'}`}
                >
                  <span className="font-serif text-xl italic">Builder</span>
                  <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-light">I am an architect</span>
                </button>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <input 
                    required
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name" 
                    className="w-full bg-transparent border-b border-neutral-200 py-3 font-serif text-xl focus:outline-none focus:border-black transition-colors placeholder:text-neutral-200"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-focus-within:w-full transition-all duration-700"></div>
                </div>

                <div className="relative group">
                  <input 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-b border-neutral-200 py-3 font-serif text-xl focus:outline-none focus:border-black transition-colors placeholder:text-neutral-200"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-focus-within:w-full transition-all duration-700"></div>
                </div>

                <div className="relative group">
                  <textarea 
                    value={suggestions}
                    onChange={(e) => setSuggestions(e.target.value)}
                    placeholder="How can we improve? Suggestions to join our team?" 
                    className="w-full bg-transparent border-b border-neutral-200 py-3 font-serif text-xl focus:outline-none focus:border-black transition-colors placeholder:text-neutral-200 resize-none min-h-[100px]"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-focus-within:w-full transition-all duration-700"></div>
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-xs uppercase tracking-widest">Signal lost. Please try again.</p>
              )}

              <button 
                disabled={!role || loading}
                className="w-full bg-black text-white py-6 font-serif text-2xl hover:bg-neutral-800 transition-all disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed flex items-center justify-center space-x-4"
              >
                {loading ? (
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                ) : (
                  "Send Interest"
                )}
              </button>
            </form>

            <p className="text-[10px] tracking-[0.4em] uppercase text-neutral-300 pb-12">Building the Architecture of Action.</p>
          </div>
        ) : (
          <div className="fade-in space-y-8 py-20">
            <div className="w-16 h-16 rounded-full border border-black mx-auto flex items-center justify-center mb-12">
              <div className="w-2 h-2 rounded-full bg-black animate-ping"></div>
            </div>
            <h2 className="font-serif text-4xl italic">Interest Logged.</h2>
            <p className="text-neutral-500 font-light leading-relaxed max-w-sm mx-auto">
              Your signal has been received. Our architects will review your suggestions and reach out when the next shift begins.
            </p>
            <div className="pt-12">
              <button 
                onClick={onClose}
                className="text-[10px] uppercase tracking-[0.4em] border-b border-black pb-2 hover:opacity-50 transition-all"
              >
                Return to Field
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;

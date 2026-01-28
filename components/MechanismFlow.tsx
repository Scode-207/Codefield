
import React from 'react';

const MechanismFlow: React.FC = () => {
  const steps = [
    {
      title: "Log In",
      subtitle: "Founders & Solvers",
      desc: "Create your account as a founder or a solver. Establish your presence and enter the field where architecture meets vision.",
      icon: "I"
    },
    {
      title: "The Field Feed",
      subtitle: "Rapid Discovery",
      desc: "Discover your field feed. Post your technical roadblocks or look for real world problems to solve in a flash, with the ease of an Instagram reel.",
      icon: "II"
    },
    {
      title: "Direct Commit",
      subtitle: "Build & Invest",
      desc: "Collaborate quick and invest in startups directly. No need for YC or gatekeepers—just scroll. Like the build? Invest immediately.",
      icon: "III"
    },
    {
      title: "Solve",
      subtitle: "Earn & Accelerate",
      desc: "Scroll through real startup stories and apply. Earn money through bounties and accelerate startups through the injection of human capital.",
      icon: "IV"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
        {/* Horizontal Line for Desktop */}
        <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-[0.5px] bg-neutral-200 -z-10"></div>
        
        {steps.map((step, idx) => (
          <div key={idx} className="relative flex flex-col items-center text-center px-4 group">
            {/* Step Node */}
            <div className="w-20 h-20 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-8 group-hover:border-black transition-all duration-700 bg-white z-10">
              <span className="font-serif italic text-2xl">{step.icon}</span>
            </div>
            
            {/* Step Content */}
            <div className="space-y-3">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">{step.subtitle}</h4>
              <h3 className="font-serif text-2xl">{step.title}</h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-[200px] mx-auto opacity-70 group-hover:opacity-100 transition-opacity">
                {step.desc}
              </p>
            </div>

            {/* Connecting line for mobile */}
            {idx !== steps.length - 1 && (
              <div className="md:hidden w-[0.5px] h-12 bg-neutral-200 my-8"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-24 text-center">
        <div className="inline-block p-12 border-thin border-neutral-100 bg-neutral-50/30">
          <p className="font-serif text-3xl italic text-neutral-800 mb-4">
            "Capital is abundant. Precision is rare."
          </p>
          <p className="font-cursive text-xl text-neutral-400">
            The Architecture of Action.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MechanismFlow;


import React from 'react';

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ headline, subheadline, ctaText, image }) => {
  return (
    <section className="relative bg-[#0f1115] pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden text-white border-b-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            {headline}
          </h1>

          <div className="text-xl md:text-2xl text-slate-300 leading-relaxed space-y-2 whitespace-pre-line">
            {subheadline}
          </div>

          <div className="flex flex-col items-center space-y-1 py-2">
            <p className="text-lg font-bold text-amber-500 italic">Você não está sozinha.</p>
            <p className="text-lg font-bold text-amber-500 italic">Você não está louca.</p>
          </div>

          <div className="pt-4 flex flex-col items-center space-y-4 text-sm text-slate-400">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0f1115] bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img src={`https://randomuser.me/api/portraits/women/${i + 45}.jpg`} alt="User" />
                </div>
              ))}
            </div>
            <span>Centenas de mulheres já encontraram clareza aqui.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

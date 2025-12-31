
import React from 'react';

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ headline, subheadline, ctaText, image }) => {
  return (
    <section className="relative bg-navy-900 pt-20 pb-0 overflow-hidden text-white border-b-4 border-gold-metallic">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/20 via-navy-900 to-navy-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 pb-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">



          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight leading-tight mb-6">
            <span className="block text-slate-100">{headline}</span>
          </h1>

          <div className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
            {subheadline}
          </div>

          <div className="flex flex-col items-center space-y-8 pt-8">
            <button className="bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:scale-105 uppercase tracking-wider relative overflow-hidden group">
              <span className="relative z-10">{ctaText || "Quero Começar"}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            <div className="flex items-center space-x-2 text-gold-400/80 text-sm font-medium tracking-wide">
              <span>★</span>
              <span>Mais de 1.000 vidas transformadas</span>
              <span>★</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="relative z-10 bg-gradient-to-r from-gold-600 to-gold-400 py-3 transform rotate-1 scale-105 origin-left shadow-2xl mt-12 border-y border-white/20">
        <div className="flex space-x-8 overflow-hidden whitespace-nowrap opacity-90">
          <div className="animate-marquee flex space-x-8 text-navy-900 font-bold tracking-[0.2em] uppercase text-sm">
            <span>Energia Vital</span> • <span>Clareza Mental</span> • <span>Sono Reparador</span> • <span>Equilíbrio Hormonal</span> • <span>Bem-estar</span> •
            <span>Energia Vital</span> • <span>Clareza Mental</span> • <span>Sono Reparador</span> • <span>Equilíbrio Hormonal</span> • <span>Bem-estar</span> •
            <span>Energia Vital</span> • <span>Clareza Mental</span> • <span>Sono Reparador</span> • <span>Equilíbrio Hormonal</span> • <span>Bem-estar</span> •
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

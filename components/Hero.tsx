
import React from 'react';

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ headline, subheadline, ctaText, image }) => {
  return (
    <section className="relative bg-navy-900 pt-8 lg:pt-16 pb-0 overflow-hidden text-white border-b-4 border-gold-metallic">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/20 via-navy-900 to-navy-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 pb-10 lg:pt-10 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight leading-tight mb-5">
              <span className="block text-slate-100">{headline}</span>
            </h1>

            <div className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto lg:mx-0 whitespace-pre-line">
              {subheadline}
            </div>

            <div className="flex flex-col items-center lg:items-start space-y-5 pt-4 md:pt-8">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 font-bold text-base md:text-xl py-4 px-8 rounded-full shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all transform hover:-translate-y-1"
              >
                {ctaText}
              </a>
              <p className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wide">
                Pago único · Acceso inmediato · Garantía de 7 días
              </p>

              <div className="flex flex-col items-center lg:items-start space-y-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-navy-900 bg-slate-800 flex items-center justify-center overflow-hidden relative z-10">
                      <img src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-2 text-gold-400/80 text-sm font-medium tracking-wide">
                  <span>★</span>
                  <span>Webapp simple para crear tu rutina diaria</span>
                  <span>★</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={image}
              alt="Vista previa del webapp Menopausia Con Claridad"
              className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto object-contain drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="relative z-10 bg-gradient-to-r from-gold-600 to-gold-400 py-3 transform rotate-1 scale-105 origin-left shadow-2xl mt-12 border-y border-white/20">
        <div className="flex space-x-8 overflow-hidden whitespace-nowrap opacity-90">
          <div className="animate-marquee flex space-x-8 text-navy-900 font-bold tracking-[0.2em] uppercase text-sm">
            <span>Energía Vital</span> • <span>Claridad Mental</span> • <span>Sueño Reparador</span> • <span>Equilibrio Hormonal</span> • <span>Bienestar</span> •
            <span>Energía Vital</span> • <span>Claridad Mental</span> • <span>Sueño Reparador</span> • <span>Equilibrio Hormonal</span> • <span>Bienestar</span> •
            <span>Energía Vital</span> • <span>Claridad Mental</span> • <span>Sueño Reparador</span> • <span>Equilibrio Hormonal</span> • <span>Bienestar</span> •
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

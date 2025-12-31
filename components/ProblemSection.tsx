import React from 'react';

interface ProblemSectionProps {
  title: string;
  description: string;
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ title, description }) => {
  return (
    <section className="py-24 bg-white text-navy-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gold-400 blur-[100px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-navy-900 blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 mb-6 relative">
              {title}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold-500 rounded-full"></div>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-navy-50/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-navy-100 shadow-xl">
            <p className="text-lg md:text-2xl text-navy-800 leading-relaxed font-medium font-serif italic">
              "{description}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

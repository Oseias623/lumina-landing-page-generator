
import React from 'react';
import Icon from './Icon';

interface ProblemSectionProps {
  title: string;
  questions: string[];
  summary: string;
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ title, questions, summary }) => {
  return (
    <section className="py-24 bg-[#0f1115] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-slate-400 text-lg italic">Não é apenas você. E não é por falta de vontade.</p>
        </div>
        
        <div className="space-y-6 mb-16">
          {(questions.length > 0 ? questions : ["Frustração", "Cansaço", "Confusão"]).map((q, i) => (
            <div key={i} className="flex items-start bg-white/5 p-4 rounded-lg border border-white/10 group hover:bg-red-500/5 hover:border-red-500/30 transition-all">
              <div className="mr-4 mt-1 text-red-500 shrink-0">
                <Icon name="X" size={24} className="stroke-[3px]" />
              </div>
              <p className="text-lg md:text-xl text-slate-200 group-hover:text-white">{q}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-500 p-8 rounded-xl text-slate-900 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-4">Mas aqui está o que quase ninguém te conta:</h3>
            <p className="text-lg font-medium leading-relaxed italic">
              "{summary}"
            </p>
          </div>
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Icon name="Quote" size={60} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

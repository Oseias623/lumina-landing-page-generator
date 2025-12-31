
import React, { useState } from 'react';
import { LandingPageContent } from './types';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import BenefitGrid from './components/BenefitGrid';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import AIGeneratorSidebar from './components/AIGeneratorSidebar';
import Icon from './components/Icon';

const INITIAL_CONTENT: LandingPageContent = {
  businessName: "Cuidado e Clareza",
  headline: "Se o seu corpo mudou e você não entende o que está acontecendo…",
  subheadline: "Um guia simples de alimentação para aliviar os sintomas da menopausa\nSem dietas malucas\nSem pressão\nSem exaustão",
  problemStatement: {
    title: "A sensação é de que o chão sumiu e ninguém te explicou o porquê.",
    questions: [
      "Os calorões que surgem do nada e roubam seu foco",
      "O sono que não descansa e te deixa exausta",
      "Uma ansiedade que aperta o peito sem motivo",
      "A instabilidade emocional que te faz sentir 'estranha'"
    ],
    summary: "Você não está quebrada. O seu corpo está apenas em uma nova fase, com novas necessidades. Quando você entende como acolher essa mudança através da nutrição simples, a paz volta."
  },
  heroImage: "/mockup.png",
  features: [
    { id: '1', title: 'Alívio Natural', description: 'Entenda quais alimentos ajudam a suavizar os picos de calor e o suor noturno.', icon: 'Heart' },
    { id: '2', title: 'Mente Serena', description: 'Como a nutrição pode ajudar a dissipar o nevoeiro mental e a irritabilidade.', icon: 'Brain' },
    { id: '3', title: 'Energia Real', description: 'Recupere o vigor diário sem precisar de estimulantes ou dietas restritivas.', icon: 'Zap' }
  ],
  pricing: [{
    name: "Acesso Total",
    price: "67,90",
    features: ["Guia Prático Digital", "Sugestões de Cardápio Calmo", "Lista de Itens Amigos", "Acesso Vitalício"],
    cta: "QUERO COMEÇAR MEU ACOLHIMENTO",
    highlighted: true
  }],
  testimonials: [
    {
      author: "Marta Silveira",
      role: "52 anos",
      content: "Eu achava que estava ficando louca com tanta mudança de humor. O guia me trouxe a clareza que eu precisava. Durmo melhor e me sinto mais calma.",
      avatar: ""
    },
    {
      author: "Patrícia Gomes",
      role: "48 anos",
      content: "Simples e direto. Não tem aquelas dietas restritivas que ninguém aguenta. É comida de verdade e carinho com a gente.",
      avatar: ""
    },
    {
      author: "Cristina Alves",
      role: "55 anos",
      content: "O capítulo sobre 'Mente Serena' foi um divisor de águas para mim. Recuperei meu foco no trabalho.",
      avatar: ""
    }
  ],
  ctaText: "Quero entender como me alimentar nessa fase"
};

const App: React.FC = () => {
  const [content, setContent] = useState<LandingPageContent>(INITIAL_CONTENT);
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <div className="min-h-screen relative bg-white selection:bg-amber-100 selection:text-amber-900">
      {isGenerating && (
        <div className="fixed inset-0 z-[100] bg-[#0f1115]/98 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8">
          <div className="w-16 h-16 border-4 border-amber-500/10 border-t-amber-500 rounded-full animate-spin mb-6"></div>
          <h2 className="text-xl font-bold text-white uppercase tracking-[0.2em]">Sincronizando...</h2>
        </div>
      )}



      <main>
        <Hero
          headline={content.headline}
          subheadline={content.subheadline}
          ctaText={content.ctaText}
          image={content.heroImage}
        />

        <ProblemSection
          title={content.problemStatement.title}
          questions={content.problemStatement.questions}
          summary={content.problemStatement.summary}
        />

        <BenefitGrid features={content.features} />

        <section className="py-24 bg-[#0f1115] text-white relative border-y-4 border-amber-500">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight">
              A menopausa não é uma doença, é uma fase de redescoberta.
            </h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto mb-10"></div>
            <p className="text-xl text-slate-400 italic font-medium leading-relaxed">
              "Você merece atravessar esse período com clareza, sentindo-se bem na sua própria pele novamente."
            </p>
          </div>
        </section>



        <Testimonials testimonials={content.testimonials} />

        <Pricing pricing={content.pricing} />

        <section className="py-16 bg-slate-50 text-center border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Segurança e Privacidade</p>
            <div className="flex justify-center items-center space-x-12 opacity-30 grayscale">
              <Icon name="ShieldCheck" size={40} />
              <Icon name="Lock" size={40} />
              <Icon name="CreditCard" size={40} />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0f1115] text-slate-500 py-20 text-center border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-amber-500 font-black text-2xl mb-8 uppercase tracking-tighter">
            {content.businessName}
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-sm">
              Este guia é educativo e não substitui aconselhamento médico especializado.
            </p>
            <div className="flex justify-center space-x-8 text-[10px] uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-amber-500">Termos</a>
              <a href="#" className="hover:text-amber-500">Privacidade</a>
              <a href="#" className="hover:text-amber-500">Contato</a>
            </div>
          </div>
        </div>
      </footer>

      <AIGeneratorSidebar
        onContentGenerated={setContent}
        isGenerating={isGenerating}
        setIsGenerating={setIsGenerating}
      />
    </div >
  );
};

export default App;

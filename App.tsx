
import React, { useState } from 'react';
import { LandingPageContent } from './types';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import BenefitGrid from './components/BenefitGrid';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import IdentificationSection from './components/IdentificationSection';
import ProductShowcase from './components/ProductShowcase';
import WhyItWorks from './components/WhyItWorks';
import GuideContents from './components/GuideContents';
import RecipesSection from './components/RecipesSection';
import BonusesSection from './components/BonusesSection';
import SimplePricing from './components/SimplePricing';
import AudienceSection from './components/AudienceSection';
import FAQSection from './components/FAQSection';
import Icon from './components/Icon';

const INITIAL_CONTENT: LandingPageContent = {
  businessName: "Cuidado e Clareza",
  headline: "Si la menopausia te dejó cansada, sin dormir bien y emocionalmente agotada, el problema no es tu fuerza de voluntad.",
  subheadline: "Ondas de calor, insomnio, ansiedad y falta de energía no aparecen “de la nada”.\nAparecen cuando el cuerpo cambia y nadie te explicó cómo cuidarlo en esta etapa.",
  problemStatement: {
    title: "No estás fallando.",
    subtitle: "Y no estás exagerando.",
    text: "Muchas mujeres llegan a la menopausia sintiéndose cansadas, ansiosas y perdidas. No porque hicieron algo mal. Sino porque el cuerpo cambia — y nadie les explicó cómo acompañar ese cambio.",
    text2: "Durante años, lo que hacías funcionaba. Comías igual. Dormías igual. Vivías igual. Y de repente, ya no.",
    highlight: "👉 Eso no es debilidad. Es una transición real.",
    closing: "No necesitas exigirte más. Necesitas información diferente. Una forma más amable, clara y posible de cuidarte en esta etapa.",
    cta: "¡DESCARGAR AHORA!",
    checkoutUrl: "https://pay.hotmart.com/A103597268E?checkoutMode=10"
  },
  identification: {
    title: "ESTE CONTENIDO FUE CREADO PARA TI SI HOY:",
    items: [
      "Duermes, pero despiertas cansada",
      "Sientes calor de repente, incluso de noche",
      "Tienes ansiedad, irritabilidad o tristeza sin un motivo claro",
      "Te miras al espejo y no te reconoces",
      "Ya probaste tés, dietas o suplementos… y sigues igual"
    ],
    cta: "👉 No estás sola.\nY no estás imaginando nada.\n\nMuchas mujeres viven lo mismo. La diferencia está en tener o no una guía clara para atravesar esta etapa."
  },
  productShowcase: {
    title: "Una guía práctica para acompañar tu cuerpo durante la menopausia",
    description: "El Programa Antiinflamatorio para la Menopausia fue creado para mujeres que no quieren más confusión, más culpa ni más extremos. Es una guía clara y accesible para ayudarte a:",
    items: [
      "Organizar tu alimentación diaria",
      "Entender qué alimentos te apoyan en esta etapa",
      "Reducir la sensación de desorden físico y emocional",
      "Volver a sentir que tienes una base firme"
    ],
    closing: "No es una dieta estricta. No es un tratamiento. Es información práctica, pensada para la vida real, cuando el cuerpo cambia y necesitas cuidarte de otra manera.",
    image: "/mockup.png"
  },
  whyItWorks: {
    title: "Porque en esta etapa, seguir haciendo lo mismo ya no alcanza",
    description: "Durante años, tu cuerpo respondió a ciertos hábitos. Pero la menopausia marca un cambio. Y cuando el cuerpo cambia, la forma de cuidarlo también necesita cambiar.",
    items: [
      "Comprender qué alimentos apoyar hoy",
      "Identificar combinaciones que te hacen sentir más estable",
      "Reducir excesos sin prohibiciones",
      "Crear una rutina posible, sin agotamiento"
    ],
    closing: "No se trata de hacerlo perfecto. Se trata de hacerlo más consciente y más amable. Pequeños ajustes. Más claridad. Más sensación de control."
  },
  guideContents: {
    title: "Qué vas a encontrar dentro de la guía",
    items: [
      { bold: "Guía de alimentación antiinflamatoria,", text: "pensada específicamente para esta etapa de la vida" },
      { bold: "Recetas simples y accesibles,", text: "para el día a día, sin ingredientes difíciles" },
      { bold: "Orientación clara sobre combinaciones de alimentos,", text: "para facilitar tus comidas" },
      { bold: "Ideas prácticas para organizar tu rutina,", text: "incluso en días de cansancio" },
      { bold: "Enfoque realista,", text: "sin dietas estrictas ni exigencias imposibles" },
      { bold: "Acceso digital inmediato,", text: "para leer a tu ritmo, cuando lo necesites" }
    ],
    closing: "Todo fue creado pensando en mujeres reales, con poco tiempo, poco descanso y muchas responsabilidades.\n\nNada de extremos. Nada de presión.\nSolo claridad y apoyo para atravesar esta etapa con más tranquilidad."
  },
  recipes: {
    title: "Recetas pensadas para el día a día",
    cards: [
      {
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop", // Healthy bowl/simple meal
        text: "Opciones simples, nutritivas y fáciles."
      },
      {
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop", // Fresh salad components
        text: "Ingredientes accesibles para el día a día."
      },
      {
        image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=800&auto=format&fit=crop", // Simple nutritious breakfast/snack
        text: "Preparaciones posibles, incluso en días de poco ánimo."
      }
    ],
    items: [
      "Comidas que no exigen perfección.",
      "Ingredientes fáciles de encontrar.",
      "Preparaciones simples, incluso en días de poco ánimo.",
      "La idea no es cambiar tu vida de un día para otro. Es hacer más fácil cuidarte cuando el cuerpo pide apoyo."
    ]
  },
  bonuses: {
    title: "Bonos incluidos sin costo adicional",
    items: [
      {
        title: "Bono 1 — Plan Antiinflamatorio de 7 Días",
        description: "Un plan simple para comenzar sin confusión, con comidas organizadas para tu primera semana."
      },
      {
        title: "Bono 2 — Lista de Compras Antiinflamatoria",
        description: "Para saber exactamente qué comprar y facilitar tu rutina."
      },
      {
        title: "Bono 3 — Recetas Rápidas (15 minutos o menos)",
        description: "Para los días con poco tiempo o poco ánimo."
      },
      {
        title: "Bono 4 — Cenas para Dormir Mejor",
        description: "Opciones pensadas para la noche y el descanso."
      },
      {
        title: "Bono 5 — Snacks para la Ansiedad",
        description: "Ideas simples para momentos de ansiedad, sin recurrir al azúcar."
      }
    ],
    closing: "Todo incluido en un solo acceso, pensado para acompañarte de forma práctica y posible."
  },
  simplePricing: {
    title: "Acceso a la guía completa",
    subtitle: "Una herramienta práctica para acompañarte en esta etapa,\ncon claridad y sin extremos.",
    price: "US$ 6,90",
    cta: "¡DESCARGAR AHORA!",
    details: "Pago único · Lectura a tu ritmo · Sin suscripciones",
    checkoutUrl: "https://pay.hotmart.com/A103597268E?checkoutMode=10"
  },
  audience: {
    forYou: {
      title: "Esta guía es para ti si:",
      items: [
        "Buscas claridad y apoyo en la menopausia",
        "Quieres organizar tu alimentación sin dietas estrictas",
        "Prefieres un enfoque realista y posible"
      ]
    },
    notForYou: {
      title: "No es para ti si:",
      items: [
        "Buscas una cura milagrosa",
        "Esperas resultados instantáneos sin cambios",
        "Quieres un enfoque médico o clínico"
      ]
    }
  },
  faq: {
    items: [
      { question: "¿Es una dieta?", answer: "No. Es una guía práctica de alimentación y organización diaria." },
      { question: "¿Necesito experiencia previa?", answer: "No. Está explicada de forma simple y clara." },
      { question: "¿Cómo accedo?", answer: "El acceso es digital e inmediato después de la compra." },
      { question: "¿Sustituye un tratamiento médico?", answer: "No. Es contenido educativo para apoyar tu bienestar en esta etapa." }
    ],
    closing: "No se trata de hacerlo perfecto.\nSe trata de no atravesar esta etapa sola.",
    cta: "¡DESCARGAR AHORA!",
    checkoutUrl: "https://pay.hotmart.com/A103597268E?checkoutMode=10"
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
          content={content.problemStatement}
        />

        <IdentificationSection
          content={content.identification}
        />

        <ProductShowcase
          content={content.productShowcase}
        />

        <WhyItWorks
          content={content.whyItWorks}
        />

        <GuideContents
          content={content.guideContents}
        />

        <RecipesSection
          content={content.recipes}
        />

        <BonusesSection
          content={content.bonuses}
        />

        <SimplePricing
          content={content.simplePricing}
        />

        <AudienceSection
          content={content.audience}
        />

        <FAQSection
          content={content.faq}
        />

        {/* 
        <section className="py-24 bg-[#0f1115] text-white relative border-y-4 border-amber-500">
           ... (removed old quote section) ...
        </section>
        <Testimonials testimonials={content.testimonials} />
        <Pricing pricing={content.pricing} />
        <section className="py-16 bg-slate-50 text-center border-t border-slate-100">
           ... (removed old trust badges, simple pricing component handles trust if needed or we can re-add) ...
        </section>
        */}
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


    </div >
  );
};

export default App;

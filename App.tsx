
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
import RealTestimonials from './components/RealTestimonials';
import BonusesSection from './components/BonusesSection';
import SimplePricing from './components/SimplePricing';
import GuaranteeSection from './components/GuaranteeSection';
import AudienceSection from './components/AudienceSection';
import FAQSection from './components/FAQSection';
import CountdownTimer from './components/CountdownTimer';
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
    image: "/ebook-cover-green.webp"
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
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop&fm=webp", // Healthy bowl/simple meal
        text: "Opciones simples, nutritivas y fáciles."
      },
      {
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop&fm=webp", // Fresh salad components
        text: "Ingredientes accesibles para el día a día."
      },
      {
        image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=800&auto=format&fit=crop&fm=webp", // Simple nutritious breakfast/snack
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
  realTestimonials: {
    title: "Lo que dicen mujeres que ya accedieron a la guía",
    subtitle: "Experiencias reales. Sin exageros. Sin promesas.",
    items: [
      { quote: "No me solucionó todo de un día para otro, pero hoy me siento mucho más organizada. Antes comía sin saber si me ayudaba o no.", author: "María, 49 años" },
      { quote: "Lo que más me gustó es que no te exige perfección. Estoy cansada y esta guía entiende eso.", author: "Claudia, 52 años" },
      { quote: "Me dio claridad. Y eso, en esta etapa, ya es muchísimo.", author: "Laura, 47 años" },
      { quote: "No es milagro, pero es real. Hoy me siento menos perdida con mi alimentación.", author: "Patricia, 50 años" },
      { quote: "Es simple, posible y sin presión. Justo lo que necesitaba.", author: "Ana, 46 años" },
      { quote: "Me gustó que no promete cosas imposibles. Es una guía para mujeres reales.", author: "Verónica, 54 años" },
      { quote: "Ahora sé qué comer y qué evitar. Antes era pura confusión.", author: "Isabel, 48 años" },

      {
        quote: "Las recetas son fáciles y no me estresan. Incluso en días de poco ánimo, consigo hacerlas.",
        author: "Marta, 51 años",
      },
      {
        quote: "Me sentí capaz. No perfecta, capaz.",
        author: "Daniela, 45 años",
      },
      {
        quote: "Ingredientes normales, comida real. Eso hace toda la diferencia.",
        author: "Rosa, 56 años",
      },
      {
        quote: "Me ayudó a organizar mis comidas sin drama.",
        author: "Silvia, 49 años",
      },

      {
        quote: "Pensé que era solo otro ebook, pero me sorprendió por lo claro que es.",
        author: "Carmen, 53 años",
      },
      {
        quote: "Voy despacio, pero me siento acompañada.",
        author: "Natalia, 48 años",
      },
      {
        quote: "No me juzga. Eso ya me ganó.",
        author: "Teresa, 55 años",
      },
      {
        quote: "Es como tener una guía tranquila en casa.",
        author: "Paula, 46 años",
      }
    ],
    closing: "Cada cuerpo es diferente. Pero tener orientación clara hace toda la diferencia."
  },
  bonuses: {
    title: "Bonos exclusivos para complementar tu guía",
    items: [
      {
        title: "Bono 1 — Los 7 Enemigos de la Menopausia",
        description: "Descubre qué alimentos y hábitos ocultos están empeorando tus síntomas sin que te des cuenta."
      },
      {
        title: "Bono 2 — Nutrientes Clave en la Menopausia",
        description: "Una guía directa sobre qué vitaminas y minerales necesita tu cuerpo ahora para proteger tus huesos y energía."
      },
      {
        title: "Bono 3 — Reset del Ritmo Circadiano",
        description: "Estrategias simples para volver a regular tu reloj biológico y recuperar el sueño profundo."
      },
      {
        title: "Bono 4 — Rutinas de Fuerza (15 Minutos)",
        description: "Ejercicios breves y seguros para activar tu metabolismo y cuidar tu masa muscular, sin gimnasio."
      }
    ],
    closing: "Herramientas prácticas para que tengas resultados más rápidos, incluidas gratis hoy."
  },
  simplePricing: {
    title: "Acceso a la guía completa",
    subtitle: "Una herramienta práctica para acompañarte en esta etapa,\ncon claridad y sin extremos.",
    price: "US$ 9,90",
    cta: "¡DESCARGAR AHORA!",
    details: "Pago único · Lectura a tu ritmo · Sin suscripciones",
    checkoutUrl: "https://pay.hotmart.com/A103597268E?checkoutMode=10"
  },
  guarantee: {
    title: "Garantía de 7 días, sin riesgos",
    text: "Sabemos que esta etapa viene cargada de dudas. Por eso, tienes 7 días para acceder a la guía, leer con calma y ver si este enfoque hace sentido para ti.\n\nSi sientes que no es lo que necesitas ahora, puedes solicitar la devolución dentro de ese plazo.",
    items: [
      "Sin explicaciones",
      "Sin preguntas",
      "Sin presión"
    ]
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
  heroImage: "/ebook-cover-green.webp",
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



      <CountdownTimer />
      <div className="h-10" />
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

        <RealTestimonials
          content={content.realTestimonials}
        />

        <BonusesSection
          content={content.bonuses}
        />

        <SimplePricing
          content={content.simplePricing}
        />

        <GuaranteeSection
          content={content.guarantee}
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




    </div >
  );
};

export default App;

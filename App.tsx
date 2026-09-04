
import React, { useState } from 'react';
import { LandingPageContent } from './types';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import IdentificationSection from './components/IdentificationSection';
import ProductShowcase from './components/ProductShowcase';
import SimplePricing from './components/SimplePricing';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import CountdownTimer from './components/CountdownTimer';

const INITIAL_CONTENT: LandingPageContent = {
  businessName: "Cuidado e Clareza",
  headline: "No es solo una guía sobre menopausia. Es una experiencia digital para crear tu rutina diaria según tu perfil.",
  subheadline: "Accede a un webapp simple con un creador de rutinas personalizado por perfil para organizar alimentación, hábitos y pequeños cuidados durante la menopausia.\nAcceso inmediato por US$ 19,90.",
  problemStatement: {
    title: "No estás fallando.",
    subtitle: "Tu cuerpo está cambiando.",
    text: "Si antes comías igual y te sentías bien, pero ahora todo parece más difícil, no significa que perdiste el control.",
    text2: "La menopausia cambia la forma en que tu cuerpo responde a la comida, al descanso y a la rutina diaria.",
    highlight: "Lo que necesitas no es exigirte más. Es tener una guía simple para saber por dónde empezar.",
    closing: "Menopausia Con Claridad fue creada para ayudarte a ordenar tu alimentación con calma, sin extremos y sin promesas imposibles.",
    cta: "Quiero acceder a la guía",
    checkoutUrl: "https://pay.hotmart.com/A103597268E?checkoutMode=10"
  },
  identification: {
    title: "ESTA GUÍA ES PARA TI SI HOY:",
    items: [
      "Quieres saber qué comer sin vivir a dieta",
      "Te sientes confundida con tantos consejos sobre menopausia",
      "Buscas una forma simple de organizar tus comidas",
      "Prefieres pasos posibles en vez de reglas extremas",
      "Quieres cuidarte mejor, pero sin presión por hacerlo perfecto"
    ],
    cta: "No necesitas cambiar toda tu vida de un día para otro.\nNecesitas un primer paso claro y posible."
  },
  productShowcase: {
    title: "Qué recibes al acceder hoy",
    description: "Menopausia Con Claridad no fue creado para que descargues un material y lo olvides. Es una experiencia digital en formato webapp, pensada para ayudarte a transformar información en una rutina posible.",
    items: [
      "Webapp fácil de usar desde el celular",
      "Creador de rutinas personalizado por perfil para organizar tus hábitos diarios",
      "Guía educativa sobre alimentación y cuidados en la menopausia",
      "Ideas simples de comidas, hábitos y pequeños pasos para aplicar en la vida real",
      "Acceso inmediato para usar a tu ritmo"
    ],
    closing: "No sustituye una consulta médica. Es una herramienta práctica para ayudarte a salir de la confusión y empezar con más claridad.",
    image: "/app-mockup.png"
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
  dailyRoutine: {
    title: "Una app que simplifica tu día a día",
    subtitle: "TU ALIADA DE BOLSILLO",
    description: "Olvídate de las listas interminables y la confusión. Con la App Menopausia Con Claridad, transformamos grandes cambios en pequeños pasos diarios.",
    items: [
      "Checklist diario de autocuidado",
      "Recordatorios amables de hidratación",
      "Sugerencias de comidas antiinflamatorias",
      "Pausas de respiración guiadas",
      "Organización sin estrés"
    ],
    closing: "Porque cuando tu rutina se ordena, tu mente se calma.",
    image: "/app-mockup.png"
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
    title: "Crea tu rutina personalizada por perfil hoy",
    subtitle: "Webapp + guía digital + materiales de apoyo para organizar tus hábitos con más calma y dirección, a partir de un perfil simple.",
    price: "US$ 19,90",
    cta: "Sí, quiero crear mi rutina",
    details: "Pago único · Acceso digital inmediato · Garantía de 7 días",
    checkoutUrl: "https://pay.hotmart.com/A103597268E?checkoutMode=10"
  },
  guarantee: {
    title: "Garantía de 7 días, sin riesgos",
    text: "Puedes acceder a la guía, revisarla con calma y ver si este enfoque hace sentido para ti.\n\nSi sientes que no es lo que necesitas ahora, puedes solicitar la devolución dentro del plazo de garantía de Hotmart.",
    items: [
      "Acceso inmediato",
      "Pago seguro",
      "Sin suscripciones"
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
      { question: "¿Es una dieta estricta?", answer: "No. Es una guía práctica para ayudarte a organizar tu alimentación sin extremos, prohibiciones exageradas ni presión por hacerlo perfecto." },
      { question: "¿Qué recibo después de comprar?", answer: "Recibes acceso digital inmediato a la guía y a los materiales incluidos, para leer y usar a tu ritmo." },
      { question: "¿Sirve si estoy en premenopausia?", answer: "Puede ayudarte si ya estás notando cambios y quieres organizar tu alimentación con más claridad. El contenido es educativo y práctico." },
      { question: "¿Cuánto cuesta?", answer: "El acceso completo cuesta US$ 19,90 en pago único." },
      { question: "¿Esto reemplaza una consulta médica?", answer: "No. Es contenido educativo sobre alimentación y organización diaria. Si tienes síntomas intensos, condiciones de salud o usas medicación, consulta a tu médica o nutricionista." },
      { question: "¿Tiene garantía?", answer: "Sí. Tienes 7 días de garantía según las condiciones de compra de Hotmart." }
    ],
    closing: "No necesitas hacerlo perfecto.\nSolo necesitas empezar con más claridad.",
    cta: "Acceder ahora por US$ 19,90",
    checkoutUrl: "https://pay.hotmart.com/A103597268E?checkoutMode=10"
  },
  heroImage: "/app-mockup.png",
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
  ctaText: "Crear mi rutina por perfil"
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

        <SimplePricing
          content={content.simplePricing}
        />

        <GuaranteeSection
          content={content.guarantee}
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

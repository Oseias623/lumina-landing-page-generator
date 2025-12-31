
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface Testimonial {
  author: string;
  role: string;
  content: string;
  avatar: string;
}

export interface LandingPageContent {
  businessName: string;
  headline: string;
  subheadline: string;
  problemStatement: {
    title: string;
    subtitle: string;
    text: string;
    text2: string;
    highlight: string;
    closing: string;
    cta: string;
  };
  identification: {
    title: string;
    items: string[];
    cta: string;
  };
  productShowcase: {
    title: string;
    description: string;
    items: string[];
    closing: string;
    image: string;
  };
  whyItWorks: {
    title: string;
    description: string;
    items: string[];
    closing: string;
  };
  guideContents: {
    title: string;
    items: {
      bold: string;
      text: string;
    }[];
    closing: string;
  };
  recipes: {
    title: string;
    items: string[];
  };
  simplePricing: {
    title: string;
    subtitle: string;
    price: string;
    cta: string;
    details: string;
    checkoutUrl: string;
  };
  audience: {
    forYou: {
      title: string;
      items: string[];
    };
    notForYou: {
      title: string;
      items: string[];
    };
  };
  faq: {
    items: { question: string; answer: string }[];
    closing: string;
    cta: string;
  };
  heroImage: string;
  features: Feature[];
  pricing: PricingPlan[];
  testimonials: Testimonial[];
  ctaText: string;
}

export enum Niche {
  SaaS = 'SaaS',
  Agency = 'Agency',
  Ecommerce = 'Ecommerce',
  Fitness = 'Saúde e Bem-estar',
  Education = 'Educação',
  Creative = 'Criativo'
}

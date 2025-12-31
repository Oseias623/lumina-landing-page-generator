
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

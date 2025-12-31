
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
    description: string;
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

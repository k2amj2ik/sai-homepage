export interface NavItem {
  id: string;
  label: string;
  type: "scroll" | "link";
  target: string;
}

export interface HeroSlide {
  label: string[];
  title: string[];
  backgroundImage: string;
  backgroundVideo?: string;
  overlayColor?: string;
}

export interface CoreValueItem {
  title: string;
  description: string;
  photo: string;
}

export interface RoadmapItem {
  phase: number;
  year?: string;
  title: string;
  description: string;
  isCurrent: boolean;
}

export interface FeatureItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  layout: "left" | "right" | "center";
  bgColor: "white" | "warm";
  guideHref?: string;
}

export interface PartnershipCard {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  keywords: string[];
  date?: string;
}

export interface GuideSubStep {
  number: string;
  description: string;
  image?: string;
  images?: string[];
}

export interface GuideStep {
  step: number;
  title: string;
  description: string;
  image?: string;
  subSteps?: GuideSubStep[];
}

export interface GuideItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  heroImage?: string;
  steps: GuideStep[];
}

export type Language = 'uz' | 'ru' | 'en';

export interface LocalizedString {
  uz: string;
  ru: string;
  en: string;
}

export interface Landmark {
  name: LocalizedString;
  description: LocalizedString;
  image?: string;
}

export interface City {
  id: string;
  name: LocalizedString;
  region: LocalizedString;
  category: 'historical' | 'metropolis' | 'valley' | 'ancient';
  founded: string;
  population: string;
  coordinates: string;
  unesco: boolean;
  image: string;
  shortDescription: LocalizedString;
  history: LocalizedString;
  culturalSignificance: LocalizedString;
  landmarks: Landmark[];
  facts: {
    uz: string[];
    ru: string[];
    en: string[];
  };
}

export interface QuizQuestion {
  id: number;
  question: LocalizedString;
  options: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  correctIndex: number;
  explanation: LocalizedString;
}

export interface GalleryItem {
  id: string;
  title: LocalizedString;
  city: LocalizedString;
  category: 'architecture' | 'historical' | 'modern' | 'nature';
  image: string;
  yearOrCentury?: string;
  description: LocalizedString;
}

export interface CultureTopic {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  summary: LocalizedString;
  details: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  quote?: LocalizedString;
  tag: LocalizedString;
}

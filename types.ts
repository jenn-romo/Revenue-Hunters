export interface PricingModel {
  title: string;
  target: string;
  price: string;
  features: string[];
  color: 'dark' | 'light';
}

export interface Benefit {
  title: string;
  description: string;
  stat?: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  checked?: boolean;
}

export interface ChecklistPhase {
  phase: string;
  title: string;
  items: ChecklistItem[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  imageColor: string; // Used for the abstract visual placeholder
  content: string[]; // Array of paragraphs for the full article
}

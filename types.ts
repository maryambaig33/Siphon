export enum Page {
  HOME = 'home',
  MENU = 'menu',
  ABOUT = 'about',
  LOCATION = 'location'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'food' | 'alcohol' | 'pastry';
  popular?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

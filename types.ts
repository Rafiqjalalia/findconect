
export enum View {
  DISCOVERY = 'discovery',
  MESSAGES = 'messages',
  SHOP = 'shop',
  PROFILE = 'profile',
  VOICE_HUB = 'voice_hub'
}

export interface User {
  id: string;
  name: string;
  age: number;
  location: string;
  image: string;
  isOnline: boolean;
  isLive: boolean;
}

export interface Message {
  id: string;
  user: Partial<User>;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  isSystem?: boolean;
}

export interface Gift {
  id: string;
  name: string;
  icon: string;
  price: number;
  color: string;
}

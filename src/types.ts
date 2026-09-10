export type ThemeMode = 'dark' | 'light';

export interface BusinessInfo {
  name: string;
  tagline: string;
  location: string;
  primaryService: string;
  phone: string;
  phoneRaw: string;
  email: string;
  facebookUrl: string;
  instagramUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  iconName: 'scissors' | 'sparkles' | 'crown' | 'wind' | 'flame' | 'shield';
  featured?: boolean;
}

export interface BarberProfile {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  isConfigurableNotice?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'fades' | 'beards' | 'studio';
  categoryLabel: string;
  image: string;
  alt: string;
  aspectRatio: string;
}

export interface ReviewItem {
  id: string;
  clientBadge: string;
  quote: string;
  rating: number;
  highlight: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  barber: string;
  additionalNotes: string;
}

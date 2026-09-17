export type BookingStatus = 'Pending' | 'Confirmed' | 'Cancelled' | 'Completed';

export interface SpaService {
  id: string;
  name: string;
  description: string;
  benefits?: string[];
  priceNotice: string; // e.g. "Contact for pricing"
  durationNotice: string; // e.g. "Duration: Contact for details"
  isConfirmed: boolean;
  category: 'Massage' | 'Wellness';
}

export interface SpaReview {
  id: string;
  quote: string;
  highlightCategory: string;
  source: 'Google Reviews (Verified Highlights)';
  tags: string[];
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'all' | 'interior' | 'environment' | 'wellness' | 'atmosphere';
  url: string;
  alt: string;
  isPlaceholder?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SpaBusinessConfig {
  businessName: string;
  category: string;
  phoneDisplay: string;
  phoneNumberTel: string;
  whatsappNumber: string;
  whatsappCountryCode: string;
  whatsappInternational: string;
  address: {
    shop: string;
    sector: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    plusCode: string;
    fullFormatted: string;
  };
  googleMapsUrl: string;
  googleMapsEmbedQuery: string;
  rating: number;
  reviewCount: number;
  hours: string;
  isOpen24Hours: boolean;
  highlights: string[];
  services: SpaService[];
  reviews: SpaReview[];
  gallery: GalleryImage[];
  faqs: FaqItem[];
  // Future configuration fields (strictly null / unverified until owner provides)
  tagline: string | null;
  email: string | null;
  instagram: string | null;
  facebook: string | null;
  cancellationPolicy: string | null;
  advancePaymentPolicy: string | null;
  yearsInBusiness: string | null;
  staffCount: string | null;
  languagesSpoken: string[] | null;
  outCallServiceArea: string | null;
}

export interface AppointmentEnquiry {
  id?: string;
  name: string;
  phone: string;
  service: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  createdAt?: string;
  status?: BookingStatus;
}

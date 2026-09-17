import { SpaBusinessConfig } from '../types';

export const SPA_CONFIG: SpaBusinessConfig = {
  businessName: 'Elite DayNight OutCall Spa',
  category: 'Health Spa',
  phoneDisplay: '09967461876',
  phoneNumberTel: '+919967461876',
  whatsappNumber: '09967461876',
  whatsappCountryCode: '91',
  whatsappInternational: '919967461876',
  address: {
    shop: 'Shop No 654',
    sector: 'Sanpada, Sector 8',
    area: 'Vashi',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    pincode: '400705',
    plusCode: '3253+PM Navi Mumbai, Maharashtra',
    fullFormatted: 'Shop No 654, Sanpada, Sector 8, Vashi, Navi Mumbai, Maharashtra 400705',
  },
  googleMapsUrl: 'https://maps.app.goo.gl/6GVt1syrhK3yHNMXA?g_st=ac',
  googleMapsEmbedQuery: 'Shop+No+654+Sanpada+Sector+8+Vashi+Navi+Mumbai+Maharashtra+400705',
  rating: 5.0,
  reviewCount: 131,
  hours: 'Open 24 Hours',
  isOpen24Hours: true,
  highlights: [
    '24-Hour Availability',
    'Health Spa',
    'LGBTQ+ Friendly',
    'Massage & Wellness Services',
    'OutCall Service Available',
  ],
  services: [
    {
      id: 'full-body-massage',
      name: 'Full Body Massage',
      category: 'Massage',
      description:
        'A comprehensive therapeutic massage designed to alleviate deep muscular tension, stimulate circulation, and induce deep systemic relaxation in a peaceful, hygienic environment.',
      benefits: [
        'Muscle Tension Relief',
        'Enhanced Circulation',
        'Stress Reduction & Calm',
        'Peaceful & Private Setting',
      ],
      priceNotice: 'Contact for pricing',
      durationNotice: 'Duration: Contact for details',
      isConfirmed: true,
    },
    {
      id: 'thai-massage',
      name: 'Thai Massage',
      category: 'Massage',
      description:
        'A traditional restorative technique combining rhythmic acupressure and assisted stretching to improve flexibility, ease joint stiffness, and restore natural bodily equilibrium.',
      benefits: [
        'Gentle Assisted Stretching',
        'Joint Mobility & Flexibility',
        'Energy Flow Balancing',
        'Trained Therapeutic Technique',
      ],
      priceNotice: 'Contact for pricing',
      durationNotice: 'Duration: Contact for details',
      isConfirmed: true,
    },
  ],
  reviews: [
    {
      id: 'rev-1',
      quote: 'Clean place and friendly service.',
      highlightCategory: 'Hygiene & Hospitality',
      source: 'Google Reviews (Verified Highlights)',
      tags: ['Clean environment', 'Friendly service'],
    },
    {
      id: 'rev-2',
      quote: 'Soothing music, lovely scents, and expert hands.',
      highlightCategory: 'Ambiance & Technique',
      source: 'Google Reviews (Verified Highlights)',
      tags: ['Soothing music', 'Relaxing ambiance', 'Skilled touch'],
    },
    {
      id: 'rev-3',
      quote: 'Clean and peaceful environment with a therapist attentive to individual wellness needs.',
      highlightCategory: 'Attentive Care',
      source: 'Google Reviews (Verified Highlights)',
      tags: ['Peaceful setting', 'Attentive therapist', 'Wellness focus'],
    },
    {
      id: 'rev-4',
      quote: 'Excellent massage experience; genuine health spa atmosphere in Sanpada.',
      highlightCategory: 'Massage Service',
      source: 'Google Reviews (Verified Highlights)',
      tags: ['Full Body Massage', 'Thai Massage', '5.0 Rated'],
    },
  ],
  gallery: [
    {
      id: 'gal-1',
      title: 'Serene Spa Interior',
      category: 'interior',
      url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
      alt: 'Peaceful wellness massage room setting with warm soft lighting',
      isPlaceholder: true,
    },
    {
      id: 'gal-2',
      title: 'Therapeutic Massage Setting',
      category: 'wellness',
      url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
      alt: 'Clean therapeutic massage preparation table with natural linens',
      isPlaceholder: true,
    },
    {
      id: 'gal-3',
      title: 'Thai Massage Treatment Space',
      category: 'wellness',
      url: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1200&auto=format&fit=crop',
      alt: 'Traditional Thai wellness mat and tranquil treatment environment',
      isPlaceholder: true,
    },
    {
      id: 'gal-4',
      title: 'Soothing Aromatherapy & Scents',
      category: 'atmosphere',
      url: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop',
      alt: 'Aromatherapy oils and natural spa essentials',
      isPlaceholder: true,
    },
    {
      id: 'gal-5',
      title: 'Calm & Peaceful Environment',
      category: 'environment',
      url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
      alt: 'Relaxation ambiance with candles and warm stone textures',
      isPlaceholder: true,
    },
    {
      id: 'gal-6',
      title: 'Private Wellness Suite',
      category: 'interior',
      url: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1200&auto=format&fit=crop',
      alt: 'Tranquil spa lounge and hygiene station',
      isPlaceholder: true,
    },
  ],
  faqs: [
    {
      question: 'Is the spa open 24 hours?',
      answer: 'Yes, Elite DayNight OutCall Spa is listed as open 24 hours daily, offering continuous wellness availability.',
    },
    {
      question: 'Where is the spa located?',
      answer:
        'The spa is located at Shop No 654, Sanpada, Sector 8, Vashi, Navi Mumbai, Maharashtra 400705 (Plus Code: 3253+PM Navi Mumbai, Maharashtra).',
    },
    {
      question: 'How can I contact the spa?',
      answer:
        'You can call or WhatsApp us directly at 09967461876 (+919967461876). The phone number and WhatsApp number are the same.',
    },
    {
      question: 'What services are confirmed?',
      answer:
        'The currently confirmed services from our verified listing are Full Body Massage and Thai Massage. For complete service details and upcoming additions, please contact us.',
    },
    {
      question: 'What are the service prices and durations?',
      answer:
        'Official prices and specific durations are not listed online. Please contact our reception directly via Phone or WhatsApp for current rates and session options.',
    },
    {
      question: 'Is Elite DayNight OutCall Spa an LGBTQ+ friendly space?',
      answer:
        'Yes, our business listing proudly welcomes all guests and maintains an inclusive, safe, and respectful environment.',
    },
    {
      question: 'How does OutCall service work?',
      answer:
        'As referenced in our business name, OutCall massage and wellness services may be available upon direct coordination. Please call or WhatsApp 09967461876 to confirm specific service area availability and scheduling.',
    },
  ],
  // Unverified fields preserved cleanly as null per guidelines
  tagline: null,
  email: null,
  instagram: null,
  facebook: null,
  cancellationPolicy: null,
  advancePaymentPolicy: null,
  yearsInBusiness: null,
  staffCount: null,
  languagesSpoken: null,
  outCallServiceArea: null,
};

/**
 * Builds a direct WhatsApp deep link with contextual prefilled messages.
 */
export function buildWhatsAppLink(
  type: 'general' | 'service' | 'appointment' | 'custom',
  data?: { serviceName?: string; name?: string; date?: string; time?: string; message?: string }
): string {
  const phone = SPA_CONFIG.whatsappInternational;
  let text = 'Hello, I would like to enquire about spa/massage services and availability.';

  if (type === 'general') {
    text = 'Hello, I would like to enquire about your spa and massage services.';
  } else if (type === 'service' && data?.serviceName) {
    text = `Hello, I would like to enquire about ${data.serviceName}. Please share the price, duration and availability.`;
  } else if (type === 'appointment') {
    const details: string[] = ['Hello, I would like to request an appointment.'];
    if (data?.name) details.push(`Name: ${data.name}`);
    if (data?.serviceName) details.push(`Service: ${data.serviceName}`);
    if (data?.date) details.push(`Preferred Date: ${data.date}`);
    if (data?.time) details.push(`Preferred Time: ${data.time}`);
    if (data?.message) details.push(`Note: ${data.message}`);
    details.push('Please let me know the available date and time slots.');
    text = details.join('\n');
  } else if (type === 'custom' && data?.message) {
    text = data.message;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/**
 * Direct telephone dialer link
 */
export function getCallNowLink(): string {
  return `tel:${SPA_CONFIG.phoneNumberTel}`;
}

import { BusinessInfo, ServiceItem, BarberProfile, GalleryItem, ReviewItem } from '../types';

/**
 * Official Pelos Barbershop image assets provided by the user.
 * Preserved exactly with zero modification or distortion.
 */
export const PELOS_ASSETS = {
  // Official Pelos Barbershop Logo
  logo: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788986824/LOGO2345678909876543234567890.png',
  
  // Official Uploaded Pelos Barbershop Hero Banner
  heroBanner: '/assets/aistudio/pelos-hero-banner.jpg',
  heroBannerUploadedId: '/assets/aistudio/aeb6d6ba-aa1a-4735-a868-2ffde252d507.png',
  heroBannerCdn: 'https://res.cloudinary.com/fzobzdco/image/upload/w_2560,c_scale,e_enhance,e_unsharp_mask:150,e_sharpen:100,q_100/v1788986825/ssahdhahssakjsa.jpg',
  
  // High-Resolution Barbershop Photography
  img1_beardPrecision: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788986823/asSYGSYWQGS.jpg',
  img2_skinFadeChair: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788986824/ddqwdqdwqwdgyt6ggcccccvvbhhbgv.jpg',
  img3_freshFade: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788986824/bhbbhb5636gdu8812vydhwds.jpg',
  img4_studioCraft: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788986824/GYDQGUHSUIHS.jpg',
  img5_salonBanner: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788986825/ssahdhahssakjsa.jpg',
  img6_taperDesign: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788986825/SQWSQWDQDWI999.jpg',
  img7_barberArtistry: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788986825/dqwgydqwgdygdw.jpg',
  img8_sculptedBeardCut: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788986825/dqwdbbbdhwd.jpg',
  img9_shearDetail: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788986826/WQSQWSQbhuwh782.jpg',
  img10_masterBarber: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788986826/wdqwdqdqyugyugyugyugyuut6tr76576576576.jpg',
  img11_transformation: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788986826/yuwqgteydqggygw.jpg',
};

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Pelos Barbershop',
  tagline: 'UN CORTE ÚNICO, COMO TE LO MERECES',
  location: 'Los Angeles, California',
  primaryService: 'Barber Shop',
  phone: '1 747-474-9106',
  phoneRaw: '+17474749106',
  email: 'peluqueriapelosgt@gmail.com',
  facebookUrl: 'https://www.facebook.com/pelosbarbershop.xela/photos',
  instagramUrl: 'https://www.instagram.com/pelos.gt?utm',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'haircuts',
    title: 'Haircuts',
    shortDescription: 'Precision scissor and clipper execution crafted to complement facial architecture and individual lifestyle.',
    iconName: 'scissors',
    featured: true,
  },
  {
    id: 'beard-trim',
    title: 'Beard Grooming',
    shortDescription: 'Detailed edge alignment, length balancing, and cheek-to-neckline definition for a sharp profile.',
    iconName: 'crown',
  },
  {
    id: 'haircut-beard',
    title: 'Haircut + Beard',
    shortDescription: 'The complete signature package: seamless skin fade or scissor work paired with full beard sculpting.',
    iconName: 'sparkles',
    featured: true,
  },
  {
    id: 'styling',
    title: 'Styling',
    shortDescription: 'Textured directional blow-dry, premium matte clay or polish application, and structural silhouette shaping.',
    iconName: 'wind',
  },
  {
    id: 'classic-shave',
    title: 'Classic Shave',
    shortDescription: 'Traditional pre-shave steam, rich warm lather, and an ultra-close straight-razor glide with cold towel finish.',
    iconName: 'flame',
  },
  {
    id: 'premium-grooming',
    title: 'Premium Grooming',
    shortDescription: 'All-inclusive grooming regimen featuring precision haircut, beard overhaul, hot towel treatment, and scalp care.',
    iconName: 'shield',
    featured: true,
  },
];

/**
 * Team cards powered by the user's authentic barbershop photography.
 * Configurable so staff names or specialties can be refined at any time.
 */
export const INITIAL_BARBERS: BarberProfile[] = [
  {
    id: 'barber-1',
    name: 'Master Barber 1',
    specialty: 'Skin Fades & Textured Cuts',
    bio: 'Specialist in razor-sharp gradients, skin tapers, and modern textured crops tailored to hair density.',
    image: PELOS_ASSETS.img10_masterBarber,
    isConfigurableNotice: true,
  },
  {
    id: 'barber-2',
    name: 'Master Barber 2',
    specialty: 'Beard Sculpting & Contouring',
    bio: 'Expert in razor-sharp cheekline definition, beard balancing, and clean hot-towel straight razor shaves.',
    image: PELOS_ASSETS.img7_barberArtistry,
    isConfigurableNotice: true,
  },
  {
    id: 'barber-3',
    name: 'Master Barber 3',
    specialty: 'Precision Fades & Scissor Tailoring',
    bio: 'Dedicated to bespoke craftsmanship, smooth graduation, executive tapers, and scissor silhouette shaping.',
    image: PELOS_ASSETS.img3_freshFade,
    isConfigurableNotice: true,
  },
  {
    id: 'barber-4',
    name: 'Master Barber 4',
    specialty: 'Signature Complete Grooming',
    bio: 'Focused on comprehensive head-to-beard transformations, clipper artistry, and signature styling.',
    image: PELOS_ASSETS.img2_skinFadeChair,
    isConfigurableNotice: true,
  },
];

export const WHY_PELOS_THEMES = [
  {
    number: '01',
    title: 'PRECISION',
    description: 'Attention to the details that define the finished look.',
    detail: 'From millimeter line adjustments to seamless gradient tapers, every motion is executed with exacting accuracy.',
  },
  {
    number: '02',
    title: 'STYLE',
    description: 'A confident approach to modern grooming.',
    detail: 'Contemporary aesthetics informed by urban culture and classic masculine grooming principles.',
  },
  {
    number: '03',
    title: 'CRAFT',
    description: 'Classic barbering combined with a contemporary aesthetic.',
    detail: 'Centuries-old hot towel traditions and straight-razor skill elevated by modern clipper technology.',
  },
  {
    number: '04',
    title: 'EXPERIENCE',
    description: 'A premium, professional environment designed around the customer.',
    detail: 'A curated sanctuary of dark tones, subtle blue ambient lighting, and dedicated one-on-one service.',
  },
];

/**
 * All 11 authentic user photos organized across relevant barbershop categories:
 * - Fades & Haircuts
 * - Beard Grooming & Transformations
 * - Barber Work & Studio Craft
 * - Full Transformations
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Precision Skin Fade & Clipper Alignment',
    category: 'fades',
    categoryLabel: 'Fades & Cuts',
    image: PELOS_ASSETS.img2_skinFadeChair,
    alt: 'Pelos client in barber chair showing a crisp skin fade with clippers',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'gal-2',
    title: 'Beard Detailing & Clipper Shave Technique',
    category: 'beards',
    categoryLabel: 'Beard Grooming',
    image: PELOS_ASSETS.img1_beardPrecision,
    alt: 'Close-up precision beard grooming and edge trimming with clippers',
    aspectRatio: 'aspect-[1/1]',
  },
  {
    id: 'gal-3',
    title: 'Clean Low Fade & Textured Silhouette',
    category: 'fades',
    categoryLabel: 'Fades & Cuts',
    image: PELOS_ASSETS.img3_freshFade,
    alt: 'Sharp finished skin fade with seamless neckline graduation',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'gal-4',
    title: 'Studio Styling & Scissor Architecture',
    category: 'studio',
    categoryLabel: 'Barber Work & Studio',
    image: PELOS_ASSETS.img4_studioCraft,
    alt: 'Barber executing bespoke haircut and texturing in studio',
    aspectRatio: 'aspect-[1/1]',
  },
  {
    id: 'gal-5',
    title: 'Pelos Signature Studio Branding',
    category: 'studio',
    categoryLabel: 'Barber Work & Studio',
    image: PELOS_ASSETS.img5_salonBanner,
    alt: 'Pelos Barbershop modern salon brand showcase',
    aspectRatio: 'aspect-[16/7]',
  },
  {
    id: 'gal-6',
    title: 'High Contrast Taper & Fade Geometry',
    category: 'fades',
    categoryLabel: 'Fades & Cuts',
    image: PELOS_ASSETS.img6_taperDesign,
    alt: 'Master taper cut showcasing geometric line work and fade',
    aspectRatio: 'aspect-[1/1]',
  },
  {
    id: 'gal-7',
    title: 'Signature Barber Artistry & Haircut',
    category: 'studio',
    categoryLabel: 'Barber Work & Studio',
    image: PELOS_ASSETS.img7_barberArtistry,
    alt: 'Master barber styling and finishing a high-definition haircut',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'gal-8',
    title: 'Sculpted Beard Architecture & Clean Edges',
    category: 'beards',
    categoryLabel: 'Beard Grooming',
    image: PELOS_ASSETS.img8_sculptedBeardCut,
    alt: 'Full beard contouring with clean cheekline and sharp definition',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'gal-9',
    title: 'Scissor Detail & Texture Graduation',
    category: 'fades',
    categoryLabel: 'Fades & Cuts',
    image: PELOS_ASSETS.img9_shearDetail,
    alt: 'Detailed haircut craftsmanship emphasizing texture and gradient',
    aspectRatio: 'aspect-[1/1]',
  },
  {
    id: 'gal-10',
    title: 'Master Barber Craft at Work Station',
    category: 'studio',
    categoryLabel: 'Barber Work & Studio',
    image: PELOS_ASSETS.img10_masterBarber,
    alt: 'Pelos master barber delivering tailored cut at the grooming station',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'gal-11',
    title: 'Complete Hair & Beard Transformation',
    category: 'beards',
    categoryLabel: 'Beard Grooming',
    image: PELOS_ASSETS.img11_transformation,
    alt: 'Before and after style complete hair and beard transformation',
    aspectRatio: 'aspect-[4/5]',
  },
];

/**
 * Strictly labeled preview content in compliance with prompt guidelines.
 * No real customer reviews were supplied.
 */
export const SAMPLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    clientBadge: 'SAMPLE REVIEW — PREVIEW CONTENT',
    quote: 'The attention to detail and sharp line work is unmatched. The studio ambiance with deep dark tones and electric blue accents sets a whole new standard for modern barbering.',
    rating: 5,
    highlight: 'Masterful Fade & Atmosphere',
  },
  {
    id: 'rev-2',
    clientBadge: 'SAMPLE REVIEW — PREVIEW CONTENT',
    quote: 'From the hot towel treatment to the razor finish on my beard, everything felt calculated and premium. Pelos truly delivers un corte único.',
    rating: 5,
    highlight: 'Beard Sculpting Perfection',
  },
  {
    id: 'rev-3',
    clientBadge: 'SAMPLE REVIEW — PREVIEW CONTENT',
    quote: 'Walking in felt like an executive grooming club. Professional communication, pristine clippers, and an impeccable taper cut that lasted weeks.',
    rating: 5,
    highlight: 'Consistency & Craft',
  },
  {
    id: 'rev-4',
    clientBadge: 'SAMPLE REVIEW — PREVIEW CONTENT',
    quote: 'Best grooming experience in Los Angeles. Clean lines, confident barbers, and a welcoming luxury atmosphere that respects your time.',
    rating: 5,
    highlight: 'Flawless Styling',
  },
];

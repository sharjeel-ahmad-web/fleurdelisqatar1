export type Language = 'en' | 'ar';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  duration?: string;
  imageUrl?: string;
  // Either a flat price or tiered by hair length
  price?: number; // In QAR
  pricingTier?: {
    short: number;
    medium: number;
    long: number;
    veryLong: number;
  };
  highlight?: boolean;
  popular?: boolean;
  benefitsEn?: string[];
  benefitsAr?: string[];
}

export type ServiceCategory =
  | 'hair-color'
  | 'hair-treatments'
  | 'hair-styling'
  | 'hair-extensions'
  | 'nails'
  | 'nail-enhancements'
  | 'facials'
  | 'lashes-brows'
  | 'hair-removal'
  | 'body-massage'
  | 'kids'
  | 'home-service';

export interface ReviewItem {
  id: string;
  author: string;
  authorAr?: string;
  rating: number;
  dateEn: string;
  dateAr: string;
  textEn: string;
  textAr: string;
  serviceCategory?: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'hair' | 'nails' | 'facials' | 'bridal' | 'salon';
  categoryLabelEn: string;
  categoryLabelAr: string;
  descriptionEn: string;
  descriptionAr: string;
  imageUrl: string;
  svgType?: string;
}

export interface BeforeAfterItem {
  id: string;
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  descriptionEn: string;
  descriptionAr: string;
  beforeLabelEn: string;
  beforeLabelAr: string;
  afterLabelEn: string;
  afterLabelAr: string;
  details: string;
  beforeImage: string;
  afterImage: string;
}

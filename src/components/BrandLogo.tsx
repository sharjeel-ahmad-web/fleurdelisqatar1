import React from 'react';

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'gold';
  lang?: 'en' | 'ar';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
  variant = 'dark',
  lang = 'en'
}) => {
  const iconSizes = {
    sm: 'w-7 h-9',
    md: 'w-9 h-11',
    lg: 'w-12 h-14',
    xl: 'w-16 h-20'
  };

  const textStyles = {
    sm: {
      ar: 'text-base font-bold',
      en: 'text-xs tracking-[0.25em]'
    },
    md: {
      ar: 'text-lg font-bold',
      en: 'text-sm tracking-[0.28em]'
    },
    lg: {
      ar: 'text-2xl font-bold',
      en: 'text-base tracking-[0.3em]'
    },
    xl: {
      ar: 'text-3xl font-bold',
      en: 'text-lg tracking-[0.32em]'
    }
  };

  const mainColor = variant === 'light' ? '#FFFFFF' : '#1E252B';
  const goldColor = '#C29B38';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Logo Icon: Feminine Silhouette & Flourishing Fleur-de-lis Hair Strands */}
      <div className={`relative ${iconSizes[size]} shrink-0 transition-transform duration-300 hover:scale-105`}>
        <svg
          viewBox="0 0 120 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          {/* Subtle Outer Glow */}
          <circle cx="60" cy="75" r="48" fill={goldColor} fillOpacity="0.06" />

          {/* Delicate Feminine Face Profile */}
          <path
            d="M58 20 C54 22 50 26 49 32 C48 37 49 42 51 45 C51 47 48 49 46 51 C45 52 46 54 49 54 C50 54 52 53 53 52 C52 55 52 58 53 60 C55 64 59 66 61 68"
            stroke={mainColor}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Delicate Eyebrow & Eyelash Profile Curve */}
          <path
            d="M51 34 C53 33 55 34 56 36"
            stroke={goldColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M53 38 C54 39 55 39 56 38"
            stroke={mainColor}
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          {/* Flowing Crown & Hairline */}
          <path
            d="M58 20 C64 19 70 23 72 29 C74 36 71 44 68 50 C65 56 61 62 60 70 C58 78 57 88 60 98"
            stroke={goldColor}
            strokeWidth="2.6"
            strokeLinecap="round"
          />

          {/* Elegant Left Hair Arabesque Loop (French Fleur Swirl) */}
          <path
            d="M50 48 C42 46 34 52 32 60 C30 68 36 74 44 73 C50 72 54 66 54 60 C54 54 48 50 43 53 C38 56 38 64 42 68 C45 71 52 72 56 78 C60 84 62 92 61 100"
            stroke={mainColor}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Lower Left Delicate S-Curve Flounce */}
          <path
            d="M32 72 C26 78 25 88 30 94 C35 100 45 100 52 94 C56 90 58 84 57 78"
            stroke={goldColor}
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Elegant Right Hair Arabesque Loop (Fleur Flourish) */}
          <path
            d="M68 52 C76 50 84 56 86 64 C88 72 82 78 74 77 C68 76 64 70 64 64 C64 58 70 54 75 57 C80 60 80 68 76 72 C73 75 66 76 62 82 C58 88 56 96 57 104"
            stroke={mainColor}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Lower Right Golden Flourish */}
          <path
            d="M86 76 C92 82 93 92 88 98 C83 104 73 104 66 98 C62 94 60 88 61 82"
            stroke={goldColor}
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Bottom Root Harmonious Flourish (Base of Fleur de Lis) */}
          <path
            d="M48 98 C46 106 50 114 58 116 C66 118 72 112 70 104 C69 98 62 94 56 98 C50 102 54 110 60 110"
            stroke={goldColor}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M60 116 C60 124 58 132 54 136"
            stroke={mainColor}
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Decorative Sparkle Accent */}
          <path
            d="M82 30 L84 25 L86 30 L91 32 L86 34 L84 39 L82 34 L77 32 Z"
            fill={goldColor}
            fillOpacity="0.85"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col justify-center leading-none">
          {/* Arabic Brand Name */}
          <span
            className={`font-serif tracking-normal text-[#1E252B] ${
              variant === 'light' ? 'text-white' : 'text-[#1E252B]'
            } ${textStyles[size].ar}`}
            style={{ fontFamily: "'Cairo', 'Amiri', serif" }}
          >
            فلور دو لي
          </span>

          {/* Latin Brand Name */}
          <span
            className={`font-serif uppercase font-semibold text-[#C29B38] ${textStyles[size].en}`}
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
          >
            FLEUR DE LIS
          </span>

          {/* Subtitle */}
          <span
            className={`text-[9px] uppercase tracking-[0.25em] text-[#8C7A6B] mt-0.5 ${
              size === 'sm' ? 'hidden' : 'block'
            }`}
          >
            {lang === 'ar' ? 'إزدان مول الوكرة' : 'Ezdan Mall Al Wakra'}
          </span>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Salon Fleur De Lis',
  className = '',
  containerClassName = '',
  fallbackTitle,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden bg-[#2D241E] ${containerClassName}`}>
      {/* Shimmer skeleton while loading */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A221C] via-[#382F27] to-[#2A221C] animate-pulse z-10" />
      )}

      {/* Actual Image */}
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
            isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          } ${className}`}
          {...rest}
        />
      ) : null}

      {/* Zero Broken Image Fallback - Luxury Gold/Charcoal Container */}
      {hasError || !src ? (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#251F1B] via-[#352D26] to-[#1E1915] p-5 flex flex-col items-center justify-center text-center text-white">
          <div className="w-10 h-10 rounded-full bg-[#C29B38]/20 border border-[#C29B38]/40 flex items-center justify-center mb-2">
            <Sparkles className="w-5 h-5 text-[#E5D2A0]" />
          </div>
          {fallbackTitle && (
            <span className="text-xs font-serif text-[#F8F4EE] max-w-[80%] line-clamp-1">
              {fallbackTitle}
            </span>
          )}
          <span className="text-[10px] text-[#C29B38] tracking-widest uppercase mt-1">
            Fleur De Lis
          </span>
        </div>
      ) : null}
    </div>
  );
};

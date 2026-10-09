import React, { useState } from 'react';
import { Language } from '../types';
import { SALON_INFO } from '../data/salonData';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const defaultMessage = isAr
    ? 'مرحباً صالون فلور دو لي، أود الاستفسار عن المواعيد والخدمات في فرع إزدان مول الوكرة.'
    : 'Hello Salon Fleur De Lis, I would like to inquire about appointments at Ezdan Mall Al Wakra.';

  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div
      className={`fixed bottom-6 ${
        isAr ? 'left-6' : 'right-6'
      } z-40 flex items-center gap-3 select-none`}
    >
      {/* Floating Tooltip Pill */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 text-[#1E252B] px-3.5 py-2 rounded-2xl shadow-xl border border-[#E4DACB] text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>{isAr ? 'حجز واستفسار فوري؟' : 'Need instant assistance?'}</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-[#8C98A5] hover:text-[#1E252B] p-0.5 rounded-full"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Circular Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline-hidden focus-visible:ring-4 focus-visible:ring-[#25D366]/40 group"
        aria-label="Contact Salon Fleur De Lis on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 drop-shadow-xs" />
        {/* Subtle Ambient Pulse Ring */}
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/60 animate-ping opacity-60 pointer-events-none" />
      </a>
    </div>
  );
};

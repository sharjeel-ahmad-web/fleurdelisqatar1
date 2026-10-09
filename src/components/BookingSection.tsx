import React, { useState } from 'react';
import { ServiceItem, Language } from '../types';
import { SERVICES_DATA, SALON_INFO } from '../data/salonData';
import { Calendar, Clock, CheckCircle2, MessageCircle, Sparkles, Send, Phone } from 'lucide-react';

interface BookingSectionProps {
  lang: Language;
  preselectedService?: ServiceItem | null;
  onClearPreselectedService?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  lang,
  preselectedService,
  onClearPreselectedService
}) => {
  const isAr = lang === 'ar';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState(
    preselectedService ? preselectedService.id : SERVICES_DATA[0].id
  );
  const [hairLength, setHairLength] = useState<'short' | 'medium' | 'long' | 'veryLong'>('medium');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('14:00');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Update selected service if preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setSelectedServiceId(preselectedService.id);
    }
  }, [preselectedService]);

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  // Calculate estimated price
  let estimatedPrice = 0;
  if (selectedService.price !== undefined) {
    estimatedPrice = selectedService.price;
  } else if (selectedService.pricingTier) {
    estimatedPrice = selectedService.pricingTier[hairLength];
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = isAr
      ? `السلام عليكم، أود حجز موعد في صالون فلور دو لي (إزدان مول الوكرة):\n\n• الاسم: ${name || 'عميلة كريمة'}\n• الهاتف: ${phone || 'غير محدد'}\n• الخدمة: ${selectedService.nameAr}\n• التكلفة التقديرية: ${estimatedPrice} ر.ق\n• التاريخ المفضل: ${preferredDate || 'أقرب وقت متاح'}\n• الوقت: ${preferredTime}\n• ملاحظات: ${notes || 'لا يوجد'}`
      : `Hello, I would like to book an appointment at Salon Fleur De Lis (Ezdan Mall Al Wakra):\n\n• Name: ${name || 'Valued Client'}\n• Phone: ${phone || 'Not specified'}\n• Service: ${selectedService.nameEn}\n• Estimated Price: ${estimatedPrice} QAR\n• Preferred Date: ${preferredDate || 'Earliest available'}\n• Preferred Time: ${preferredTime}\n• Notes: ${notes || 'None'}`;

    return `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C6D23] font-semibold">
            <span className="w-6 h-[1.5px] bg-[#C29B38]" />
            <span>{isAr ? 'حجز موعد فوري ومريح' : 'RESERVATIONS & BOOKING'}</span>
            <span className="w-6 h-[1.5px] bg-[#C29B38]" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1E22] leading-tight"
            style={{
              fontFamily: isAr
                ? "'Cairo', 'Amiri', serif"
                : "'Cormorant Garamond', 'Playfair Display', Georgia, serif"
            }}
          >
            {isAr ? (
              <>
                احجزي جلستك الخاصة في <span className="italic text-[#B68934]">إزدان مول الوكرة</span>
              </>
            ) : (
              <>
                Reserve Your Private Session at <span className="italic text-[#B68934]">Ezdan Mall Al Wakra</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#5C6773] leading-relaxed">
            {isAr
              ? 'اختاري الخدمة والموعد المناسب وسنقوم بتأكيد حجزك فوراً عبر الواتساب أو الاتصال الهاتفي، مع الحفاظ التام على خصوصيتك.'
              : 'Select your preferred service and schedule. We will instantly confirm your appointment via WhatsApp or phone call.'}
          </p>
        </div>

        {/* Booking Card Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E7DFD4]">
          {submitted ? (
            <div className="text-center py-12 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3
                className="text-2xl font-serif text-[#1E252B]"
                style={{ fontFamily: isAr ? "'Cairo', serif" : "'Cormorant Garamond', Georgia, serif" }}
              >
                {isAr ? 'تم استلام طلب حجزك بنجاح!' : 'Your Appointment Request Has Been Received!'}
              </h3>
              <p className="text-sm text-[#5C6773] max-w-md mx-auto leading-relaxed">
                {isAr
                  ? `شكراً لكِ يا ${name || 'عزيزتنا'}. تم تسجيل طلبك لخدمة "${selectedService.nameAr}". سيتواصل معكِ مكتب استقبال صالون فلور دو لي لتأكيد الموعد.`
                  : `Thank you ${name || 'valued client'}. Your request for "${selectedService.nameEn}" has been received. Our Ezdan Mall reception team will contact you shortly.`}
              </p>

              {/* Direct WhatsApp Confirmation Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors flex items-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isAr ? 'تأكيد الحجز فوراً عبر الواتساب' : 'Confirm Instantly via WhatsApp'}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    if (onClearPreselectedService) onClearPreselectedService();
                  }}
                  className="text-xs text-[#717E8C] hover:text-[#1E252B] underline"
                >
                  {isAr ? 'حجز موعد آخر' : 'Book another session'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-start">
              {/* Client Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E252B] mb-2">
                    {isAr ? 'الاسم الكريم *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isAr ? 'مثال: فاطمة الكواري' : 'e.g. Sarah Smith'}
                    className="w-full px-4 py-3 rounded-xl border border-[#DCD3C7] text-sm text-[#1E252B] focus:outline-hidden focus:border-[#C29B38] bg-[#FAF8F5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E252B] mb-2">
                    {isAr ? 'رقم الهاتف / الواتساب في قطر *' : 'Phone / WhatsApp in Qatar *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={isAr ? 'مثال: 6622 6043 974+' : '+974 6622 6043'}
                    className="w-full px-4 py-3 rounded-xl border border-[#DCD3C7] text-sm text-[#1E252B] focus:outline-hidden focus:border-[#C29B38] bg-[#FAF8F5]"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E252B] mb-2">
                  {isAr ? 'الخدمة المطلوبة *' : 'Selected Service *'}
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#DCD3C7] text-sm text-[#1E252B] focus:outline-hidden focus:border-[#C29B38] bg-[#FAF8F5] cursor-pointer"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {isAr ? srv.nameAr : srv.nameEn} — (
                      {srv.price !== undefined ? `${srv.price} QAR` : 'Tiered pricing'}
                      )
                    </option>
                  ))}
                </select>
              </div>

              {/* Hair Length Selector if applicable */}
              {selectedService.pricingTier && (
                <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E7DFD4]">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E252B] mb-2">
                    {isAr ? 'طول الشعر المقدر *' : 'Estimated Hair Length *'}
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {(['short', 'medium', 'long', 'veryLong'] as const).map((len) => (
                      <button
                        type="button"
                        key={len}
                        onClick={() => setHairLength(len)}
                        className={`p-2 rounded-xl text-center border text-xs transition-colors cursor-pointer ${
                          hairLength === len
                            ? 'bg-[#1E252B] text-white border-[#1E252B]'
                            : 'bg-white text-[#525E6A] border-[#DCD3C7] hover:border-[#C29B38]'
                        }`}
                      >
                        <div className="font-semibold">
                          {len === 'short' && (isAr ? 'قصير' : 'Short')}
                          {len === 'medium' && (isAr ? 'وسط' : 'Med')}
                          {len === 'long' && (isAr ? 'طويل' : 'Long')}
                          {len === 'veryLong' && (isAr ? 'طويل جداً' : 'X-Long')}
                        </div>
                        <div className="text-[10px] mt-0.5 opacity-80">
                          {selectedService.pricingTier?.[len]} QAR
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Date and Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E252B] mb-2">
                    {isAr ? 'تاريخ الزيارة المفضل *' : 'Preferred Date *'}
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#DCD3C7] text-sm text-[#1E252B] focus:outline-hidden focus:border-[#C29B38] bg-[#FAF8F5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E252B] mb-2">
                    {isAr ? 'الوقت المفضل (بين 11 ص و 10 م) *' : 'Preferred Time (11AM - 10PM) *'}
                  </label>
                  <input
                    type="time"
                    required
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#DCD3C7] text-sm text-[#1E252B] focus:outline-hidden focus:border-[#C29B38] bg-[#FAF8F5]"
                  />
                </div>
              </div>

              {/* Message / Special requests */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E252B] mb-2">
                  {isAr ? 'ملاحظات إضافية (أو طلب خدمة منزلية)' : 'Notes / Special Requests (or Home Service)'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={
                    isAr
                      ? 'أي تفاصيل عن حالة الشعر، أو طلب فنية معينة، أو تفاصيل العنوان للخدمة المنزلية...'
                      : 'Any hair condition notes, technician preference, or address details for home service...'
                  }
                  className="w-full px-4 py-3 rounded-xl border border-[#DCD3C7] text-sm text-[#1E252B] focus:outline-hidden focus:border-[#C29B38] bg-[#FAF8F5]"
                />
              </div>

              {/* Estimated Summary Bar */}
              <div className="p-4 bg-[#F7F2EA] rounded-2xl border border-[#E6DDCE] flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#736555] font-semibold block">
                    {isAr ? 'التكلفة الرسمية التقديرية:' : 'Estimated Official Price:'}
                  </span>
                  <span className="text-xl font-bold font-serif text-[#1E252B]">
                    {estimatedPrice} QAR
                  </span>
                </div>
                <div className="text-end text-[11px] text-[#717E8C]">
                  <span>{isAr ? 'الدفع في الصالون (كاش أو بطاقة)' : 'Pay at Salon (Cash or Card)'}</span>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-4 bg-[#1E252B] hover:bg-[#C29B38] text-white text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>{isAr ? 'إرسال طلب الحجز' : 'Request Appointment'}</span>
                </button>

                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isAr ? 'حجز فوري بالواتساب' : 'Book via WhatsApp'}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

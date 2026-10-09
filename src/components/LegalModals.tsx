import React from 'react';
import { Language } from '../types';
import { SALON_INFO } from '../data/salonData';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  lang: Language;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, lang, onClose }) => {
  if (!type) return null;
  const isAr = lang === 'ar';

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#FAF6F0] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E4DACB] max-h-[85vh] overflow-y-auto text-start"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white text-[#1E252B] border border-[#E4DACB] hover:bg-[#FAF6F0] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#C29B38] text-xs uppercase font-semibold tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>{isAr ? 'سياسة الخصوصية' : 'PRIVACY POLICY'}</span>
            </div>

            <h3
              className="text-2xl font-serif text-[#1E252B]"
              style={{ fontFamily: isAr ? "'Cairo', serif" : "'Cormorant Garamond', Georgia, serif" }}
            >
              {isAr ? 'سياسة الخصوصية وسرية بيانات العميلات' : 'Client Privacy & Data Protection Policy'}
            </h3>

            <div className="text-xs sm:text-sm text-[#525E6A] space-y-3 leading-relaxed">
              <p>
                {isAr
                  ? `نلتزم في صالون فلور دو لي (إزدان مول الوكرة، قطر) بالحفاظ التام على خصوصية وبيانات كافة عميلاتنا الكرام. إن أي معلومات يتم تقديمها (مثل الاسم، رقم الهاتف، أو تفاصيل الموعد) تُستخدم حصرياً لإتمام الحجز والتواصل معكِ لتأكيد الخدمة.`
                  : `At Salon Fleur De Lis (Ezdan Mall Al Wakra, Qatar), we hold client privacy with the utmost reverence. Any contact details provided during reservations are used exclusively to confirm and coordinate your appointments.`}
              </p>
              <h4 className="font-bold text-[#1E252B] text-sm pt-2">
                {isAr ? '1. الخصوصية داخل الصالون' : '1. In-Salon Physical Discretion'}
              </h4>
              <p>
                {isAr
                  ? 'صالون فلور دو لي مصمم حصرياً للسيدات مع التزام كامل بعدم التصوير الداخلي في أجنحة العلاج الخاصة وجلسات إزالة الشعر والمساج حفاظاً على الراحة التامة.'
                  : 'Our salon is an exclusive ladies-only sanctuary equipped with individual private suites for waxing and massage treatments where complete discretion is strictly maintained.'}
              </p>
              <h4 className="font-bold text-[#1E252B] text-sm pt-2">
                {isAr ? '2. التواصل والواتساب' : '2. Communications & Messaging'}
              </h4>
              <p>
                {isAr
                  ? `لن يتم مشاركة أرقام الهواتف أو استخدامها في أي رسائل ترويجية مزعجة دون موافقتك الصريحة.`
                  : `Your phone number is never shared with third parties or used for unsolicited marketing.`}
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#C29B38] text-xs uppercase font-semibold tracking-wider">
              <FileText className="w-4 h-4" />
              <span>{isAr ? 'الشروط والأحكام' : 'TERMS OF SERVICE'}</span>
            </div>

            <h3
              className="text-2xl font-serif text-[#1E252B]"
              style={{ fontFamily: isAr ? "'Cairo', serif" : "'Cormorant Garamond', Georgia, serif" }}
            >
              {isAr ? 'شروط الحجز وخدمات الصالون' : 'Salon Reservation & Service Terms'}
            </h3>

            <div className="text-xs sm:text-sm text-[#525E6A] space-y-3 leading-relaxed">
              <h4 className="font-bold text-[#1E252B] text-sm pt-1">
                {isAr ? '1. سياسة المواعيد والإلغاء' : '1. Appointments & Punctuality'}
              </h4>
              <p>
                {isAr
                  ? 'يُرجى الحضور قبل موعدك بـ 10 دقائق لضمان الاستمتاع بكامل وقت الجلسة. في حال الرغبة في تعديل أو إلغاء الموعد، نرجو إشعارنا قبل 3 ساعات على الأقل عبر الواتساب.'
                  : 'We kindly request arriving 10 minutes prior to your reserved time. If you need to reschedule or cancel, please notify our reception team at least 3 hours in advance via WhatsApp.'}
              </p>
              <h4 className="font-bold text-[#1E252B] text-sm pt-2">
                {isAr ? '2. تسعير الخدمات' : '2. Service Pricing'}
              </h4>
              <p>
                {isAr
                  ? `تعتمد جميع الأسعار بالريال القطري (QAR) وهي مطابقة لقائمتنا الرسمية المعلقة في إزدان مول الوكرة. قد تختلف أسعار الصبغات والمعالجات حسب كثافة وطول الشعر وفق الفئات المحددة مسبقاً.`
                  : `All prices are quoted in Qatari Riyals (QAR) in accordance with our official salon menu. Chemical and hair smoothing treatments may adjust based on natural strand density and length.`}
              </p>
              <h4 className="font-bold text-[#1E252B] text-sm pt-2">
                {isAr ? '3. الخدمة المنزلية' : '3. At-Home Service Protocols'}
              </h4>
              <p>
                {isAr
                  ? 'تبلغ رسوم انتقال الفنية للخدمة المنزلية 250 ريال قطري لكل فني، بالإضافة إلى تكلفة الخدمات المختارة.'
                  : 'At-home VIP service carries a flat travel fee of 250 QAR per technician plus the selected services from our menu.'}
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 border-t border-[#E5DAC8] text-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#1E252B] hover:bg-[#C29B38] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
          >
            {isAr ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

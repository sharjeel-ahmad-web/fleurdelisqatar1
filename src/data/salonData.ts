import { ServiceItem, ReviewItem, GalleryItem, BeforeAfterItem } from '../types';

export const SALON_INFO = {
  nameEn: 'Salon Fleur De Lis - Ezdan Mall Al Wakra',
  nameAr: 'صالون فلور دو لي - إزدان مول الوكرة',
  shortNameEn: 'Fleur De Lis',
  shortNameAr: 'فلور دو لي',
  subtitleEn: 'Beauty Salon & Spa',
  subtitleAr: 'صالون تجميل وسبا',
  mallEn: 'Ezdan Mall Al Wakra',
  mallAr: 'إزدان مول الوكرة',
  locationDetailsEn: 'First Floor, Near Gate 4 or 5, Al Wukair Street, Al Wakrah, Qatar',
  locationDetailsAr: 'الطابق الأول، بالقرب من بوابة 4 أو 5، شارع الوكير، الوكرة، قطر',
  plusCode: '5HCQ+GG Al Wakrah, Qatar',
  phoneMobile: '+974 6622 6043',
  phoneLandline: '+974 4432 8274',
  whatsappNumber: '97466226043',
  whatsappDisplay: '+974 6622 6043',
  googleRating: 4.8,
  totalReviews: 36,
  hours: {
    satThuEn: 'Saturday – Thursday: 11:00 AM – 9:00 PM',
    satThuAr: 'السبت – الخميس: 11:00 صباحاً – 9:00 مساءً',
    friEn: 'Friday: 1:00 PM – 10:00 PM',
    friAr: 'الجمعة: 1:00 ظهراً – 10:00 مساءً',
  },
  brands: [
    'L\'Oréal Professionnel',
    'Schwarzkopf Professional',
    'Skeyndor Barcelona',
    'Felps Professional',
    'Innovatis Caviar',
    'ELIM MediHeel'
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  // --- HAIR COLORING ---
  {
    id: 'hair-color-full',
    category: 'hair-color',
    nameEn: 'Hair Color - Full',
    nameAr: 'صبغ الشعر - كامل',
    descriptionEn: 'Full head rich and luminous permanent color customized to your skin tone and desired depth.',
    descriptionAr: 'صبغ الشعر بالكامل بلون غني ومشرق مخصص ليتناسب مع لون بشرتك وإطلالتك.',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 350, medium: 400, long: 450, veryLong: 550 },
    highlight: true,
    popular: true,
    duration: '90-120 min',
    benefitsEn: ['Vibrant multidimensional reflection', 'Rich gray coverage', 'Long-lasting shine and condition'],
    benefitsAr: ['انعكاس ألوان متعدد الأبعاد', 'تغطية مثالية للشيب', 'لمعان دائم وتغذية للشعر']
  },
  {
    id: 'ammonia-free-color',
    category: 'hair-color',
    nameEn: 'Ammonia-Free Hair Color - Full',
    nameAr: 'صبغ الشعر بالكامل (خالٍ من الأمونيا)',
    descriptionEn: 'Gentle, ammonia-free oil-delivery formula providing scalp comfort and radiant velvet gloss.',
    descriptionAr: 'تركيبة لطيفة خالية من الأمونيا تحافظ على فروة الرأس وتمنح الشعر نعومة ولمعاناً فائقاً.',
    imageUrl: 'https://images.unsplash.com/photo-1522337094346-297c11f44c4b?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 400, medium: 450, long: 500, veryLong: 600 },
    duration: '90-120 min',
    benefitsEn: ['Zero ammonia odor', 'Maximum scalp comfort', 'Deeply nourished hair fiber'],
    benefitsAr: ['بدون رائحة الأمونيا', 'أقصى راحة لفروة الرأس', 'تغذية عميقة لألياف الشعر']
  },
  {
    id: 'root-color',
    category: 'hair-color',
    nameEn: 'Root Color',
    nameAr: 'صبغ جذور الشعر',
    descriptionEn: 'Seamless root regrowth touch-up matching your current shade perfectly.',
    descriptionAr: 'تجديد احترافي لجذور الشعر لإخفاء الفوارق اللونية والشيب بدقة متناهية.',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    price: 250,
    duration: '60 min',
    benefitsEn: ['Flawless blending with lengths', 'Precise application', 'Quick styling refresh'],
    benefitsAr: ['دمج مثالي مع باقي الشعر', 'تطبيق دقيق واحترافي', 'تجديد سريع لإشراقة الشعر']
  },
  {
    id: 'ammonia-free-root-color',
    category: 'hair-color',
    nameEn: 'Ammonia-Free Root Color',
    nameAr: 'صبغ جذور الشعر (خالٍ من الأمونيا)',
    descriptionEn: 'Nourishing ammonia-free touch-up gentle on sensitive scalps.',
    descriptionAr: 'صبغ جذور الشعر بتركيبة خالية تماماً من الأمونيا ومناسبة لفروة الرأس الحساسة.',
    imageUrl: 'https://images.unsplash.com/photo-1522337094346-297c11f44c4b?auto=format&fit=crop&w=800&q=80',
    price: 300,
    duration: '60 min'
  },
  {
    id: 'hair-toner',
    category: 'hair-color',
    nameEn: 'Hair Toner & Gloss',
    nameAr: 'تونر ولمعان لون الشعر',
    descriptionEn: 'Neutralizes brassy undertones, restores radiant shine, and refreshes blonde or brunette shades.',
    descriptionAr: 'توحيد لون الشعر والتخلص من النغمات النحاسية غير المرغوبة مع لمعان زجاجي خلاب.',
    imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 250, medium: 300, long: 350, veryLong: 400 },
    duration: '45-60 min'
  },
  {
    id: 'color-removal-bleach',
    category: 'hair-color',
    nameEn: 'Color Removal / Bleaching',
    nameAr: 'سحب اللون / تفتيح الشعر',
    descriptionEn: 'Safe expert lightening and pigment extraction with bond-protecting technology.',
    descriptionAr: 'سحب احترافي للون القديم وتفتيح آمن مع حماية روابط ألياف الشعر.',
    imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 500, medium: 600, long: 700, veryLong: 800 },
    duration: '120-180 min'
  },
  {
    id: 'hair-contouring',
    category: 'hair-color',
    nameEn: 'Hair Contouring',
    nameAr: 'هايلايت - الكونتورينغ',
    descriptionEn: 'Artistic placement of light and shadow around the face to accentuate facial structure and features.',
    descriptionAr: 'توزيع فني لدرجات الضوء والظل حول الوجه لإبراز الملامح بأسلوب سينمائي راقٍ.',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 400, medium: 450, long: 550, veryLong: 650 },
    duration: '90-120 min'
  },
  {
    id: 'balayage-ombre-full-highlights',
    category: 'hair-color',
    nameEn: 'Full Highlights / Balayage / Ombré',
    nameAr: 'خصلات كاملة / بالياج / أومبري',
    descriptionEn: 'Signature Parisian balayage hand-painted seamlessly for soft lived-in luxury dimension.',
    descriptionAr: 'تقنية البالياج والأومبري الفرنسية الفاخرة لتدرجات لونية ساحرة وطبيعية بانسيابية تامة.',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
    highlight: true,
    popular: true,
    duration: '150-210 min',
    benefitsEn: ['Custom hand-painted French balayage', 'Natural seamless grow-out', 'Dimensional sun-kissed reflection'],
    benefitsAr: ['رسم يدوي متقن بتقنية البالياج', 'نمو طبيعي بدون خطوط حادة', 'أبعاد لونية ساحرة ومشرقة']
  },
  {
    id: 'half-highlights',
    category: 'hair-color',
    nameEn: 'Half Highlights / Lowlights',
    nameAr: 'هايلايت - النصف',
    descriptionEn: 'Top-crown and framing dimensional foils for targeted radiance and texture.',
    descriptionAr: 'إضافة خصلات هايلايت لمنطقة التاج ومحيط الوجه لإضفاء حيوية وعمق مميز.',
    imageUrl: 'https://images.unsplash.com/photo-1522337094346-297c11f44c4b?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 400, medium: 500, long: 600, veryLong: 700 },
    duration: '90-120 min'
  },

  // --- HAIR TREATMENTS ---
  {
    id: 'sidr-natural-treatment',
    category: 'hair-treatments',
    nameEn: 'Natural Hair Treatment – Sidr',
    nameAr: 'علاج الشعر الطبيعي بالسدر',
    descriptionEn: 'Traditional Qatari & Arabian natural herbal Sidr therapy that thickens strands, purifies the scalp, and stimulates healthy root growth.',
    descriptionAr: 'علاج السدر الطبيعي التراثي الأصيل لتقوية جذور الشعر، تكثيف البصيلات وتنقية فروة الرأس بفوائد طبيعية خالصة.',
    imageUrl: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80',
    price: 150,
    highlight: true,
    popular: true,
    duration: '60 min',
    benefitsEn: ['Traditional Arabian botanical care', 'Strengthens roots and reduces hair fall', '150 QAR flat rate for all lengths'],
    benefitsAr: ['عناية نباتية عربية أصيلة', 'تقوية الجذور والحد من التساقط', 'سعر ثابت 150 ر.ق لجميع أطوال الشعر']
  },
  {
    id: 'natural-oil-aloe-vera',
    category: 'hair-treatments',
    nameEn: 'Natural Treatment – Growth Oil / Aloe Vera / Split Ends',
    nameAr: 'علاج طبيعي بزيت النمو أو الألوفيرا أو لعلاج التقصف',
    descriptionEn: 'Pure cold-pressed botanical oils and organic fresh aloe vera infused for moisture balance and split-end repair.',
    descriptionAr: 'مزيج فاخر من زيوت النمو النقية وخلاصة الصبار الطبيعي لعلاج التقصف وترطيب الخصلات بعمق.',
    imageUrl: 'https://images.unsplash.com/photo-1522337094346-297c11f44c4b?auto=format&fit=crop&w=800&q=80',
    price: 250,
    duration: '60 min',
    benefitsEn: ['Deep lipid restoration', 'Seals split ends', '250 QAR flat rate for all lengths'],
    benefitsAr: ['ترميم الدهون الطبيعية للشعر', 'إغلاق نهايات الشعر المتقصفة', 'سعر ثابت 250 ر.ق لكافة الأطوال']
  },
  {
    id: 'schwarzkopf-fibre-clinix',
    category: 'hair-treatments',
    nameEn: 'Schwarzkopf Fibre Clinix Treatment',
    nameAr: 'علاج شوارزكوف فايبر كلينكس',
    descriptionEn: 'Advanced Triple Bonding & C21 technology that connects inner hair bonds for 10x stronger hair resilience.',
    descriptionAr: 'تقنية شوارزكوف الثورية لربط الروابط الداخلية التالفة للشعر ومضاعفة قوته حتى 10 أضعاف.',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 200, medium: 250, long: 300, veryLong: 350 },
    duration: '45-60 min'
  },
  {
    id: 'loreal-metal-detox',
    category: 'hair-treatments',
    nameEn: 'L\'Oréal Metal Detox Treatment (Sulfate-Free)',
    nameAr: 'علاج لوريال ميتال ديتوكس (خالٍ من الكبريتات)',
    descriptionEn: 'Glicoamine molecular patented treatment that neutralizes toxic copper and metal particles inside the hair fiber to prevent breakage.',
    descriptionAr: 'علاج لوريال الحاصل على براءة اختراع لإزالة تراكمات المعادن داخل ألياف الشعر لمنع التكسر ومنح لمعان حريري.',
    imageUrl: 'https://images.unsplash.com/photo-1522337094346-297c11f44c4b?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 150, medium: 175, long: 200, veryLong: 250 },
    duration: '40 min'
  },
  {
    id: 'felps-nanoplastia',
    category: 'hair-treatments',
    nameEn: 'Felps Nanoplastia',
    nameAr: 'نانوبلاستيا فيلبس',
    descriptionEn: 'The gold standard Brazilian smoothing and straightening system formulated with amino acids, delivering mirror gloss and zero frizz for months.',
    descriptionAr: 'المعيار الذهبي البرازيلي لعلاج وفرد الشعر بالأحماض الأمينية والبروتين، يمنح لمعاناً زجاجياً ونعومة فائقة لأشهر.',
    imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 650, medium: 700, long: 850, veryLong: 1000 },
    highlight: true,
    popular: true,
    duration: '180-240 min',
    benefitsEn: ['Long-lasting smooth straight silk', 'Free of harmful fumes', 'Deep molecular reconstruction'],
    benefitsAr: ['فرد وانسيابية تدوم طويلاً', 'خالٍ من الروائح أو المواد الضارة', 'ترميم جزيئي عميق للشعر']
  },
  {
    id: 'felps-hair-botox',
    category: 'hair-treatments',
    nameEn: 'Felps Hair Botox',
    nameAr: 'بوتوكس الشعر فيلبس',
    descriptionEn: 'Intensive anti-aging capillary rejuvenation infused with argan and macadamia oils to eliminate frizz and plump thin porous strands.',
    descriptionAr: 'جلسة بوتوكس الشعر المكثفة من فيلبس لتغذية ألياف الشعر بزيت الأرغان والمكاديميا وملء الفراغات التالفة.',
    imageUrl: 'https://images.unsplash.com/photo-1522337094346-297c11f44c4b?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 450, medium: 450, long: 550, veryLong: 650 },
    duration: '90-120 min'
  },
  {
    id: 'felps-formaldehyde-free-smoothing',
    category: 'hair-treatments',
    nameEn: 'Felps Formaldehyde-Free Smoothing',
    nameAr: 'علاج فيلبس لتنعيم الشعر (خالٍ من الفورمالديهايد)',
    descriptionEn: '100% formaldehyde-free safe organic smoothing treatment for healthy, manageable, sleek tresses.',
    descriptionAr: 'تنعيم عضوي آمن بنسبة 100% خالٍ من الفورمالديهايد لتسهيل تسريح الشعر ومنحه مظهراً صحياً ناعماً.',
    imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 550, medium: 550, long: 700, veryLong: 850 },
    duration: '120-180 min'
  },
  {
    id: 'innovatis-caviar-treatment',
    category: 'hair-treatments',
    nameEn: 'Innovatis Caviar Luxury Treatment',
    nameAr: 'علاج إنوفاتيس بالكافيار الفاخر',
    descriptionEn: 'Royal Spanish caviar and collagene booster ritual that infuses unprecedented softness, weightless bounce, and youthful vitality.',
    descriptionAr: 'طقوس الكافيار الإسبانية الملكية المعززة بالكولاجين لمنح الشعر نعومة استثنائية ولمعاناً لا مثيل له.',
    imageUrl: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 400, medium: 450, long: 500, veryLong: 600 },
    duration: '60-75 min'
  },
  {
    id: 'felps-sos-treatment',
    category: 'hair-treatments',
    nameEn: 'Felps SOS Treatment',
    nameAr: 'علاج فيلبس SOS للإصلاح العاجل',
    descriptionEn: 'Instant emergency repair treatment that reverses extreme chemical damage and elasticity loss in single visit.',
    descriptionAr: 'علاج الإسعاف السريع من فيلبس لترميم الشعر التالف جداً جراء الصبغات وسحب اللون واستعادة مرونته فوراً.',
    imageUrl: 'https://images.unsplash.com/photo-1522337094346-297c11f44c4b?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 250, medium: 300, long: 350, veryLong: 400 },
    duration: '45-60 min'
  },
  {
    id: 'felps-keratin-repair',
    category: 'hair-treatments',
    nameEn: 'Felps Keratin Repair',
    nameAr: 'علاج فيلبس كيراتين لإصلاح الشعر',
    descriptionEn: 'Fortifying hydrolyzed keratin infusion rebuilding the hair cuticle and protecting against thermal and mechanical stress.',
    descriptionAr: 'إعادة بناء كيراتين الشعر الطبيعي لتقوية الغلاف الخارجي وحماية الخصلات من حرارة المجففات والعوامل الجوية.',
    imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 300, medium: 350, long: 400, veryLong: 450 },
    duration: '60-90 min'
  },
  {
    id: 'scalp-therapy',
    category: 'hair-treatments',
    nameEn: 'Scalp Therapy & Detox',
    nameAr: 'علاج فروة الرأس والديتوكس',
    descriptionEn: 'Targeted balancing cure for oily, dry, sensitive or dandruff-prone scalp with micro-circulation massage.',
    descriptionAr: 'علاج متخصص لتنقية فروة الرأس وموازنة إفراز الدهون وتنشيط الدورة الدموية بتدليك فاخر.',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    price: 450,
    duration: '60 min'
  },

  // --- HAIR CUT & STYLING ---
  {
    id: 'hair-cut-style',
    category: 'hair-styling',
    nameEn: 'Hair Cut & Style',
    nameAr: 'حلاقة وقص شعر ستايل',
    descriptionEn: 'Precision master haircut tailored to your face shape, lifestyle, and natural texture with consultation.',
    descriptionAr: 'قصة شعر احترافية مخصصة لشكل وجهك وكثافة شعرك بإشراف أمهر خبيرات الشعر في الوكرة.',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    price: 200,
    duration: '45-60 min',
    popular: true
  },
  {
    id: 'hair-trim-full',
    category: 'hair-styling',
    nameEn: 'Hair Trim - Full',
    nameAr: 'قص أطراف الشعر بالكامل',
    descriptionEn: 'Healthy ends maintenance removing split ends while preserving your coveted length.',
    descriptionAr: 'تهذيب أطراف الشعر وإزالة التقصف مع الحفاظ على طول الشعر وكثافته.',
    imageUrl: 'https://images.unsplash.com/photo-1522337094346-297c11f44c4b?auto=format&fit=crop&w=800&q=80',
    price: 100,
    duration: '30 min'
  },
  {
    id: 'hair-trim-bangs',
    category: 'hair-styling',
    nameEn: 'Hair Trim - Bangs / Fringe',
    nameAr: 'قص الغرّة',
    descriptionEn: 'Face-framing curtain bangs or classic French fringe reshaping.',
    descriptionAr: 'تحديد وقص الغرّة الأمامية بأسلوب عصري جذاب يبرز جمال العينين.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    price: 50,
    duration: '15-20 min'
  },
  {
    id: 'retro-waves',
    category: 'hair-styling',
    nameEn: 'Retro Waves Luxury Styling',
    nameAr: 'تسريحة ريترو الفاخرة',
    descriptionEn: 'Old Hollywood undulating glossy waves crafted with thermal sculpting and mirror hold.',
    descriptionAr: 'تموجات ريترو كلاسيكية هوليوودية بلمعان ساحر وثبات يدوم طوال مناسبتك.',
    imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 300, medium: 350, long: 400, veryLong: 450 },
    duration: '60-90 min',
    highlight: true
  },
  {
    id: 'full-up-do',
    category: 'hair-styling',
    nameEn: 'Full Up-Do Glamour',
    nameAr: 'تسريحة رفع كاملة للمناسبات',
    descriptionEn: 'Regal bridal or evening chignon, textured bun, or artistic architectural high updo.',
    descriptionAr: 'تسريحة رفع ملكية متكاملة للعرائس والسهرات مع تثبيت فاخر وإبراز جمال المجوهرات.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 300, medium: 400, long: 500, veryLong: 650 },
    duration: '60-90 min',
    popular: true
  },
  {
    id: 'half-up-do',
    category: 'hair-styling',
    nameEn: 'Half Up-Do Styling',
    nameAr: 'تسريحة نصف رفعة أنيقة',
    descriptionEn: 'Romantic half-up textured styling with soft cascading curls and face-framing pieces.',
    descriptionAr: 'تسريحة نصف رفعة رومانسية مع خصلات ويفي منسدلة بأناقة تناسب كافة الحفلات.',
    imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 250, medium: 350, long: 450, veryLong: 550 },
    duration: '45-60 min'
  },
  {
    id: 'blowdry-classic',
    category: 'hair-styling',
    nameEn: 'Classic Blowdry',
    nameAr: 'تجفيف الشعر بالسشوار',
    descriptionEn: 'Voluminous round-brush blow dry for silky finish and weightless bounce.',
    descriptionAr: 'سشوار احترافي يمنح شعرك حجماً جذاباً ونعومة حريرية ولمعاناً لا يقاوم.',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 100, medium: 125, long: 150, veryLong: 180 },
    duration: '30-45 min'
  },
  {
    id: 'blowdry-heat-styling',
    category: 'hair-styling',
    nameEn: 'Blowdry + Heat Styling (Straight / Waves)',
    nameAr: 'تجفيف الشعر مع تصفيف حراري (مفرود أو ويفي)',
    descriptionEn: 'Full blow dry followed by ceramic iron styling for glass sleekness or mermaid beach waves.',
    descriptionAr: 'سشوار متكامل متبوع بتصفيف حراري بالستريتنر أو الفير لخصلات مفرودة زجاجية أو ويفي جذاب.',
    imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 170, medium: 200, long: 230, veryLong: 260 },
    duration: '45-60 min'
  },

  // --- HAIR EXTENSIONS & WASH ---
  {
    id: 'tape-extensions-full-head',
    category: 'hair-extensions',
    nameEn: 'Tape Hair Extension Application/Removal (Full Head)',
    nameAr: 'تركيب أو إزالة وصلات الشعر اللاصقة (كامل الرأس)',
    descriptionEn: 'Seamless, undetectable tape-in extension application or gentle removal protecting your natural hair.',
    descriptionAr: 'تركيب احترافي لوصلات التيب اللاصقة لكامل الرأس بدون أي ضرر لشعرك الطبيعي، أو إزالتها بلطف.',
    imageUrl: 'https://images.unsplash.com/photo-1522337094346-297c11f44c4b?auto=format&fit=crop&w=800&q=80',
    price: 500,
    duration: '90-120 min',
    highlight: true
  },
  {
    id: 'clip-in-extension-rental',
    category: 'hair-extensions',
    nameEn: 'Hair Extension Clip Rental',
    nameAr: 'استئجار وصلات الشعر المشبكية للمناسبات',
    descriptionEn: 'High-grade 100% human hair clip-in extensions rental for weddings and special occasions in Al Wakra.',
    descriptionAr: 'استئجار خصلات شعر طبيعية 100% لإطلالة كثيفة وساحرة في ليلتك الخاصة.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    price: 100,
    duration: 'Per event'
  },
  {
    id: 'scalp-scrub',
    category: 'hair-extensions',
    nameEn: 'Scalp Scrub Exfoliation',
    nameAr: 'تقشير وتنقية فروة الرأس',
    descriptionEn: 'Detoxifying salt and botanical scrub eliminating product build-up and sebum flakes.',
    descriptionAr: 'تقشير منعش لفروة الرأس يزيل التراكمات وخلايا الجلد الميتة ويعيد التنفس للبصيلات.',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    price: 150,
    duration: '30 min'
  },

  // --- NAILS & PEDICURE ---
  {
    id: 'russian-manicure',
    category: 'nails',
    nameEn: 'Russian E-File Dry Manicure',
    nameAr: 'مانيكير روسي جاف احترافي',
    descriptionEn: 'Meticulous dry electric file cuticle work providing flawless clean nail beds that stay pristine for 3-4 weeks.',
    descriptionAr: 'تقنية المانيكير الروسي الجاف بدقة متناهية لإزالة الجلد الزائد وتنظيف محيط الأظافر لتبقى مثالية لأسابيع.',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    price: 100,
    duration: '45 min',
    highlight: true,
    popular: true,
    benefitsEn: ['Pristine cuticle cleanup', 'Longer lasting polish wear', 'Favorite among our Al Wakra clients'],
    benefitsAr: ['تنظيف متناهي الدقة لمحيط الظفر', 'يدوم طلاء الأظافر لفترة أطول بكثير', 'الخدمة الأكثر طلباً في فرعنا بالوكرة']
  },
  {
    id: 'russian-manicure-polish',
    category: 'nails',
    nameEn: 'Russian Manicure + Polish',
    nameAr: 'مانيكير روسي + طلاء أظافر',
    descriptionEn: 'Russian dry cuticle sculpting finished with premium long-wear lacquer.',
    descriptionAr: 'مانيكير روسي فائق الدقة مع طلاء أظافر كلاسيكي غني وطويل الأمد.',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    price: 130,
    duration: '60 min'
  },
  {
    id: 'russian-soft-gel-manicure',
    category: 'nails',
    nameEn: 'Russian Soft Gel Manicure',
    nameAr: 'مانيكير روسي بالسوفت جل',
    descriptionEn: 'Flawless Russian prep with strengthening soft gel overlay cured under LED, resistant to chipping.',
    descriptionAr: 'مانيكير روسي مع طبقة تقوية من السوفت جل ولمعان زجاجي يدوم حتى شهر كامل دون أي تقشر.',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    price: 190,
    duration: '90 min',
    highlight: true,
    popular: true
  },
  {
    id: 'russian-pedicure',
    category: 'nails',
    nameEn: 'Russian Pedicure',
    nameAr: 'باديكير روسي',
    descriptionEn: 'Dry medical-standard e-file pedicure for immaculate toenails and silky smooth heels.',
    descriptionAr: 'باديكير روسي جاف بأعلى معايير التعقيم الدقيقة لأظافر قدمين مرتبة وأقدام ناعمة كالحرير.',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
    price: 120,
    duration: '45 min'
  },
  {
    id: 'russian-gel-polish-pedicure',
    category: 'nails',
    nameEn: 'Russian Gel Polish Pedicure',
    nameAr: 'باديكير روسي مع طلاء جل',
    descriptionEn: 'Complete 120-minute Russian e-file pedicure with durable high-shine gel polish curing.',
    descriptionAr: 'جلسة باديكير روسي كاملة لمدة 120 دقيقة مع تطبيق طلاء الجل فائق الثبات واللمعان.',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
    price: 220,
    duration: '120 min',
    highlight: true
  },
  {
    id: 'elim-mediheel-pedicure',
    category: 'nails',
    nameEn: 'ELIM MediHeel Medical Pedicure',
    nameAr: 'علاج إيليم للعناية الطبية بالقدمين (ELIM MediHeel)',
    descriptionEn: 'South African chemical peel medical pedicure that dissolves rough dead skin and calluses without harsh blades.',
    descriptionAr: 'العلاج الطبي المتقدم من جنوب إفريقيا لتقشير وترطيب الكعبين المتشققين وإزالة الكالس بلطف دون كشط قاسي.',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
    price: 200,
    duration: '90 min',
    highlight: true,
    benefitsEn: ['AHA chemical exfoliation', 'Soft baby feet in single session', 'Ultra hygienic no-blade technique'],
    benefitsAr: ['تقشير كيميائي لطيف بأحماض الفواكه', 'نعومة فائقة للكعبين من أول جلسة', 'تقنية طبية آمنة بدون شفرات حادة']
  },
  {
    id: 'paraffin-spa-pedicure',
    category: 'nails',
    nameEn: 'Paraffin Spa Pedicure',
    nameAr: 'سبا بديكير مع شمع البارافين',
    descriptionEn: 'Deep warming thermal paraffin wax bath infusing intense moisture and relieving tired feet.',
    descriptionAr: 'جلسة سبا دافئة بشمع البارافين لتغذية البشرة الجافة بعمق وتنشيط الدورة الدموية لأقدام مرتاحة.',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
    price: 180,
    duration: '75 min'
  },
  {
    id: 'paraffin-spa-manicure',
    category: 'nails',
    nameEn: 'Paraffin Spa Manicure',
    nameAr: 'سبا مانيكير مع شمع البارافين',
    descriptionEn: 'Warm collagen paraffin mask for dry hands and brittle nails, leaving hands velvety soft.',
    descriptionAr: 'حمام البارافين الدافئ لترطيب بشرة اليدين بعمق وتغذية الأظافر الهشة لتصبح ناعمة كالحرير.',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    price: 150,
    duration: '75 min'
  },
  {
    id: 'classic-manicure-polish',
    category: 'nails',
    nameEn: 'Classic Manicure + Polish',
    nameAr: 'كلاسيك مانيكير + طلاء أظافر',
    descriptionEn: 'Traditional relaxing hand soak, nail shaping, cuticle care, and lustrous color application.',
    descriptionAr: 'نقع مريح لليدين، تشكيل الأظافر، عناية بالجلد المحيط وطلاء بلونك المفضل.',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    price: 110,
    duration: '60 min'
  },
  {
    id: 'classic-pedicure-polish',
    category: 'nails',
    nameEn: 'Classic Pedicure + Polish',
    nameAr: 'كلاسيك بديكير + طلاء أظافر',
    descriptionEn: 'Whirlpool foot soak, scrub, nail grooming, gentle massage, and flawless polish.',
    descriptionAr: 'جلسة بديكير كلاسيكية تتضمن نقع القدمين وتقشير الجلد الميت ومساج خفيف مع طلاء الأظافر.',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
    price: 130,
    duration: '60 min'
  },

  // --- NAIL ENHANCEMENTS ---
  {
    id: 'polygel-hardgel-extensions-full',
    category: 'nail-enhancements',
    nameEn: 'Polygel / Hard Gel Extensions - Full Set',
    nameAr: 'تركيب أظافر بولي جل أو هارد جل - طقم كامل',
    descriptionEn: 'Lightweight, ultra-strong sculpted nail extensions with natural curvature and customizable length.',
    descriptionAr: 'بناء وتركيب أظافر بولي جل أو هارد جل متينة وخفيفة تمنح يديك مظهراً أنثوياً ساحراً مع الحفاظ على الأظافر الطبيعية.',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    price: 300,
    duration: '120 min',
    highlight: true,
    popular: true
  },
  {
    id: 'polygel-hardgel-gel-polish',
    category: 'nail-enhancements',
    nameEn: 'Polygel / Hard Gel Extensions - Full Set + Gel Polish',
    nameAr: 'تركيب بولي جل أو هارد جل + طلاء جل كامل',
    descriptionEn: 'Complete full set extensions finished with your choice of long-lasting gel lacquer.',
    descriptionAr: 'بناء طقم أظافر بولي جل كامل مع تطبيق لون طلاء جل متميز بثبات مذهل ولمعان قوي.',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    price: 360,
    duration: '135 min'
  },
  {
    id: 'hard-gel-overlay-full-set',
    category: 'nail-enhancements',
    nameEn: 'Hard Gel Overlay - Full Set',
    nameAr: 'هارد جل كامل بدون طلاء (أوفرلاي تقوية)',
    descriptionEn: 'Protective structural overlay applied directly over natural nails to prevent breakage.',
    descriptionAr: 'طبقة هارد جل لحماية وتقوية أظافرك الطبيعية ضد الكسر ومساعدتها على النمو بصحة وقوة.',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    price: 200,
    duration: '90 min'
  },
  {
    id: 'hard-gel-overlay-gel-polish',
    category: 'nail-enhancements',
    nameEn: 'Hard Gel Overlay - Full Set + Gel Polish',
    nameAr: 'هارد جل كامل + طلاء جل',
    descriptionEn: 'Natural nail strengthening overlay combined with vibrant gel shade.',
    descriptionAr: 'تقوية الأظافر الطبيعية بالهارد جل مع طلاء جل مميز ولمعان جذاب.',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    price: 250,
    duration: '105 min'
  },
  {
    id: 'hard-gel-nail-plate-correction',
    category: 'nail-enhancements',
    nameEn: 'Hard Gel Overlay - Nail Plate Correction',
    nameAr: 'تصحيح الهارد جل بالكامل لتسطح وشكل الظفر',
    descriptionEn: 'Architectural reshaping and apex realignment for uneven, grooved or flat nail plates.',
    descriptionAr: 'إعادة بناء قوس الظفر وتصحيح التعرجات والتسطح لشكل أظافر مثالي ومتناسق هندسياً.',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    price: 250,
    duration: '90 min'
  },

  // --- FACIAL TREATMENTS ---
  {
    id: 'hydracool-facial',
    category: 'facials',
    nameEn: 'HydraCool Facial Treatment',
    nameAr: 'علاج الوجه هيدراكول (HydraCool Facial)',
    descriptionEn: 'Multifunctional hydro-dermabrasion and cryo-infusion treatment that deeply purges pores, drenches skin with hyaluronic serums, and sculpts facial contours.',
    descriptionAr: 'جلسة هيدراكول المتكاملة لتنظيف المسام العميق بالهيدرا وإشباع البشرة بسيرومات الهيالورونيك وتقنية التبريد لشد ونضارة فورية.',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    price: 500,
    duration: '45 min',
    highlight: true,
    popular: true,
    benefitsEn: ['Painless vortex suction extractions', 'Instant glass-skin luminosity', 'Zero redness or downtime'],
    benefitsAr: ['تنظيف المسام واستخراج الرؤوس السوداء بدون ألم', 'نضارة زجاجية فورية للبشرة', 'بدون أي احمرار ومناسب قبل المناسبات']
  },
  {
    id: 'skeyndor-power-facial',
    category: 'facials',
    nameEn: 'Skeyndor Professional Power Facial',
    nameAr: 'علاج سكيندور الاحترافي للوجه (Skeyndor Barcelona)',
    descriptionEn: 'Prestigious Spanish cosmeceutical treatment with targeted vitamin C antioxidants, pure hyaluronic plumping, or oxygen detox.',
    descriptionAr: 'علاج سكيندور الإسباني الفاخر بتركيزات عالية من فيتامين سي والهيالورونيك لإعادة الحيوية ومقاومة علامات الإجهاد.',
    imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f02e60058b8?auto=format&fit=crop&w=800&q=80',
    price: 450,
    duration: '45 min',
    highlight: true
  },
  {
    id: 'nanoneedling-face',
    category: 'facials',
    nameEn: 'Nanoneedling - Face Only',
    nameAr: 'النانونيدلينغ للوجه فقط',
    descriptionEn: 'Non-invasive nano-tip infusion creating microscopic pathways for deep active peptide delivery and collagen synthesis without puncturing the dermis.',
    descriptionAr: 'تقنية النانونيدلينغ الدقيقة لتعزيز امتصاص الببتيدات والكولاجين وتجديد خلايا البشرة بدون أي ألم أو وخز جارح.',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    price: 650,
    duration: '60 min',
    highlight: true
  },
  {
    id: 'face-workout-lifting',
    category: 'facials',
    nameEn: 'Face Workout - Lifting Facial',
    nameAr: 'جلسة شد الوجه وتمارين العضلات (Face Workout)',
    descriptionEn: 'Sculptural buccal and contouring myofascial massage that tones cheekbones, sharpens the jawline, and drains lymphatic fluid.',
    descriptionAr: 'مساج عضلي نحتي احترافي لشد ملامح الوجه ونحت خط الفك والخدين وتصريف احتباس السوائل بطريقة طبيعية.',
    imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f02e60058b8?auto=format&fit=crop&w=800&q=80',
    price: 350,
    duration: '40 min'
  },
  {
    id: 'skeyndor-peel',
    category: 'facials',
    nameEn: 'Skeyndor Professional Peel',
    nameAr: 'العلاج الاحترافي بالتقشير من سكيندور',
    descriptionEn: 'Controlled dermatological biological peel smoothing uneven texture, hyperpigmentation, and sun spots.',
    descriptionAr: 'تقشير علاجي احترافي لطيف يزيل الخلايا المتصبغة ويوحد لون البشرة ويمنحها إشراقة حريرية.',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    price: 390,
    duration: '30 min'
  },

  // --- LASHES & BROWS ---
  {
    id: 'lash-lifting',
    category: 'lashes-brows',
    nameEn: 'Keratin Lash Lifting',
    nameAr: 'رفع الرموش بالكيراتين (Lash Lifting)',
    descriptionEn: 'Semi-permanent curl and lift of your natural lashes with deep keratin conditioning lasting 6-8 weeks.',
    descriptionAr: 'رفع وتقويس الرموش الطبيعية بالكيراتين لتكبير نظرة العين دون الحاجة لرموش صناعية أو ماسكارا يومية.',
    imageUrl: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80',
    price: 300,
    duration: '60 min',
    popular: true
  },
  {
    id: 'eyebrow-lamination',
    category: 'lashes-brows',
    nameEn: 'Eyebrow Lamination',
    nameAr: 'رفع وتصفيف الحواجب (Brow Lamination)',
    descriptionEn: 'Restructures brow hairs into full, feathered, perfectly groomed symmetry that stays in place effortlessly.',
    descriptionAr: 'تثبيت وترتيب شعر الحواجب للأعلى لإعطائها مظهراً كثيفاً ومرتباً متناسقاً مع ملامح الوجه.',
    imageUrl: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80',
    price: 250,
    duration: '45 min'
  },
  {
    id: 'lash-extension-classic',
    category: 'lashes-brows',
    nameEn: 'Lash Extension - Classic',
    nameAr: 'تمديد الرموش - كلاسيك',
    descriptionEn: '1:1 ratio individual eyelash application for an understated, elegant natural mascara appearance.',
    descriptionAr: 'تركيب رمش طبيعي على كل رمش للحصول على إطلالة طبيعية ساحرة وممتلئة.',
    imageUrl: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80',
    price: 350,
    duration: '90 min'
  },
  {
    id: 'lash-extension-volume-3d',
    category: 'lashes-brows',
    nameEn: 'Lash Extension - Volume 3D',
    nameAr: 'تمديد الرموش - فوليوم D3',
    descriptionEn: 'Fluffy 3D handcrafted fans delivering full, luscious density without weighing down natural lashes.',
    descriptionAr: 'باقات فوليوم ثلاثية الأبعاد خفيفة الوزن تمنح العينين كثافة مميزة وعمقاً ساحراً.',
    imageUrl: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80',
    price: 450,
    duration: '105 min',
    highlight: true
  },
  {
    id: 'lash-extension-wet-effect',
    category: 'lashes-brows',
    nameEn: 'Lash Extension - Wet Effect',
    nameAr: 'تمديد الرموش - إطلالة مبللة (Wet Look)',
    descriptionEn: 'Trendy spikey gloss effect giving the glamorous editorial Kim K flutter.',
    descriptionAr: 'صيحة الرموش المبللة العصرية بتموجات ناعمة متفرقة تمنح عينيك جاذبية فريدة.',
    imageUrl: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80',
    price: 350,
    duration: '90 min'
  },

  // --- HAIR REMOVAL ---
  {
    id: 'waxing-full-body',
    category: 'hair-removal',
    nameEn: 'Waxing Full Body',
    nameAr: 'إزالة شعر الجسم بالكامل بالشمع',
    descriptionEn: 'Complete head-to-toe gentle waxing using premium hypoallergenic strip and hard wax.',
    descriptionAr: 'إزالة شعر الجسم بالكامل بأفضل أنواع الشمع الطبيعي اللطيف على البشرة لنعومة حريرية تدوم أسابيع.',
    imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f02e60058b8?auto=format&fit=crop&w=800&q=80',
    price: 500,
    duration: '90 min',
    highlight: true,
    popular: true
  },
  {
    id: 'face-dermaplaning',
    category: 'hair-removal',
    nameEn: 'Face Dermaplaning',
    nameAr: 'ديرما بلانينج للوجه',
    descriptionEn: 'Surgical blade exfoliation removing peach fuzz (vellus hair) and surface dead cells for ultimate makeup canvas.',
    descriptionAr: 'إزالة شعر الوجه الوبري والخلايا السطحية الميتة بدقة فائقة لتطبيق مكياج ناعم ومثالي.',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    price: 140,
    duration: '40 min'
  },
  {
    id: 'threading-full-face',
    category: 'hair-removal',
    nameEn: 'Threading - Full Face',
    nameAr: 'إزالة شعر الوجه بالكامل بالخيط',
    descriptionEn: 'Precise traditional threading leaving the face hair-free and ultra smooth.',
    descriptionAr: 'إزالة شعر الوجه بالخيط بالطريقة التقليدية الدقيقة لنظافة فائقة وتحديد مريح.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    price: 120,
    duration: '30 min'
  },
  {
    id: 'threading-eyebrows',
    category: 'hair-removal',
    nameEn: 'Threading - Eyebrows',
    nameAr: 'إزالة الشعر بالخيط - الحواجب',
    descriptionEn: 'Master arch shaping following your natural facial symmetry.',
    descriptionAr: 'رسم وتحديد الحواجب بدقة عالية بالخيط لإبراز جمال العينين.',
    imageUrl: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80',
    price: 45,
    duration: '15 min'
  },
  {
    id: 'waxing-bikini-full',
    category: 'hair-removal',
    nameEn: 'Waxing Bikini Full',
    nameAr: 'إزالة شعر البكيني بالكامل بالشمع',
    descriptionEn: 'Gentle sensitive-zone wax with soothing botanical post-treatment lotion in strict privacy.',
    descriptionAr: 'إزالة شعر منطقة البكيني بالكامل بشمع مخصص للمناطق الحساسة مع عناية مهدئة وخصوصية تامة.',
    imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f02e60058b8?auto=format&fit=crop&w=800&q=80',
    price: 140,
    duration: '30 min'
  },

  // --- BODY & MASSAGE ---
  {
    id: 'aromatherapy-massage-60',
    category: 'body-massage',
    nameEn: 'Aromatherapy Massage (60 min)',
    nameAr: 'تدليك بالزيوت العطرية (60 دقيقة)',
    descriptionEn: 'Soothing full-body ritual with pure essential lavender, rose, and citrus oils to melt physical tension and calm the nervous system.',
    descriptionAr: 'جلسة تدليك استرخائية لكامل الجسم بأرقى الزيوت العطرية النقية لفك تشنج العضلات وتجديد الطاقة الإيجابية.',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    price: 300,
    duration: '60 min',
    highlight: true,
    popular: true
  },
  {
    id: 'aromatherapy-massage-90',
    category: 'body-massage',
    nameEn: 'Aromatherapy Massage (90 min)',
    nameAr: 'تدليك بالزيوت العطرية الفاخر (90 دقيقة)',
    descriptionEn: 'Extended 90-minute bespoke journey covering head, neck, back, and limbs with warm essential oils.',
    descriptionAr: 'رحلة استرخاء عميقة لمدة ساعة ونصف لتجديد كامل عضلات الجسم والذهن بلمسات معالجة متخصصة.',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    price: 450,
    duration: '90 min'
  },
  {
    id: 'lymphatic-massage-60',
    category: 'body-massage',
    nameEn: 'Lymphatic Drainage Massage (60 min)',
    nameAr: 'تدليك لمفاوي لتصريف السوائل (60 دقيقة)',
    descriptionEn: 'Gentle specialized pumping technique reducing water retention, reducing puffiness, and accelerating cellular detoxification.',
    descriptionAr: 'مساج لمفاوي متخصص لتصريف احتباس السوائل الزائدة وتنشيط المناعة وتخفيف الانتفاخات بالجسم.',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    price: 300,
    duration: '60 min'
  },
  {
    id: 'prenatal-massage-60',
    category: 'body-massage',
    nameEn: 'Prenatal Pregnancy Massage (60 min)',
    nameAr: 'تدليك ما قبل الولادة للحوامل (60 دقيقة)',
    descriptionEn: 'Safe, nurturing side-lying massage designed specifically for expecting mothers to relieve lower back and pelvic pressure.',
    descriptionAr: 'مساج آمن ومريح مخصص للحوامل لتخفيف آلام أسفل الظهر وثقل الساقين بإشراف أخصائية معتمدة.',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    price: 300,
    duration: '60 min'
  },
  {
    id: 'maderotherapy-60',
    category: 'body-massage',
    nameEn: 'Maderotherapy Wood Sculpting (60 min)',
    nameAr: 'علاج الماديروثيرابي لنحت القوام بالخشب (60 دقيقة)',
    descriptionEn: 'Natural Colombian wooden anatomical rolling therapy breaking down stubborn cellulite and firming skin tissue.',
    descriptionAr: 'جلسة تكسير السيلوليت ونحت القوام باستخدام أدوات الخشب الطبيعية لتنشيط الدورة الدموية وشد الترهلات.',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    price: 350,
    duration: '60 min'
  },
  {
    id: 'ultrasonic-cavitation-60',
    category: 'body-massage',
    nameEn: 'Ultrasonic Fat Cavitation Treatment (60 min)',
    nameAr: 'علاج تنحيف الجسم بالموجات فوق الصوتية (60 دقيقة)',
    descriptionEn: 'Non-surgical low-frequency ultrasound waves targeting localized fat deposits and promoting lymphatic release.',
    descriptionAr: 'تفتيت الدهون الموضعية بالموجات فوق الصوتية لشد وتنسيق مظهر البطن أو الأرداف أو الذراعين.',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    price: 350,
    duration: '60 min'
  },

  // --- KIDS SERVICES (AGES 3-8) ---
  {
    id: 'little-princess-haircut',
    category: 'kids',
    nameEn: 'Little Princess Hair Cut - Style (ages 3-8)',
    nameAr: 'قص الشعر للأميرات الصغيرات - ستايل (عمر 3-8)',
    descriptionEn: 'Gentle, joyful haircut experience with princess pampering, ribbons, and sweet styling.',
    descriptionAr: 'تجربة مرحة ولطيفة لأميرتك الصغيرة لقص شعرها وتنسيقه بأسلوب لطيف وممتع.',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
    price: 60,
    duration: '30 min'
  },
  {
    id: 'little-princess-blowdry',
    category: 'kids',
    nameEn: 'Little Princess Blow-dry',
    nameAr: 'سشوار للأميرات الصغيرات',
    descriptionEn: 'Soft child-safe thermal blow dry for school celebrations and family parties.',
    descriptionAr: 'سشوار لطيف بحرارة معتدلة ومناسبة للأطفال للمناسبات وحفلات الأعياد.',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
    pricingTier: { short: 50, medium: 75, long: 100, veryLong: 125 },
    duration: '25 min'
  },
  {
    id: 'little-princess-manicure',
    category: 'kids',
    nameEn: 'Little Princess Manicure',
    nameAr: 'مانيكير للأميرات الصغيرات',
    descriptionEn: 'Safe gentle nail file, non-toxic peelable or pastel polish with optional cute stickers.',
    descriptionAr: 'برد ناعم للأظافر مع تطبيق طلاء أظافر آمن للأطفال وملصقات لطيفة.',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
    price: 30,
    duration: '20 min'
  },
  {
    id: 'little-princess-pedicure',
    category: 'kids',
    nameEn: 'Little Princess Pedicure',
    nameAr: 'بديكير للأميرات الصغيرات',
    descriptionEn: 'Fun foot bath with gentle bubble scrub and colorful polish.',
    descriptionAr: 'حمام فقاعات منعش للأقدام الصغيرة مع طلاء أظافر أنيق ومبهج.',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
    price: 30,
    duration: '20 min'
  },

  // --- HOME SERVICE ---
  {
    id: 'home-service-charge',
    category: 'home-service',
    nameEn: 'Home Service Visit (1 Technician)',
    nameAr: 'رسوم الخدمة المنزلية الفاخرة - فني واحد',
    descriptionEn: 'VIP at-home beauty service by our licensed technicians right to your residence in Al Wakra and surrounding areas.',
    descriptionAr: 'وصول أخصائياتنا المعتمدات إلى منزلك بكافة المعدات المعقمة لتقديم خدمات الصالون في راحة وخصوصية منزلك.',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    price: 250,
    duration: 'Per technician visit',
    highlight: true,
    benefitsEn: ['Available across Al Wakra & Greater Doha', 'Full salon hygiene equipment brought to your home', 'Perfect for private events & postpartum care'],
    benefitsAr: ['متاح في الوكرة ومناطق الدوحة والمحيط', 'نحضر كافة مستلزمات الصالون المعقمة', 'مثالي للمناسبات الخاصة وفترات النفاس']
  }
];

export const GOOGLE_REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Алтынай Кармыشاкова',
    authorAr: 'ألتيناي كارميشاكوفا',
    rating: 5,
    dateEn: '1 month ago',
    dateAr: 'منذ شهر',
    textEn: "A very beautiful salon and specialized craftsmen . I've been doing my nails for the 2nd month and they look like new 😍",
    textAr: "صالون جميل جداً ومهنيات ذوات كفاءة عالية. أقوم بعمل أظافري هنا للشهر الثاني على التوالي وتبدو دائماً كأنها جديدة تماماً 😍",
    serviceCategory: 'Russian Manicure & Nails',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-2',
    author: 'Karla Nurlankyzy',
    authorAr: 'كارلا نورلانكيزي',
    rating: 5,
    dateEn: '2 months ago',
    dateAr: 'منذ شهرين',
    textEn: "The best salon in Al wakra , all artist high level and quality 🌼 thank you so much for perfect service 🫶🏻😘",
    textAr: "أفضل صالون في الوكرة بلا منازع، جميع الخبيرات على أعلى مستوى من الاحترافية والجودة 🌼 شكراً جزيلاً على الخدمة المثالية 🫶🏻😘",
    serviceCategory: 'Hair & Styling',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-3',
    author: 'Pretty Mary',
    authorAr: 'بريتي ماري',
    rating: 5,
    dateEn: '1 month ago',
    dateAr: 'منذ شهر',
    textEn: "It's a great experience,Quality services and products and the staffs rendered services are so warming!",
    textAr: "تجربة رائعة حقاً، خدمات ومنتجات عالية الجودة وتعامل الموظفات بمنتهى اللطف والدفء والاهتمام!",
    serviceCategory: 'Facial & Spa',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-4',
    author: 'Fatima Al-Kuwari',
    authorAr: 'فاطمة الكواري',
    rating: 5,
    dateEn: '3 weeks ago',
    dateAr: 'منذ ٣ أسابيع',
    textEn: "The best salon experience in Ezdan Mall. The Russian manicure and Felps smoothing made my hair and nails look incredible. Exceptional Qatari hospitality.",
    textAr: "أرقى تجربة صالون في إزدان مول الوكرة. المانيكير الروسي وعلاج فيلبس للشعر أظهرا شعري وأظافري بأجمل حلة. ضيافة راقية وخصوصية تامة.",
    serviceCategory: 'Felps Smoothing & Nails',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-5',
    author: 'Reem Al-Sulaiti',
    authorAr: 'ريم السليطي',
    rating: 5,
    dateEn: '3 weeks ago',
    dateAr: 'منذ ٣ أسابيع',
    textEn: "Clean, luxurious and very peaceful atmosphere. Loved the Sidr natural treatment and HydraCool facial. Highly recommended for ladies in Al Wakra.",
    textAr: "نظافة فائقة، فخامة وهدوء يبعث على الراحة. أحببت جداً علاج السدر الطبيعي وهيدراكول للوجه. أنصح به بشدة لكل سيدات الوكرة.",
    serviceCategory: 'Natural Sidr & HydraCool',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-6',
    author: 'Aisha Al-Mohannadi',
    authorAr: 'عائشة المهندي',
    rating: 5,
    dateEn: 'Just recently',
    dateAr: 'مؤخراً',
    textEn: "Came for party hair styling and French manicure. The team is so attentive, and Gate 4/5 parking at Ezdan Mall is so convenient!",
    textAr: "زرت الصالون لتسريحة شعر وسواريه وفرنش مانيكير. الفريق متعاون جداً والمواقف عند بوابة 4 و5 سهلة ومريحة للغاية!",
    serviceCategory: 'Styling & Manicure',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=200&q=80'
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    titleEn: 'Russian E-File Gel Transformation',
    titleAr: 'تحول الأظافر بالمانيكير الروسي والجل',
    categoryEn: 'Nails & Russian Prep',
    categoryAr: 'الأظافر والمانيكير الروسي',
    descriptionEn: 'From overgrown, uneven cuticles to surgical precision e-file cleanup with strengthening soft gel overlay.',
    descriptionAr: 'من أظافر مجهدة وزوائد غير متناسقة إلى تنظيف جاف فائق الدقة وطبقة سوفت جل ناعمة ومشرقة.',
    beforeLabelEn: 'Overgrown & Dry Cuticles',
    beforeLabelAr: 'زوائد جلدية وجفاف',
    afterLabelEn: 'Flawless Russian Gel Finish',
    afterLabelAr: 'مانيكير روسي زجاجي مثالي',
    details: 'Russian E-File + Soft Gel Coat · 90 min',
    beforeImage: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ba-2',
    titleEn: 'Felps Nanoplastia Mirror Shine',
    titleAr: 'علاج نانوبلاستيا فيلبس للمعان الحريري',
    categoryEn: 'Hair Smoothing',
    categoryAr: 'تنعيم وفرد الشعر',
    descriptionEn: 'Frizzy, porous and chemically damaged hair completely revitalized with zero formaldehyde, silky reflective bounce.',
    descriptionAr: 'شعر مجعد وتالف استعاد مرونته ولمعانه بتركيبة خالية تماماً من الفورمالديهايد لشهور طويلة.',
    beforeLabelEn: 'Frizzy & Damaged Strands',
    beforeLabelAr: 'نفشة وتلف وجفاف',
    afterLabelEn: 'Mirror Silk Nanoplastia',
    afterLabelAr: 'حرير براق وانسيابية تامة',
    details: 'Felps Brazilian Nanoplastia · 210 min',
    beforeImage: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ba-3',
    titleEn: 'Natural Sidr Herbal Revitalization',
    titleAr: 'علاج السدر الطبيعي التراثي لتكثيف الشعر',
    categoryEn: 'Herbal Hair Therapy',
    categoryAr: 'العلاج الطبيعي للأعشاب',
    descriptionEn: 'Thinning strands revitalized with authentic Arabian Sidr botanical infusion for root vitality and dense luster.',
    descriptionAr: 'علاج السدر الطبيعي الغني بالمغذيات لتقوية الجذور وزيادة كثافة الشعر وإيقاف التساقط.',
    beforeLabelEn: 'Dull & Fragile Roots',
    beforeLabelAr: 'بهتان وضعف الجذور',
    afterLabelEn: 'Fortified Sidr Botanical Glow',
    afterLabelAr: 'كثافة وحيوية طبيعية',
    details: '100% Organic Sidr Bath · 60 min',
    beforeImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    titleEn: 'Russian Soft Gel & Minimalist Chrome',
    titleAr: 'مانيكير روسي سوفت جل مع لمسة كروم',
    category: 'nails',
    categoryLabelEn: 'Russian Nails',
    categoryLabelAr: 'أظافر روسية',
    descriptionEn: 'Precision e-file cuticle clean with neutral glazed donut chrome effect.',
    descriptionAr: 'تنظيف جاف بالمبرد الإلكتروني مع تأثير الكروم اللؤلؤي الناعم.',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gal-2',
    titleEn: 'Signature Parisian Balayage & Blowout',
    titleAr: 'بالياج باريسي مع سشوار ويفي فاخر',
    category: 'hair',
    categoryLabelEn: 'Hair Color & Styling',
    categoryLabelAr: 'صبغ وتسريح الشعر',
    descriptionEn: 'Seamless caramel and honey dimension with bouncy Hollywood waves.',
    descriptionAr: 'تدرجات الكراميل والعسل الانسيابية مع تسريحة ويفي ملكية.',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gal-3',
    titleEn: 'Qatari Bridal Glamour & Up-Do',
    titleAr: 'إطلالة عروس قطرية وتسريحة رفع ملكية',
    category: 'bridal',
    categoryLabelEn: 'Bridal & VIP Occasion',
    categoryLabelAr: 'العرائس والمناسبات',
    descriptionEn: 'High-fashion bridal hairstyle with intricate tiara placement and long-lasting glow.',
    descriptionAr: 'تسريحة رفع عرائس متقنة مع تثبيت الطرحة والمجوهرات لثبات يدوم طوال ليلة الزفاف.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gal-4',
    titleEn: 'Skeyndor Barcelona Cosmeceutical Glow',
    titleAr: 'نضارة سكيندور الإسبانية الفائقة',
    category: 'facials',
    categoryLabelEn: 'Facial & Skin Therapy',
    categoryLabelAr: 'علاجات الوجه والبشرة',
    descriptionEn: 'Deep vitamin infusion and hydro-peel giving instant radiant glass skin.',
    descriptionAr: 'جلسة تغذية عميقة بالفيتامينات والهيدراكول لنضارة طبيعية ساحرة.',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gal-5',
    titleEn: 'Salon Fleur De Lis Luxury Interior',
    titleAr: 'التصميم الداخلي لصالون فلور دو لي',
    category: 'salon',
    categoryLabelEn: 'Salon Atmosphere',
    categoryLabelAr: 'أجواء الصالون',
    descriptionEn: 'Private reception, Italian marble, warm oak panels, and VIP ladies comfort at Ezdan Mall.',
    descriptionAr: 'استقبال رخامي فخم، ديكورات خشبية دافئة، وخصوصية تامة للسيدات في إزدان مول الوكرة.',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gal-6',
    titleEn: '3D Volume Silk Lash Extensions',
    titleAr: 'رموش فوليوم حريرية ثلاثية الأبعاد',
    category: 'facials',
    categoryLabelEn: 'Lashes & Brows',
    categoryLabelAr: 'الرموش والحواجب',
    descriptionEn: 'Ultra-lightweight handmade silk fans for dramatic yet comfortable eye enhancement.',
    descriptionAr: 'باقات رموش حريرية خفيفة الوزن لنظرة عيون آسرة وكثافة مريحة للعين.',
    imageUrl: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gal-7',
    titleEn: 'ELIM MediHeel Foot Therapy Suite',
    titleAr: 'جناح العناية بالقدمين إيليم الطبي',
    category: 'nails',
    categoryLabelEn: 'Russian Nails & Pedicure',
    categoryLabelAr: 'الأظافر والبديكير الطبي',
    descriptionEn: 'State of the art medical pedicure chairs with gold pedicure bowls.',
    descriptionAr: 'مقاعد بديكير مريحة مع أحواض ذهبية وتقنيات التعقيم الطبية الحديثة.',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gal-8',
    titleEn: 'Retro Hollywood Waves',
    titleAr: 'تموجات ريترو كلاسيكية فخمة',
    category: 'hair',
    categoryLabelEn: 'Hair Styling',
    categoryLabelAr: 'تسريح الشعر',
    descriptionEn: 'Sculpted deep wave patterns with mirror reflection and velvet touch.',
    descriptionAr: 'تموجات ريترو متناسقة بدقة عالية ولمعان حريري ساحر.',
    imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80'
  }
];

export const FAQS_DATA = [
  {
    qEn: 'Where in Ezdan Mall Al Wakra is Salon Fleur De Lis located?',
    qAr: 'أين يقع صالون فلور دو لي تحديداً في إزدان مول الوكرة؟',
    aEn: 'We are situated on the First Floor of Ezdan Mall Al Wakra, right next to Gate 4 and Gate 5. You can park in the outdoor or basement parking near Gate 4 or 5 for the quickest and most private access to our salon.',
    aAr: 'يقع صالوننا في الطابق الأول من إزدان مول الوكرة، بالقرب من بوابة 4 وبوابة 5 مباشرة. نوصي بركن سيارتكم عند بوابة 4 أو 5 لسهولة الوصول المباشر والخصوصية التامة.'
  },
  {
    qEn: 'Do you provide complete ladies-only privacy?',
    qAr: 'هل يتوفر في الصالون خصوصية تامة للسيدات؟',
    aEn: 'Yes, 100%. Salon Fleur De Lis is an exclusive ladies-only sanctuary designed with high privacy partitions, sound-insulated private treatment suites for massages and waxing, and an all-female certified specialist team.',
    aAr: 'نعم بنسبة 100%. صالون فلور دو لي هو مساحة مخصصة للسيدات حصرياً مع غرف خاصة معزولة ومريحة لجلسات التدليك وإزالة الشعر، وجميع خبيراتنا وفنياتنا من السيدات المعتمدات.'
  },
  {
    qEn: 'How can I book an appointment?',
    qAr: 'كيف يمكنني حجز موعد في الصالون؟',
    aEn: 'You can book easily online through our website booking form, message us directly on WhatsApp at +974 6622 6043, or call our salon landline at +974 4432 8274. Walk-ins are also warmly welcomed subject to schedule availability.',
    aAr: 'يمكنكم الحجز بكل سهولة عبر نموذج الحجز الإلكتروني في الموقع، أو مراسلتنا مباشرة عبر الواتساب على 6043 6622 974+، أو الاتصال بهاتف الصالون 8274 4432 974+. كما نرحب بالزيارات المباشرة وفق توفر المواعيد.'
  },
  {
    qEn: 'Do you offer Home Services in Qatar?',
    qAr: 'هل تتوفر لديكم خدمة المنازل في قطر؟',
    aEn: 'Yes! We offer VIP Home Beauty Services throughout Al Wakra, Al Wukair, and Doha. Our licensed technician travels directly to your residence equipped with sanitized professional kits. The home visit charge is 250 QAR per technician.',
    aAr: 'نعم بكل تأكيد! نوفر خدمة الزيارات المنزلية الفاخرة في الوكرة والوكير والدوحة. تصلك فنيتنا المعتمدة بكافة الأدوات المعقمة. رسوم الزيارة المنزلية هي 250 ر.ق لكل فني.'
  },
  {
    qEn: 'What professional brands do you use for hair and skincare?',
    qAr: 'ما هي الماركات والمنتجات المستخدمة للشعر والبشرة؟',
    aEn: 'We exclusively utilize internationally certified luxury brands: L\'Oréal Professionnel, Schwarzkopf Professional Fibre Clinix, Felps Professional (Brazil) for Nanoplastia and Keratin, Skeyndor Barcelona cosmeceuticals, Innovatis Caviar, and ELIM MediHeel.',
    aAr: 'نستخدم حصرياً أشهر العلامات العالمية المعتمدة: لوريال بروفيسيونال، شوارزكوف فايبر كلينكس، فيلبس البرازيلية للنانوبلاستيا والكيراتين، سكيندور الإسبانية لعلاجات البشرة، إنوفاتيس بالكافيار، وإيليم للعناية الطبية بالقدمين.'
  }
];

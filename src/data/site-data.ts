export const siteConfig = {
  name: "FITZONE",
  tagline: "LİMİTLERİNİ AŞ",
  description: "Kadıköy İstanbul'daki profesyonel spor salonu. Modern ekipmanlar, uzman antrenörler ve enerjik atmosfer ile hayalindeki forma kavuş.",
  address: "Caferağa Mah. Moda Cad. No:42, Kadıköy / İstanbul",
  phone: "+90 216 345 67 89",
  email: "info@fitzonegym.com",
  hours: "Hafta içi: 06:00 - 23:00 | Hafta sonu: 08:00 - 22:00",
};

export const navLinks = [
  { href: "/", label: "ANA SAYFA" },
  { href: "/uyelik", label: "ÜYELİK" },
  { href: "/antrenorler", label: "ANTRENÖRLER" },
  { href: "/program", label: "PROGRAM" },
  { href: "/galeri", label: "GALERİ" },
  { href: "/iletisim", label: "İLETİŞİM" },
];

export const services = [
  {
    title: "KİŞİSEL ANTRENMAN",
    description: "Birebir uzman antrenörlerle hedefinize özel programlar.",
    icon: "dumbbell",
  },
  {
    title: "GRUP DERSLERİ",
    description: "Yoga, Pilates, HIIT ve daha fazlası ile enerjinizi artırın.",
    icon: "users",
  },
  {
    title: "BESLENME DANIŞMANLIĞI",
    description: "Diyetisyen eşliğinde kişiye özel beslenme planları.",
    icon: "apple",
  },
  {
    title: "FONKSİYONEL ANTRENMAN",
    description: "Günlük yaşam performansınızı artıran fonksiyonel egzersizler.",
    icon: "zap",
  },
];

export const stats = [
  { value: "2000+", label: "ÜYE" },
  { value: "15+", label: "ANTRENÖR" },
  { value: "50+", label: "DERS" },
  { value: "400m²", label: "ALAN" },
];

export const trainers = [
  {
    name: "AHMET YILMAZ",
    specialty: "Güç & Kondisyon",
    experience: "12 Yıl",
    bio: "NSCA sertifikalı, eski milli sporcu. Fonksiyonel antrenman uzmanı.",
  },
  {
    name: "ZEYNEP KARA",
    specialty: "Yoga & Pilates",
    experience: "8 Yıl",
    bio: "RYT-500 sertifikalı yoga eğitmeni. Meditasyon ve nefes çalışmaları uzmanı.",
  },
  {
    name: "BURAK DEMİR",
    specialty: "HIIT & CrossFit",
    experience: "10 Yıl",
    bio: "CrossFit Level 2 antrenör. Yüksek yoğunluklu antrenman programları uzmanı.",
  },
  {
    name: "ELİF ÖZTÜRK",
    specialty: "Beslenme & Fitness",
    experience: "7 Yıl",
    bio: "Diyetisyen ve fitness antrenörü. Kilo yönetimi ve vücut kompozisyonu uzmanı.",
  },
  {
    name: "CAN AKSOY",
    specialty: "Boks & Kickboks",
    experience: "15 Yıl",
    bio: "Profesyonel boksör. Dövüş sanatları ve savunma teknikleri eğitmeni.",
  },
  {
    name: "SEDA YILDIZ",
    specialty: "Spinning & Kardiyo",
    experience: "6 Yıl",
    bio: "Schwinn sertifikalı spinning eğitmeni. Kardiyo ve dayanıklılık uzmanı.",
  },
  {
    name: "MERT ÇELIK",
    specialty: "Vücut Geliştirme",
    experience: "11 Yıl",
    bio: "IFBB Pro kategorisinde yarışmacı. Hipertrofi ve kas geliştirme uzmanı.",
  },
  {
    name: "AYŞE TUNÇ",
    specialty: "Fonksiyonel Antrenman",
    experience: "9 Yıl",
    bio: "ACE sertifikalı. Rehabilitasyon ve fonksiyonel hareket uzmanı.",
  },
  {
    name: "OĞUZ ŞAHIN",
    specialty: "Güreş & Strength",
    experience: "14 Yıl",
    bio: "Eski milli güreşçi. Güç antrenmanı ve atletik performans uzmanı.",
  },
  {
    name: "DİLARA ARSLAN",
    specialty: "Dans & Zumba",
    experience: "5 Yıl",
    bio: "Zumba ve dans fitness eğitmeni. Eğlenceli ve enerjik ders programları.",
  },
];

export const memberships = [
  {
    name: "TEMEL",
    price: 499,
    period: "/ ay",
    popular: false,
    features: [
      { text: "Salon erişimi", included: true },
      { text: "Soyunma odası", included: true },
      { text: "Duş & Sauna", included: true },
      { text: "Grup dersleri", included: false },
      { text: "Kişisel antrenör", included: false },
      { text: "Beslenme programı", included: false },
      { text: "Misafir hakkı", included: false },
      { text: "VIP salon", included: false },
    ],
  },
  {
    name: "PREMIUM",
    price: 799,
    period: "/ ay",
    popular: true,
    features: [
      { text: "Salon erişimi", included: true },
      { text: "Soyunma odası", included: true },
      { text: "Duş & Sauna", included: true },
      { text: "Grup dersleri", included: true },
      { text: "Kişisel antrenör (4x/ay)", included: true },
      { text: "Beslenme programı", included: true },
      { text: "Misafir hakkı", included: false },
      { text: "VIP salon", included: false },
    ],
  },
  {
    name: "ELİTE",
    price: 1299,
    period: "/ ay",
    popular: false,
    features: [
      { text: "Salon erişimi", included: true },
      { text: "Soyunma odası", included: true },
      { text: "Duş & Sauna", included: true },
      { text: "Grup dersleri", included: true },
      { text: "Kişisel antrenör (sınırsız)", included: true },
      { text: "Beslenme programı", included: true },
      { text: "Misafir hakkı (2x/ay)", included: true },
      { text: "VIP salon", included: true },
    ],
  },
];

export type ScheduleClass = {
  name: string;
  trainer: string;
  time: string;
  duration: string;
  type: "yoga" | "hiit" | "spinning" | "pilates" | "guc";
};

export const weekDays = ["PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ", "PAZAR"];

export const schedule: Record<string, ScheduleClass[]> = {
  PAZARTESİ: [
    { name: "YOGA FLOW", trainer: "Zeynep K.", time: "07:00", duration: "60dk", type: "yoga" },
    { name: "HIIT BLAST", trainer: "Burak D.", time: "09:00", duration: "45dk", type: "hiit" },
    { name: "SPİNNİNG", trainer: "Seda Y.", time: "12:00", duration: "45dk", type: "spinning" },
    { name: "PİLATES MAT", trainer: "Zeynep K.", time: "17:00", duration: "60dk", type: "pilates" },
    { name: "GÜÇ ANTRENMANI", trainer: "Ahmet Y.", time: "19:00", duration: "60dk", type: "guc" },
  ],
  SALI: [
    { name: "SPİNNİNG", trainer: "Seda Y.", time: "07:00", duration: "45dk", type: "spinning" },
    { name: "YOGA RESTORE", trainer: "Zeynep K.", time: "09:30", duration: "60dk", type: "yoga" },
    { name: "HIIT TABATA", trainer: "Burak D.", time: "12:00", duration: "30dk", type: "hiit" },
    { name: "GÜÇ & KONDİSYON", trainer: "Mert Ç.", time: "17:30", duration: "60dk", type: "guc" },
    { name: "PİLATES REFORMER", trainer: "Ayşe T.", time: "19:00", duration: "60dk", type: "pilates" },
  ],
  ÇARŞAMBA: [
    { name: "YOGA VİNYASA", trainer: "Zeynep K.", time: "07:00", duration: "60dk", type: "yoga" },
    { name: "SPİNNİNG ENDURANCE", trainer: "Seda Y.", time: "09:00", duration: "60dk", type: "spinning" },
    { name: "HIIT CİRCUİT", trainer: "Burak D.", time: "12:00", duration: "45dk", type: "hiit" },
    { name: "GÜÇ ANTRENMANI", trainer: "Ahmet Y.", time: "17:00", duration: "60dk", type: "guc" },
    { name: "PİLATES MAT", trainer: "Zeynep K.", time: "19:30", duration: "60dk", type: "pilates" },
  ],
  PERŞEMBE: [
    { name: "HIIT BURN", trainer: "Burak D.", time: "07:00", duration: "45dk", type: "hiit" },
    { name: "PİLATES REFORMER", trainer: "Ayşe T.", time: "09:30", duration: "60dk", type: "pilates" },
    { name: "SPİNNİNG", trainer: "Seda Y.", time: "12:00", duration: "45dk", type: "spinning" },
    { name: "YOGA YIN", trainer: "Zeynep K.", time: "17:00", duration: "75dk", type: "yoga" },
    { name: "GÜÇ & POWER", trainer: "Mert Ç.", time: "19:00", duration: "60dk", type: "guc" },
  ],
  CUMA: [
    { name: "SPİNNİNG HIIT", trainer: "Seda Y.", time: "07:00", duration: "45dk", type: "spinning" },
    { name: "YOGA FLOW", trainer: "Zeynep K.", time: "09:00", duration: "60dk", type: "yoga" },
    { name: "HIIT EXTREME", trainer: "Burak D.", time: "12:00", duration: "45dk", type: "hiit" },
    { name: "PİLATES MAT", trainer: "Ayşe T.", time: "17:00", duration: "60dk", type: "pilates" },
    { name: "GÜÇ ANTRENMANI", trainer: "Ahmet Y.", time: "19:00", duration: "60dk", type: "guc" },
  ],
  CUMARTESİ: [
    { name: "YOGA SABAH", trainer: "Zeynep K.", time: "09:00", duration: "75dk", type: "yoga" },
    { name: "HIIT WEEKEND", trainer: "Burak D.", time: "10:30", duration: "45dk", type: "hiit" },
    { name: "SPİNNİNG PARTY", trainer: "Seda Y.", time: "12:00", duration: "60dk", type: "spinning" },
    { name: "GÜÇ TOTAL BODY", trainer: "Mert Ç.", time: "14:00", duration: "60dk", type: "guc" },
    { name: "PİLATES REFORMER", trainer: "Ayşe T.", time: "16:00", duration: "60dk", type: "pilates" },
  ],
  PAZAR: [
    { name: "YOGA RESTORE", trainer: "Zeynep K.", time: "10:00", duration: "75dk", type: "yoga" },
    { name: "SPİNNİNG CHILL", trainer: "Seda Y.", time: "11:30", duration: "45dk", type: "spinning" },
    { name: "PİLATES MAT", trainer: "Ayşe T.", time: "13:00", duration: "60dk", type: "pilates" },
    { name: "HIIT LİGHT", trainer: "Burak D.", time: "15:00", duration: "30dk", type: "hiit" },
    { name: "GÜÇ & STRETCH", trainer: "Ahmet Y.", time: "17:00", duration: "60dk", type: "guc" },
  ],
};

export const galleryImages = [
  { id: 1, category: "salon", alt: "FitZone ana salon", aspect: "landscape" as const },
  { id: 2, category: "antrenman", alt: "Grup antrenmanı", aspect: "portrait" as const },
  { id: 3, category: "ekipman", alt: "Modern ekipmanlar", aspect: "landscape" as const },
  { id: 4, category: "salon", alt: "Kardiyo bölümü", aspect: "square" as const },
  { id: 5, category: "antrenman", alt: "Kişisel antrenman", aspect: "portrait" as const },
  { id: 6, category: "ekipman", alt: "Ağırlık bölümü", aspect: "landscape" as const },
  { id: 7, category: "salon", alt: "Spinning stüdyosu", aspect: "landscape" as const },
  { id: 8, category: "antrenman", alt: "HIIT dersi", aspect: "square" as const },
  { id: 9, category: "ekipman", alt: "Fonksiyonel alan", aspect: "portrait" as const },
  { id: 10, category: "salon", alt: "Yoga stüdyosu", aspect: "landscape" as const },
  { id: 11, category: "antrenman", alt: "Boks antrenmanı", aspect: "square" as const },
  { id: 12, category: "ekipman", alt: "TRX ekipmanları", aspect: "landscape" as const },
];

export const galleryCategories = ["TÜMÜ", "SALON", "ANTRENMAN", "EKİPMAN"];

export const transformations = [
  {
    name: "Mehmet A.",
    duration: "6 Ay",
    weightBefore: "98 kg",
    weightAfter: "78 kg",
    quote: "FitZone hayatımı değiştirdi. 20 kilo verdim ve kendimi hiç bu kadar iyi hissetmemiştim.",
  },
  {
    name: "Aylin S.",
    duration: "4 Ay",
    weightBefore: "75 kg",
    weightAfter: "62 kg",
    quote: "Grup dersleri ve kişisel antrenmanlarla hedefime ulaştım. Harika bir ekip!",
  },
  {
    name: "Emre K.",
    duration: "8 Ay",
    weightBefore: "85 kg",
    weightAfter: "82 kg",
    quote: "Kas kütlemi artırıp yağ oranımı düşürdüm. Profesyonel destek çok önemli.",
  },
];

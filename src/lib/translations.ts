export type Language = 'EN' | 'AR' | 'RU' | 'DE' | 'ES' | 'FR' | 'TR' | 'ZH';

export interface TranslationData {
  nav: {
    services: string;
    calculator: string;
    benefits: string;
    process: string;
    faq: string;
    contact: string;
    applyNow: string;
    callExpert: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats1Val: string;
    stats1Label: string;
    stats2Val: string;
    stats2Label: string;
    stats3Val: string;
    stats3Label: string;
  };
  trust: {
    officialSpecs: string;
    approvedEntity: string;
    dldPartner: string;
    gdrfaPartner: string;
    fastProcessing: string;
  };
  calculator: {
    modalTitle: string;
    subtitle: string;
    visaCategory: string;
    selectCategory: string;
    categories: {
      investor: string;
      investorDesc: string;
      executive: string;
      executiveDesc: string;
      talent: string;
      talentDesc: string;
      family: string;
      familyDesc: string;
    };
    propValue: string;
    monthlySalary: string;
    dependents: string;
    processingSpeed: string;
    standardSpeed: string;
    vipSpeed: string;
    breakdownTitle: string;
    govFee: string;
    medicalFitness: string;
    emiratesId: string;
    vipConcierge: string;
    totalEst: string;
    instantWhatsapp: string;
    pdfQuote: string;
    legalNote: string;
  };
  servicesSection: {
    title: string;
    subtitle: string;
    residencyTab: string;
    corporateTab: string;
    legalTab: string;
    exploreDetails: string;
    calculateFees: string;
  };
  roadmap: {
    title: string;
    subtitle: string;
    step1: string;
    step1Desc: string;
    step2: string;
    step2Desc: string;
    step3: string;
    step3Desc: string;
    step4: string;
    step4Desc: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  faq: {
    title: string;
    subtitle: string;
  };
  mobileSticky: {
    calcBtn: string;
    whatsappBtn: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  EN: {
    nav: {
      services: "Services Portfolio",
      calculator: "Visa Calculator",
      benefits: "Privileges",
      process: "Roadmap",
      faq: "FAQ",
      contact: "Contact VIP Desk",
      applyNow: "Begin Application",
      callExpert: "Direct VIP Hotline",
    },
    hero: {
      badge: "UAE Prime Ministerial & GDRFA Aligned Processing",
      titleLine1: "Securing UAE Residency &",
      titleHighlight: "10-Year Golden Visa",
      titleLine2: "With Sovereign Prestige.",
      subtitle: "The definitive bespoke portal for international investors, senior executives, high-net-worth families, and specialized talent seeking seamless UAE residency.",
      ctaPrimary: "Launch Visa Calculator",
      ctaSecondary: "Explore Service Portfolio",
      stats1Val: "100%",
      stats1Label: "Government Compliance",
      stats2Val: "9,800+",
      stats2Label: "Golden Visas Issued",
      stats3Val: "3-5 Days",
      stats3Label: "VIP Fast-Track Approval",
    },
    trust: {
      officialSpecs: "Official Government Portal Specifications & Certified Attestation",
      approvedEntity: "Licensed Corporate Service Provider",
      dldPartner: "Dubai Land Department Compliant",
      gdrfaPartner: "GDRFA & ICP System Integrated",
      fastProcessing: "Guaranteed Expedited VIP Processing",
    },
    calculator: {
      modalTitle: "UAE Golden Visa & Residency Estimator",
      subtitle: "Instant itemized breakdown of official government tariffs and concierge processing fees.",
      visaCategory: "Select Residency Pathway",
      selectCategory: "Choose your eligible category",
      categories: {
        investor: "Real Estate Investor (10-Year)",
        investorDesc: "Property investment valued at AED 2,000,000 or above",
        executive: "Senior Executive & Director",
        executiveDesc: "Monthly verified salary of AED 30,000+ with MOHRE contract",
        talent: "Specialized Talent & Innovator",
        talentDesc: "Doctors, scientists, AI researchers, and cultural figures",
        family: "Family & Dependent Sponsorship",
        familyDesc: "Spouse, children (unlimited age for daughters), and parents",
      },
      propValue: "Property Value (AED)",
      monthlySalary: "Monthly Salary (AED)",
      dependents: "Number of Family Dependents",
      processingSpeed: "Processing Priority",
      standardSpeed: "Standard Govt Route (7-10 Days)",
      vipSpeed: "VIP Concierge Fast-Track (48-72 Hours)",
      breakdownTitle: "Itemized Cost Breakdown",
      govFee: "Official GDRFA / ICP Government Fee",
      medicalFitness: "VIP Medical Fitness & Blood Screening",
      emiratesId: "Emirates ID Card (10-Year Biometric)",
      vipConcierge: "Dedicated VIP Case Officer & PRO Service",
      totalEst: "Estimated Total Investment",
      instantWhatsapp: "Book via WhatsApp",
      pdfQuote: "Download Official PDF Quote",
      legalNote: "Fees are estimated based on latest UAE Federal ICP & GDRFA published schedules.",
    },
    servicesSection: {
      title: "Comprehensive UAE Corporate & Visa Services",
      subtitle: "From elite Golden Visas to turnkey Mainland company formation, every protocol handled by licensed sovereign liaisons.",
      residencyTab: "Residency & Golden Visas",
      corporateTab: "Corporate & Freezone Setup",
      legalTab: "Government & Legal PRO",
      exploreDetails: "Review Requirements",
      calculateFees: "Calculate Exact Fees",
    },
    roadmap: {
      title: "The Sovereign 4-Step Journey",
      subtitle: "A frictionless protocol engineered for discretion, speed, and zero bureaucratic friction.",
      step1: "1. Eligibility Audit & File Curation",
      step1Desc: "Our senior legal counsel reviews your deeds, bank transcripts, and credentials for pre-approval clearance.",
      step2: "2. ICP / GDRFA Nomination Submission",
      step2Desc: "Filing through sovereign government channels to obtain your official nomination and entry permit.",
      step3: "3. VIP Medical & Biometric Fast-Track",
      step3Desc: "Private salon medical screening with zero queues, accompanied by your dedicated executive liaison.",
      step4: "4. Hand-Delivered 10-Year Emirates ID",
      step4Desc: "Your physical 10-Year Golden Visa residency status and VIP Emirates ID delivered to your address.",
    },
    testimonials: {
      title: "Endorsed by Global Investors & C-Suite Leaders",
      subtitle: "Hear from founders, family offices, and executives who completed their UAE transition with us.",
    },
    faq: {
      title: "Frequently Answered Directives",
      subtitle: "Authoritative clarifications on Golden Visa criteria, family sponsorship, and corporate structuring.",
    },
    mobileSticky: {
      calcBtn: "Visa Calculator",
      whatsappBtn: "WhatsApp VIP",
    },
  },
  AR: {
    nav: {
      services: "محفظة الخدمات",
      calculator: "حاسبة التأشيرة",
      benefits: "المزايا الاستثنائية",
      process: "خارطة الإجراءات",
      faq: "الأسئلة الشائعة",
      contact: "مكتب كبار الشخصيات",
      applyNow: "تقديم الطلب",
      callExpert: "الخط المباشر",
    },
    hero: {
      badge: "معتمد وفق معايير الإقامة وشؤون الأجانب بدولة الإمارات",
      titleLine1: "بوابتك للحصول على الإقامة و",
      titleHighlight: "الإقامة الذهبية 10 سنوات",
      titleLine2: "بأعلى درجات الفخامة والموثوقية.",
      subtitle: "المنصة الحصرية الرائدة للمستثمرين الدوليين، والمدراء التنفيذيين، والعائلات رفيعة المستوى لضمان إقامة دائمة ومتميزة في دولة الإمارات.",
      ctaPrimary: "حساب تكلفة التأشيرة",
      ctaSecondary: "استعراض كافة الخدمات",
      stats1Val: "100%",
      stats1Label: "مطابقة للمعايير الحكومية",
      stats2Val: "+9,800",
      stats2Label: "تأشيرة ذهبية منجزة",
      stats3Val: "3-5 أيام",
      stats3Label: "إنجاز فائق السرعة لكبار الشخصيات",
    },
    trust: {
      officialSpecs: "مواصفات البوابات الحكومية الرسمية والتصديقات المعتمدة",
      approvedEntity: "مزود خدمات شركات مرخص وموثق",
      dldPartner: "معتمد لدى دائرة الأراضي والأملاك بدبي",
      gdrfaPartner: "ربط تقني مباشر مع GDRFA والهيئة الاتحادية ICP",
      fastProcessing: "إجراءات كبار الشخصيات VIP المضمونة",
    },
    calculator: {
      modalTitle: "حاسبة تكلفة الإقامة الذهبية والتأشيرات",
      subtitle: "تفصيل فوري لرسوم الجهات الحكومية والخدمات التنفيذية المخصصة.",
      visaCategory: "اختر فئة الإقامة المطلوبة",
      selectCategory: "حدد المسار المؤهل",
      categories: {
        investor: "مستثمر عقاري (إقامة 10 سنوات)",
        investorDesc: "استثمار عقاري بقيمة 2,000,000 درهم إماراتي أو أكثر",
        executive: "المدراء وكبار التنفيذيين",
        executiveDesc: "راتب شهري مثبت بقيمة 30,000+ درهم مع عقد عمل رسمي",
        talent: "المواهب التخصصية والمبتكرين",
        talentDesc: "الأطباء والعلماء ورواد التكنولوجيا والذكاء الاصطناعي",
        family: "كفالة أفراد الأسرة والمعالين",
        familyDesc: "الزوجة، الأبناء (بدون حد أقصى لعمر البنات)، والوالدين",
      },
      propValue: "قيمة العقار (درهم إماراتي)",
      monthlySalary: "الراتب الشهري (درهم إماراتي)",
      dependents: "عدد أفراد الأسرة المكفولين",
      processingSpeed: "أولوية الإنجاز",
      standardSpeed: "المسار الحكومي المعتاد (7-10 أيام)",
      vipSpeed: "المسار الفاخر السريع (48-72 ساعة)",
      breakdownTitle: "بيان التكاليف التفصيلي",
      govFee: "الرسوم الحكومية الرسمية (الهيئة والجوازات)",
      medicalFitness: "الفحص الطبي الشامل لكبار الشخصيات",
      emiratesId: "إصدار بطاقة الهوية الإماراتية (10 سنوات)",
      vipConcierge: "مسؤول علاقات خاص وخدمات التعقيب والتوصيل",
      totalEst: "إجمالي التقدير الاستثماري",
      instantWhatsapp: "تواصل عبر واتساب فوراً",
      pdfQuote: "تحميل عرض السعر الرسمي (PDF)",
      legalNote: "الرسوم تقديرية ومطابقة لأحدث لوائح الهيئة الاتحادية للهوية والجنسية والإقامة.",
    },
    servicesSection: {
      title: "منظومة خدمات الإقامة والشركات المتكاملة",
      subtitle: "من إقامات المستثمرين الذهبية وحتى تأسيس الشركات المحلية وفي المناطق الحرة بدبي.",
      residencyTab: "الإقامات والتأشيرة الذهبية",
      corporateTab: "تأسيس الشركات والرخص",
      legalTab: "الخدمات الحكومية والقانونية",
      exploreDetails: "مراجعة الشروط والمستندات",
      calculateFees: "احسب الرسوم الدقيقة",
    },
    roadmap: {
      title: "رحلتك السيادية في 4 خطوات",
      subtitle: "إجراءات فائقة السلاسة صُممت لضمان الخصوصية والسرعة دون أي تعقيدات.",
      step1: "1. تدقيق الأهلية وتجهيز الملف",
      step1Desc: "دراسة شاملة لملفكم ومستنداتكم العقارية والمالية لضمان الموافقة المسبقة.",
      step2: "2. التقديم عبر القنوات الحكومية",
      step2Desc: "رفع الطلب مباشرة إلى الهيئة الاتحادية للحصول على الموافقة المبدئية وتصريح الدخول.",
      step3: "3. الفحص الطبي والبصمة لكبار الشخصيات",
      step3Desc: "إجراء الفحص الطبي في جناح VIP خاص دون انتظار برفقة ممثلنا الخاص.",
      step4: "4. استلام الهوية الإماراتية الذهبية",
      step4Desc: "توصيل بطاقة الهوية الإماراتية 10 سنوات وتأشيرة الإقامة مباشرة إلى مقركم.",
    },
    testimonials: {
      title: "ثقة نخبة المستثمرين والقيادات التنفيذية",
      subtitle: "آراء عملائنا الذين أتموا انتقالهم واستثماراتهم في دبي بنجاح.",
    },
    faq: {
      title: "الأسئلة الأكثر تداولاً",
      subtitle: "إجابات وافية وشاملة حول شروط الإقامة الذهبية وكفالة العائلة وتأسيس الشركات.",
    },
    mobileSticky: {
      calcBtn: "حاسبة التأشيرة",
      whatsappBtn: "واتساب مباشر",
    },
  },
  RU: {
    nav: {
      services: "Услуги",
      calculator: "Калькулятор визы",
      benefits: "Преимущества",
      process: "Этапы оформления",
      faq: "Вопросы и ответы",
      contact: "VIP Отдел",
      applyNow: "Подать заявку",
      callExpert: "Прямая линия",
    },
    hero: {
      badge: "Официальные стандарты правительства ОАЭ и GDRFA",
      titleLine1: "Оформление резиденства ОАЭ и",
      titleHighlight: "Золотой визы на 10 лет",
      titleLine2: "на премиальном уровне.",
      subtitle: "Эксклюзивный сервис для инвесторов, топ-менеджеров и состоятельных семей, желающих получить статус резидента ОАЭ без бюрократии.",
      ctaPrimary: "Рассчитать стоимость",
      ctaSecondary: "Каталог услуг",
      stats1Val: "100%",
      stats1Label: "Соответствие законам ОАЭ",
      stats2Val: "9,800+",
      stats2Label: "Выданных виз",
      stats3Val: "3-5 дней",
      stats3Label: "VIP экспресс-одобрение",
    },
    trust: {
      officialSpecs: "Прямая интеграция с государственными порталами ОАЭ",
      approvedEntity: "Лицензированный корпоративный провайдер",
      dldPartner: "Сертифицировано Земельным департаментом Дубая (DLD)",
      gdrfaPartner: "Интеграция с системами GDRFA и ICP",
      fastProcessing: "Гарантированная ускоренная VIP-обработка",
    },
    calculator: {
      modalTitle: "Калькулятор Золотой визы ОАЭ",
      subtitle: "Точный расчет государственных пошлин и премиального сопровождения.",
      visaCategory: "Выберите категорию",
      selectCategory: "Выберите подходящий статус",
      categories: {
        investor: "Инвестор в недвижимость (10 лет)",
        investorDesc: "Инвестиции в недвижимость от 2,000,000 AED",
        executive: "Топ-менеджеры и директора",
        executiveDesc: "Подтвержденный оклад от 30,000 AED по контракту MOHRE",
        talent: "Таланты, врачи и ученые",
        talentDesc: "Специалисты в сфере AI, медицины и инноваций",
        family: "Семейная виза (спонсорство)",
        familyDesc: "Супруги, дети любого возраста (дочери без ограничений), родители",
      },
      propValue: "Стоимость недвижимости (AED)",
      monthlySalary: "Ежемесячный доход (AED)",
      dependents: "Количество членов семьи",
      processingSpeed: "Приоритет оформления",
      standardSpeed: "Стандартный срок (7-10 дней)",
      vipSpeed: "VIP Экспресс (48-72 часа)",
      breakdownTitle: "Детализация расходов",
      govFee: "Госпошлина GDRFA / ICP",
      medicalFitness: "VIP медосмотр и экспресс-анализы",
      emiratesId: "Emirates ID (биометрия на 10 лет)",
      vipConcierge: "Персональный менеджер и трансфер",
      totalEst: "Итоговая ориентировочная стоимость",
      instantWhatsapp: "Написать в WhatsApp",
      pdfQuote: "Скачать официальный расчет (PDF)",
      legalNote: "Тарифы рассчитаны на основе актуальных государственных регламентов ОАЭ.",
    },
    servicesSection: {
      title: "Комплексные визовые и корпоративные услуги",
      subtitle: "От Золотых виз до регистрации компаний в Дубае под ключ.",
      residencyTab: "Резидентство и Золотая виза",
      corporateTab: "Регистрация бизнеса и фризоны",
      legalTab: "Юридические и PRO услуги",
      exploreDetails: "Подробнее о требованиях",
      calculateFees: "Точный расчет",
    },
    roadmap: {
      title: "Процесс оформления в 4 шага",
      subtitle: "Комфортный процесс без очередей и стресса с гарантией конфиденциальности.",
      step1: "1. Экспертный аудит и подготовка документов",
      step1Desc: "Анализ ваших активов и договоров юристами для гарантированного одобрения.",
      step2: "2. Подача через порталы GDRFA / ICP",
      step2Desc: "Официальное внесение дела в базу и получение электронного разрешения.",
      step3: "3. VIP медосмотр и биометрия",
      step3Desc: "Сдача биометрии и анализов в частном VIP лаунже без ожидания.",
      step4: "4. Вручение 10-летней Emirates ID",
      step4Desc: "Доставка оригиналов документов и готовой ID-карты вам лично в руки.",
    },
    testimonials: {
      title: "Отзывы международных инвесторов",
      subtitle: "Истории успеха предпринимателей, переехавших в Дубай с нашей помощью.",
    },
    faq: {
      title: "Часто задаваемые вопросы",
      subtitle: "Вся необходимая информация о Золотой визе ОАЭ и релокации бизнеса.",
    },
    mobileSticky: {
      calcBtn: "Калькулятор визы",
      whatsappBtn: "WhatsApp VIP",
    },
  },
  DE: {
    nav: {
      services: "Dienstleistungen",
      calculator: "Visarechner",
      benefits: "Vorteile",
      process: "Ablauf",
      faq: "FAQ",
      contact: "VIP-Desk",
      applyNow: "Antrag starten",
      callExpert: "Direktkontakt",
    },
    hero: {
      badge: "Offizielle Regierungsstandards der VAE & GDRFA",
      titleLine1: "Ihr VAE-Wohnsitz & das",
      titleHighlight: "10-Jahres Golden Visa",
      titleLine2: "auf höchstem Niveau.",
      subtitle: "Die führende Adresse für Investoren, Führungskräfte und Familien für einen reibungslosen Übergang in die Vereinigten Arabischen Emirate.",
      ctaPrimary: "Visarechner starten",
      ctaSecondary: "Leistungen ansehen",
      stats1Val: "100%",
      stats1Label: "Behördliche Konformität",
      stats2Val: "9.800+",
      stats2Label: "Ausgestellte Visa",
      stats3Val: "3-5 Tage",
      stats3Label: "VIP Express-Verfahren",
    },
    trust: {
      officialSpecs: "Offizielle Portalspezifikationen & zertifizierte Beglaubigungen",
      approvedEntity: "Lizenzierter Unternehmensdienstleister",
      dldPartner: "Dubai Land Department (DLD) konform",
      gdrfaPartner: "Direkte ICP & GDRFA Systemanbindung",
      fastProcessing: "Garantierte beschleunigte VIP-Bearbeitung",
    },
    calculator: {
      modalTitle: "VAE Golden Visa & Residenz Rechner",
      subtitle: "Echtzeit-Aufschlüsselung aller amtlichen Gebühren und Concierge-Dienste.",
      visaCategory: "Aufenthaltskategorie wählen",
      selectCategory: "Wählen Sie Ihren Berechtigungsweg",
      categories: {
        investor: "Immobilieninvestor (10 Jahre)",
        investorDesc: "Immobilienwert ab 2.000.000 AED",
        executive: "Führungskräfte & Geschäftsführer",
        executiveDesc: "Monatliches Gehalt ab 30.000 AED mit Arbeitsvertrag",
        talent: "Spezialisierte Fachkräfte",
        talentDesc: "Ärzte, Wissenschaftler, KI-Forscher und Innovatoren",
        family: "Familien- und Angehörigenvisum",
        familyDesc: "Ehepartner, Kinder (Töchter unbegrenzt) und Eltern",
      },
      propValue: "Immobilienwert (AED)",
      monthlySalary: "Monatliches Gehalt (AED)",
      dependents: "Anzahl Angehörige",
      processingSpeed: "Bearbeitungspriorität",
      standardSpeed: "Standardverfahren (7-10 Tage)",
      vipSpeed: "VIP-Express-Concierge (48-72 Stunden)",
      breakdownTitle: "Kostenaufstellung",
      govFee: "Staatliche Gebühren (GDRFA / ICP)",
      medicalFitness: "VIP Medical Fitness Test",
      emiratesId: "10-Jahres Biometrische Emirates ID",
      vipConcierge: "Persönlicher VIP Betreuer & Behördenservice",
      totalEst: "Geschätzte Gesamtkosten",
      instantWhatsapp: "Per WhatsApp anfragen",
      pdfQuote: "Offizielles PDF-Angebot herunterladen",
      legalNote: "Gebühren basieren auf den aktuellen Verordnungen der VAE-Behörden.",
    },
    servicesSection: {
      title: "Ganzheitliche Visa- und Unternehmensservices",
      subtitle: "Vom exklusiven Golden Visa bis zur schlüsselfertigen Firmengründung in Dubai.",
      residencyTab: "Wohnsitz & Golden Visa",
      corporateTab: "Firmengründung & Freizonen",
      legalTab: "Behördliche & juristische Betreuung",
      exploreDetails: "Voraussetzungen prüfen",
      calculateFees: "Exakte Gebühren berechnen",
    },
    roadmap: {
      title: "In 4 Schritten zu Ihrer Residenz",
      subtitle: "Diskreter und effizienter Ablauf ohne bürokratische Hürden.",
      step1: "1. Vorprüfung & Aktenvorbereitung",
      step1Desc: "Prüfung Ihrer Dokumente durch unsere Rechtsexperten für eine garantierte Vorabgenehmigung.",
      step2: "2. Einreichung bei Behörden",
      step2Desc: "Direkte Einreichung zur Ausstellung des Visums und der Einreiseerlaubnis.",
      step3: "3. VIP-Medizincheck & Biometrie",
      step3Desc: "Privater medizinischer Test in exklusiver Lounge ohne Wartezeit.",
      step4: "4. Übergabe der Emirates ID",
      step4Desc: "Persönliche Übergabe Ihrer 10-Jahres Emirates ID direkt an Ihren Wunschort.",
    },
    testimonials: {
      title: "Das Vertrauen internationaler Investoren",
      subtitle: "Erfahrungsberichte von Unternehmern, die mit uns nach Dubai gezogen sind.",
    },
    faq: {
      title: "Häufig gestellte Fragen",
      subtitle: "Wichtige Details zum Golden Visa, Familiensponsoring und Steuervorteilen.",
    },
    mobileSticky: {
      calcBtn: "Visarechner",
      whatsappBtn: "WhatsApp VIP",
    },
  },
  ES: {
    nav: {
      services: "Servicios",
      calculator: "Calculadora de Visa",
      benefits: "Beneficios",
      process: "Proceso",
      faq: "Preguntas",
      contact: "Atención VIP",
      applyNow: "Iniciar Trámite",
      callExpert: "Línea Directa",
    },
    hero: {
      badge: "Estándares oficiales de inmigración del Gobierno de los EAU",
      titleLine1: "Residencia en EAU y",
      titleHighlight: "Visa Dorada de 10 Años",
      titleLine2: "con máxima distinción.",
      subtitle: "La solución definitiva para inversores globales, directivos de alto nivel y familias que buscan residencia legal y fiscal en Dubái sin complicaciones.",
      ctaPrimary: "Calcular Costos",
      ctaSecondary: "Ver Servicios",
      stats1Val: "100%",
      stats1Label: "Cumplimiento Gubernamental",
      stats2Val: "+9,800",
      stats2Label: "Visas Tramitadas",
      stats3Val: "3-5 Días",
      stats3Label: "Aprobación VIP Rápida",
    },
    trust: {
      officialSpecs: "Especificaciones oficiales del portal gubernamental",
      approvedEntity: "Proveedor corporativo con licencia oficial",
      dldPartner: "Homologado por el Departamento de Tierras de Dubái (DLD)",
      gdrfaPartner: "Conexión directa con los sistemas GDRFA e ICP",
      fastProcessing: "Procesamiento VIP prioritario garantizado",
    },
    calculator: {
      modalTitle: "Calculadora de Visa Dorada de EAU",
      subtitle: "Desglose inmediato de tasas oficiales del gobierno y gestión personalizada.",
      visaCategory: "Seleccione categoría",
      selectCategory: "Elija su vía de elegibilidad",
      categories: {
        investor: "Inversor Inmobiliario (10 Años)",
        investorDesc: "Inversión en propiedades de 2.000.000 AED o superior",
        executive: "Altos Ejecutivos y Directores",
        executiveDesc: "Salario mensual mínimo de 30.000 AED con contrato legal",
        talent: "Talento Especializado e Investigadores",
        talentDesc: "Médicos, científicos, ingenieros y creadores",
        family: "Visa Familiar y Dependientes",
        familyDesc: "Cónyuge, hijos e hijas (sin límite de edad) y padres",
      },
      propValue: "Valor de Propiedad (AED)",
      monthlySalary: "Salario Mensual (AED)",
      dependents: "Número de dependientes",
      processingSpeed: "Velocidad de tramitación",
      standardSpeed: "Vía Ordinaria (7-10 días)",
      vipSpeed: "Vía VIP Exprés (48-72 horas)",
      breakdownTitle: "Desglose detallado",
      govFee: "Tasas Gubernamentales (GDRFA / ICP)",
      medicalFitness: "Examen Médico VIP y Análisis",
      emiratesId: "Emirates ID Biométrica (10 Años)",
      vipConcierge: "Asesor Personal VIP y Trámites",
      totalEst: "Total Estimado de Inversión",
      instantWhatsapp: "Consultar por WhatsApp",
      pdfQuote: "Descargar Cotización Oficial (PDF)",
      legalNote: "Estimación acorde a las tarifas oficiales publicadas por las autoridades de los EAU.",
    },
    servicesSection: {
      title: "Soluciones Integrales de Residencia y Empresas",
      subtitle: "Desde la Golden Visa hasta la creación de empresas en zonas francas o territorio local.",
      residencyTab: "Residencia y Visas de Oro",
      corporateTab: "Creación de Empresas y Licencias",
      legalTab: "Servicios Legales y PRO",
      exploreDetails: "Requisitos",
      calculateFees: "Calcular Tarifas",
    },
    roadmap: {
      title: "El camino hacia su residencia en 4 pasos",
      subtitle: "Protocolo ágil y confidencial sin esperas ni burocracia.",
      step1: "1. Auditoría inicial de elegibilidad",
      step1Desc: "Revisión exhaustiva de documentos y títulos de propiedad para pre-aprobación.",
      step2: "2. Solicitud ante entidades estatales",
      step2Desc: "Registro inmediato ante las autoridades para la emisión del permiso de entrada.",
      step3: "3. Reconocimiento médico y huellas VIP",
      step3Desc: "Acceso exclusivo a clínicas VIP sin filas acompañado por nuestro asesor.",
      step4: "4. Entrega de su Emirates ID de 10 Años",
      step4Desc: "Recepción de su documento físico oficial en mano en su domicilio u oficina.",
    },
    testimonials: {
      title: "Respaldado por empresarios de todo el mundo",
      subtitle: "Historias reales de clientes que confiaron en nosotros para su traslado a los EAU.",
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Información clave sobre ventajas impositivas, requisitos y visas familiares.",
    },
    mobileSticky: {
      calcBtn: "Calculadora de Visa",
      whatsappBtn: "WhatsApp VIP",
    },
  },
  FR: {
    nav: {
      services: "Services",
      calculator: "Calculateur de Visa",
      benefits: "Avantages",
      process: "Protocole",
      faq: "FAQ",
      contact: "Pôle VIP",
      applyNow: "Démarrer",
      callExpert: "Ligne Directe",
    },
    hero: {
      badge: "Conforme aux normes gouvernementales des EAU & GDRFA",
      titleLine1: "Obtenez votre résidence aux EAU &",
      titleHighlight: "Golden Visa de 10 Ans",
      titleLine2: "avec excellence et distinction.",
      subtitle: "La plateforme de référence pour les investisseurs, hauts dirigeants et familles internationales en quête d'un établissement serein aux Émirats Arabes Unis.",
      ctaPrimary: "Calculer les Frais",
      ctaSecondary: "Découvrir nos Services",
      stats1Val: "100%",
      stats1Label: "Conformité Étatique",
      stats2Val: "+9 800",
      stats2Label: "Visas Accordés",
      stats3Val: "3-5 Jours",
      stats3Label: "Validation Express VIP",
    },
    trust: {
      officialSpecs: "Spécifications conformes aux portails d'État des EAU",
      approvedEntity: "Cabinet d'affaires accrédité",
      dldPartner: "Partenaire agréé Dubai Land Department",
      gdrfaPartner: "Intégration numérique GDRFA et ICP",
      fastProcessing: "Traitement VIP prioritaire garanti",
    },
    calculator: {
      modalTitle: "Calculateur de Visa Doré & Résidence",
      subtitle: "Estimation instantanée des taxes gouvernementales et de la prise en charge VIP.",
      visaCategory: "Sélectionnez votre voie",
      selectCategory: "Critère d'éligibilité",
      categories: {
        investor: "Investisseur Immobilier (10 Ans)",
        investorDesc: "Bien immobilier d'au moins 2 000 000 AED",
        executive: "Cadre Dirigeant & Directeur",
        executiveDesc: "Salaire mensuel certifié dès 30 000 AED",
        talent: "Talents & Scientifiques",
        talentDesc: "Médecins, chercheurs, pionniers en IA et créateurs",
        family: "Regroupement Familial",
        familyDesc: "Époux, enfants (sans limite d'âge pour les filles), parents",
      },
      propValue: "Valeur du Bien (AED)",
      monthlySalary: "Salaire Mensuel (AED)",
      dependents: "Nombre de personnes à charge",
      processingSpeed: "Délai de traitement",
      standardSpeed: "Procédure standard (7-10 jours)",
      vipSpeed: "Procédure VIP Express (48-72h)",
      breakdownTitle: "Détail des coûts",
      govFee: "Taxes officielles (GDRFA / ICP)",
      medicalFitness: "Examen médical VIP & analyses rapides",
      emiratesId: "Emirates ID biométrique (10 Ans)",
      vipConcierge: "Officier dédié VIP & démarches complètes",
      totalEst: "Investissement total estimé",
      instantWhatsapp: "Échanger par WhatsApp",
      pdfQuote: "Télécharger le devis officiel (PDF)",
      legalNote: "Tarifs indicatifs selon les barèmes officiels des autorités émiraties.",
    },
    servicesSection: {
      title: "Services d'Immigration et d'Entreprise aux EAU",
      subtitle: "De l'obtention du Golden Visa à la création complète d'entreprises à Dubaï.",
      residencyTab: "Résidence & Golden Visa",
      corporateTab: "Création d'Entreprise & Freezones",
      legalTab: "Services Juridiques & PRO",
      exploreDetails: "Conditions d'accès",
      calculateFees: "Calculer les frais réels",
    },
    roadmap: {
      title: "Votre parcours en 4 étapes clés",
      subtitle: "Un protocole fluide sans file d'attente conçu pour une totale sérénité.",
      step1: "1. Audit préalable d'éligibilité",
      step1Desc: "Étude rigoureuse des titres de propriété et pièces justificatives.",
      step2: "2. Dépôt officiel ICP / GDRFA",
      step2Desc: "Transmission au système gouvernemental pour validation du visa d'entrée.",
      step3: "3. Examen médical et biométrie VIP",
      step3Desc: "Accès au salon d'analyse privé avec votre chargé de mission.",
      step4: "4. Remise de l'Emirates ID 10 Ans",
      step4Desc: "Livraison en main propre de votre carte de résidence officielle.",
    },
    testimonials: {
      title: "La confiance de leaders internationaux",
      subtitle: "Témoignages de dirigeants ayant finalisé leur implantation à Dubaï.",
    },
    faq: {
      title: "Foire Aux Questions",
      subtitle: "Toutes les réponses sur les avantages fiscaux et les critères légaux.",
    },
    mobileSticky: {
      calcBtn: "Calculateur Visa",
      whatsappBtn: "WhatsApp VIP",
    },
  },
  TR: {
    nav: {
      services: "Hizmetlerimiz",
      calculator: "Vize Hesaplayıcı",
      benefits: "Ayrıcalıklar",
      process: "İşlem Aşamaları",
      faq: "SSS",
      contact: "VIP Masası",
      applyNow: "Başvuru Yap",
      callExpert: "Doğrudan Hat",
    },
    hero: {
      badge: "BAE Hükümeti ve GDRFA Resmi Standartlarında",
      titleLine1: "BAE Oturum İzni ve",
      titleHighlight: "10 Yıllık Golden Visa",
      titleLine2: "En Prestijli Hizmetle.",
      subtitle: "Uluslararası yatırımcılar, üst düzey yöneticiler ve aileler için bürokrasisiz, lüks Birleşik Arap Emirlikleri oturum hizmeti.",
      ctaPrimary: "Masrafları Hesapla",
      ctaSecondary: "Hizmetleri Keşfet",
      stats1Val: "100%",
      stats1Label: "Devlet Uyum Garantisi",
      stats2Val: "+9.800",
      stats2Label: "Tamamlanan Vize",
      stats3Val: "3-5 Gün",
      stats3Label: "VIP Hızlı Onay",
    },
    trust: {
      officialSpecs: "Resmi Devlet Portalı Standartları ve Onaylı Evraklar",
      approvedEntity: "Lisanslı Kurumsal Hizmet Sağlayıcı",
      dldPartner: "Dubai Tapu Dairesi (DLD) Uyumlu",
      gdrfaPartner: "GDRFA ve ICP Doğrudan Sistem Entegrasyonu",
      fastProcessing: "Garantili Hızlandırılmış VIP İşlemler",
    },
    calculator: {
      modalTitle: "BAE Golden Visa ve Oturum Hesaplama",
      subtitle: "Resmi devlet harçları ve VIP danışmanlık kalemlerinin anlık dökümü.",
      visaCategory: "Oturum Kategorisi Seçin",
      selectCategory: "Kriterinizi belirleyin",
      categories: {
        investor: "Gayrimenkul Yatırımcısı (10 Yıl)",
        investorDesc: "2.000.000 AED ve üzeri gayrimenkul mülkiyeti",
        executive: "Üst Düzey Yönetici ve Direktör",
        executiveDesc: "Resmi sözleşmeyle aylık en az 30.000 AED maaş",
        talent: "Uzman Yetenekler ve Bilim İnsanları",
        talentDesc: "Doktorlar, mühendisler ve yapay zeka araştırmacıları",
        family: "Aile ve Bağımlı Birey Sponsorluğu",
        familyDesc: "Eş, çocuklar (kız çocuklarında yaş sınırı yok) ve ebeveynler",
      },
      propValue: "Gayrimenkul Değeri (AED)",
      monthlySalary: "Aylık Maaş (AED)",
      dependents: "Bakmakla Yükümlü Kişi Sayısı",
      processingSpeed: "İşlem Hızı",
      standardSpeed: "Standart Süreç (7-10 Gün)",
      vipSpeed: "VIP Hızlı Süreç (48-72 Saat)",
      breakdownTitle: "Ayrıntılı Masraf Tablosu",
      govFee: "Resmi Devlet Harcı (GDRFA / ICP)",
      medicalFitness: "VIP Sağlık Taraması ve Kan Testi",
      emiratesId: "10 Yıllık Biyometrik Emirates ID",
      vipConcierge: "Özel VIP Danışman ve PRO Hizmeti",
      totalEst: "Tahmini Toplam Yatırım",
      instantWhatsapp: "WhatsApp ile İletişime Geç",
      pdfQuote: "Resmi PDF Teklifini İndir",
      legalNote: "Harçlar BAE resmi makamlarınca ilan edilen güncel tarifelere dayanmaktadır.",
    },
    servicesSection: {
      title: "Kapsamlı Vize ve Şirket Kurulum Hizmetleri",
      subtitle: "Golden Visa işlemlerinden Dubai'de anahtar teslim şirket kuruluşuna kadar.",
      residencyTab: "Oturum ve Golden Visa",
      corporateTab: "Şirket Kurulumu ve Serbest Bölgeler",
      legalTab: "Hükümet ve Hukuki PRO",
      exploreDetails: "Şartları İncele",
      calculateFees: "Kesin Ücreti Hesapla",
    },
    roadmap: {
      title: "4 Adımda Kolay Oturum Süreci",
      subtitle: "Sıra beklemeden, gizlilik ve sürat esasıyla tasarlanmış protokol.",
      step1: "1. Uygunluk Denetimi ve Dosya Hazırlığı",
      step1Desc: "Hukukçularımız belgelerinizi inceler ve ön onay sürecini başlatır.",
      step2: "2. ICP / GDRFA Başvurusu",
      step2Desc: "Resmi kanallardan dosya girişi yapılarak giriş izniniz alınır.",
      step3: "3. VIP Sağlık Kontrolü ve Parmak İzi",
      step3Desc: "Sıra beklemeden özel VIP salonunda sağlık testleri tamamlanır.",
      step4: "4. 10 Yıllık Kimlik Kartınızın Teslimi",
      step4Desc: "Fiziki Emirates ID kartınız bizzat adresinize teslim edilir.",
    },
    testimonials: {
      title: "Küresel Yatırımcıların Tercihi",
      subtitle: "Dubai'deki yeni yaşamına bizimle adım atan yöneticilerin deneyimleri.",
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      subtitle: "Golden Visa kriterleri, aile vizeleri ve vergi avantajları hakkında tüm cevaplar.",
    },
    mobileSticky: {
      calcBtn: "Vize Hesaplayıcı",
      whatsappBtn: "WhatsApp VIP",
    },
  },
  ZH: {
    nav: {
      services: "业务领域",
      calculator: "签证计算器",
      benefits: "尊享特权",
      process: "办理流程",
      faq: "常见问题",
      contact: "贵宾服务中心",
      applyNow: "立即申请",
      callExpert: "专属热线",
    },
    hero: {
      badge: "严格遵循阿联酋联邦政府及GDRFA官方审批规范",
      titleLine1: "尊享阿联酋长居身份与",
      titleHighlight: "十年黄金居留签证",
      titleLine2: "顶级海外资产与身份规划",
      subtitle: "面向全球高净值投资人、企业高管及卓越人才的一站式阿联酋尊尚居留办理平台，省去繁冗流程，全程私人礼宾服务。",
      ctaPrimary: "实时计算官方费用",
      ctaSecondary: "浏览核心服务项目",
      stats1Val: "100%",
      stats1Label: "政府合规审批",
      stats2Val: "9,800+",
      stats2Label: "已成功签发黄金签证",
      stats3Val: "3-5个工作日",
      stats3Label: "VIP极速绿色通道",
    },
    trust: {
      officialSpecs: "阿联酋政府直属系统接口与合规公证认证",
      approvedEntity: "阿联酋官方授权持牌企业服务商",
      dldPartner: "迪拜土地局（DLD）官方合作通道",
      gdrfaPartner: "无缝对接移民局GDRFA与联邦ICP系统",
      fastProcessing: "全程尊享VIP免排队极速通道",
    },
    calculator: {
      modalTitle: "阿联酋黄金签证与居留费用实时计算器",
      subtitle: "即时查阅官方政府收费明细与一站式尊崇礼宾代办费用。",
      visaCategory: "选择申请居留途径",
      selectCategory: "请根据您的资质选择对应类别",
      categories: {
        investor: "房产投资者黄金签证（10年）",
        investorDesc: "在阿联酋持有200万迪拉姆及以上产权物业",
        executive: "企业高级管理人员与总监",
        executiveDesc: "经MOHRE劳工部认证月薪达到30,000迪拉姆及以上",
        talent: "杰出人才、科学家与技术专家",
        talentDesc: "医生、人工智能专家、文化体育界杰出人士",
        family: "家庭成员与家属担保",
        familyDesc: "配偶、子女（女儿无年龄限制）及父母共同居留",
      },
      propValue: "房产购置价值（AED 迪拉姆）",
      monthlySalary: "每月核定月薪（AED 迪拉姆）",
      dependents: "随行家属成员数量",
      processingSpeed: "审批时效与优先级",
      standardSpeed: "标准政务通道（7-10个工作日）",
      vipSpeed: "VIP极速专属绿色通道（48-72小时）",
      breakdownTitle: "官方费用分项明细清单",
      govFee: "GDRFA / ICP 联邦官方行政规费",
      medicalFitness: "VIP专人陪同快速体检及血液筛查",
      emiratesId: "十年期生物识别 Emirates ID 居留证",
      vipConcierge: "专属案件高级顾问全程一站式服务",
      totalEst: "预估总费用支出",
      instantWhatsapp: "通过 WhatsApp 专属客服咨询",
      pdfQuote: "导出官方正式 PDF 报价单",
      legalNote: "所有预估费用严格基于阿联酋联邦ICP与移民局最新公示规费标准计算。",
    },
    servicesSection: {
      title: "阿联酋全方位长居身份与企业落地解决方案",
      subtitle: "从10年黄金签证直通车到迪拜本土与自由区公司一站式搭建，全程持牌专家护航。",
      residencyTab: "居留身份与黄金签证",
      corporateTab: "迪拜公司设立与自贸区牌照",
      legalTab: "官方政务审批与法务PRO",
      exploreDetails: "查阅办理条件",
      calculateFees: "测算准确费用",
    },
    roadmap: {
      title: "尊贵无忧的4步获签流程",
      subtitle: "为您量身定制的私密高效通道，告别繁琐流程与漫长等待。",
      step1: "1. 资质合规预审与材料归集",
      step1Desc: "资深法务专家对您的房产契税、资金流或劳动合同进行审核，确保100%通过。",
      step2: "2. 官方系统预批与入境许可签发",
      step2Desc: "直接递交联邦系统获取政府官方预审批函与换发入境许可。",
      step3: "3. VIP贵宾厅极速体检与指纹录入",
      step3Desc: "专车接送至高端独立体检贵宾室，免排队快速完成血液与生物信息采集。",
      step4: "4. 十年期 Emirates ID 居留卡递送",
      step4Desc: "印制完成的10年黄金签证芯片卡直接专人递送至您的指定住址或酒店。",
    },
    testimonials: {
      title: "全球投资家与商业精英的卓越之选",
      subtitle: "聆听众多跨国企业高管与高净值家族在阿联酋的圆满落地心得。",
    },
    faq: {
      title: "高频权威问题解答",
      subtitle: "深度剖析黄金签证准入门槛、家庭连带身份及离岸财税架构优势。",
    },
    mobileSticky: {
      calcBtn: "签证计算器",
      whatsappBtn: "WhatsApp VIP",
    },
  },
};

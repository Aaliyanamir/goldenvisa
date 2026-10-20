import type { LocaleCode } from '@/lib/locales';
import { localeCodes, localeLanguages } from '@/lib/locales';
import { registerLocalizedCopy } from '@/lib/localizedCopyRegistry';

export interface SeoMetadataItem {
  title: string;
  description: string;
  keywords?: string;
}

export const homeSeoContent: Record<LocaleCode, SeoMetadataItem> = {
  en: {
    title: 'Golden Visa Dubai | UAE Residency & Professional Services',
    description: 'Golden Visa Dubai supports UAE residency applications, family visas, property visas, and professional services.',
    keywords: 'UAE Golden Visa, Dubai Golden Visa 2026, 10 year residency UAE, GDRFA, DLD, real estate investor visa, UAE long term residency',
  },
  ar: {
    title: 'التأشيرة الذهبية في دبي | الإقامة والخدمات المهنية في الإمارات',
    description: 'تقدم Golden Visa Dubai الدعم لطلبات الإقامة في الإمارات وتأشيرات العائلات والعقارات والخدمات المهنية.',
    keywords: 'الإقامة الذهبية دبي, فيزا دبي 10 سنوات, إقامة المستثمر العقاري, الهيئة الاتحادية للهوية والجنسية, تأشيرة الإمارات',
  },
  ru: {
    title: 'Золотая виза Дубая | Резидентство и профессиональные услуги в ОАЭ',
    description: 'Golden Visa Dubai помогает с оформлением резидентства ОАЭ, семейных и имущественных виз, а также профессиональных услуг.',
    keywords: 'Золотая виза Дубай, ВНЖ ОАЭ на 10 лет, виза инвестора в недвижимость Дубая, резидентская виза ОАЭ',
  },
  de: {
    title: 'Golden Visa Dubai | Aufenthalt und professionelle Dienstleistungen in den VAE',
    description: 'Golden Visa Dubai unterstützt bei Aufenthaltsanträgen, Familien- und Immobilienvisa sowie professionellen Dienstleistungen in den VAE.',
    keywords: 'Golden Visa Dubai, VAE 10-Jahres-Visum, Investorenvisum Dubai, Aufenthaltsgenehmigung VAE',
  },
  es: {
    title: 'Golden Visa Dubái | Residencia y servicios profesionales en los EAU',
    description: 'Golden Visa Dubai ofrece asistencia con solicitudes de residencia, visados familiares y de propiedad, y servicios profesionales en los EAU.',
    keywords: 'Golden Visa Dubái, residencia en EAU 10 años, visado de inversor inmobiliario Dubái, visados familiares EAU',
  },
  fr: {
    title: 'Golden Visa Dubaï | Résidence et services professionnels aux EAU',
    description: 'Golden Visa Dubai accompagne les demandes de résidence aux EAU, les visas familiaux et immobiliers, ainsi que les services professionnels.',
    keywords: 'Golden Visa Dubaï, visa 10 ans Émirats, résidence investisseur Dubaï, visa familial Émirats arabes unis',
  },
  tr: {
    title: 'Dubai Golden Visa | BAE Oturum ve Profesyonel Hizmetleri',
    description: 'Golden Visa Dubai; BAE oturum başvuruları, aile ve gayrimenkul vizeleri ile profesyonel hizmetler konusunda destek sağlar.',
    keywords: 'Dubai Golden Visa, BAE 10 yıllık oturum, Dubai gayrimenkul yatırımcı vizesi, Dubai aile vizesi',
  },
  zh: {
    title: '迪拜黄金签证｜阿联酋居留与专业服务',
    description: 'Golden Visa Dubai 为阿联酋居留申请、家庭签证、房产签证及专业服务提供支持。',
    keywords: '迪拜黄金签证, 阿联酋10年长居签证, 迪拜房产投资签证, 阿联酋家属签证, 迪拜绿卡',
  },
};

export const routeSeoContent: Record<string, Record<LocaleCode, SeoMetadataItem>> = {
  '/': homeSeoContent,
  '/about': {
    en: {
      title: 'About Us | Golden Visa Dubai Consultancy',
      description: 'Learn about Golden Visa Dubai, our licensed immigration advisory team, and our commitment to seamless UAE residency.',
    },
    ar: {
      title: 'من نحن | استشارات التأشيرة الذهبية في دبي',
      description: 'تعرف على Golden Visa Dubai وفريق الاستشارات المعتمد وخدماتنا الموثوقة للإقامة في دولة الإمارات.',
    },
    ru: {
      title: 'О нас | Консалтинг по Золотой визе в Дубае',
      description: 'Узнайте о Golden Visa Dubai, нашей лицензированной команде экспертов и комплексной поддержке при получении резидентства ОАЭ.',
    },
    de: {
      title: 'Über uns | Golden Visa Dubai Beratung',
      description: 'Erfahren Sie mehr über Golden Visa Dubai, unser lizenziertes Beraterteam und unsere Betreuung für Ihren VAE-Aufenthalt.',
    },
    es: {
      title: 'Sobre nosotros | Consultoría Golden Visa Dubái',
      description: 'Conozca Golden Visa Dubai, nuestro equipo de consultores licenciados y nuestro compromiso con su residencia en los EAU.',
    },
    fr: {
      title: 'À propos de nous | Conseil Golden Visa Dubaï',
      description: 'Découvrez Golden Visa Dubai, notre équipe de conseillers certifiés et notre engagement pour votre résidence aux EAU.',
    },
    tr: {
      title: 'Hakkımızda | Dubai Golden Visa Danışmanlığı',
      description: 'Golden Visa Dubai, lisanslı uzman kadromuz ve BAE oturum süreçlerindeki profesyonel hizmetlerimiz hakkında bilgi edinin.',
    },
    zh: {
      title: '关于我们｜迪拜黄金签证专业顾问',
      description: '了解 Golden Visa Dubai 团队，我们拥有正规执照的移民顾问为您的阿联酋居留办理保驾护航。',
    },
  },
  '/career': {
    en: {
      title: 'Careers | Join Golden Visa Dubai Team',
      description: 'Explore career opportunities at Golden Visa Dubai and build your future in premier immigration and corporate services.',
    },
    ar: {
      title: 'الوظائف | انضم إلى فريق التأشيرة الذهبية في دبي',
      description: 'استكشف الفرص الوظيفية في Golden Visa Dubai وابنِ مستقبلك في مجال خدمات الإقامة والاستشارات المؤسسية.',
    },
    ru: {
      title: 'Карьера | Присоединяйтесь к команде Golden Visa Dubai',
      description: 'Откройте для себя возможности карьеры в Golden Visa Dubai в сфере иммиграционных и корпоративных услуг ОАЭ.',
    },
    de: {
      title: 'Karriere | Werden Sie Teil des Golden Visa Dubai Teams',
      description: 'Entdecken Sie Karrieremöglichkeiten bei Golden Visa Dubai und wachsen Sie in führenden Einwanderungs- und Unternehmensdienstleistungen.',
    },
    es: {
      title: 'Empleo | Únete al equipo de Golden Visa Dubái',
      description: 'Explore oportunidades laborales en Golden Visa Dubai y desarrolle su carrera en servicios de residencia corporativa.',
    },
    fr: {
      title: 'Carrières | Rejoignez l’équipe Golden Visa Dubaï',
      description: 'Découvrez les opportunités d’emploi chez Golden Visa Dubai et développez votre carrière dans les services d’immigration haut de gamme.',
    },
    tr: {
      title: 'Kariyer | Dubai Golden Visa Ekibine Katılın',
      description: 'Golden Visa Dubai bünyesindeki kariyer fırsatlarını inceleyin ve prestijli danışmanlık sektöründe yerinizi alın.',
    },
    zh: {
      title: '招贤纳士｜加入迪拜黄金签证团队',
      description: '探索 Golden Visa Dubai 的职位机会，在阿联酋领先的移民与企业服务领域开创美好未来。',
    },
  },
  '/contact-us': {
    en: {
      title: 'Contact Us | Golden Visa Dubai Office & Hotline',
      description: 'Get in touch with Golden Visa Dubai advisors in Business Bay. Fast WhatsApp consultation, phone hotline, and in-person meetings.',
    },
    ar: {
      title: 'اتصل بنا | مكتب وخط استشارات التأشيرة الذهبية دبي',
      description: 'تواصل مع مستشاري التأشيرة الذهبية في الخليج التجاري بدبي. استشارات عبر الواتساب والمكالمات والزيارات المكتبية.',
    },
    ru: {
      title: 'Контакты | Офис и горячая линия Golden Visa Dubai',
      description: 'Свяжитесь с консультантами Golden Visa Dubai в Бизнес-Бэй. Консультации в WhatsApp, по телефону и личные встречи в офисе.',
    },
    de: {
      title: 'Kontakt | Büro und Hotline Golden Visa Dubai',
      description: 'Kontaktieren Sie unsere Berater in Business Bay, Dubai. Schnelle WhatsApp-Beratung, Hotline und persönliche Termine.',
    },
    es: {
      title: 'Contacto | Oficina y Asesoría Golden Visa Dubái',
      description: 'Póngase en contacto con los asesores de Golden Visa Dubai en Business Bay. Atención rápida por WhatsApp, teléfono y reuniones presenciales.',
    },
    fr: {
      title: 'Contactez-nous | Bureau & Assistance Golden Visa Dubaï',
      description: 'Contactez les conseillers Golden Visa Dubai à Business Bay. Consultation rapide sur WhatsApp, par téléphone et rendez-vous au bureau.',
    },
    tr: {
      title: 'İletişim | Dubai Golden Visa Ofis ve Destek Hattı',
      description: 'Business Bay Dubai ofisimizdeki danışmanlarımızla iletişime geçin. WhatsApp, telefon ve yüz yüze randevu imkanları.',
    },
    zh: {
      title: '联系我们｜迪拜黄金签证办公室与咨询热线',
      description: '联系位于迪拜商务港（Business Bay）的专业顾问。支持 WhatsApp 即时咨询、电话专线及到店面谈。',
    },
  },
  '/blog': {
    en: {
      title: 'Articles & UAE Insights | Golden Visa Dubai',
      description: 'Guides and updates on UAE residency, property visas, business services and document procedures.',
    },
    ar: {
      title: 'المقالات والأدلة الرسمية | التأشيرة الذهبية في دبي',
      description: 'أحدث التحديثات والأدلة القانونية حول الإقامة في الإمارات، تأشيرة العقار، والخدمات الحكومية وتوثيق المستندات.',
    },
    ru: {
      title: 'Статьи и гиды по ОАЭ | Golden Visa Dubai',
      description: 'Актуальные руководства и новости о резидентстве в ОАЭ, визах на недвижимость, бизнесе и оформлении документов.',
    },
    de: {
      title: 'Artikel & VAE Leitfäden | Golden Visa Dubai',
      description: 'Aktuelle Ratgeber und Neuigkeiten zu VAE-Aufenthalt, Immobilienvisa, Unternehmensgründung und Beglaubigungen.',
    },
    es: {
      title: 'Artículos y Guías sobre EAU | Golden Visa Dubái',
      description: 'Guías y novedades sobre residencia en los EAU, visados de propiedad, servicios corporativos y trámites legales.',
    },
    fr: {
      title: 'Articles & Conseils EAU | Golden Visa Dubaï',
      description: 'Guides et actualités sur la résidence aux EAU, les visas immobiliers, les affaires et les formalités officielles.',
    },
    tr: {
      title: 'Makaleler ve BAE Rehberleri | Dubai Golden Visa',
      description: 'BAE oturum izinleri, gayrimenkul vizeleri, şirket işlemleri ve resmi evrak süreçleri hakkında kapsamlı bilgiler.',
    },
    zh: {
      title: '文章与指南｜迪拜黄金签证最新资讯',
      description: '关于阿联酋长期居留、房产买家签证、企业服务及官方文件认证的权威指南与行业分析。',
    },
  },
  '/golden-visa': {
    en: {
      title: 'UAE Golden Visa 10-Year Residency | Golden Visa Dubai',
      description: 'Complete guidance for Dubai 10-Year Golden Visa for real estate investors, entrepreneurs, executives, and skilled professionals.',
    },
    ar: {
      title: 'التأشيرة الذهبية في الإمارات 10 سنوات | دبي',
      description: 'دليل شامل للحصول على الإقامة الذهبية لمدة 10 سنوات للمستثمرين العقاريين ورواد الأعمال والمدراء التنفيذيين والموهوبين.',
    },
    ru: {
      title: 'Золотая виза в ОАЭ на 10 лет | Golden Visa Dubai',
      description: 'Полное сопровождение получения 10-летней Золотой визы в Дубае для инвесторов в недвижимость, предпринимателей и специалистов.',
    },
    de: {
      title: 'UAE Golden Visa 10-Jahre Aufenthaltsvisum | Dubai',
      description: 'Umfassende Unterstützung für das 10-jährige Goldene Visum in Dubai für Immobilieninvestoren, Unternehmer und Fachkräfte.',
    },
    es: {
      title: 'Golden Visa EAU Residencia de 10 Años | Dubái',
      description: 'Asesoramiento integral para la Golden Visa de 10 años en Dubái para inversores inmobiliarios, ejecutivos y profesionales.',
    },
    fr: {
      title: 'Golden Visa EAU Résidence 10 Ans | Dubaï',
      description: 'Accompagnement complet pour l’obtention du Golden Visa de 10 ans à Dubaï pour investisseurs, entrepreneurs et cadres qualifiés.',
    },
    tr: {
      title: 'BAE 10 Yıllık Golden Visa Oturum İzni | Dubai',
      description: 'Gayrimenkul yatırımcıları, girişimciler ve üst düzey yöneticiler için 10 yıllık Dubai Golden Visa danışmanlık hizmeti.',
    },
    zh: {
      title: '阿联酋10年黄金签证居留办理｜迪拜黄金签证',
      description: '为房产投资者、企业家、企业高管及专业技术人才提供阿联酋10年长期居留黄金签证一站式申请支持。',
    },
  },
  '/property-visa': {
    en: {
      title: 'Dubai Property Investor Visa (2 & 10 Year) | Golden Visa Dubai',
      description: 'Compare Dubai property investor and Golden Visa routes, check DLD document requirements, and get a clear application guide.',
    },
    ar: {
      title: 'تأشيرة المستثمر العقاري في دبي (سنتان و10 سنوات) | الإقامة الذهبية',
      description: 'قارن بين مسارات تأشيرة العقار والإقامة الذهبية، وتعرف على شروط دائرة الأراضي والأملاك في دبي (DLD).',
    },
    ru: {
      title: 'Виза инвестора в недвижимость Дубая (2 и 10 лет) | ОАЭ',
      description: 'Сравнение виз за покупку недвижимости, требования Земельного департамента Дубая (DLD) и помощь в оформлении.',
    },
    de: {
      title: 'Immobilienvisum Dubai (2 & 10 Jahre) | Golden Visa',
      description: 'Vergleichen Sie Immobilien- und Golden Visa-Optionen in Dubai und prüfen Sie DLD-Voraussetzungen.',
    },
    es: {
      title: 'Visado de Inversor Inmobiliario en Dubái | Golden Visa',
      description: 'Compare las opciones de visado por propiedad en Dubái, requisitos del DLD y asesoría completa para inversores.',
    },
    fr: {
      title: 'Visa Immobilier Dubaï (2 & 10 Ans) | Golden Visa',
      description: 'Découvrez les démarches de visa pour investisseurs immobiliers à Dubaï et les exigences du Dubai Land Department (DLD).',
    },
    tr: {
      title: 'Dubai Gayrimenkul Yatırımcı Vizesi (2 ve 10 Yıl) | BAE',
      description: 'Dubai mülk yatırımı ile oturum izni, DLD evrak gereksinimleri ve başvuru süreçlerinde tam destek.',
    },
    zh: {
      title: '迪拜房产投资居留签证（2年与10年黄金签证）｜置业移民',
      description: '对比迪拜房产投资者签证与黄金签证路径，明确迪拜土地局（DLD）审批条件及文件准备流程。',
    },
  },
  '/family-visa': {
    en: {
      title: 'UAE Family Visa & Dependent Sponsorship | Golden Visa Dubai',
      description: 'Sponsor your spouse, children, and parents in the UAE. Complete guidance on salary requirements, attestation, and Emirates ID.',
    },
    ar: {
      title: 'تأشيرة الأسرة وكفالة العائلة في الإمارات | دبي',
      description: 'كفالة الزوجة والأبناء والوالدين في الإمارات. إرشادات شاملة حول متطلبات الراتب وتوثيق الشهادات وتأشيرة الإقامة.',
    },
    ru: {
      title: 'Семейная виза в ОАЭ и спонсорство родных | Дубай',
      description: 'Спонсорство супругов, детей и родителей в ОАЭ. Требования к доходу, легализация документов и получение Emirates ID.',
    },
    de: {
      title: 'Familienvisum VAE & Angehörigenförderung | Dubai',
      description: 'Sponsoring für Ehepartner, Kinder und Eltern in den VAE. Gehaltskriterien, Dokumentenbeglaubigung und Ablauf.',
    },
    es: {
      title: 'Visado Familiar en EAU y Patrocinio de Dependientes | Dubái',
      description: 'Patrocine a su cónyuge, hijos y padres en los EAU. Requisitos de ingresos, legalización y tramitación completa.',
    },
    fr: {
      title: 'Visa Familial EAU & Parrainage des Proches | Dubaï',
      description: 'Parrainez conjoint, enfants et parents aux Émirats. Exigences de salaire, légalisation et démarches simples.',
    },
    tr: {
      title: 'BAE Aile Vizesi ve Sponsorluk İşlemleri | Dubai',
      description: 'Eş, çocuk ve ebeveynler için BAE aile vizesi başvurusu, maaş kriterleri ve evrak tasdik işlemleri.',
    },
    zh: {
      title: '阿联酋家属居留签证与亲属担保办理｜迪拜家庭签',
      description: '为配偶、子女及父母担保阿联酋居留签证，提供薪资标准说明、结婚证出生公证双认证及居留签一揽子办理。',
    },
  },
  '/maid-visa': {
    en: {
      title: 'Maid Visa & Domestic Worker Sponsorship UAE | Golden Visa Dubai',
      description: 'Step-by-step guidance for sponsoring domestic helpers, nannies, and maids in Dubai under Tadbeer and MOHRE regulations.',
    },
    ar: {
      title: 'تأشيرة المساعدين المنزليين والعمالة المساعدة | دبي',
      description: 'كفالة مدبرات المنازل والمربيات في دبي وفق اشتراطات مراكز تدبير ووزارة الموارد البشرية والتوطين.',
    },
    ru: {
      title: 'Виза для домашнего персонала и нянь в ОАЭ | Дубай',
      description: 'Оформление виз для домработниц, нянь и домашнего персонала в Дубае через центры Tadbeer и MOHRE.',
    },
    de: {
      title: 'Visum für Haushaltshilfen in den VAE | Dubai',
      description: 'Sponsoring von Haushaltshilfen, Kindermädchen und Pflegekräften nach Tadbeer- und MOHRE-Vorgaben.',
    },
    es: {
      title: 'Visado para Empleadas del Hogar en EAU | Dubái',
      description: 'Gestión y patrocinio de empleadas domésticas y niñeras en Dubái bajo normativas de Tadbeer y MOHRE.',
    },
    fr: {
      title: 'Visa Employé de Maison & Nounou aux EAU | Dubaï',
      description: 'Parrainage d’aides familiales, nourrices et employés de maison à Dubaï via les normes Tadbeer et MOHRE.',
    },
    tr: {
      title: 'BAE Ev Hizmetlisi ve Bakıcı Vizesi | Dubai Tadbeer',
      description: 'Dubai’de yardımcı, dadı ve ev personeli istihdamı için Tadbeer ve MOHRE mevzuatına uygun vize danışmanlığı.',
    },
    zh: {
      title: '迪拜保姆与家庭雇工签证担保｜Tadbeer办理指南',
      description: '在迪拜为保姆、家政月嫂及家务佣工合法办理阿联酋工作签证，遵循 Tadbeer 和 MOHRE 最新监管政策。',
    },
  },
  '/new-born': {
    en: {
      title: 'Newborn Visa & Emirates ID in UAE | Golden Visa Dubai',
      description: 'Complete newborn residency processing in Dubai: birth certificate attestation, passport issuance, visa stamping, and Emirates ID.',
    },
    ar: {
      title: 'تأشيرة المواليد الجدد وبطاقة الهوية | دبي الإمارات',
      description: 'إجراءات إقامة المواليد الجدد في دبي: تصديق شهادة الميلاد، إصدار جواز السفر، تثبيت الإقامة والهوية الإماراتية.',
    },
    ru: {
      title: 'Виза и Emirates ID для новорожденных в ОАЭ | Дубай',
      description: 'Оформление резидентства новорожденных в Дубае: легализация свидетельства о рождении, виза и получение Emirates ID.',
    },
    de: {
      title: 'Aufenthaltsvisum für Neugeborene in den VAE | Dubai',
      description: 'Visum und Emirates ID für Neugeborene in Dubai: Geburtsurkundenbeglaubigung, Pass und Residenzantrag.',
    },
    es: {
      title: 'Visado de Recién Nacido y Emirates ID en EAU | Dubái',
      description: 'Trámite de residencia para recién nacidos en Dubái: legalización de partida de nacimiento y emisión de Emirates ID.',
    },
    fr: {
      title: 'Visa Nouveau-Né & Emirates ID aux EAU | Dubaï',
      description: 'Formalités de visa pour nouveau-nés à Dubaï : attestation d’acte de naissance, visa de résidence et Emirates ID.',
    },
    tr: {
      title: 'BAE Yeni Doğan Bebek Vizesi ve Emirates ID | Dubai',
      description: 'Dubai’de yeni doğan bebeklerin doğum belgesi tasdiki, pasaport, vize ve Emirates ID başvuru adımları.',
    },
    zh: {
      title: '阿联酋新生儿居留签证与阿联酋身份证办理｜迪拜',
      description: '为迪拜出生的宝宝办理全套居留手续：出生证明认证、签证印花及阿联酋身份证（Emirates ID）办理。',
    },
  },
  '/emirates-id': {
    en: {
      title: 'Emirates ID Application & Renewal Services | Golden Visa Dubai',
      description: 'Fast-track Emirates ID registration, biometrics scheduling, data amendment, and urgent renewal assistance in Dubai.',
    },
    ar: {
      title: 'خدمات إصدار وتجديد الهوية الإماراتية | دبي',
      description: 'خدمات سريعة لتسجيل الهوية الإماراتية، حجز مواعيد البصمة، تعديل البيانات وتجديد الهوية العاجل في دبي.',
    },
    ru: {
      title: 'Оформление и продление Emirates ID в ОАЭ | Дубай',
      description: 'Быстрая подача на Emirates ID, запись на биометрию, изменение данных и срочное продление карты в Дубае.',
    },
    de: {
      title: 'Emirates ID Beantragung & Verlängerung | Dubai',
      description: 'Schnelle Beantragung der Emirates ID, Terminvereinbarung für Biometrie, Datenänderungen und Verlängerung.',
    },
    es: {
      title: 'Solicitud y Renovación de Emirates ID | Dubái',
      description: 'Registro de Emirates ID, citas de biometría, corrección de datos y renovación urgente en los EAU.',
    },
    fr: {
      title: 'Demande & Renouvellement Emirates ID | Dubaï',
      description: 'Assistance pour inscription Emirates ID, prise de rendez-vous biométrique et renouvellement rapide à Dubaï.',
    },
    tr: {
      title: 'Emirates ID Başvuru ve Yenileme Hizmetleri | Dubai',
      description: 'Hızlı Emirates ID başvurusu, biyometri randevuları, bilgi güncelleme ve acil kimlik yenileme desteği.',
    },
    zh: {
      title: '阿联酋身份证（Emirates ID）新办与续签服务｜迪拜',
      description: '提供加急阿联酋身份证申请、生物识别指纹预约、个人信息变更及到期快捷换卡服务。',
    },
  },
  '/dld-trustee-services': {
    en: {
      title: 'DLD Trustee Services & Property Registration | Golden Visa Dubai',
      description: 'Licensed Dubai Land Department (DLD) registration trustee support for property transfers, mortgages, and title deed updates.',
    },
    ar: {
      title: 'خدمات أمين التسجيل العقاري (DLD) | دبي',
      description: 'خدمات معتمدة من دائرة الأراضي والأملاك لنقل الملكيات العقارية، الرهن العقاري، وإصدار شهادات سند الملكية.',
    },
    ru: {
      title: 'Услуги регистрационного трасти DLD в Дубае | Недвижимость',
      description: 'Регистрация сделок с недвижимостью, ипотек и получение титулов собственности (Title Deed) через трасти DLD.',
    },
    de: {
      title: 'DLD Treuhänderdienste & Grundbucheintragung | Dubai',
      description: 'Offizielle DLD-Treuhänderdienste für Eigentumsübertragungen, Hypotheken und Urkundenausstellung in Dubai.',
    },
    es: {
      title: 'Servicios de Fiduciario DLD y Registro de Propiedad | Dubái',
      description: 'Gestión ante el Dubai Land Department para traspaso de inmuebles, hipotecas y actualización de escrituras.',
    },
    fr: {
      title: 'Services Fiduciaires DLD & Enregistrement Immobilier | Dubaï',
      description: 'Accompagnement auprès du Dubai Land Department pour transferts de propriété, hypothèques et titres fonciers.',
    },
    tr: {
      title: 'Dubai Tapu Dairesi (DLD) Mütevelli Hizmetleri | Mülk Devri',
      description: 'DLD onaylı tapu devri, ipotek tescili ve mülkiyet belgesi (Title Deed) işlemleri için uzman danışmanlık.',
    },
    zh: {
      title: '迪拜土地局（DLD）信托代理与房产过户服务｜产权变更',
      description: '官方认可的迪拜土地局信托注册代办，专业处理房屋过户、抵押贷款登记与不动产权属证明（Title Deed）申请。',
    },
  },
  '/property-revaluation': {
    en: {
      title: 'Dubai Property Revaluation Certificate for Golden Visa | DLD',
      description: 'Obtain an official DLD Property Valuation Certificate to qualify for the 10-Year Golden Visa with AED 2M+ real estate.',
    },
    ar: {
      title: 'شهادة تقييم العقار للإقامة الذهبية في دبي | DLD',
      description: 'إصدار شهادة تقييم رسمي من دائرة الأراضي والأملاك لتأهيل العقارات بقيمة 2 مليون درهم فما فوق للتأشيرة الذهبية.',
    },
    ru: {
      title: 'Оценка недвижимости для Золотой визы в Дубае | DLD',
      description: 'Получение официального сертификата оценки DLD для подтверждения стоимости от 2 млн дирхамов для Золотой визы.',
    },
    de: {
      title: 'Immobilienbewertungszertifikat für Golden Visa Dubai | DLD',
      description: 'Offizielles DLD-Bewertungszertifikat für Immobilien ab 2 Mio. AED zur Beantragung des 10-jährigen Golden Visa.',
    },
    es: {
      title: 'Certificado de Tasación de Propiedad para Golden Visa | Dubái',
      description: 'Obtención de tasación oficial del DLD para inmuebles de 2M+ AED para calificar a la Golden Visa de 10 años.',
    },
    fr: {
      title: 'Certificat d’Évaluation Immobilière pour Golden Visa | Dubaï',
      description: 'Obtention du certificat officiel d’évaluation du DLD pour les biens de 2M AED et plus pour le Golden Visa.',
    },
    tr: {
      title: 'Dubai Golden Visa Gayrimenkul Değerleme Raporu | DLD',
      description: '10 yıllık Golden Visa başvurusu için DLD onaylı 2 Milyon AED ve üzeri resmi gayrimenkul değerleme belgesi.',
    },
    zh: {
      title: '迪拜房产重新估价报告（DLD官方认证）｜黄金签证200万门槛',
      description: '代办迪拜土地局官方房产价值评估证书，助力资产达200万迪拉姆的业主顺利取得10年黄金签证。',
    },
  },
  '/pro-services': {
    en: {
      title: 'Corporate PRO Services Dubai & Government Liaison | UAE',
      description: 'Dedicated PRO and corporate services in Dubai: trade license renewal, immigration approvals, labor quotas, and MOFA.',
    },
    ar: {
      title: 'خدمات التعقيب والعلاقات الحكومية للشركات (PRO) | دبي',
      description: 'خدمات PRO متكاملة للشركات: تجديد الرخص التجارية، الموافقات الحكومية، كوتا العمل وتصديقات وزارة الخارجية.',
    },
    ru: {
      title: 'Корпоративные PRO услуги в Дубае | Взаимодействие с госструктурами',
      description: 'Комплексные PRO услуги: продление лицензий, оформление квот MOHRE, иммиграция и взаимодействие с ведомствами ОАЭ.',
    },
    de: {
      title: 'Corporate PRO Dienstleistungen & Behördenservice | Dubai',
      description: 'Zuverlässiger Behördenservice für Unternehmen: Gewerbelizenzverlängerung, Arbeitsministeriumsquoten und Visa.',
    },
    es: {
      title: 'Servicios PRO Corporativos en Dubái | Enlace Gubernamental',
      description: 'Servicios integrales para empresas: renovación de licencias comerciales, visados de empleados y trámites ministeriales.',
    },
    fr: {
      title: 'Services PRO d’Entreprise à Dubaï | Relations Gouvernementales',
      description: 'Gestion administrative d’entreprise à Dubaï : renouvellement de licence, quotas de travail et visas employés.',
    },
    tr: {
      title: 'Dubai Şirket PRO ve Resmi Daire İşlemleri | Kurumsal Danışmanlık',
      description: 'Dubai’de ticari lisans yenileme, çalışma izinleri, bakanlık onayları ve kurumsal PRO hizmetleri.',
    },
    zh: {
      title: '迪拜企业公共关系（PRO）代办与政府审批服务｜阿联酋外联',
      description: '为阿联酋企业提供全链条 PRO 事务服务：商业营业执照年审、劳工局名额配额申请、外事部审批与行政代办。',
    },
  },
  '/attestation': {
    en: {
      title: 'Certificate & Document Attestation UAE | MOFA & Embassy Stamping',
      description: 'Fast legal document attestation for birth, marriage, and educational degrees through MOFA UAE, embassies, and consulates.',
    },
    ar: {
      title: 'تصديق الشهادات والوثائق الرسمية في الإمارات | وزارة الخارجية',
      description: 'خدمات تصديق الشهادات التعليمية وعقود الزواج وشهادات الميلاد عبر وزارة الخارجية والسفارات والقنصليات.',
    },
    ru: {
      title: 'Легализация и аттестация документов в ОАЭ | МИД (MOFA)',
      description: 'Быстрая легализация дипломов, свидетельств о рождении и браке через консульства и Министерство иностранных дел ОАЭ.',
    },
    de: {
      title: 'Urkundenbeglaubigung VAE | MOFA & Botschaftslegalisierung',
      description: 'Anerkennung von Bildungsnachweisen, Geburts- und Heiratsurkunden durch MOFA VAE und Botschaften.',
    },
    es: {
      title: 'Apostilla y Legalización de Documentos en EAU | MOFA',
      description: 'Legalización de títulos universitarios, partidas de nacimiento y actas de matrimonio ante el MOFA y embajadas en los EAU.',
    },
    fr: {
      title: 'Légalisation & Attestation de Documents aux EAU | MOFA',
      description: 'Certification de diplômes, actes de mariage et de naissance auprès du MOFA et des consulats à Dubaï.',
    },
    tr: {
      title: 'BAE Belge Tasdik ve Apostil Hizmetleri | Dışişleri Bakanlığı (MOFA)',
      description: 'Diploma, evlilik ve doğum belgelerinin BAE Dışişleri Bakanlığı ve konsolosluklar nezdinde tasdiki.',
    },
    zh: {
      title: '阿联酋官方文件认证与双认证代办｜阿联酋外交部（MOFA）',
      description: '加急办理学历学位证书、结婚证、出生公证书的驻华使领馆认证及阿联酋外交部海牙认证。',
    },
  },
  '/legal-translation': {
    en: {
      title: 'Certified Legal Translation Dubai | Ministry of Justice Approved',
      description: 'Official Arabic, English, and multilingual legal translations approved by the UAE Ministry of Justice (MOJ) for courts and visas.',
    },
    ar: {
      title: 'ترجمة قانونية معتمدة في دبي | وزارة العدل الإماراتية',
      description: 'ترجمة قانونية معتمدة للغة العربية والإنجليزية من وزارة العدل لمحاكم دبي ومعاملات الإقامة والجهات الرسمية.',
    },
    ru: {
      title: 'Сертифицированный юридический перевод в Дубае | Минюст ОАЭ',
      description: 'Официальный перевод документов на арабский и английский, заверенный Министерством юстиции ОАЭ для судов и виз.',
    },
    de: {
      title: 'Beglaubigte juristische Übersetzungen in Dubai | Justizministerium',
      description: 'Vom Justizministerium der VAE anerkannte Übersetzungen ins Arabische und Englische für Gerichte und Behörden.',
    },
    es: {
      title: 'Traducción Jurada Oficial en Dubái | Ministerio de Justicia EAU',
      description: 'Traducciones certificadas al árabe e inglés aprobadas por el Ministerio de Justicia para trámites oficiales y visados.',
    },
    fr: {
      title: 'Traduction Juridique Certifiée à Dubaï | Ministère de la Justice',
      description: 'Traductions officielles assermentées en arabe et en anglais agréées par le ministère de la Justice des EAU.',
    },
    tr: {
      title: 'Dubai Yeminli Hukuki Tercüme | BAE Adalet Bakanlığı Onaylı',
      description: 'Mahkemeler, vize başvuruları ve resmi kurumlar için Adalet Bakanlığı onaylı Arapça ve İngilizce yeminli tercüme.',
    },
    zh: {
      title: '迪拜官方认证法律翻译服务｜阿联酋司法部（MOJ）认可',
      description: '提供经阿联酋司法部资质认证的阿语、英语及多语种法律翻译，通行于阿联酋法院、公证处及移民局。',
    },
  },
  '/poa': {
    en: {
      title: 'Power of Attorney (POA) Dubai & UAE Legal Drafting Services',
      description: 'Drafting and online notarization of General and Special Powers of Attorney for real estate, vehicle, and company management in UAE.',
    },
    ar: {
      title: 'خدمات التوكيل الرسمي وتوثيق الوكالات القانونية في دبي (POA)',
      description: 'صياغة وتوثيق الوكالات العامة والخاصة إلكترونياً لإدارة العقارات والسيارات والأعمال لدى كاتب العدل في دبي.',
    },
    ru: {
      title: 'Оформление доверенности (POA) в Дубае | Нотариальные услуги ОАЭ',
      description: 'Составление и онлайн-заверение генеральных и специальных доверенностей на недвижимость, авто и бизнес в Дубае.',
    },
    de: {
      title: 'Vollmachten (POA) in Dubai & VAE | Notarielle Beglaubigung',
      description: 'Erstellung und digitale Beurkundung von General- und Spezialvollmachten für Immobilien und Unternehmen.',
    },
    es: {
      title: 'Poder Notarial (POA) en Dubái | Redacción y Notarización en EAU',
      description: 'Redacción y firma notarial de poderes generales y especiales para compraventa inmobiliaria y gestión empresarial.',
    },
    fr: {
      title: 'Procuration Légale (POA) à Dubaï | Notarisation en Ligne',
      description: 'Rédaction et homologation de procurations générales et spéciales pour gestion immobilière et commerciale aux EAU.',
    },
    tr: {
      title: 'Dubai Vekaletname (POA) Hazırlama ve Noter Tasdiki | BAE',
      description: 'Mülk alım satımı, araç ve şirket yönetimi için Dubai’de genel ve özel vekaletname tanzimi ve online noter onayı.',
    },
    zh: {
      title: '迪拜委托书（POA）起草与公证处认证代办｜阿联酋授权委托',
      description: '专业起草与线上公证房产买卖委托书、车辆处置委托书及公司股权管理综合授权书。',
    },
  },
  '/wills-last-testament': {
    en: {
      title: 'Wills & Estate Planning for Expats in UAE | DIFC & Dubai Courts',
      description: 'Secure your assets and family guardianship in Dubai with DIFC Wills and Dubai Courts inheritance registration for non-Muslims.',
    },
    ar: {
      title: 'تسجيل الوصايا وإدارة التركات لغير المسلمين | محاكم مركز دبي المالي',
      description: 'حماية الأصول العقارية والمالية وتعيين الوصاية على الأبناء في دبي عبر تسجيل الوصايا في مركز دبي المالي ومحاكم دبي.',
    },
    ru: {
      title: 'Составление завещаний в ОАЭ для экспатов | Суды DIFC и Дубая',
      description: 'Защита активов, недвижимости и опеки над детьми через регистрацию завещаний в DIFC и судах Дубая для немусульман.',
    },
    de: {
      title: 'Testamente & Nachlassplanung für Expats | DIFC & Dubai Gerichte',
      description: 'Sicherung von Vermögen, Immobilien und Vormundschaften durch Testamentsregistrierung im DIFC und bei Dubai Courts.',
    },
    es: {
      title: 'Testamentos y Planificación Sucesoria en EAU | DIFC y Dubái',
      description: 'Proteja su patrimonio inmobiliario y custodia de menores en Dubái con registro de testamentos para no musulmanes.',
    },
    fr: {
      title: 'Testaments & Succession pour Expatriés aux EAU | DIFC Dubaï',
      description: 'Sécurisation des biens et tutelle des enfants à Dubaï grâce à l’enregistrement des testaments auprès du DIFC.',
    },
    tr: {
      title: 'Dubai Vasiyetname ve Miras Hukuku Danışmanlığı | DIFC Mahkemeleri',
      description: 'BAE’de gayrimenkul ve varlıkların korunması, çocuk velayeti ve gayrimüslimler için resmi vasiyetname tescili.',
    },
    zh: {
      title: '阿联酋外籍人士遗嘱起草与DIFC法院公证登记｜财产规划',
      description: '为非穆斯林外籍人士在迪拜国际金融中心（DIFC）和迪拜法院登记遗嘱，全面保障在阿房产传承与未成年子女监护权。',
    },
  },
  '/amer-center': {
    en: {
      title: 'Amer Center Services Dubai | GDRFA Visa & Entry Permits',
      description: 'Authorized Amer Center services in Dubai: entry permits, visa stamping, visa cancellation, and status regularization.',
    },
    ar: {
      title: 'خدمات مركز آمر في دبي | أذونات الدخول وتثبيت الإقامة (GDRFA)',
      description: 'خدمات معتمدة من مركز آمر: أذونات الدخول، طباعة الإقامة، إلغاء التأشيرات، وتعديل الوضع القانوني في إمارة دبي.',
    },
    ru: {
      title: 'Услуги центров Amer в Дубае | Визы GDRFA и разрешения на въезд',
      description: 'Официальные услуги центров Amer: разрешения на въезд, вклейка визы, аннулирование и изменение статуса в Дубае.',
    },
    de: {
      title: 'Amer Center Dienstleistungen Dubai | GDRFA Visadienste',
      description: 'Autorisierte Amer-Dienste: Einreiseerlaubnisse, Visastempelung, Stornierungen und Statusanpassungen in Dubai.',
    },
    es: {
      title: 'Servicios del Centro Amer en Dubái | Trámites de Visado GDRFA',
      description: 'Servicios oficiales Amer en Dubái: permisos de entrada, estampado de visado, cancelaciones y cambio de estatus.',
    },
    fr: {
      title: 'Services Amer Center Dubaï | Visas & Titres de Séjour GDRFA',
      description: 'Services officiels des centres Amer : permis d’entrée, apposition de visa, annulation et régularisation à Dubaï.',
    },
    tr: {
      title: 'Dubai Amer Merkezi Hizmetleri | GDRFA Vize ve Giriş İzinleri',
      description: 'Dubai Amer yetkili merkezi: giriş izinleri, ikamet vizesi basımı, vize iptali ve statü değişikliği işlemleri.',
    },
    zh: {
      title: '迪拜Amer中心政务服务｜移民局（GDRFA）签证与入境许可',
      description: '提供迪拜官方 Amer 中心全套居留业务代办：入境许可发放、居留签出签、签证注销及境内身份合法转换。',
    },
  },
  '/check-visa-status-uae': {
    en: {
      title: 'How to Check UAE Visa Status Online 2026 | ICP & GDRFA Guide',
      description: 'Comprehensive guide to check UAE visa validity, fine inquiries, and application status online using your passport or Emirates ID.',
    },
    ar: {
      title: 'طريقة الاستعلام عن صلاحية التأشيرة في الإمارات 2026 | ICP و GDRFA',
      description: 'دليل شامل للتحقق من صلاحية الإقامة وتأشيرة الدخول والاستعلام عن الغرامات عبر رقم الجواز أو الهوية الإماراتية.',
    },
    ru: {
      title: 'Как проверить статус визы в ОАЭ онлайн 2026 | ICP и GDRFA',
      description: 'Инструкция по проверке действительности визы ОАЭ, штрафов за оверстей и статуса заявления по паспорту или Emirates ID.',
    },
    de: {
      title: 'VAE Visastatus online prüfen 2026 | ICP & GDRFA Leitfaden',
      description: 'Leitfaden zur Prüfung der Gültigkeit des VAE-Visums, Geldstrafenabfragen und Antragsstatus mit Reisepass oder ID.',
    },
    es: {
      title: 'Cómo Consultar el Estado del Visado de EAU Online 2026 | Guía',
      description: 'Guía para verificar la validez del visado de los EAU, multas por estancia y estado de solicitudes con pasaporte o ID.',
    },
    fr: {
      title: 'Vérifier la Validité du Visa EAU en Ligne 2026 | Guide Officiel',
      description: 'Comment vérifier le statut de son visa aux Émirats, les amendes éventuelles et le suivi de dossier par passeport.',
    },
    tr: {
      title: 'BAE Vize Durumu ve Ceza Sorgulama 2026 | ICP & GDRFA Rehberi',
      description: 'Pasaport veya Emirates ID ile BAE vize geçerlilik tarihi sorgulama, vize ihlal cezaları ve başvuru takip rehberi.',
    },
    zh: {
      title: '2026年如何在线查询阿联酋签证状态与逾期罚款｜ICP与GDRFA指南',
      description: '使用护照号或阿联酋身份证快速查询阿联酋签证有效期、在办申请进度及境内滞留罚款的详尽指南。',
    },
  },
  '/iloe': {
    en: {
      title: 'ILOE Unemployment Insurance UAE | Mandatory Registration Guide',
      description: 'Everything you need to know about UAE Involuntary Loss of Employment (ILOE) scheme: deadlines, categories, and fine penalties.',
    },
    ar: {
      title: 'التأمين ضد التعطل عن العمل (ILOE) في الإمارات | دليل التسجيل',
      description: 'كل ما تحتاج لمعرفته حول التسجيل الإلزامي في نظام التأمين ضد التعطل عن العمل في الإمارات والغرامات وشروط الاستحقاق.',
    },
    ru: {
      title: 'Страхование от потери работы (ILOE) в ОАЭ | Регистрация и штрафы',
      description: 'Официальное руководство по схеме обязательного страхования от безработицы (ILOE) в ОАЭ для резидентов и работников.',
    },
    de: {
      title: 'ILOE Arbeitslosenversicherung VAE | Pflichtanmeldung Leitfaden',
      description: 'Wichtige Informationen zum verpflichtenden Arbeitslosenversicherungssystem in den VAE: Fristen, Tarife und Strafen.',
    },
    es: {
      title: 'Seguro de Desempleo ILOE en EAU | Guía de Registro Obligatorio',
      description: 'Información sobre el seguro obligatorio contra desempleo en los EAU: plazos, costos y sanciones por incumplimiento.',
    },
    fr: {
      title: 'Assurance Chômage ILOE aux EAU | Inscription Obligatoire',
      description: 'Tout comprendre sur le régime d’assurance chômage obligatoire aux Émirats : démarches, cotisations et sanctions.',
    },
    tr: {
      title: 'BAE ILOE İşsizlik Sigortası Kayıt Rehberi | Zorunlu Sistem',
      description: 'BAE’de zorunlu işsizlik sigortası (ILOE) kayıt adımları, poliçe kategorileri ve cezalardan kaçınma yöntemleri.',
    },
    zh: {
      title: '阿联酋强制失业保险（ILOE）登记指南｜申报截止与罚款说明',
      description: '全面解析阿联酋非自愿失业保险计划（ILOE）：涵盖申请人群、年度缴费标准及避免违规罚款的实用说明。',
    },
  },
  '/near-me/visa-medical-emirates-id-locations': {
    en: {
      title: 'Visa Medical Screening & Emirates ID Centers Near Me | Dubai',
      description: 'Find official Dubai Health Authority (DHA) medical fitness screening centers and ICP biometrics fingerprinting locations near you.',
    },
    ar: {
      title: 'مراكز الفحص الطبي للإقامة وبصمة الهوية القريبة منك في دبي',
      description: 'دليل مواقع مراكز اللياقة الطبية لهيئة الصحة بدبي (DHA) ومراكز البصمة البيومترية للهوية الإماراتية الأقرب إليك.',
    },
    ru: {
      title: 'Медицинские центры для визы и биометрии Emirates ID рядом | Дубай',
      description: 'Адреса и часы работы центров медосмотра DHA и биометрии ICP для оформления визы и Emirates ID в Дубае.',
    },
    de: {
      title: 'Medizinische Fitness- und Emirates ID Zentren in der Nähe | Dubai',
      description: 'Finden Sie offizielle DHA-Zentren für medizinische Eignungsprüfungen und ICP-Fingerabdruckstellen in Dubai.',
    },
    es: {
      title: 'Centros Médicos para Visado y Biometría de Emirates ID | Dubái',
      description: 'Localice los centros oficiales de examen médico de la DHA y puntos de huellas dactilares ICP más cercanos en Dubái.',
    },
    fr: {
      title: 'Centres de Visite Médicale Visa & Emirates ID Près de Chez Vous | Dubaï',
      description: 'Trouvez les centres médicaux agréés DHA pour votre test médical et les centres biométriques ICP à Dubaï.',
    },
    tr: {
      title: 'Bana En Yakın Dubai Vize Sağlık Raporu ve Emirates ID Merkezleri',
      description: 'Dubai’de resmi DHA vize sağlık tarama merkezleri ve ICP parmak izi alma noktalarının adres ve iletişim bilgileri.',
    },
    zh: {
      title: '迪拜就近签证体检中心与阿联酋身份证指纹录入点查询｜就近网点',
      description: '快速查找迪拜卫生局（DHA）官方签证健康体检中心及联邦身份局（ICP）生物识别指纹采集中心的地址与营业时间。',
    },
  },
  '/near-me/visa-medical-emirates-id-location': {
    en: {
      title: 'Visa Medical Fitness & Biometrics Center Locator | Dubai',
      description: 'Locate 24/7 and VIP express medical fitness screening centers and ICP fingerprint service centers across Dubai.',
    },
    ar: {
      title: 'محدد مواقع مراكز الفحص الطبي السريع والبصمة في دبي',
      description: 'ابحث عن مراكز الفحص الطبي السريع VIP ومراكز خدمة البصمة في كافة مناطق دبي على مدار الساعة.',
    },
    ru: {
      title: 'Поиск центров медосмотра и биометрии в Дубае | VIP экспресс',
      description: 'Поиск экспресс-центров медицинского обследования DHA и пунктов снятия отпечатков пальцев по всему Дубаю.',
    },
    de: {
      title: 'Standortfinder für Visa-Medizin & Biometrie | Dubai Express',
      description: 'Finden Sie VIP- und Express-Prüfstellen für Visa-Medizin und biometrische Erfassung in allen Bezirken Dubais.',
    },
    es: {
      title: 'Localizador de Centros Médicos Exprés y Huellas en Dubái',
      description: 'Encuentre centros de examen médico VIP y captura de huellas dactilares en las principales zonas de Dubái.',
    },
    fr: {
      title: 'Localisateur de Centres Médicaux Express & Biométrie à Dubaï',
      description: 'Localisez les centres VIP de contrôle médical et les bornes biométriques dans tous les quartiers de Dubaï.',
    },
    tr: {
      title: 'Dubai Hızlı Vize Sağlık Taraması ve Biyometri Merkezi Bulucu',
      description: 'Dubai genelinde VIP hızlı sağlık testi ve ICP biyometrik kimlik başvuru merkezlerini kolayca keşfedin.',
    },
    zh: {
      title: '迪拜VIP快捷体检与生物指纹采集网点导航｜全城网点分布',
      description: '迪拜全境 24 小时及 VIP 快捷签证医学体检中心与 ICP 指纹服务中心查询导航。',
    },
  },
};

export function getRouteSeo(pathname: string, locale: LocaleCode): SeoMetadataItem {
  const normalized = pathname.replace(/\/$/, '') || '/';
  const match = routeSeoContent[normalized];
  if (match && match[locale]) {
    return match[locale];
  }
  if (match && match.en) {
    return match.en;
  }
  // Fallback for sub-routes
  return homeSeoContent[locale] || homeSeoContent.en;
}

for (const locale of localeCodes) {
  registerLocalizedCopy(localeLanguages[locale], Object.values(routeSeoContent).map((content) => content[locale]));
}

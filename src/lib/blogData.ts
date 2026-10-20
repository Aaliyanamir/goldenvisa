import type { Language } from './translations';
import { registerLocalizedCopy } from './localizedCopyRegistry';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Golden Visa' | 'Real Estate' | 'Corporate' | 'Regulations';
  readTime: string;
  day: string;
  month: string;
  year: string;
  author: string;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'dubai-golden-visa-property-investment-2026',
    title: 'UAE Property Investor Golden Visa: Complete 2026 Rules & DLD Guidelines',
    excerpt: 'Explore the updated criteria for AED 2,000,000 property investors. Learn how off-plan, mortgaged properties, and combined deeds qualify for official long-term residency.',
    category: 'Real Estate',
    readTime: '4 min read',
    day: '24',
    month: 'AUG',
    year: '2026',
    author: 'Legal Counsel Desk',
    image: '/assets/blog/article-1.webp',
    featured: true,
  },
  {
    id: '2',
    slug: 'sponsor-family-under-10-year-golden-visa',
    title: 'How to Sponsor Your Family, Parents & Domestic Staff Under the Golden Visa',
    excerpt: 'A comprehensive step-by-step walkthrough on sponsoring your spouse, sons up to 25, unmarried daughters with zero age limit, and dependent parents without a local guarantor.',
    category: 'Golden Visa',
    readTime: '5 min read',
    day: '23',
    month: 'AUG',
    year: '2026',
    author: 'GDRFA Liaison Officer',
    image: '/assets/blog/article-2.webp',
  },
  {
    id: '3',
    slug: 'executive-c-suite-leadership-visa-criteria',
    title: 'Senior Executive 10-Year Golden Visa: MOHRE Contract & Salary Benchmarks',
    excerpt: 'Understand the legal verification protocols for the AED 30,000 monthly salary requirement, accredited degree attestations, and executive nomination filing.',
    category: 'Golden Visa',
    readTime: '3 min read',
    day: '23',
    month: 'AUG',
    year: '2026',
    author: 'Executive Relations',
    image: '/assets/blog/article-3.webp',
  },
  {
    id: '4',
    slug: 'dubai-mainland-vs-freezone-company-setup',
    title: 'Dubai Mainland LLC vs. Free Zone: Which Structure Best Fits Your Enterprise?',
    excerpt: 'Detailed comparison of 100% foreign ownership on the Mainland versus 0% corporate tax free zones (IFZA, Meydan, DMCC) with banking pre-approvals.',
    category: 'Corporate',
    readTime: '6 min read',
    day: '22',
    month: 'AUG',
    year: '2026',
    author: 'Corporate Formation Team',
    image: '/assets/blog/article-4.webp',
  },
  {
    id: '5',
    slug: 'mortgaged-property-golden-visa-noc',
    title: 'Can You Get a 10-Year Golden Visa on a Mortgaged Dubai Property?',
    excerpt: 'Official procedures for securing the required Bank NOC letter from UAE lenders to present at the Dubai Land Department for your 10-year residency.',
    category: 'Real Estate',
    readTime: '4 min read',
    day: '21',
    month: 'AUG',
    year: '2026',
    author: 'Property Legal Liaison',
    image: '/assets/blog/article-5.webp',
  },
  {
    id: '6',
    slug: 'stay-outside-uae-golden-visa-rules',
    title: 'The 6-Month Stay Exemption: Freedom of Global Travel for Visa Holders',
    excerpt: 'Unlike standard 2-year residence visas that expire after 180 days abroad, the 10-Year Golden Visa allows you to travel and live overseas without losing your UAE residency.',
    category: 'Regulations',
    readTime: '3 min read',
    day: '21',
    month: 'AUG',
    year: '2026',
    author: 'Immigration Specialist',
    image: '/assets/blog/article-6.webp',
  },
  {
    id: '7',
    slug: 'specialized-talents-doctors-ai-scientists',
    title: 'Golden Visa for Doctors, AI Researchers, and Creative Cultural Talents',
    excerpt: 'Clear pathways for medical professionals with DHA/MOH licenses, PhD researchers, and innovators approved by the Emirates Scientists Council.',
    category: 'Golden Visa',
    readTime: '5 min read',
    day: '18',
    month: 'AUG',
    year: '2026',
    author: 'Innovation Board Officer',
    image: '/assets/blog/article-7.webp',
  },
  {
    id: '8',
    slug: 'corporate-tax-uae-residency-benefits',
    title: 'UAE Corporate & Personal Tax Advantages for High-Net-Worth Residents',
    excerpt: 'How securing UAE tax residency protects international wealth, eliminates personal income taxes, and integrates double taxation avoidance treaties.',
    category: 'Corporate',
    readTime: '5 min read',
    day: '18',
    month: 'AUG',
    year: '2026',
    author: 'Tax & Compliance Lead',
    image: '/assets/blog/article-8.webp',
  },
  {
    id: '9',
    slug: 'document-attestation-mofa-guide',
    title: 'Global Degree and Marriage Certificate Attestation for UAE Residency',
    excerpt: 'Everything you need to know about Home Country Notary, Ministry of Foreign Affairs, UAE Embassy, and MOFA electronic apostilles in Dubai.',
    category: 'Regulations',
    readTime: '4 min read',
    day: '17',
    month: 'AUG',
    year: '2026',
    author: 'Attestation Desk',
    image: '/assets/blog/article-9.webp',
  },
];

const localizedBlogTitles: Record<Language, Record<string, string>> = {
  EN: Object.fromEntries(blogPosts.map((post) => [post.slug, post.title])),
  AR: {
    'dubai-golden-visa-property-investment-2026': 'التأشيرة الذهبية لمستثمري العقارات في الإمارات: قواعد 2026 وإرشادات دائرة الأراضي',
    'sponsor-family-under-10-year-golden-visa': 'كيفية كفالة الأسرة والوالدين والعمالة المنزلية ضمن التأشيرة الذهبية',
    'executive-c-suite-leadership-visa-criteria': 'التأشيرة الذهبية للمديرين التنفيذيين لمدة 10 سنوات: عقد MOHRE ومعايير الراتب',
    'dubai-mainland-vs-freezone-company-setup': 'شركة ذات مسؤولية محدودة في دبي أم منطقة حرة: أي هيكل يناسب أعمالك؟',
    'mortgaged-property-golden-visa-noc': 'هل يمكنك الحصول على تأشيرة ذهبية لعشر سنوات لعقار مرهون في دبي؟',
    'stay-outside-uae-golden-visa-rules': 'استثناء الإقامة خارج الإمارات لمدة 6 أشهر: السفر العالمي لحاملي التأشيرة',
    'specialized-talents-doctors-ai-scientists': 'التأشيرة الذهبية للأطباء وباحثي الذكاء الاصطناعي والمواهب الثقافية',
    'corporate-tax-uae-residency-benefits': 'المزايا الضريبية للشركات والأفراد المقيمين من أصحاب الثروات في الإمارات',
    'document-attestation-mofa-guide': 'تصديق الشهادات وعقود الزواج الدولية للإقامة في الإمارات',
  },
  RU: {
    'dubai-golden-visa-property-investment-2026': 'Золотая виза ОАЭ для инвесторов в недвижимость: правила 2026 и рекомендации DLD',
    'sponsor-family-under-10-year-golden-visa': 'Как оформить спонсорство семьи, родителей и домашнего персонала по Golden Visa',
    'executive-c-suite-leadership-visa-criteria': 'Golden Visa на 10 лет для руководителей: договор MOHRE и требования к зарплате',
    'dubai-mainland-vs-freezone-company-setup': 'Компания в материковой части Дубая или свободной зоне: что выбрать?',
    'mortgaged-property-golden-visa-noc': 'Можно ли получить Golden Visa на 10 лет для заложенной недвижимости в Дубае?',
    'stay-outside-uae-golden-visa-rules': 'Исключение из правила 6 месяцев отсутствия: поездки для владельцев визы',
    'specialized-talents-doctors-ai-scientists': 'Golden Visa для врачей, исследователей ИИ и творческих специалистов',
    'corporate-tax-uae-residency-benefits': 'Налоговые преимущества ОАЭ для компаний и состоятельных резидентов',
    'document-attestation-mofa-guide': 'Легализация дипломов и свидетельств о браке для резидентства в ОАЭ',
  },
  DE: {
    'dubai-golden-visa-property-investment-2026': 'Golden Visa für Immobilieninvestoren in den VAE: Regeln 2026 und DLD-Leitfaden',
    'sponsor-family-under-10-year-golden-visa': 'Familie, Eltern und Haushaltspersonal mit dem Golden Visa sponsern',
    'executive-c-suite-leadership-visa-criteria': '10-jähriges Golden Visa für Führungskräfte: MOHRE-Vertrag und Gehaltswerte',
    'dubai-mainland-vs-freezone-company-setup': 'Dubai Mainland LLC oder Freizone: Welche Unternehmensform passt?',
    'mortgaged-property-golden-visa-noc': 'Ist ein 10-jähriges Golden Visa für eine finanzierte Immobilie in Dubai möglich?',
    'stay-outside-uae-golden-visa-rules': 'Ausnahme von der 6-Monats-Regel: Weltweites Reisen für Visuminhaber',
    'specialized-talents-doctors-ai-scientists': 'Golden Visa für Ärzte, KI-Forschende und kreative Talente',
    'corporate-tax-uae-residency-benefits': 'Steuervorteile der VAE für Unternehmen und vermögende Einwohner',
    'document-attestation-mofa-guide': 'Beglaubigung internationaler Abschlüsse und Heiratsurkunden für die VAE',
  },
  ES: {
    'dubai-golden-visa-property-investment-2026': 'Golden Visa para inversores inmobiliarios en EAU: normas de 2026 y guía DLD',
    'sponsor-family-under-10-year-golden-visa': 'Cómo patrocinar a familiares, padres y personal doméstico con Golden Visa',
    'executive-c-suite-leadership-visa-criteria': 'Golden Visa de 10 años para directivos: contrato MOHRE y referencias salariales',
    'dubai-mainland-vs-freezone-company-setup': 'Sociedad LLC en Dubái o zona franca: ¿qué estructura conviene?',
    'mortgaged-property-golden-visa-noc': '¿Se puede obtener un Golden Visa de 10 años con una vivienda hipotecada en Dubái?',
    'stay-outside-uae-golden-visa-rules': 'Excepción de estancia de 6 meses: viajes internacionales para titulares de visado',
    'specialized-talents-doctors-ai-scientists': 'Golden Visa para médicos, investigadores de IA y talentos culturales',
    'corporate-tax-uae-residency-benefits': 'Ventajas fiscales de EAU para empresas y residentes con alto patrimonio',
    'document-attestation-mofa-guide': 'Legalización de títulos y certificados de matrimonio para residir en EAU',
  },
  FR: {
    'dubai-golden-visa-property-investment-2026': 'Golden Visa immobilier aux EAU : règles 2026 et guide du DLD',
    'sponsor-family-under-10-year-golden-visa': 'Parrainer sa famille, ses parents et son personnel domestique avec le Golden Visa',
    'executive-c-suite-leadership-visa-criteria': 'Golden Visa de 10 ans pour dirigeants : contrat MOHRE et seuils de salaire',
    'dubai-mainland-vs-freezone-company-setup': 'LLC à Dubaï ou zone franche : quelle structure choisir ?',
    'mortgaged-property-golden-visa-noc': 'Un bien immobilier hypothéqué à Dubaï permet-il d’obtenir le Golden Visa de 10 ans ?',
    'stay-outside-uae-golden-visa-rules': 'Dérogation aux 6 mois de présence : voyager avec un visa de résidence',
    'specialized-talents-doctors-ai-scientists': 'Golden Visa pour médecins, chercheurs en IA et talents culturels',
    'corporate-tax-uae-residency-benefits': 'Avantages fiscaux des EAU pour les entreprises et résidents fortunés',
    'document-attestation-mofa-guide': 'Légalisation des diplômes et actes de mariage pour résider aux EAU',
  },
  TR: {
    'dubai-golden-visa-property-investment-2026': 'BAE Gayrimenkul Yatırımcısı Golden Visa: 2026 Kuralları ve DLD Rehberi',
    'sponsor-family-under-10-year-golden-visa': 'Golden Visa ile aile, ebeveyn ve ev hizmetlisi sponsorluğu nasıl yapılır?',
    'executive-c-suite-leadership-visa-criteria': 'Üst düzey yöneticiler için 10 yıllık Golden Visa: MOHRE sözleşmesi ve maaş koşulları',
    'dubai-mainland-vs-freezone-company-setup': 'Dubai ana kara LLC mi serbest bölge mi: Hangi şirket yapısı uygun?',
    'mortgaged-property-golden-visa-noc': 'İpotekli Dubai mülküyle 10 yıllık Golden Visa alınabilir mi?',
    'stay-outside-uae-golden-visa-rules': '6 ay ülkede kalma kuralı istisnası: Vize sahipleri için küresel seyahat',
    'specialized-talents-doctors-ai-scientists': 'Doktorlar, yapay zekâ araştırmacıları ve kültürel yetenekler için Golden Visa',
    'corporate-tax-uae-residency-benefits': 'Şirketler ve yüksek gelirli sakinler için BAE vergi avantajları',
    'document-attestation-mofa-guide': 'BAE oturumu için diploma ve evlilik belgesi tasdiki',
  },
  ZH: {
    'dubai-golden-visa-property-investment-2026': '阿联酋房产投资者黄金签证：2026 年规则与 DLD 指南',
    'sponsor-family-under-10-year-golden-visa': '如何通过黄金签证担保家人、父母及家庭雇员',
    'executive-c-suite-leadership-visa-criteria': '高管十年黄金签证：MOHRE 合同与薪资要求',
    'dubai-mainland-vs-freezone-company-setup': '迪拜 Mainland LLC 还是自贸区公司：哪种架构更适合？',
    'mortgaged-property-golden-visa-noc': '迪拜抵押房产可以申请十年黄金签证吗？',
    'stay-outside-uae-golden-visa-rules': '六个月离境限制豁免：签证持有人的国际旅行规则',
    'specialized-talents-doctors-ai-scientists': '医生、人工智能研究人员及文化人才的黄金签证',
    'corporate-tax-uae-residency-benefits': '阿联酋为企业及高净值居民提供的税务优势',
    'document-attestation-mofa-guide': '阿联酋居留所需的学历与结婚证书认证指南',
  },
};

const localizedBlogDescriptionTemplates: Record<Exclude<Language, 'EN'>, (title: string) => string> = {
  AR: (title) => `اقرأ دليلنا العملي حول «${title}» للاطلاع على المعلومات والمتطلبات والإجراءات ذات الصلة في دولة الإمارات.`,
  RU: (title) => `Читайте практическое руководство «${title}» с информацией о соответствующих требованиях и процедурах в ОАЭ.`,
  DE: (title) => `Lesen Sie unseren praktischen Leitfaden „${title}“ mit Informationen zu relevanten Anforderungen und Abläufen in den VAE.`,
  ES: (title) => `Consulte esta guía práctica sobre «${title}» con información sobre requisitos y procedimientos relacionados en los EAU.`,
  FR: (title) => `Consultez ce guide pratique sur « ${title} » pour connaître les exigences et procédures applicables aux EAU.`,
  TR: (title) => `BAE'deki ilgili gereklilikler ve süreçler hakkında bilgi için «${title}» konulu pratik rehberimizi okuyun.`,
  ZH: (title) => `阅读《${title}》实用指南，了解阿联酋相关要求与办理流程。`,
};

export function localizeBlogPost(post: BlogPost, language: Language): BlogPost {
  const title = localizedBlogTitles[language][post.slug] ?? post.title;
  const excerpt = language === 'EN'
    ? post.excerpt
    : localizedBlogDescriptionTemplates[language](title);
  return { ...post, title, excerpt };
}

for (const language of ['EN', 'AR', 'RU', 'DE', 'ES', 'FR', 'TR', 'ZH'] as const) {
  registerLocalizedCopy(language, blogPosts.map((post) => localizeBlogPost(post, language)));
}

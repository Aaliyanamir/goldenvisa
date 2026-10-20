import type { Language } from './translations';
import { registerLocalizedCopy } from './localizedCopyRegistry';

// Static AI-drafted interface translations for editorial review; article content remains author-controlled.
const blogCopy = {
  EN: ['UAE Sovereign Insights & Legal Journal', 'Authoritative Guidance on', 'Golden Visas & UAE Laws', 'Executive legal briefings, property investment guidelines, corporate residency structures, and official document attestation procedures in Dubai and the UAE.', 'Search articles and guides...', 'Fee Calculator', 'Trending:', 'Category:', 'All', 'Showing', 'Articles', 'Feature Spotlight', 'Read Featured Story', 'Check Eligibility', 'Read Full Article', 'No articles found', 'Try adjusting your search query or filter settings.', 'Subscribe', 'Enter your corporate email...', 'Stay updated on UAE Golden Visa & Legal Laws'],
  AR: ['رؤى الإمارات والمجلة القانونية', 'إرشادات موثوقة حول', 'التأشيرات الذهبية وقوانين الإمارات', 'إحاطات قانونية تنفيذية وإرشادات الاستثمار العقاري وهياكل الإقامة للشركات وإجراءات تصديق المستندات الرسمية في دبي والإمارات.', 'ابحث في المقالات والأدلة...', 'حاسبة الرسوم', 'الأكثر تداولاً:', 'الفئة:', 'الكل', 'عرض', 'مقالات', 'موضوع مميز', 'اقرأ القصة المميزة', 'تحقق من الأهلية', 'اقرأ المقال كاملاً', 'لم يتم العثور على مقالات', 'جرّب تعديل عبارة البحث أو خيارات التصفية.', 'اشترك', 'أدخل بريدك الإلكتروني للعمل...', 'تابع آخر أخبار التأشيرة الذهبية والقوانين في الإمارات'],
  RU: ['Обзоры ОАЭ и юридический журнал', 'Авторитетные рекомендации по темам', 'Golden Visa и законодательству ОАЭ', 'Юридические обзоры для руководителей, рекомендации по инвестициям в недвижимость, корпоративному резидентству и заверению официальных документов в Дубае и ОАЭ.', 'Поиск статей и руководств...', 'Калькулятор стоимости', 'В тренде:', 'Категория:', 'Все', 'Показано', 'статей', 'Главная публикация', 'Читать избранную статью', 'Проверить соответствие', 'Читать статью полностью', 'Статьи не найдены', 'Измените поисковый запрос или параметры фильтра.', 'Подписаться', 'Введите корпоративную почту...', 'Новости Golden Visa и законодательства ОАЭ'],
  DE: ['Einblicke in die VAE & Rechtsjournal', 'Fundierte Beratung zu', 'Golden Visa und dem Recht der VAE', 'Rechtsinformationen für Führungskräfte, Hinweise zu Immobilieninvestitionen, Unternehmensaufenthalt und Beglaubigung offizieller Dokumente in Dubai und den VAE.', 'Artikel und Ratgeber suchen...', 'Gebührenrechner', 'Im Trend:', 'Kategorie:', 'Alle', 'Angezeigt', 'Artikel', 'Im Fokus', 'Ausgewählten Beitrag lesen', 'Berechtigung prüfen', 'Ganzen Artikel lesen', 'Keine Artikel gefunden', 'Passen Sie Ihre Suche oder Filter an.', 'Abonnieren', 'Geschäftliche E-Mail eingeben...', 'Neuigkeiten zu Golden Visa und dem Recht der VAE'],
  ES: ['Perspectivas de EAU y revista jurídica', 'Orientación experta sobre', 'Golden Visa y legislación de EAU', 'Informes jurídicos ejecutivos, guías de inversión inmobiliaria, estructuras de residencia corporativa y procedimientos de legalización de documentos oficiales en Dubái y EAU.', 'Buscar artículos y guías...', 'Calculadora de tasas', 'Tendencias:', 'Categoría:', 'Todos', 'Mostrando', 'artículos', 'Artículo destacado', 'Leer artículo destacado', 'Comprueba tu elegibilidad', 'Leer artículo completo', 'No se encontraron artículos', 'Prueba a cambiar la búsqueda o los filtros.', 'Suscribirse', 'Introduce tu correo profesional...', 'Novedades sobre Golden Visa y legislación de EAU'],
  FR: ['Perspectives des EAU et revue juridique', 'Conseils de référence sur', 'le Golden Visa et le droit des EAU', 'Analyses juridiques pour dirigeants, conseils sur les investissements immobiliers, le séjour des entreprises et la légalisation des documents officiels à Dubaï et aux EAU.', 'Rechercher des articles et guides...', 'Calculateur de frais', 'Tendances :', 'Catégorie :', 'Tout', 'Affichage de', 'articles', 'À la une', 'Lire l’article à la une', 'Vérifier votre éligibilité', 'Lire l’article complet', 'Aucun article trouvé', 'Modifiez votre recherche ou vos filtres.', 'S’abonner', 'Saisissez votre e-mail professionnel...', 'Actualités Golden Visa et droit des EAU'],
  TR: ['BAE değerlendirmeleri ve hukuk dergisi', 'Güvenilir rehberlik:', 'Golden Visa ve BAE mevzuatı', 'Dubai ve BAE’de yöneticilere yönelik hukuk bilgilendirmeleri, gayrimenkul yatırımı rehberleri, kurumsal oturum yapıları ve resmi belge tasdik süreçleri.', 'Makale ve rehberlerde ara...', 'Ücret hesaplayıcı', 'Gündem:', 'Kategori:', 'Tümü', 'Gösterilen', 'makale', 'Öne çıkan içerik', 'Öne çıkan yazıyı oku', 'Uygunluğunuzu kontrol edin', 'Makalenin tamamını oku', 'Makale bulunamadı', 'Aramanızı veya filtrelerinizi değiştirmeyi deneyin.', 'Abone ol', 'Kurumsal e-postanızı girin...', 'BAE Golden Visa ve mevzuat haberleri'],
  ZH: ['阿联酋洞察与法律期刊', '权威指南：', '黄金签证与阿联酋法律', '迪拜及阿联酋的高管法律简报、房产投资指南、企业居留架构和官方文件认证流程。', '搜索文章与指南...', '费用计算器', '热门内容：', '类别：', '全部', '显示', '篇文章', '精选专题', '阅读精选文章', '查看申请资格', '阅读完整文章', '未找到文章', '请尝试调整搜索内容或筛选条件。', '订阅', '输入您的企业邮箱...', '关注阿联酋黄金签证与法律动态'],
} as const;

export type BlogCopyKey =
  | 'badge' | 'titleLead' | 'titleHighlight' | 'intro' | 'searchPlaceholder'
  | 'calculator' | 'trending' | 'category' | 'all' | 'showing' | 'articles'
  | 'featured' | 'readFeatured' | 'checkEligibility' | 'readArticle'
  | 'noneFound' | 'refineSearch' | 'subscribe' | 'emailPlaceholder' | 'newsletter';

const keyIndexes: Record<BlogCopyKey, number> = {
  badge: 0, titleLead: 1, titleHighlight: 2, intro: 3, searchPlaceholder: 4,
  calculator: 5, trending: 6, category: 7, all: 8, showing: 9, articles: 10,
  featured: 11, readFeatured: 12, checkEligibility: 13, readArticle: 14,
  noneFound: 15, refineSearch: 16, subscribe: 17, emailPlaceholder: 18, newsletter: 19,
};

export function blogText(language: Language, key: BlogCopyKey): string {
  return blogCopy[language][keyIndexes[key]];
}

const blogUiCopy = {
  EN: {
    verified: 'Official 2026 GDRFA, DLD & MOHRE Regulations Verified',
    guides: 'Official Legal Guides', lawCompliant: 'UAE Law Compliant',
    propertyCriteria: 'Property Visa Criteria', assistance: 'WhatsApp Assistance',
    launchEstimator: 'Launch Fee Estimator',
    categories: ['All', 'Golden Visa', 'Real Estate', 'Corporate', 'Regulations'],
    trendingTags: ['10-Year Golden Visa', 'DLD Property Rules', 'Mortgaged Property NOC', 'MOJ Legal Translation', 'Family Visa Sponsoring'],
  },
  AR: {
    verified: 'تم التحقق من لوائح GDRFA وDLD وMOHRE لعام 2026',
    guides: 'أدلة قانونية رسمية', lawCompliant: 'متوافق مع قوانين الإمارات',
    propertyCriteria: 'شروط تأشيرة العقار', assistance: 'دعم عبر واتساب',
    launchEstimator: 'افتح حاسبة الرسوم',
    categories: ['الكل', 'التأشيرة الذهبية', 'العقارات', 'الشركات', 'اللوائح'],
    trendingTags: ['التأشيرة الذهبية لعشر سنوات', 'قواعد عقارات DLD', 'شهادة عدم ممانعة للعقار المرهون', 'الترجمة القانونية من MOJ', 'كفالة الأسرة'],
  },
  RU: {
    verified: 'Официальные правила GDRFA, DLD и MOHRE на 2026 год проверены',
    guides: 'Официальные юридические руководства', lawCompliant: 'Соответствует законодательству ОАЭ',
    propertyCriteria: 'Условия визы для владельцев недвижимости', assistance: 'Поддержка в WhatsApp',
    launchEstimator: 'Открыть калькулятор сборов',
    categories: ['Все', 'Золотая виза', 'Недвижимость', 'Бизнес', 'Правила'],
    trendingTags: ['Золотая виза на 10 лет', 'Правила DLD для недвижимости', 'NOC для заложенной недвижимости', 'Юридический перевод MOJ', 'Спонсорство семьи'],
  },
  DE: {
    verified: 'Offizielle GDRFA-, DLD- und MOHRE-Regeln für 2026 geprüft',
    guides: 'Offizielle Rechtsratgeber', lawCompliant: 'Entspricht dem Recht der VAE',
    propertyCriteria: 'Voraussetzungen für Immobilienvisa', assistance: 'WhatsApp-Unterstützung',
    launchEstimator: 'Gebührenrechner öffnen',
    categories: ['Alle', 'Golden Visa', 'Immobilien', 'Unternehmen', 'Vorschriften'],
    trendingTags: ['Golden Visa für 10 Jahre', 'DLD-Immobilienregeln', 'NOC für belastete Immobilien', 'MOJ-Rechtsübersetzung', 'Familienpatenschaft'],
  },
  ES: {
    verified: 'Normativa oficial 2026 de GDRFA, DLD y MOHRE verificada',
    guides: 'Guías jurídicas oficiales', lawCompliant: 'Conforme a la legislación de EAU',
    propertyCriteria: 'Criterios del visado inmobiliario', assistance: 'Asistencia por WhatsApp',
    launchEstimator: 'Abrir calculadora de tasas',
    categories: ['Todos', 'Golden Visa', 'Inmobiliario', 'Empresas', 'Normativa'],
    trendingTags: ['Golden Visa de 10 años', 'Normas inmobiliarias de DLD', 'NOC para propiedad hipotecada', 'Traducción jurídica de MOJ', 'Patrocinio familiar'],
  },
  FR: {
    verified: 'Réglementations officielles 2026 GDRFA, DLD et MOHRE vérifiées',
    guides: 'Guides juridiques officiels', lawCompliant: 'Conforme au droit des EAU',
    propertyCriteria: 'Critères du visa immobilier', assistance: 'Assistance WhatsApp',
    launchEstimator: 'Ouvrir le calculateur de frais',
    categories: ['Tout', 'Golden Visa', 'Immobilier', 'Entreprises', 'Réglementation'],
    trendingTags: ['Golden Visa de 10 ans', 'Règles immobilières DLD', 'NOC pour bien hypothéqué', 'Traduction juridique MOJ', 'Parrainage familial'],
  },
  TR: {
    verified: '2026 GDRFA, DLD ve MOHRE düzenlemeleri doğrulanmıştır',
    guides: 'Resmî hukuk rehberleri', lawCompliant: 'BAE mevzuatına uygundur',
    propertyCriteria: 'Gayrimenkul vizesi koşulları', assistance: 'WhatsApp desteği',
    launchEstimator: 'Ücret hesaplayıcıyı açın',
    categories: ['Tümü', 'Golden Visa', 'Gayrimenkul', 'Şirketler', 'Mevzuat'],
    trendingTags: ['10 yıllık Golden Visa', 'DLD gayrimenkul kuralları', 'İpotekli mülk için NOC', 'MOJ hukuki çeviri', 'Aile sponsorluğu'],
  },
  ZH: {
    verified: '已核实 2026 年 GDRFA、DLD 与 MOHRE 官方规定',
    guides: '官方法律指南', lawCompliant: '符合阿联酋法律',
    propertyCriteria: '房产签证条件', assistance: 'WhatsApp 客服支持',
    launchEstimator: '打开费用计算器',
    categories: ['全部', '黄金签证', '房地产', '企业', '法规'],
    trendingTags: ['十年黄金签证', 'DLD 房产规定', '抵押房产无异议证明', 'MOJ 法律翻译', '家庭担保'],
  },
} as const satisfies Record<Language, {
  verified: string;
  guides: string;
  lawCompliant: string;
  propertyCriteria: string;
  assistance: string;
  launchEstimator: string;
  categories: readonly string[];
  trendingTags: readonly string[];
}>;

export type BlogUiCopyKey = Exclude<keyof (typeof blogUiCopy)['EN'], 'categories' | 'trendingTags'>;

export function blogUiText(language: Language, key: BlogUiCopyKey): string {
  return blogUiCopy[language][key];
}

export function blogCategories(language: Language): readonly string[] {
  return blogUiCopy[language].categories;
}

export function blogTrendingTags(language: Language): readonly string[] {
  return blogUiCopy[language].trendingTags;
}

const blogArticleCopy = {
  EN: {
    back: 'Back to All Publications', category: 'Category:', verified: 'Editorial guidance · 2026',
    published: 'Published:', askExpert: 'Ask an expert', sections: 'Article sections',
    print: 'Print', share: 'Share', related: 'Related articles', readArticle: 'Read article',
  },
  AR: {
    back: 'العودة إلى جميع المقالات', category: 'الفئة:', verified: 'إرشادات تحريرية · 2026',
    published: 'تاريخ النشر:', askExpert: 'اسأل خبيراً', sections: 'أقسام المقال',
    print: 'طباعة', share: 'مشاركة', related: 'مقالات ذات صلة', readArticle: 'اقرأ المقال',
  },
  RU: {
    back: 'Ко всем публикациям', category: 'Категория:', verified: 'Редакционные материалы · 2026',
    published: 'Опубликовано:', askExpert: 'Задать вопрос эксперту', sections: 'Разделы статьи',
    print: 'Печать', share: 'Поделиться', related: 'Похожие статьи', readArticle: 'Читать статью',
  },
  DE: {
    back: 'Zurück zu allen Beiträgen', category: 'Kategorie:', verified: 'Redaktionelle Hinweise · 2026',
    published: 'Veröffentlicht:', askExpert: 'Experten fragen', sections: 'Artikelabschnitte',
    print: 'Drucken', share: 'Teilen', related: 'Ähnliche Artikel', readArticle: 'Artikel lesen',
  },
  ES: {
    back: 'Volver a todas las publicaciones', category: 'Categoría:', verified: 'Orientación editorial · 2026',
    published: 'Publicado:', askExpert: 'Preguntar a un experto', sections: 'Secciones del artículo',
    print: 'Imprimir', share: 'Compartir', related: 'Artículos relacionados', readArticle: 'Leer artículo',
  },
  FR: {
    back: 'Retour à toutes les publications', category: 'Catégorie :', verified: 'Conseils éditoriaux · 2026',
    published: 'Publié le :', askExpert: 'Poser une question', sections: 'Sections de l’article',
    print: 'Imprimer', share: 'Partager', related: 'Articles associés', readArticle: 'Lire l’article',
  },
  TR: {
    back: 'Tüm yayınlara dön', category: 'Kategori:', verified: 'Editoryal bilgilendirme · 2026',
    published: 'Yayın tarihi:', askExpert: 'Uzmanımıza sorun', sections: 'Makale bölümleri',
    print: 'Yazdır', share: 'Paylaş', related: 'İlgili makaleler', readArticle: 'Makaleyi okuyun',
  },
  ZH: {
    back: '返回所有文章', category: '类别：', verified: '编辑指南 · 2026',
    published: '发布日期：', askExpert: '咨询专家', sections: '文章目录',
    print: '打印', share: '分享', related: '相关文章', readArticle: '阅读文章',
  },
} as const satisfies Record<Language, Record<string, string>>;

export type BlogArticleCopyKey = keyof (typeof blogArticleCopy)['EN'];

export function blogArticleText(language: Language, key: BlogArticleCopyKey): string {
  return blogArticleCopy[language][key];
}

export function blogCategoryText(language: Language, category: string): string {
  const categoryIndex = ['Golden Visa', 'Real Estate', 'Corporate', 'Regulations'].indexOf(category);
  return blogCategories(language)[categoryIndex + 1] ?? category;
}

for (const language of ['EN', 'AR', 'RU', 'DE', 'ES', 'FR', 'TR', 'ZH'] as const) {
  registerLocalizedCopy(language, blogCopy[language]);
  registerLocalizedCopy(language, blogUiCopy[language]);
  registerLocalizedCopy(language, blogArticleCopy[language]);
}

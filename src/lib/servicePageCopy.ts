import type { Language } from './translations';
import { registerLocalizedCopy } from './localizedCopyRegistry';

// AI-drafted interface translations; review with native speakers before publication.
const servicePageCopy = {
  EN: {
    home: 'Home', services: 'Services', breadcrumb: 'Breadcrumb', overview: 'Overview',
    whyItMatters: 'Why it matters', process: 'Process', prepareFile: 'Prepare your file',
    questionsAnswers: 'Questions & answers', atGlance: 'At a glance',
    personalizedStep: 'Personalized next step', explore: 'Plan your next step',
    callAdvisor: 'Call an advisor', privateSupport: 'Private documentation support · Government approval remains with the authority',
    providerDisclaimer: 'We are a private documentation and PRO-services provider, not a UAE government agency. Government fees, eligibility and processing times may change.',
    leadAssurance: 'Your details are not stored by this page. You choose when to continue in WhatsApp.',
    addDocument: 'Add a document for your quote', yourName: 'Your name',
    phone: 'Phone / WhatsApp', email: 'Email (optional)', request: 'What would you like help with?',
    prepareInquiry: 'Prepare WhatsApp inquiry', continueWhatsapp: 'Continue to WhatsApp',
    inquiryReady: 'Your inquiry is ready. Nothing has been sent yet.',
  },
  AR: {
    home: 'الرئيسية', services: 'الخدمات', breadcrumb: 'مسار التنقل', overview: 'نظرة عامة',
    whyItMatters: 'أهمية الخدمة', process: 'الإجراءات', prepareFile: 'جهّز ملفك',
    questionsAnswers: 'الأسئلة والأجوبة', atGlance: 'لمحة سريعة',
    personalizedStep: 'خطوتك التالية المخصصة', explore: 'خطط لخطوتك التالية',
    callAdvisor: 'اتصل بمستشار', privateSupport: 'دعم خاص للمستندات · الموافقة الحكومية من اختصاص الجهة الرسمية',
    providerDisclaimer: 'نحن جهة خاصة لدعم المستندات وخدمات PRO ولسنا جهة حكومية في الإمارات. قد تتغير الرسوم والأهلية وأوقات المعالجة.',
    leadAssurance: 'لا تحفظ هذه الصفحة بياناتك. أنت من يقرر متى تتابع عبر واتساب.',
    addDocument: 'أضف مستنداً للحصول على عرض سعر', yourName: 'اسمك',
    phone: 'الهاتف / واتساب', email: 'البريد الإلكتروني (اختياري)', request: 'كيف يمكننا مساعدتك؟',
    prepareInquiry: 'إعداد استفسار واتساب', continueWhatsapp: 'المتابعة إلى واتساب',
    inquiryReady: 'استفسارك جاهز. لم يتم إرساله بعد.',
  },
  RU: {
    home: 'Главная', services: 'Услуги', breadcrumb: 'Навигационная цепочка', overview: 'Обзор',
    whyItMatters: 'Почему это важно', process: 'Этапы', prepareFile: 'Подготовьте документы',
    questionsAnswers: 'Вопросы и ответы', atGlance: 'Краткий обзор',
    personalizedStep: 'Следующий шаг для вашего случая', explore: 'Запланировать следующий шаг',
    callAdvisor: 'Позвонить консультанту', privateSupport: 'Частная помощь с документами · Решение об одобрении принимает государственный орган',
    providerDisclaimer: 'Мы — частная компания по подготовке документов и PRO-услугам, а не государственный орган ОАЭ. Сборы, требования и сроки могут меняться.',
    leadAssurance: 'Эта страница не сохраняет ваши данные. Вы сами решаете, когда продолжить общение в WhatsApp.',
    addDocument: 'Добавить документ для расчёта', yourName: 'Ваше имя',
    phone: 'Телефон / WhatsApp', email: 'Электронная почта (необязательно)', request: 'Чем мы можем помочь?',
    prepareInquiry: 'Подготовить запрос в WhatsApp', continueWhatsapp: 'Перейти в WhatsApp',
    inquiryReady: 'Запрос подготовлен. Он ещё не отправлен.',
  },
  DE: {
    home: 'Startseite', services: 'Services', breadcrumb: 'Brotkrumennavigation', overview: 'Überblick',
    whyItMatters: 'Warum es wichtig ist', process: 'Ablauf', prepareFile: 'Unterlagen vorbereiten',
    questionsAnswers: 'Fragen und Antworten', atGlance: 'Auf einen Blick',
    personalizedStep: 'Ihr nächster Schritt', explore: 'Nächsten Schritt planen',
    callAdvisor: 'Berater anrufen', privateSupport: 'Private Dokumentenhilfe · Die Genehmigung liegt bei der Behörde',
    providerDisclaimer: 'Wir sind ein privater Anbieter für Dokumenten- und PRO-Services, keine Behörde der VAE. Gebühren, Voraussetzungen und Bearbeitungszeiten können sich ändern.',
    leadAssurance: 'Diese Seite speichert Ihre Angaben nicht. Sie entscheiden, wann Sie WhatsApp öffnen.',
    addDocument: 'Dokument für Ihr Angebot hinzufügen', yourName: 'Ihr Name',
    phone: 'Telefon / WhatsApp', email: 'E-Mail (optional)', request: 'Wobei können wir helfen?',
    prepareInquiry: 'WhatsApp-Anfrage vorbereiten', continueWhatsapp: 'Zu WhatsApp wechseln',
    inquiryReady: 'Ihre Anfrage ist vorbereitet und wurde noch nicht gesendet.',
  },
  ES: {
    home: 'Inicio', services: 'Servicios', breadcrumb: 'Ruta de navegación', overview: 'Resumen',
    whyItMatters: 'Por qué es importante', process: 'Proceso', prepareFile: 'Prepare su expediente',
    questionsAnswers: 'Preguntas y respuestas', atGlance: 'En resumen',
    personalizedStep: 'Su próximo paso personalizado', explore: 'Planificar el siguiente paso',
    callAdvisor: 'Llamar a un asesor', privateSupport: 'Apoyo documental privado · La aprobación corresponde a la autoridad',
    providerDisclaimer: 'Somos una consultoría privada de documentación y servicios PRO, no una entidad gubernamental de EAU. Las tasas, los requisitos y los plazos pueden cambiar.',
    leadAssurance: 'Esta página no guarda sus datos. Usted decide cuándo continuar por WhatsApp.',
    addDocument: 'Añadir un documento para el presupuesto', yourName: 'Su nombre',
    phone: 'Teléfono / WhatsApp', email: 'Correo electrónico (opcional)', request: '¿En qué podemos ayudarle?',
    prepareInquiry: 'Preparar consulta por WhatsApp', continueWhatsapp: 'Continuar a WhatsApp',
    inquiryReady: 'Su consulta está lista. Aún no se ha enviado.',
  },
  FR: {
    home: 'Accueil', services: 'Services', breadcrumb: 'Fil d’Ariane', overview: 'Présentation',
    whyItMatters: 'Pourquoi est-ce important ?', process: 'Étapes', prepareFile: 'Préparer votre dossier',
    questionsAnswers: 'Questions et réponses', atGlance: 'En bref',
    personalizedStep: 'Votre prochaine étape', explore: 'Préparer la prochaine étape',
    callAdvisor: 'Appeler un conseiller', privateSupport: 'Accompagnement documentaire privé · L’autorité décide de l’approbation',
    providerDisclaimer: 'Nous sommes un cabinet privé de services documentaires et PRO, et non une autorité des EAU. Les frais, critères et délais peuvent évoluer.',
    leadAssurance: 'Cette page ne conserve pas vos informations. Vous choisissez quand poursuivre sur WhatsApp.',
    addDocument: 'Ajouter un document pour votre devis', yourName: 'Votre nom',
    phone: 'Téléphone / WhatsApp', email: 'E-mail (facultatif)', request: 'Comment pouvons-nous vous aider ?',
    prepareInquiry: 'Préparer une demande WhatsApp', continueWhatsapp: 'Continuer sur WhatsApp',
    inquiryReady: 'Votre demande est prête. Elle n’a pas encore été envoyée.',
  },
  TR: {
    home: 'Ana sayfa', services: 'Hizmetler', breadcrumb: 'Sayfa yolu', overview: 'Genel bakış',
    whyItMatters: 'Neden önemli?', process: 'Süreç', prepareFile: 'Dosyanızı hazırlayın',
    questionsAnswers: 'Sorular ve yanıtlar', atGlance: 'Kısa bilgi',
    personalizedStep: 'Size özel sonraki adım', explore: 'Sonraki adımı planlayın',
    callAdvisor: 'Danışmanı arayın', privateSupport: 'Özel belge desteği · Resmî onay yetkili makama aittir',
    providerDisclaimer: 'BAE devlet kurumu değil, özel belge hazırlama ve PRO hizmet sağlayıcısıyız. Ücretler, uygunluk ve işlem süreleri değişebilir.',
    leadAssurance: 'Bu sayfa bilgilerinizi kaydetmez. WhatsApp üzerinden ne zaman devam edeceğinize siz karar verirsiniz.',
    addDocument: 'Teklif için belge ekleyin', yourName: 'Adınız',
    phone: 'Telefon / WhatsApp', email: 'E-posta (isteğe bağlı)', request: 'Size nasıl yardımcı olabiliriz?',
    prepareInquiry: 'WhatsApp talebi hazırlayın', continueWhatsapp: 'WhatsApp’a devam edin',
    inquiryReady: 'Talebiniz hazır. Henüz gönderilmedi.',
  },
  ZH: {
    home: '首页', services: '服务', breadcrumb: '面包屑导航', overview: '概览',
    whyItMatters: '服务说明', process: '办理流程', prepareFile: '准备申请材料',
    questionsAnswers: '常见问题', atGlance: '快速了解',
    personalizedStep: '为您定制的下一步', explore: '规划下一步',
    callAdvisor: '致电顾问', privateSupport: '私人文件支持 · 政府批准由主管部门决定',
    providerDisclaimer: '我们是私人文件及 PRO 服务机构，并非阿联酋政府部门。费用、资格和办理时间可能会变化。',
    leadAssurance: '本页面不会保存您的信息。您可以自行决定何时通过 WhatsApp 继续。',
    addDocument: '添加文件以获取报价', yourName: '姓名',
    phone: '电话 / WhatsApp', email: '电子邮箱（选填）', request: '您需要什么帮助？',
    prepareInquiry: '准备 WhatsApp 咨询', continueWhatsapp: '继续前往 WhatsApp',
    inquiryReady: '咨询内容已准备好，尚未发送。',
  },
} as const satisfies Record<Language, Record<string, string>>;

for (const language of ['EN', 'AR', 'RU', 'DE', 'ES', 'FR', 'TR', 'ZH'] as const) {
  registerLocalizedCopy(language, servicePageCopy[language]);
}

export type ServicePageCopyKey = keyof (typeof servicePageCopy)['EN'];

export function servicePageText(language: Language, key: ServicePageCopyKey): string {
  return servicePageCopy[language][key];
}

const serviceTitles: Record<Language, Record<string, string>> = {
  EN: {
    'Family Visa': 'Family Visa', 'Golden Visa': 'Golden Visa', 'Property Visa': 'Property Visa',
    'Newborn Visa': 'Newborn Visa', 'Maid Visa': 'Maid Visa', 'Emirates ID': 'Emirates ID',
    'PRO Services': 'PRO Services', 'Amer Center': 'Amer Center', Attestation: 'Attestation',
    'Legal Translation': 'Legal Translation', 'Power of Attorney (POA)': 'Power of Attorney (POA)',
    'Wills & Last Testament': 'Wills & Last Testament', 'DLD Trustee Services': 'DLD Trustee Services',
    'Property Revaluation': 'Property Revaluation', 'Medical & EID': 'Medical & EID',
    'Visa Validity Checker': 'Visa Validity Checker', 'ILOE Insurance': 'ILOE Insurance',
  },
  AR: {
    'Family Visa': 'تأشيرة العائلة', 'Golden Visa': 'التأشيرة الذهبية', 'Property Visa': 'تأشيرة العقار',
    'Newborn Visa': 'تأشيرة المولود الجديد', 'Maid Visa': 'تأشيرة العمالة المنزلية', 'Emirates ID': 'الهوية الإماراتية',
    'PRO Services': 'خدمات PRO', 'Amer Center': 'مركز آمر', Attestation: 'تصديق المستندات',
    'Legal Translation': 'الترجمة القانونية', 'Power of Attorney (POA)': 'التوكيل الرسمي',
    'Wills & Last Testament': 'الوصايا والوصية الأخيرة', 'DLD Trustee Services': 'خدمات أمناء دائرة الأراضي',
    'Property Revaluation': 'إعادة تقييم العقارات', 'Medical & EID': 'الفحص الطبي والهوية',
    'Visa Validity Checker': 'التحقق من صلاحية التأشيرة', 'ILOE Insurance': 'تأمين ILOE ضد التعطل',
  },
  RU: {
    'Family Visa': 'Семейная виза', 'Golden Visa': 'Золотая виза', 'Property Visa': 'Виза для владельцев недвижимости',
    'Newborn Visa': 'Виза для новорождённого', 'Maid Visa': 'Виза для домашнего персонала', 'Emirates ID': 'Emirates ID',
    'PRO Services': 'PRO-услуги', 'Amer Center': 'Центр Amer', Attestation: 'Легализация документов',
    'Legal Translation': 'Юридический перевод', 'Power of Attorney (POA)': 'Доверенность',
    'Wills & Last Testament': 'Завещания', 'DLD Trustee Services': 'Услуги доверительных управляющих DLD',
    'Property Revaluation': 'Переоценка недвижимости', 'Medical & EID': 'Медосмотр и Emirates ID',
    'Visa Validity Checker': 'Проверка срока действия визы', 'ILOE Insurance': 'Страхование ILOE',
  },
  DE: {
    'Family Visa': 'Familienvisum', 'Golden Visa': 'Golden Visa', 'Property Visa': 'Immobilienvisum',
    'Newborn Visa': 'Visum für Neugeborene', 'Maid Visa': 'Visum für Haushaltspersonal', 'Emirates ID': 'Emirates ID',
    'PRO Services': 'PRO-Services', 'Amer Center': 'Amer Center', Attestation: 'Dokumentenbeglaubigung',
    'Legal Translation': 'Juristische Übersetzung', 'Power of Attorney (POA)': 'Vollmacht',
    'Wills & Last Testament': 'Testamente', 'DLD Trustee Services': 'DLD-Treuhandservices',
    'Property Revaluation': 'Immobilienneubewertung', 'Medical & EID': 'Medizinische Untersuchung und Emirates ID',
    'Visa Validity Checker': 'Visumgültigkeit prüfen', 'ILOE Insurance': 'ILOE-Versicherung',
  },
  ES: {
    'Family Visa': 'Visado familiar', 'Golden Visa': 'Golden Visa', 'Property Visa': 'Visado inmobiliario',
    'Newborn Visa': 'Visado para recién nacidos', 'Maid Visa': 'Visado para personal doméstico', 'Emirates ID': 'Emirates ID',
    'PRO Services': 'Servicios PRO', 'Amer Center': 'Centro Amer', Attestation: 'Legalización de documentos',
    'Legal Translation': 'Traducción jurídica', 'Power of Attorney (POA)': 'Poder notarial',
    'Wills & Last Testament': 'Testamentos', 'DLD Trustee Services': 'Servicios fiduciarios de DLD',
    'Property Revaluation': 'Revaloración inmobiliaria', 'Medical & EID': 'Examen médico y Emirates ID',
    'Visa Validity Checker': 'Consultar la validez del visado', 'ILOE Insurance': 'Seguro ILOE',
  },
  FR: {
    'Family Visa': 'Visa familial', 'Golden Visa': 'Golden Visa', 'Property Visa': 'Visa immobilier',
    'Newborn Visa': 'Visa pour nouveau-né', 'Maid Visa': 'Visa pour personnel domestique', 'Emirates ID': 'Emirates ID',
    'PRO Services': 'Services PRO', 'Amer Center': 'Centre Amer', Attestation: 'Légalisation de documents',
    'Legal Translation': 'Traduction juridique', 'Power of Attorney (POA)': 'Procuration',
    'Wills & Last Testament': 'Testaments', 'DLD Trustee Services': 'Services fiduciaires DLD',
    'Property Revaluation': 'Réévaluation immobilière', 'Medical & EID': 'Examen médical et Emirates ID',
    'Visa Validity Checker': 'Vérifier la validité du visa', 'ILOE Insurance': 'Assurance ILOE',
  },
  TR: {
    'Family Visa': 'Aile vizesi', 'Golden Visa': 'Golden Visa', 'Property Visa': 'Gayrimenkul vizesi',
    'Newborn Visa': 'Yeni doğan vizesi', 'Maid Visa': 'Ev hizmetlisi vizesi', 'Emirates ID': 'Emirates ID',
    'PRO Services': 'PRO hizmetleri', 'Amer Center': 'Amer Merkezi', Attestation: 'Belge tasdiki',
    'Legal Translation': 'Hukuki çeviri', 'Power of Attorney (POA)': 'Vekâletname',
    'Wills & Last Testament': 'Vasiyetname hizmetleri', 'DLD Trustee Services': 'DLD mütevelli hizmetleri',
    'Property Revaluation': 'Gayrimenkul yeniden değerlemesi', 'Medical & EID': 'Sağlık taraması ve Emirates ID',
    'Visa Validity Checker': 'Vize geçerlilik kontrolü', 'ILOE Insurance': 'ILOE sigortası',
  },
  ZH: {
    'Family Visa': '家庭签证', 'Golden Visa': '黄金签证', 'Property Visa': '房产签证',
    'Newborn Visa': '新生儿签证', 'Maid Visa': '家庭雇员签证', 'Emirates ID': '阿联酋身份证',
    'PRO Services': 'PRO 政务服务', 'Amer Center': 'Amer 服务中心', Attestation: '文件认证',
    'Legal Translation': '法律翻译', 'Power of Attorney (POA)': '授权委托书',
    'Wills & Last Testament': '遗嘱服务', 'DLD Trustee Services': 'DLD 受托人服务',
    'Property Revaluation': '房产重新估值', 'Medical & EID': '体检与阿联酋身份证',
    'Visa Validity Checker': '签证有效期查询', 'ILOE Insurance': 'ILOE 失业保险',
  },
};

for (const language of ['EN', 'AR', 'RU', 'DE', 'ES', 'FR', 'TR', 'ZH'] as const) {
  registerLocalizedCopy(language, serviceTitles[language]);
}

export function serviceTitleText(language: Language, title: string): string {
  return serviceTitles[language][title] ?? title;
}

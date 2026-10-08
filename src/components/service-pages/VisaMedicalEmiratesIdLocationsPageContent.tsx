'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Compass,
  FileText,
  Fingerprint,
  MapPin,
  Navigation,
  Phone,
  Stethoscope,
} from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { contactInfo } from '@/lib/contactInfo';

export interface LocationCenter {
  id: string;
  name: string;
  type: 'medical' | 'eid' | 'both';
  badges: string[];
  area: string;
  lat: number;
  lng: number;
  mapUrl: string;
  description: string;
  isStarred?: boolean;
}

const centersData: LocationCenter[] = [
  // Medical & EID combined
  {
    id: 'al-muhaisnah',
    name: 'Al Muhaisnah Center',
    type: 'both',
    badges: ['EID Biometrics', '+ Medical', '24h'],
    area: 'Al Muhaisnah 2, Dubai',
    lat: 25.275,
    lng: 55.405,
    mapUrl: 'https://maps.google.com/?q=Al+Muhaisnah+Medical+Fitness+Center+Dubai',
    description: 'Largest round-the-clock DHA medical screening and ICP biometrics hub in Dubai.',
    isStarred: true,
  },
  {
    id: 'al-nahda',
    name: 'Al Nahda Center',
    type: 'both',
    badges: ['EID Biometrics', '+ Medical', 'Express'],
    area: 'Al Nahda 2, Dubai',
    lat: 25.285,
    lng: 55.37,
    mapUrl: 'https://maps.google.com/?q=Al+Nahda+Center+Dubai',
    description: 'Integrated government service center providing DHA medical tests and ICP biometrics under one roof.',
    isStarred: true,
  },
  {
    id: 'al-yalayis',
    name: 'Al Yalayis Center',
    type: 'both',
    badges: ['EID Biometrics', '+ Medical', 'Express'],
    area: 'Dubai Investment Park (DIP), Dubai',
    lat: 24.985,
    lng: 55.18,
    mapUrl: 'https://maps.google.com/?q=Al+Yalayis+Government+Transactions+Center+Dubai',
    description: 'Full-service government center serving DIP, Jebel Ali, and South Dubai applicants.',
    isStarred: true,
  },

  // Smart Salem (30-min results)
  {
    id: 'smart-salem-city-walk',
    name: 'Smart Salem — City Walk',
    type: 'medical',
    badges: ['Smart Salem', 'VIP (30-min)', 'Paperless'],
    area: 'City Walk, Dubai',
    lat: 25.2075,
    lng: 55.263,
    mapUrl: 'https://maps.google.com/?q=Smart+Salem+City+Walk+Dubai',
    description: 'AI-driven premium medical fitness lounge with certified results in 30 minutes.',
    isStarred: true,
  },
  {
    id: 'smart-salem-dafza',
    name: 'Smart Salem — DAFZA',
    type: 'medical',
    badges: ['Smart Salem', 'VIP (30-min)', 'Paperless'],
    area: 'Dubai Airport Freezone (DAFZA), Dubai',
    lat: 25.26,
    lng: 55.375,
    mapUrl: 'https://maps.google.com/?q=Smart+Salem+DAFZA+Dubai',
    description: 'High-speed 30-minute medical screening hub located at Dubai Airport Freezone.',
    isStarred: true,
  },
  {
    id: 'smart-salem-difc',
    name: 'Smart Salem — DIFC',
    type: 'medical',
    badges: ['Smart Salem', 'VIP (30-min)', 'Paperless'],
    area: 'Index Tower, DIFC, Dubai',
    lat: 25.2045,
    lng: 55.2785,
    mapUrl: 'https://maps.google.com/?q=Smart+Salem+DIFC+Dubai',
    description: 'Executive 30-minute medical fitness lounge situated in DIFC Index Tower.',
    isStarred: true,
  },

  // Medical VIP & 24h
  {
    id: 'al-garhoud',
    name: 'Al Garhoud Center',
    type: 'medical',
    badges: ['VIP', '24h', 'Express'],
    area: 'Al Garhoud, Dubai',
    lat: 25.2442,
    lng: 55.34,
    mapUrl: 'https://maps.google.com/?q=Al+Garhoud+Medical+Fitness+Center+Dubai',
    description: '24-hour DHA medical screening facility with VIP express processing.',
    isStarred: true,
  },
  {
    id: 'al-karama',
    name: 'Al Karama Center',
    type: 'medical',
    badges: ['VIP', 'Express'],
    area: 'Al Karama, Dubai',
    lat: 25.247,
    lng: 55.305,
    mapUrl: 'https://maps.google.com/?q=Al+Karama+Medical+Fitness+Center+Dubai',
    description: 'Central Dubai screening center with fast-track VIP options.',
    isStarred: true,
  },
  {
    id: 'al-qusais',
    name: 'Al Qusais Center',
    type: 'medical',
    badges: ['VIP', 'Express'],
    area: 'Al Qusais Industrial Area 1, Dubai',
    lat: 25.277,
    lng: 55.378,
    mapUrl: 'https://maps.google.com/?q=Al+Qusais+Medical+Fitness+Center+Dubai',
    description: 'High-throughput medical screening center serving Deira and Qusais.',
    isStarred: true,
  },
  {
    id: 'dr-suleiman',
    name: 'Dr. Suleiman Al Habib Center',
    type: 'medical',
    badges: ['VIP', 'Private Hospital'],
    area: 'Healthcare City, Dubai',
    lat: 25.234,
    lng: 55.321,
    mapUrl: 'https://maps.google.com/?q=Dr+Suleiman+Al+Habib+Hospital+Dubai',
    description: 'Authorized private healthcare partner for luxury DHA medical screening.',
  },
  {
    id: 'jlt-center',
    name: 'JLT Executive Center',
    type: 'medical',
    badges: ['VIP', 'Executive'],
    area: 'Cluster I, Jumeirah Lake Towers, Dubai',
    lat: 25.075,
    lng: 55.148,
    mapUrl: 'https://maps.google.com/?q=JLT+Medical+Fitness+Center+Dubai',
    description: 'Dedicated executive screening center for DMCC and JLT residents.',
  },
  {
    id: 'al-safa',
    name: 'Al Safa Center',
    type: 'medical',
    badges: ['VIP', 'Standard'],
    area: 'Al Safa 2, Sheikh Zayed Road, Dubai',
    lat: 25.176,
    lng: 55.235,
    mapUrl: 'https://maps.google.com/?q=Al+Safa+Medical+Fitness+Center+Dubai',
    description: 'Convenient Sheikh Zayed Road location for standard and express medical checks.',
  },
  {
    id: 'zabeel-center',
    name: 'Zabeel Executive Center',
    type: 'medical',
    badges: ['VIP', 'Executive'],
    area: 'Zabeel, Dubai',
    lat: 25.22,
    lng: 55.289,
    mapUrl: 'https://maps.google.com/?q=Zabeel+Medical+Fitness+Center+Dubai',
    description: 'Premier executive screening facility with private lounges.',
  },
  {
    id: 'knowledge-village',
    name: 'Knowledge Park Center',
    type: 'medical',
    badges: ['VIP', 'Freezone'],
    area: 'Dubai Knowledge Park, Dubai',
    lat: 25.108,
    lng: 55.167,
    mapUrl: 'https://maps.google.com/?q=Knowledge+Village+Medical+Fitness+Center+Dubai',
    description: 'Screening facility serving TECOM, Internet City, and Media City applicants.',
  },

  // EID Only centers
  {
    id: 'al-barsha-eid',
    name: 'Al Barsha Center',
    type: 'eid',
    badges: ['EID Biometrics'],
    area: 'Al Barsha 2, Dubai',
    lat: 25.11,
    lng: 55.2,
    mapUrl: 'https://maps.google.com/?q=Al+Barsha+Emirates+ID+Center+Dubai',
    description: 'Official ICP customer happiness center for Emirates ID biometrics appointments.',
  },
  {
    id: 'al-rashidiya-eid',
    name: 'Al Rashidiya Center',
    type: 'eid',
    badges: ['EID Biometrics'],
    area: 'Al Rashidiya, Dubai',
    lat: 25.228,
    lng: 55.388,
    mapUrl: 'https://maps.google.com/?q=Al+Rashidiya+Emirates+ID+Center+Dubai',
    description: 'Dedicated ICP biometrics appointment center near Rashidiya Metro.',
  },
  {
    id: 'al-satwa-eid',
    name: 'Al Satwa Center',
    type: 'eid',
    badges: ['EID Biometrics'],
    area: 'Al Satwa, Dubai',
    lat: 25.225,
    lng: 55.27,
    mapUrl: 'https://maps.google.com/?q=Al+Satwa+Emirates+ID+Center+Dubai',
    description: 'ICP biometrics and identity card processing location.',
  },
  {
    id: 'al-baraha-eid',
    name: 'Al Baraha Center',
    type: 'eid',
    badges: ['EID Biometrics'],
    area: 'Al Baraha, Deira, Dubai',
    lat: 25.28,
    lng: 55.312,
    mapUrl: 'https://maps.google.com/?q=Al+Baraha+Emirates+ID+Center+Dubai',
    description: 'Deira ICP customer happiness center for fingerprint and biometric capture.',
  },
  {
    id: 'hatta-eid',
    name: 'Hatta Center',
    type: 'eid',
    badges: ['EID Biometrics'],
    area: 'Hatta, Dubai',
    lat: 24.81,
    lng: 56.12,
    mapUrl: 'https://maps.google.com/?q=Hatta+Emirates+ID+Center+Dubai',
    description: 'ICP biometrics center serving Hatta municipality and surrounding areas.',
  },
  {
    id: 'al-lisaili-eid',
    name: 'Al Lisaili Center',
    type: 'eid',
    badges: ['EID Biometrics'],
    area: 'Al Lisaili, Dubai',
    lat: 24.95,
    lng: 55.45,
    mapUrl: 'https://maps.google.com/?q=Al+Lisaili+Emirates+ID+Center+Dubai',
    description: 'Suburban ICP biometrics center for identity card registration.',
  },
];

const medicalFaqs = [
  {
    question: 'What does the visa medical test include?',
    answer: 'The standard UAE visa medical test includes a blood test for infectious diseases (HIV, Hepatitis B, Hepatitis C, Syphilis) and a chest X-ray to screen for Tuberculosis (TB). Female domestic workers and specific professions may have additional screening requirements.',
  },
  {
    question: 'Who has to take the medical test?',
    answer: 'All adult residence visa applicants aged 18 and older in the UAE must pass the DHA medical fitness test for new visas or visa renewals. Children under 18 years old do not require medical screening.',
  },
  {
    question: 'Where do I take the test in Dubai?',
    answer: 'You can complete your screening at any official DHA (Dubai Health Authority) Medical Fitness Center, or at an accredited Smart Salem center for 30-minute express screening.',
  },
  {
    question: 'How much does it cost and how fast are results?',
    answer: 'Standard screening is AED 273 with results issued in 24 to 48 hours. VIP express screening is AED 703 (results in 4 to 6 hours). Smart Salem AI screening is AED 700+ with certified results in 30 minutes.',
  },
  {
    question: 'How do I get my results?',
    answer: 'Your medical fitness certificate is sent directly via SMS and email as an official DHA PDF. Results are also automatically linked to GDRFA and ICP immigration databases for visa stamping.',
  },
  {
    question: 'What is Smart Salem 30-minute screening?',
    answer: 'Smart Salem is a fully automated, paperless medical center powered by AI robotics and instant blood testing. It provides official DHA-certified medical fitness results within 30 minutes.',
  },
];

const eidFaqs = [
  {
    question: 'Who needs to attend Emirates ID biometrics?',
    answer: 'First-time applicants aged 15 and older must attend an ICP biometrics appointment to register fingerprints, facial photo, and signature. Renewals usually reuse existing biometrics unless ICP requests an update.',
  },
  {
    question: 'What documents do I need to bring for EID biometrics?',
    answer: 'You must bring your printed ICP appointment registration form (with PRAN number), your original passport, current entry permit or residence visa copy, and your appointment confirmation.',
  },
  {
    question: 'Can I change my biometrics appointment date or center?',
    answer: 'Yes, your biometrics appointment can be rescheduled to a different date or ICP center using your PRAN application reference on the official ICP portal or via our PRO desk.',
  },
  {
    question: 'What is the difference between EID biometrics and medical fitness?',
    answer: 'Medical fitness is a health screening test (blood test & X-ray) managed by DHA. Biometrics is an identity capture process (fingerprints & photo) managed by ICP. Both are required before residence visa issuance.',
  },
  {
    question: 'How long does Emirates ID printing take after biometrics?',
    answer: 'Once your residence visa is approved and stamped, your official Emirates ID card is printed and delivered via courier (Empost/Emirates Post) within 2 to 5 working days.',
  },
];

function getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

export function VisaMedicalEmiratesIdLocationsPageContent() {
  const [activeTab, setActiveTab] = useState<'medical' | 'eid'>('medical');
  const [medicalSubFilter, setMedicalSubFilter] = useState<'all' | 'smart-salem' | 'vip' | '24h'>('all');
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationNotice, setLocationNotice] = useState('');
  const [faqTab, setFaqTab] = useState<'medical' | 'eid'>('medical');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const requestUserLocation = () => {
    if (!navigator.geolocation) {
      setLocationNotice('Geolocation is not supported by your browser.');
      return;
    }
    setIsLocating(true);
    setLocationNotice('Locating your position...');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setIsLocating(false);
        setLocationNotice('Centers sorted by nearest distance to your location.');
      },
      () => {
        setIsLocating(false);
        setLocationNotice('Could not retrieve your location. Showing default center list.');
      },
      { enableHighAccuracy: true, timeout: 8000 },
    );
  };

  const filteredCenters = useMemo(() => {
    let list = centersData.filter((c) => {
      if (activeTab === 'medical') {
        if (c.type === 'eid') return false;
        if (medicalSubFilter === 'smart-salem') return c.badges.includes('Smart Salem');
        if (medicalSubFilter === 'vip') return c.badges.includes('VIP') || c.badges.includes('VIP (30-min)');
        if (medicalSubFilter === '24h') return c.badges.includes('24h');
        return true;
      } else {
        return c.type === 'eid' || c.type === 'both';
      }
    });

    if (userCoords) {
      list = list.map((c) => ({
        ...c,
        distanceKm: getDistanceKm(userCoords.lat, userCoords.lng, c.lat, c.lng),
      })).sort((a: any, b: any) => a.distanceKm - b.distanceKm);
    }

    return list;
  }, [activeTab, medicalSubFilter, userCoords]);

  const medicalCount = centersData.filter((c) => c.type === 'medical' || c.type === 'both').length;
  const eidCount = centersData.filter((c) => c.type === 'eid' || c.type === 'both').length;
  const smartSalemCount = centersData.filter((c) => c.badges.includes('Smart Salem')).length;

  return (
    <div className="gv-nearme-page">
      <div className="gv-nearme-shell">
        {/* Breadcrumbs */}
        <nav className="gv-nearme-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">Medical & EID Locations</span>
        </nav>

        {/* ── 1. HERO ────────────────────────────────────────── */}
        <header className="gv-nearme-hero">
          <div className="gv-nearme-hero-copy">
            <span className="gv-nearme-eyebrow">
              <span aria-hidden="true" />SERVICE LOCATIONS
            </span>
            <h1>Visa medical & Emirates ID centers, <span>sorted by nearest.</span></h1>
            <p>Find every official DHA medical fitness center and ICP Emirates ID biometrics location in Dubai. Tap a center for live Google Maps directions or share your location to sort nearest first.</p>
            
            <div className="gv-nearme-hero-actions">
              <button className="gv-nearme-btn gv-nearme-btn--gold" type="button" onClick={requestUserLocation} disabled={isLocating}>
                <Navigation size={16} /> {isLocating ? 'Locating centers...' : 'Find nearest center'}
              </button>
              <a className="gv-nearme-btn gv-nearme-btn--ghost" href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I need help booking a DHA Medical or Emirates ID biometrics center appointment in Dubai.')}`} target="_blank" rel="noreferrer">
                Book on WhatsApp <ArrowRight size={15} />
              </a>
            </div>

            {locationNotice && <p className="gv-nearme-notice"><Compass size={14} />{locationNotice}</p>}
          </div>

          <aside className="gv-nearme-hero-card">
            <div className="gv-nearme-stat-box">
              <div className="gv-nearme-stat-item">
                <span className="gv-nearme-stat-num">{medicalCount}</span>
                <span className="gv-nearme-stat-label">Visa Medical Centers</span>
              </div>
              <div className="gv-nearme-stat-item">
                <span className="gv-nearme-stat-num">{eidCount}</span>
                <span className="gv-nearme-stat-label">EID Biometrics Centers</span>
              </div>
              <div className="gv-nearme-stat-item gv-nearme-stat-item--highlight">
                <span className="gv-nearme-stat-num">{smartSalemCount}</span>
                <span className="gv-nearme-stat-label">Smart Salem 30-min Result</span>
              </div>
            </div>
          </aside>
        </header>

        {/* ── 2. CENTER FINDER & FILTERS ──────────────────────── */}
        <section className="gv-nearme-section" id="centers">
          <div className="gv-nearme-heading">
            <span className="gv-nearme-eyebrow"><span aria-hidden="true" />NEARBY LOCATIONS</span>
            <h2>Find a center <strong>near you.</strong></h2>
            <p>All official DHA medical fitness and ICP biometrics centers in Dubai. Tap any center card for Google Maps directions.</p>
          </div>

          {/* Main Category Switcher (Gold themed) */}
          <div className="gv-nearme-tabs-bar">
            <div className="gv-nearme-main-tabs" role="tablist" aria-label="Center type tabs">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'medical'}
                className={activeTab === 'medical' ? 'is-active' : ''}
                onClick={() => setActiveTab('medical')}
              >
                <Stethoscope size={16} /> Visa Medical
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'eid'}
                className={activeTab === 'eid' ? 'is-active' : ''}
                onClick={() => setActiveTab('eid')}
              >
                <Fingerprint size={16} /> Emirates ID
              </button>
            </div>

            <button className="gv-nearme-sort-btn" type="button" onClick={requestUserLocation}>
              <Compass size={15} /> Sort by nearest to me
            </button>
          </div>

          {/* Sub-filters for Medical */}
          {activeTab === 'medical' && (
            <div className="gv-nearme-subfilters" aria-label="Medical sub filters">
              {[
                { id: 'all', label: 'All Centers' },
                { id: 'smart-salem', label: 'Smart Salem (30-min)' },
                { id: 'vip', label: 'VIP / Express' },
                { id: '24h', label: '24 Hours' },
              ].map((sub) => (
                <button
                  key={sub.id}
                  type="button"
                  className={medicalSubFilter === sub.id ? 'is-active' : ''}
                  onClick={() => setMedicalSubFilter(sub.id as any)}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}

          <div className="gv-nearme-results-meta">
            <span><strong>{filteredCenters.length} centers</strong> · tap for directions</span>
            {userCoords && <small>Sorted by distance from your current coordinates</small>}
          </div>

          {/* Grid of Centers */}
          <div className="gv-nearme-grid">
            {filteredCenters.map((center: any) => (
              <article key={center.id} className="gv-nearme-card">
                <div className="gv-nearme-card-left">
                  <span className={`gv-nearme-icon ${center.type === 'eid' ? 'gv-nearme-icon--eid' : 'gv-nearme-icon--med'}`}>
                    {center.type === 'eid' ? <Fingerprint size={20} /> : <Stethoscope size={20} />}
                  </span>
                  <div>
                    <h3>
                      {center.name} {center.isStarred && <span className="gv-nearme-star" title="Popular center">★</span>}
                    </h3>
                    <p className="gv-nearme-area"><MapPin size={13} /> {center.area}</p>
                    <div className="gv-nearme-badges">
                      {center.badges.map((badge: string) => (
                        <span key={badge} className={`gv-nearme-badge ${badge.includes('Smart Salem') ? 'gv-nearme-badge--gold' : badge.includes('+ Medical') ? 'gv-nearme-badge--green' : ''}`}>
                          {badge}
                        </span>
                      ))}
                      {center.distanceKm !== undefined && (
                        <span className="gv-nearme-badge gv-nearme-badge--dist">
                          📍 {center.distanceKm} km away
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <a
                  className="gv-nearme-dir-btn"
                  href={center.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Directions to ${center.name}`}
                  title="Open Google Maps directions"
                >
                  <Navigation size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ── 3. EXPRESS GUIDANCE / HELP BANNER ──────────────── */}
        <section className="gv-nearme-banner">
          <span className="gv-nearme-eyebrow">EXPRESS GUIDANCE</span>
          <h2>Don’t want to figure it out alone?</h2>
          <p>We can arrange your visa medical fitness test and Emirates ID biometrics appointment as part of your visa application, so you only visit the right centers at the best time.</p>
          <a className="gv-nearme-btn gv-nearme-btn--gold" href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I need help arranging my DHA medical screening and Emirates ID biometrics appointment.')}`} target="_blank" rel="noreferrer">
            Get help on WhatsApp <ArrowRight size={16} />
          </a>
        </section>

        {/* ── 4. RECENT ARTICLES CARD ─────────────────────────── */}
        <section className="gv-nearme-section">
          <div className="gv-nearme-heading">
            <span className="gv-nearme-eyebrow"><span aria-hidden="true" />HELP & GUIDES</span>
            <h2>Recent <strong>articles</strong></h2>
          </div>
          <div className="gv-nearme-article-card">
            <div className="gv-nearme-article-img">
              <FileText size={38} />
            </div>
            <div className="gv-nearme-article-copy">
              <span className="gv-nearme-article-tag">Emirates ID Guide</span>
              <h3>Lost Emirates ID? Here’s what to do next.</h3>
              <p>File a report, apply for card replacement via ICP, and complete any required biometrics without losing your residence status.</p>
              <Link href="/emirates-id" className="gv-nearme-article-link">
                Read guide on Emirates ID replacement <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 5. DUAL-TAB FAQ SECTION ─────────────────────────── */}
        <section className="gv-nearme-section gv-nearme-faq-section" id="faq">
          <div className="gv-nearme-heading" style={{ textAlign: 'center', margin: '0 auto 28px' }}>
            <h2>Frequently asked <strong>questions.</strong></h2>
          </div>

          <div className="gv-nearme-faq-tabs">
            <button
              type="button"
              className={faqTab === 'eid' ? 'is-active' : ''}
              onClick={() => { setFaqTab('eid'); setOpenFaq(0); }}
            >
              <Fingerprint size={16} /> Emirates ID
            </button>
            <button
              type="button"
              className={faqTab === 'medical' ? 'is-active' : ''}
              onClick={() => { setFaqTab('medical'); setOpenFaq(0); }}
            >
              <Stethoscope size={16} /> Visa Medical
            </button>
          </div>

          <div className="gv-nearme-faq-title">
            <h3>{faqTab === 'medical' ? 'Visa Medical Screening — frequently asked questions' : 'Emirates ID Biometrics — frequently asked questions'}</h3>
          </div>

          <div className="gv-nearme-faqs">
            {(faqTab === 'medical' ? medicalFaqs : eidFaqs).map((faq, index) => (
              <details key={faq.question} open={openFaq === index}>
                <summary onClick={(e) => { e.preventDefault(); setOpenFaq(openFaq === index ? null : index); }}>
                  {faq.question}
                  <ChevronDown size={18} />
                </summary>
                {openFaq === index && <p>{faq.answer}</p>}
              </details>
            ))}
          </div>
        </section>

        {/* ── 6. CLOSING CTA BANNER ───────────────────────────── */}
        <section className="gv-nearme-closing">
          <span className="gv-nearme-eyebrow" style={{ color: '#DFBE74' }}>EXPRESS SERVICE</span>
          <h2>Need your visa medical or Emirates ID sorted?</h2>
          <p>Brightlink Consulting handles document typing, appointment scheduling, and express transport guidance for all Dubai centers.</p>
          <div className="gv-nearme-closing-actions">
            <a className="gv-nearme-btn gv-nearme-btn--gold" href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I need help with my visa medical or Emirates ID appointment in Dubai.')}`} target="_blank" rel="noreferrer">
              WhatsApp us <ArrowRight size={16} />
            </a>
            <a className="gv-nearme-closing-phone" href={contactInfo.phoneHref}>
              <Phone size={15} /> Call {contactInfo.phone}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export function VisaMedicalEmiratesIdLocationsPageContentWithFrame() {
  return (
    <StandalonePageFrame currentView="service" showMobileStickyBar={false}>
      <VisaMedicalEmiratesIdLocationsPageContent />
    </StandalonePageFrame>
  );
}

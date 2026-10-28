// Central dynamic data source for Delhi Apostille (mirrors WordPress dynamic content)

export const IMG = {
  logo: "https://static.prod-images.emergentagent.com/jobs/d1b432ff-cb8c-4f73-8b34-1ef3159dad0b/images/7a6ef6e7f0c0f99d7829ad2dd2ca2a8f2731adac411d2329a8e7994f9408cdac.jpeg",
  hero: "https://static.prod-images.emergentagent.com/jobs/d1b432ff-cb8c-4f73-8b34-1ef3159dad0b/images/3bc28cf435ccfe92503dd411c07c36b1d7db12719b8e8b9ca185c88bc3e0ee8f.jpeg",
  stamp: "https://static.prod-images.emergentagent.com/jobs/d1b432ff-cb8c-4f73-8b34-1ef3159dad0b/images/ea98af98d191d41558e022bd015c290409aaa541b53f90c2b9e11b54be38803b.jpeg",
  globe: "https://static.prod-images.emergentagent.com/jobs/d1b432ff-cb8c-4f73-8b34-1ef3159dad0b/images/3598254f6a95245be57fe3deaafb1794c7476ab2bc5d978da74adfcca164c31b.jpeg",
  passport: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  passportHand: "https://images.unsplash.com/photo-1553697388-94e804e2f0f6?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  handshake: "https://images.unsplash.com/photo-1698047682091-782b1e5c6536?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  signing: "https://images.unsplash.com/photo-1759310610325-2c7cb621e5e3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  graduation: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  degree: "https://images.unsplash.com/photo-1627556704302-624286467c65?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  worldmap: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  indiaGate: "https://images.unsplash.com/photo-1587474260584-136574528ed5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
};

export const CONTACT = {
  brand: "Delhi Apostille",
  tagline: "MEA Authorised Apostille & Attestation Services",
  domain: "www.delhi-apostille.in",
  phone: "+91 98100 00000",
  phoneRaw: "919810000000",
  altPhone: "+91 11 4000 0000",
  whatsapp: "919810000000",
  email: "info@delhi-apostille.in",
  regNo: "MEA/OSD/2024/DL-0098",
  hours: "Mon – Sat: 10:00 AM – 7:00 PM",
  address: "3rd Floor, Statesman House, Barakhamba Road, Connaught Place, New Delhi – 110001",
  mapEmbed: "https://www.google.com/maps?q=Connaught+Place+New+Delhi&output=embed",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "MEA Apostille", to: "/services/mea-apostille" },
      { label: "Educational Attestation", to: "/services/educational-certificate-attestation" },
      { label: "Personal Attestation", to: "/services/personal-document-attestation" },
      { label: "Commercial Attestation", to: "/services/commercial-document-attestation" },
      { label: "Certificate Attestation", to: "/services/certificate-attestation" },
      { label: "Language Translation", to: "/services/language-translation" },
    ],
  },
  { label: "Attestation", to: "/attestation" },
  { label: "Embassy Legalization", to: "/embassy-legalization" },
  { label: "Apostille from Delhi / MEA", to: "/apostille-delhi-mea" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const TRUST = [
  { icon: "ShieldCheck", text: "MEA Authorised Document Processing" },
  { icon: "BadgeCheck", text: "ISO Certified & Government Recognised" },
  { icon: "FileCheck2", text: "50,000+ Documents Successfully Attested" },
  { icon: "Truck", text: "Free Pickup & Express Delivery in Delhi NCR" },
];

export const SERVICES = [
  {
    slug: "mea-apostille",
    title: "MEA Apostille Services",
    icon: "Stamp",
    image: IMG.stamp,
    short: "Official MEA apostille sticker for all Hague Convention member countries on educational, personal and commercial documents.",
    intro: "An apostille is a computer-generated sticker issued by the Ministry of External Affairs (MEA), Government of India, that legalises your Indian documents for use in any of the 125+ Hague Convention member countries — without any further embassy attestation.",
    documents: ["Degree & Diploma Certificates", "Birth & Marriage Certificates", "Police Clearance Certificate (PCC)", "Power of Attorney", "Commercial Invoices", "Affidavits"],
    steps: ["Notary / State Verification", "SDM or HRD Authentication", "MEA Apostille Sticker", "Secure Doorstep Delivery"],
    faq: [
      { q: "How long does MEA apostille take?", a: "For personal & educational documents, apostille is typically completed in 3–6 working days after state verification." },
      { q: "Is MEA apostille valid worldwide?", a: "It is valid in all 125+ member countries of the Hague Apostille Convention. For non-member countries, embassy legalisation is required." },
    ],
  },
  {
    slug: "educational-certificate-attestation",
    title: "Educational Certificate Attestation",
    icon: "GraduationCap",
    image: IMG.degree,
    short: "Attestation of degrees, diplomas, marksheets and transcripts for higher studies, jobs and licensing abroad.",
    intro: "Educational certificate attestation authenticates your academic documents through HRD, SDM and MEA so they are accepted by foreign universities, employers and licensing authorities.",
    documents: ["Degree Certificate", "Diploma Certificate", "SSC / HSC Marksheets", "Transcripts", "Bonafide Certificate", "Nursing / Medical Certificates"],
    steps: ["University Verification (if required)", "State HRD Attestation", "MEA Apostille / Attestation", "Embassy Legalisation (if applicable)"],
    faq: [
      { q: "Do I need HRD attestation for a work visa?", a: "Yes, most Gulf and European countries require HRD attestation of your degree before MEA and embassy legalisation." },
    ],
  },
  {
    slug: "personal-document-attestation",
    title: "Personal Document Attestation",
    icon: "Users",
    image: IMG.passportHand,
    short: "Birth, marriage, death, PCC and affidavit attestation for family visa, residency and immigration.",
    intro: "Personal document attestation validates your civil documents for family visas, dependent visas, residence permits and immigration purposes across the globe.",
    documents: ["Birth Certificate", "Marriage Certificate", "Death Certificate", "Police Clearance Certificate", "Affidavit", "Divorce Decree"],
    steps: ["Notary Attestation", "Home Department / SDM", "MEA Apostille / Attestation", "Embassy Legalisation (if applicable)"],
    faq: [
      { q: "Which documents are needed for a family visa?", a: "Marriage and birth certificates are the most commonly required documents, attested up to MEA and the destination embassy." },
    ],
  },
  {
    slug: "commercial-document-attestation",
    title: "Commercial Document Attestation",
    icon: "Building2",
    image: IMG.signing,
    short: "GST, incorporation, invoices and power of attorney attested via Chamber of Commerce, MEA and embassies.",
    intro: "Commercial document attestation certifies your company and trade documents for setting up business, opening branches, export–import and tenders abroad.",
    documents: ["Certificate of Incorporation", "GST / Tax Registration", "Commercial Invoice", "Power of Attorney", "Board Resolution", "Export Documents"],
    steps: ["Chamber of Commerce Certification", "MEA Apostille / Attestation", "Embassy Legalisation", "Doorstep Delivery"],
    faq: [
      { q: "Is Chamber of Commerce mandatory?", a: "For most commercial documents, Chamber of Commerce certification is required before MEA attestation." },
    ],
  },
  {
    slug: "certificate-attestation",
    title: "Certificate Attestation",
    icon: "FileCheck2",
    image: IMG.passport,
    short: "End-to-end certificate attestation covering notary, state, MEA and embassy stages under one roof.",
    intro: "Certificate attestation is the process of verifying the genuineness of a document by authorised departments so it is legally recognised in a foreign country.",
    documents: ["Educational Certificates", "Personal Certificates", "Commercial Certificates", "Experience Certificates"],
    steps: ["Notary Attestation", "State Verification (SDM / HRD / Home Dept)", "MEA Attestation", "Embassy Legalisation"],
    faq: [
      { q: "What is the difference between apostille and attestation?", a: "Apostille is for Hague Convention countries; attestation (embassy legalisation) is for non-member countries." },
    ],
  },
  {
    slug: "language-translation",
    title: "Certified Language Translation",
    icon: "Languages",
    image: IMG.worldmap,
    short: "Sworn and certified translation of documents into Arabic, French, German, Spanish and 20+ languages.",
    intro: "Many embassies require your documents translated by a certified translator. We provide legally accepted, sworn translations in 20+ languages.",
    documents: ["Certificates & Marksheets", "Legal Contracts", "Personal Documents", "Commercial Documents"],
    steps: ["Document Assessment", "Certified Translation", "Notarisation of Translation", "Delivery with Certification"],
    faq: [
      { q: "Are your translations legally accepted?", a: "Yes, our translations are done by certified sworn translators and accepted by embassies and government bodies." },
    ],
  },
];

export const DEPARTMENTS = [
  { name: "Ministry of External Affairs", short: "MEA India", icon: "Landmark", desc: "Final apostille & attestation authority of the Government of India for international document legalisation." },
  { name: "Sub-Divisional Magistrate", short: "SDM Delhi", icon: "Gavel", desc: "State-level authentication of personal and educational documents accepted by MEA." },
  { name: "Human Resource Development", short: "HRD", icon: "GraduationCap", desc: "State education department verification mandatory for degrees and academic certificates." },
  { name: "Home Department", short: "GAD / Home", icon: "Building", desc: "State Home / General Administration Department attestation for personal certificates." },
  { name: "Chamber of Commerce", short: "COC", icon: "Briefcase", desc: "Certification of commercial and trade documents prior to MEA attestation." },
  { name: "Foreign Embassies", short: "Consulates", icon: "Globe2", desc: "Embassy legalisation for non-Hague countries such as UAE, Saudi, Qatar and Kuwait." },
];

export const PROCESS = [
  { step: "01", icon: "Upload", title: "Submit Documents", desc: "Share a digital scan or request free doorstep courier pickup anywhere in Delhi NCR." },
  { step: "02", icon: "SearchCheck", title: "State & Dept. Verification", desc: "Verification from SDM, HRD or Home Department as required by the document jurisdiction." },
  { step: "03", icon: "Stamp", title: "MEA Apostille / Embassy Stamp", desc: "Official apostille sticker or embassy legalisation affixed by our MEA-authorised team." },
  { step: "04", icon: "PackageCheck", title: "Secure Express Delivery", desc: "Tracked air delivery of your verified original documents back to your address." },
];

export const WHY = [
  { icon: "MapPin", title: "Real-Time Document Tracking", desc: "Track every stage of your apostille journey with live status updates." },
  { icon: "Truck", title: "Free Pickup & Delivery", desc: "Complimentary doorstep collection and delivery across Delhi NCR." },
  { icon: "ShieldCheck", title: "100% Genuine & Verifiable", desc: "Every apostille and stamp is government-issued and independently verifiable." },
  { icon: "Clock", title: "Express Processing", desc: "Fast-track processing with the shortest possible turnaround times." },
  { icon: "Headset", title: "Dedicated Support 10–7", desc: "A dedicated case manager for every client, six days a week." },
  { icon: "Lock", title: "Confidential & Insured", desc: "Your original documents are handled securely and fully insured in transit." },
];

export const COUNTRIES = [
  { name: "United Arab Emirates", type: "Embassy Attestation" },
  { name: "Saudi Arabia", type: "Embassy Attestation" },
  { name: "Qatar", type: "Embassy Attestation" },
  { name: "Kuwait", type: "Embassy Attestation" },
  { name: "Oman", type: "Embassy Attestation" },
  { name: "China", type: "Embassy Attestation" },
  { name: "United States", type: "Apostille" },
  { name: "United Kingdom", type: "Apostille" },
  { name: "Germany", type: "Apostille" },
  { name: "Italy", type: "Apostille" },
  { name: "Netherlands", type: "Apostille" },
  { name: "Australia", type: "Apostille" },
];

export const STATS = [
  { value: 100, suffix: "+", label: "Countries Served" },
  { value: 25, suffix: "+", label: "Collection Centres" },
  { value: 50000, suffix: "+", label: "Happy Customers" },
  { value: 120000, suffix: "+", label: "Certificates Attested" },
];

export const TESTIMONIALS = [
  { name: "Rohan Mehta", role: "IT Professional, Dubai", text: "Delhi Apostille handled my degree attestation for a UAE work visa flawlessly. Free pickup, constant updates and delivered ahead of schedule. Highly recommended!", rating: 5 },
  { name: "Ananya Sharma", role: "Student, Germany", text: "I needed my marksheets apostilled for admission in Germany. The team explained every step and completed the MEA apostille in just 4 days. Excellent service.", rating: 5 },
  { name: "Vikram Singh", role: "Business Owner", text: "Got our company incorporation and GST documents attested for a branch in Saudi Arabia. Professional, transparent pricing and zero hassle.", rating: 5 },
  { name: "Priya Nair", role: "Homemaker, Qatar", text: "Marriage certificate attestation for my family visa was done smoothly. They picked up documents from my home in Noida and returned them safely.", rating: 5 },
];

export const BLOG = [
  {
    slug: "difference-between-apostille-and-attestation",
    title: "Apostille vs Attestation: What's the Difference?",
    category: "Guides",
    date: "2026-05-20",
    image: IMG.stamp,
    excerpt: "Confused between apostille and attestation? Learn which one you need based on your destination country.",
    content: "Apostille and attestation both legalise your documents for international use, but they apply to different countries. An apostille is issued under the Hague Convention of 1961 and is accepted in 125+ member countries such as the USA, UK and most of Europe. Attestation (also called embassy legalisation) is required for non-member countries such as the UAE, Saudi Arabia, Qatar and Kuwait, and involves an additional embassy stamp after MEA attestation. Choosing the right process saves you time and money — our experts assess your destination and advise the exact chain of verification required.",
  },
  {
    slug: "mea-apostille-process-delhi-2026",
    title: "MEA Apostille Process from Delhi in 2026",
    category: "Process",
    date: "2026-04-14",
    image: IMG.hero,
    excerpt: "A step-by-step walkthrough of getting your documents apostilled by the MEA from Delhi this year.",
    content: "Since 2012, the MEA has decentralised apostille through authorised outsourcing agencies. The process starts with notary or state authentication (SDM/HRD/Home Department), followed by the MEA apostille sticker. From Delhi, personal and educational documents are typically apostilled within 3–6 working days. Delhi Apostille manages the entire chain, including free pickup, so you never have to visit a government office yourself.",
  },
  {
    slug: "documents-required-for-uae-attestation",
    title: "Documents Required for UAE Embassy Attestation",
    category: "Countries",
    date: "2026-03-02",
    image: IMG.passport,
    excerpt: "Planning to move to the UAE? Here is the exact document checklist for UAE embassy attestation.",
    content: "For the UAE, documents must be attested by the state department, then the MEA, and finally the UAE Embassy in New Delhi, followed by MOFA attestation in the UAE. Educational certificates need HRD attestation first. Personal certificates like birth and marriage need Home Department attestation. Keep original documents, passport copies and passport-size photos ready. Our team pre-checks your file to avoid rejections at the embassy.",
  },
  {
    slug: "apostille-for-oci-application",
    title: "Apostille for OCI Application: A Complete Guide",
    category: "Guides",
    date: "2026-02-10",
    image: IMG.passportHand,
    excerpt: "Applying for an OCI card? Your foreign-issued documents may need an apostille. Here's how.",
    content: "Overseas Citizen of India (OCI) applications often require apostilled birth and marriage certificates issued abroad. If your document is issued in a Hague Convention country, it must be apostilled in the issuing country. For Indian-issued supporting documents, MEA apostille may be required. We coordinate the entire legalisation chain so your OCI application is not delayed.",
  },
  {
    slug: "hrd-attestation-explained",
    title: "HRD Attestation Explained for Job Seekers",
    category: "Process",
    date: "2026-01-18",
    image: IMG.degree,
    excerpt: "Most Gulf employers demand HRD attestation of your degree. Understand why and how it works.",
    content: "HRD (Human Resource Development) attestation is state-level verification of your educational documents by the education department of the state where your university is located. It is mandatory for work visas in the UAE, Saudi Arabia, Qatar and Kuwait. HRD attestation can be time-consuming as it involves university verification — starting early avoids visa delays.",
  },
  {
    slug: "7-benefits-of-professional-attestation-services",
    title: "7 Benefits of Using Professional Attestation Services",
    category: "Tips",
    date: "2025-12-01",
    image: IMG.handshake,
    excerpt: "Doing attestation yourself is stressful and error-prone. Here's why a professional agency pays off.",
    content: "Professional attestation services save you time, prevent costly rejections, and offer door-to-door convenience. Benefits include: expert guidance on the correct process, real-time tracking, secure handling of originals, faster turnaround through established channels, transparent pricing, multi-country expertise, and dedicated support. For high-value documents, professional handling gives peace of mind.",
  },
];

export const FAQS = [
  { q: "What is an apostille?", a: "An apostille is a certificate issued by the MEA that authenticates the origin of a public document (like a birth certificate or degree) for use in Hague Convention member countries." },
  { q: "How long does the apostille process take?", a: "Typically 3–6 working days for personal and educational documents after state verification. Commercial documents and embassy legalisation may take longer." },
  { q: "Do you offer document pickup in Delhi NCR?", a: "Yes. We provide free doorstep pickup and delivery across Delhi, Noida, Gurugram, Faridabad and Ghaziabad." },
  { q: "Which countries require embassy attestation instead of apostille?", a: "Non-Hague countries such as the UAE, Saudi Arabia, Qatar, Kuwait, Oman and China require embassy attestation." },
  { q: "Is my original document safe with you?", a: "Absolutely. All originals are handled securely, fully insured in transit, and returned via tracked courier." },
  { q: "How much does apostille cost?", a: "Cost depends on the document type, destination country and processing speed. Request a free quote and we'll share transparent pricing instantly." },
];

export const DOC_TYPES = ["Educational", "Personal", "Commercial", "Not sure"];

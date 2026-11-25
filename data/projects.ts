/**
 * Projects page data.
 *
 * ⚠ SAMPLE DATA — copied from the reference website for layout purposes only. These are another company's
 * real clients and projects. REPLACE every list below with your own verified projects (and get client
 * permission for names/logos) before the site goes live.
 *
 * Shapes mirror database rows (a `projects` table with category, client, name, work, status), so these arrays
 * can later be replaced by queries without touching any component.
 */
import type { ProjectCategory, ExecutionRow } from "@/types/projects";

export const projectsHero = {
  eyebrow: "Project Experience",
  text: "From residential communities and hospitality spaces to healthcare, education and industrial facilities, we support projects with practical water and air solutions tailored to each site's needs.",
  video: "/media/projects/hero.mp4",
  poster: "/media/projects/hero-poster.jpg",
  footnote: "Residential • Commercial • Institutional • Industrial",
};

export const projectsSectors = [
  { title: "Residential", text: "Homes & communities" },
  { title: "Hospitality", text: "Hotels & guest spaces" },
  { title: "Institutional", text: "Hospitals & education" },
  { title: "Industrial", text: "Factories & facilities" },
];

export const underExecution: ExecutionRow[] = [
  { no: "1", client: "SIGNATURE GLOBAL (INDIA) LIMITED", project: "MILLENNIA-III, SECTOR-37D, GURUGRAM", work: "WTP", type: "RESIDENTIAL" },
  { no: "2", client: "SIGNATURE GLOBAL (INDIA) LIMITED", project: "SG CITY 37D II (5.62 ACRES), SECTOR-37D, GURUGRAM", work: "WTP", type: "RESIDENTIAL" },
  { no: "3", client: "SOM PROJECTS PVT. LTD.", project: "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, PUNE", work: "STP", type: "COMMERCIAL" },
  { no: "5", client: "BLISS REFRIGERATION PVT. LTD.", project: "RAMADA HOTEL, DELHI", work: "HVAC", type: "COMMERCIAL" },
  { no: "6", client: "DYNA AIRCON", project: "KENT RO FACTORY, SECTOR - 159, NOIDA", work: "HVAC", type: "COMMERCIAL" },
  { no: "7", client: "AHLUWALIA CONTRACTS INDIA LTD.", project: "CHANDIGARH RAIL WAY STATION, CHANDIGARH", work: "HVAC", type: "COMMERCIAL" },
  { no: "8", client: "M3M GROUP", project: "M3M Capital-113, Gurugram", work: "STP", type: "RESIDENTIAL" },
  { no: "9", client: "ORRIS INFRASTRUCTURE PVT. LTD.", project: "ORRIS FLOREAL TOWER, SECTOR-83, GURUGRAM", work: "STP", type: "COMMERCIAL" },
  { no: "10", client: "SIGNATURE GLOBAL (INDIA) LIMITED", project: "SG TWIN TOWER DXP, SECTOR-84, GURUGRAM", work: "WTP", type: "RESIDENTIAL" },
  { no: "11", client: "SIGNATURE GLOBAL (INDIA) LIMITED", project: "SG INFINITY MALL, SECTOR-36, GURUGRAM", work: "WTP & HVAC", type: "COMMERCIAL" },
];

export const projectCategories: ProjectCategory[] = [
  {
    id: "residential",
    filter: "Residential",
    label: "Residential",
    title: "Residential Developments",
    text: "Water infrastructure and building-services applications for residential communities and multi-tower developments.",
    tags: ["WTP", "STP", "Pumping"],
    image: "/media/projects/card-residential.png",
    listTitle: "Residential Projects",
    groups: [
      { title: "DLF GROUP", items: ["DLF Magnolia, Phase-V, Gurgaon", "DLF Sector-89, Gurgaon", "DLF Crest Club Gurgaon", "DLF Belaire, Phase V, Gurgaon", "DLF Sector 74-A, Gurgaon", "DLF, Belveder Tower, Gurgaon", "DLF Park Tower, Phase-V, Gurgaon", "DLF SBM Moti Nagar, New Delhi", "DLF, Belvedere Park, Gurgaon", "DLF Park Height, Phase-V, Gurgaon", "DLF Regal Garden, Gurgaon", "DLF, Princeton Estate, Gurgaon", "DLF Vytila Kochi", "DLF Primus Gurgaon", "SIGNATURE GLOBAL (INDIA) LIMITED", "DLF OMR Chennai - Tower 16", "DLF New Height Tower, Kolkata", "SUPPOOSHA REALCON PVT. LTD.", "DLF OMR Chennai-Tower 10", "DLF Aralias, Gurgaon", "ADHIKAANSH REALTORS PVT. LTD.", "DLF, Sector-90, Gurgaon", "DLF New Infinity, Gurgaon", "DLF Sector-91, Gurgaon", "DLF Trinity Tower, Gurgaon"] },
      { title: "UNITECH LTD", items: ["Unitech Green Wood City, Gurgaon", "Unitech Karma Lake Land, Manaser", "Unitech Unihomes Chennai", "Unitech Horizon, Greater Noida", "Unitech Uniworld Resort, Gurgaon", "Unitech Palm Spring Villas, Chennai", "Unitech Cascade, Greater Noida", "Unitech WoodStock Villa, Gurgoan", "Unitech, SPA East, Gurgaon", "Unitech Heights, Greater Noida", "Unitech Unihomes, Gurgoan", "Unitech, SPA West, Gurgaon", "Unitech Fresco, Gurgaon", "Unitech Vistas, Gurgaon", "Unitech Habitat, Greater Noida", "Unitech North Town Heights, Chennai"] },
      { title: "IREO GROUP", items: ["Ireo Victory valley Gurgaon", "Ireo Corridor Gurgaon", "Ireo Hills Gurgaon", "Ireo Sky On- Gurgaon", "Ireo Plotted Gurgaon"] },
      { title: "ATS", items: ["ATS Greens Village, Noida", "ATS Triumph Gurgaon", "ATS Dolce, Greater Noida"] },
      { title: "INDIA BULLS", items: ["India Bulls- Centrum Park, Gurgaon", "India Bulls- Enigma, Gurgaon"] },
      { title: "BPTP LTD", items: ["BPTP, Sector-76, Faridabad", "BPTP Sector-77, Faridabad", "BPTP Prim Park, Gurgoan"] },
      { title: "AJNARA GROUP", items: ["Ajnara Crosscing Republic, Ghaziabad"] },
      { title: "GUPTA PROMOTERS", items: ["Eden Height, Sector 70, Gurgaon"] },
      { title: "PAN REALATORS", items: ["Pan Oasis, Sector 70, Noida"] },
      { title: "EMAAR GROUP", items: ["Palm Spring, Gurgoan", "SDS Infrastructure, Greater Noida", "GYS Sector 62, Gurgoan", "TGB, Sector 50, Noida", "Pineerior Urbane, Gurgaon"] },
    ],
  },
  {
    id: "hospitality",
    filter: "Hotels & Hospitality",
    label: "Hospitality",
    title: "Hotels & Hospitality",
    text: "Building-services applications for hotels and hospitality environments where reliable water and HVAC systems matter.",
    tags: ["HVAC", "Water Systems"],
    image: "/media/projects/card-hospitality.png",
    listTitle: "Hotels & Hospitality Projects",
    groups: [
      { title: null, items: ["Lemon Tree, Andheri East, Mumbai", "Hyatt Regency, New Delhi", "Raddisson, Agra", "Lemon Tree, Udaipur, Rajasthan", "Gaurson Mall, Ghaziabad", "Lemon Tree, Gurgaon", "Hotel Park Inn, Alwar, Rajasthan", "Surbhi Hotel, Dehradun", "Lemon Tree Banjara Hills, Hyderabad", "Hotel Lalit, Chandigarh", "Lemontree, Hydrabad", "Mc-Donald, B-24, Connaught Place, New Delhi", "Hotel Lalit, Jaipur", "Lemontree Goa", "Radison Hotel, Gurgaon", "Lalit Khajurao", "Lemontree Banglore", "Ambassador Sky Chef, New Delhi", "lalit Kolkata", "Mc-Donald, G.K.-I, New Delhi", "City Park Hotel, Pitam Pura New Delhi", "Lemontree Dial Airport New Dlehi", "Mc-Donald, Preet Vihar, Delhi", "Todays Hotel, Crown Plaza Gurgaon", "Lemontree Chandigarh", "Mc-Donald, Karol Bagh, New Delhi", "Marriot Hotel, Gurgaon"] },
    ],
  },
  {
    id: "healthcare",
    filter: "Hospitals",
    label: "Healthcare",
    title: "Hospitals & Healthcare",
    text: "Water and building-services project applications for healthcare facilities, hospitals and specialist care environments.",
    tags: ["HVAC", "Water Systems"],
    image: "/media/projects/card-healthcare.png",
    listTitle: "Hospitals & Healthcare Projects",
    groups: [
      { title: null, items: ["Safdarjung Hospital – EMG Block, New Delhi", "Medical College, Gwalior", "Escorts Hospital & Research Center, New Delhi", "Safdarjung Hospital – SSB Block, New Delhi", "Medical College, Latur", "Escorts Hospital & Research Center, Amritsar", "Burari Hospital, New Delhi", "Medical College, Behrampur", "Escorts Hospital & Research Center, Jaipur", "Eye Care Hospital, Gurgaon", "Medical College, Kolkata", "Apollo Hospital, Ahmedabad", "C.K. Birla Hospital, Gurgaon", "Medical College, Udaipur", "Apollo Hospital, Bilaspur", "Medical College, Jabalpur", "Shri Hariharan Hospital, Ahmedabad", "Apollo Hospital, Ludhiana", "Medical College, Ahmedabad", "GTB Hospital Shahdara, New Delhi", "ESIC Hospital, Noida", "Medical College, Aurangabad", "Indira Gandhi Hospital, Dwarka", "ESIC Hospital, Faridabad", "Medical College, Rewa", "ESIC Hospital, Patna", "Delhi Heart Institute, New Delhi", "Medical College, Allahabad", "AIIMS, Jhajjar", "Nagaland Govt. Hospital", "Medical College, Kota", "Utkal Health Care, Bhubaneswar", "Medanta Gurgaon", "Medical College, Vijayawada", "Paras Hospital, Panchkula", "Fortis Ludhiana", "Medical College, Jhansi", "Medical College, Kangra", "SOM PROJECTS PVT. LTD.", "Medical College, Bikaner", "Cancer Hospital, Bhatinda", "Unique Engineers Pvt. Ltd.", "VVIP Ward AIIMS, New Delhi", "NIMHANS, Bangalore"] },
    ],
  },
  {
    id: "education",
    filter: "Education",
    label: "Education",
    title: "Universities & Institutions",
    text: "Infrastructure and HVAC-related applications across educational campuses, universities and institutional buildings.",
    tags: ["HVAC", "Infrastructure"],
    image: "/media/projects/card-education.png",
    listTitle: "Education & Institute Projects",
    groups: [
      { title: null, items: ["Amity University, Kolkata", "Subharti University, Meerut", "Green Wood International School, Faridabad", "Vega School, Gurgaon", "Hamdard Jamia, New Delhi", "SAP Vijayawada, Andhra Pradesh", "Delhi University, New Delhi", "FSTC, Gurgaon", "Graphic Era University", "Amity University, Raipur", "STIP Incubation Centre, Chandigarh", "Unique Engineers Pvt. Ltd.", "Bose Institute, Kolkata", "IISER, Kolkata", "Dyna Aircon", "Bennett University, Greater Noida", "Deen Dayal University, Noida", "GD Goneka School, Sector 48, Gurgaon", "BITS Pilani, Rajasthan"] },
    ],
  },
  {
    id: "commercial",
    filter: "Commercial",
    label: "Commercial",
    title: "Commercial Buildings",
    text: "Water treatment, pumping and HVAC applications for offices, malls, business parks and mixed-use developments.",
    tags: ["WTP", "HVAC", "Pumping"],
    image: "/media/projects/card-commercial.png",
    listTitle: "Commercial, Mall & Airport Projects",
    groups: [
      { title: null, items: ["Mall Gomti Nagar, Lucknow", "IT Park, Panchkula", "OCUS 24K, Gurgaon", "CPWD, Kolkata", "Hotel Balaji Sarivar, Solapur", "Ricco, Bhiwadi", "DLF Horizon, Gurgaon", "Spaze IT Park, Gurgaon", "Millennium Plaza Tower, Gurgaon", "DLF Mini Mall, Chennai", "ITC, Manesar", "Tube Rose, Sohna Road, Gurgaon", "RSRTC, Kota", "Garden Galleria, Noida", "Eros Sector-125, Noida", "Mahagun, Noida", "Uniworld Commercial Tower-II, Gurgaon", "REC, Sector 29, Gurgaon", "Natgrid, Gurgaon", "Unitech Signature Tower-II, Gurgaon", "Barola Mall, Noida", "Bihar Police Station, Patna", "Club Nirvan, Zirakpur, Punjab", "VSCC, Bangalore", "Indoor Cricket Stadium, Kolkata", "Sadhna TV, Noida", "Impact Industrial, Greater Noida", "Petro IT Park, Gurgaon", "World Square Mall, Ghaziabad", "CNCI, Kolkata", "Artha SEZ, Noida", "MMG Barakhamba, New Delhi", "Brook Field, Noida", "Reach Airia, Gurgaon", "DLF Capital Green, Moti Nagar, New Delhi", "RSTC Kota, Rajasthan", "Janak Puri Cinema Hall, New Delhi", "I-CAT Manesar, Haryana", "Ambuja Cement, Gurgaon", "Seimens, Gurgaon", "DLF Corporate Green, Gurgaon", "Orris Infrastructure Pvt. Ltd.", "Anantraj, Dehradun", "IKG Industrial Building, Gurgaon", "Addverb", "ITC, Mysore", "ITC, Manesar", "DLF Limited", "ITC Panchla, Kolkata", "I-Thum, Noida", "Elan Limited", "Acme, Baddi", "Punjab National Bank, Dwarka, New Delhi", "M3M Group", "Ambiance Mall, Shalimar Bagh, New Delhi", "INCC, Patna", "Ingenious Work Solutions", "Ambience Tower, Rohini, New Delhi", "Aspire, Mathura Road, New Delhi", "ODelhi Metro Rail Corporation", "JMD Mega Polis, Gurgaon", "IT Building, Gurgaon", "Unique Integrate HVAC Solutions", "Info Park, Sez, Tikri Gurgaon", "ITC, Kolkata", "SK Engineers", "IT Building, 100 Udyog Vihar, Gurgaon", "Pearl Global, Gurgaon", "Ventac Airconditioning Co.", "HBN Home, Bhantida, Punjab", "NCDC Civil Line, New Delhi", "Uflex Limited", "Aachivis IT Sez, Noida", "Synokem, Haridwar", "Ahluwalia Contracts India Ltd.", "Seven Sea, Rohini, New Delhi", "CNCI, Mumbai", "Jakson Limited", "GYS Vision, Sector 62, Gurgaon", "Naib, Hyderabad"] },
    ],
  },
  {
    id: "industrial",
    filter: "Industrial",
    label: "Industrial",
    title: "Factories & Industrial Facilities",
    text: "Water-handling and building-services applications for manufacturing plants, factories and operational facilities.",
    tags: ["Water Treatment", "HVAC"],
    image: "/media/projects/card-industrial.png",
    listTitle: "Factories & Industrial Projects",
    groups: [
      { title: null, items: ["Coco Cola Factory, Dhaka, Bangladesh", "Dharampal Satyapal Factory, Noida", "Dyna Aircon", "ITC Chocolate Factory, Haridwar", "Oriflame Factory, Roorkee", "Air India, Nagpur", "Paramilitary Airforce, Greater Noida", "Hindon Airforce Airport, Ghaziabad", "Bestech Airport, Mohali", "Calicut Airport, Kerala"] },
    ],
  },
];


export const projectsIntro = {
  eyebrow: "Flow of Life",
  title: "Solutions shaped around",
  accent: "real projects.",
  paragraphs: [
    "We bring experience in water handling, pumping, water treatment and HVAC-related solutions to a broad range of project environments. Each site has its own demands, from everyday residential requirements to the operational needs of larger facilities.",
    "Our project portfolio highlights the sectors and applications where our solutions have been specified, supplied or implemented. Project scope varies by site and should be confirmed with our team.",
  ],
  miniCards: [
    { title: "Water Treatment", text: "WTP and STP project applications" },
    { title: "Pumping Solutions", text: "Water movement and pressure needs" },
    { title: "HVAC Applications", text: "Building services and air systems" },
    { title: "Project Support", text: "Discuss requirements with our team" },
  ],
  image: "/media/images/water-poster.jpg",
};

export const projectsPortfolio = {
  eyebrow: "Our Project Portfolio",
  title: "Trusted across",
  accent: "diverse industries.",
  description: "Explore representative project sectors and examples from our project portfolio. Use the filters to browse by application type.",
};

export const projectsCapabilities = {
  eyebrow: "Project Capabilities",
  title: "Water and air solutions",
  accent: "for every scale.",
  description: "We cover a range of water-handling and building-services categories. Final equipment selection depends on the project design, specifications and site requirements.",
  items: [
    { icon: "droplets", title: "Water Treatment", text: "Water treatment plant and sewage treatment plant applications for residential, commercial and institutional sites." },
    { icon: "gauge", title: "Pumping & Pressure", text: "Pumping and pressure-related solutions selected to suit site demand, system layout and operating conditions." },
    { icon: "wind", title: "HVAC & Building Services", text: "HVAC-related equipment and water circulation applications for buildings and larger facilities." },
    { icon: "hospital", title: "Healthcare & Institutions", text: "Project support for hospitals, universities, schools and other institutional environments." },
    { icon: "home", title: "Residential Infrastructure", text: "Water and building-service requirements for housing developments, apartment communities and residential towers." },
    { icon: "factory", title: "Industrial Applications", text: "Water-handling and building-services applications for factories, manufacturing facilities and commercial operations." },
  ],
} as const;

export const projectsReferences = {
  eyebrow: "Selected Project References",
  title: "A portfolio built",
  accent: "across sectors.",
  paragraphs: [
    "Our project listing includes examples across residential developments, hospitality, healthcare, education, transport and commercial/industrial facilities.",
    "Project details and work scopes vary by site. Get in touch to discuss your requirement and see relevant examples.",
  ],
  cta: { label: "Contact Us", href: "/contact-us" },
  listTitle: "Examples from our project portfolio",
  items: [
    "Signature Global developments", "DLF developments", "Ramada Hotel, Delhi", "Chandigarh Railway Station",
    "Galgotias University", "Shiv Nadar University", "SMS Hospital, Jaipur", "ESIC Hospital, Kolhapur",
    "Kent RO Factory, Noida", "Haier Appliances, Greater Noida", "Hotel Lalit locations", "Commercial & industrial facilities",
  ],
  note: "Project details and work scopes can vary by site.",
};

export const projectsCta = {
  eyebrow: "Have a project in mind?",
  title: "Let's plan your next water & air solution.",
  text: "Share your project type, site location and requirements with our team. We can help you explore relevant product and system categories.",
};

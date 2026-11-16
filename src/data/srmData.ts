export type PropertyType = "Commercial Property" | "Residential Home";

export type ServiceOption =
  | "Roof Leak / Repair"
  | "Preventative Maintenance Plan"
  | "Full Roof Replacement"
  | "Roof Inspection";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  propertyType: PropertyType;
  serviceOption: ServiceOption;
}

export const COMPANY_INFO = {
  name: "Simmons Roofing Maintenance",
  shortName: "SRM",
  legalName: "Simmons Roof Maintenance, LLC",
  phoneDisplay: "(765) 808-7884",
  phoneHref: "tel:+17658087884",
  email: "srm4kris@gmail.com",
  addressLine1: "14440 N. Co. Rd. 200 W.",
  addressLine2: "Gaston, IN 47342",
  hours: "Mon – Fri: 7:00 AM – 5:00 PM",
  emergencyNote: "24-Hour Emergency Leak Service",
  serviceAreaHeadline: "Serving Commercial & Residential Properties Across Indiana",
};

export const COMMERCIAL_SERVICES: ServiceItem[] = [
  {
    id: "commercial-repair",
    title: "Commercial Roof Repair & 24-Hr Emergency Service",
    description:
      "Fast, reliable leak diagnostics and repairs for flat and low-slope commercial roofing systems. Whether it is a small leak or storm damage, our service teams pinpoint the source and repair it with manufacturer-approved materials so your warranty stays valid.",
    highlights: [
      "24-hour emergency leak response",
      "EPDM, TPO, PVC, modified bitumen & metal",
      "Repair plans & budgets for large or small projects",
    ],
    propertyType: "Commercial Property",
    serviceOption: "Roof Leak / Repair",
  },
  {
    id: "preventative-maintenance",
    title: "Preventative Maintenance Programs",
    description:
      "Scheduling inspections every 6 months (fall and spring) is the most effective way to prolong roof life and defer costly replacements by years—or even decades. Our programs meet manufacturer standards required to keep 10-to-50-year warranties valid.",
    highlights: [
      "Bi-annual fall & spring scheduled inspections",
      "Debris removal, drain clearing & seam checks",
      "Maintenance agreements for roofing contractors",
    ],
    propertyType: "Commercial Property",
    serviceOption: "Preventative Maintenance Plan",
  },
  {
    id: "infrared-moisture",
    title: "Infrared Moisture Scanning & Evaluations",
    description:
      "Even when a roof is not actively leaking, harsh Indiana winters, expansion, and contraction can create hidden issues. SRM offers infrared moisture scanning to detect small moisture problems before they become larger and more expensive to repair.",
    highlights: [
      "Non-invasive moisture detection",
      "Detailed roof condition reports & repair budgets",
      "Protects insulation, electrical & interior equipment",
    ],
    propertyType: "Commercial Property",
    serviceOption: "Roof Inspection",
  },
  {
    id: "building-envelope",
    title: "Building Envelope & Waterproofing",
    description:
      "SRM provides services that relate to the waterproofing of the entire building envelope—including the roof, masonry walls, Dryvit, EIFS, and stucco wall systems—for property managers, school systems, hospitals, universities, and manufacturing facilities.",
    highlights: [
      "Roof, masonry, Dryvit & stucco waterproofing",
      "Flashing, coping & sealant restoration",
      "Long-standing commercial & industrial partnerships",
    ],
    propertyType: "Commercial Property",
    serviceOption: "Roof Leak / Repair",
  },
];

export const RESIDENTIAL_SERVICES: ServiceItem[] = [
  {
    id: "residential-shingle-repair",
    title: "Shingle & Roof Leak Repair",
    description:
      "Straightforward, honest repairs for active leaks, missing or damaged shingles, pipe boot seals, and chimney or valley flashing. We fix what needs fixing without pushing an unnecessary replacement.",
    highlights: [
      "Leak tracing & flashing repair",
      "Shingle & ridge cap replacement",
      "Courteous, clean residential service",
    ],
    propertyType: "Residential Home",
    serviceOption: "Roof Leak / Repair",
  },
  {
    id: "storm-wind-damage",
    title: "Storm, Wind & Winter Damage Fixes",
    description:
      "Indiana wind, hail, and freeze-thaw cycles can loosen roofing materials overnight. We respond promptly to stabilize exposed areas, prevent interior water damage, and restore your roof.",
    highlights: [
      "Prompt post-storm assessment",
      "Emergency tarping & stabilization",
      "Clear documentation of storm damage",
    ],
    propertyType: "Residential Home",
    serviceOption: "Roof Leak / Repair",
  },
  {
    id: "residential-replacement",
    title: "Full Roof Replacements",
    description:
      "When a roof has reached the end of its serviceable life, we provide durable, manufacturer-backed shingle and metal roof replacements installed with careful attention to ventilation, underlayment, and flashing.",
    highlights: [
      "Complete tear-off & decking inspection",
      "Quality architectural shingles & metal options",
      "Thorough magnet sweep & job-site cleanup",
    ],
    propertyType: "Residential Home",
    serviceOption: "Full Roof Replacement",
  },
  {
    id: "residential-inspection",
    title: "Residential Roof Inspections",
    description:
      "Get an honest, detailed evaluation of your home's roof before buying, selling, or after severe weather. We walk you through any wear we find and give you practical options.",
    highlights: [
      "Attic-to-ridge moisture & ventilation check",
      "Flashing, gutter & sealant review",
      "Plain-English written estimate",
    ],
    propertyType: "Residential Home",
    serviceOption: "Roof Inspection",
  },
];

export const INSPECTION_CHECKLIST = [
  "Open pipe flashing",
  "Rooftop debris",
  "Open field seams",
  "Deteriorating sealants",
  "Plugged roof drains & gutters",
];

export const TRUST_PILLARS = [
  {
    title: "Proactive Leak Prevention",
    description:
      "A little maintenance results in major savings compared to the cost of an undetected leak or catastrophic roof failure. Our bi-annual maintenance and infrared moisture scanning catch small problems early.",
  },
  {
    title: "Honest, Detailed Assessments",
    description:
      "Kris Simmons founded SRM on a simple philosophy: \"Give The Customer What They Are Paying For.\" Whenever a roof can be safely repaired instead of replaced, we tell you straight.",
  },
  {
    title: "Dependable Indiana Service",
    description:
      "Based in Gaston, IN, our crew serves commercial facilities, school systems, hospitals, and homeowners across Indiana with 24-hour emergency response and manufacturer-approved repairs.",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Kris Simmons",
    role: "Owner / President",
    experience: "Over 30 Years Experience",
    bio: "With over 30 years of experience in all types of commercial and industrial roofing, Kris founded SRM to provide customers with the most effective and economic solutions to their roofing needs. From small leaks to catastrophic roof failures, he enjoys locating unique roof issues and offering long-term solutions.",
  },
  {
    name: "Dave Rose",
    role: "Service Manager / Maintenance Specialist",
    experience: "Over 25 Years Experience",
    bio: "Dave has been in the commercial roofing industry for over 25 years and puts customer satisfaction as his highest aim. His passion for roofing, commitment to quality, and integrity of business practices are the foundation that SRM was built on.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We manage three industrial and office buildings in the Indianapolis area, and SRM has saved us thousands through their spring and fall preventative maintenance visits. When we had a leak over a production line during a heavy storm, their crew was on-site fast and fixed it right the first time.",
    author: "Mark H.",
    role: "Commercial Property Manager",
    location: "Indianapolis, IN",
  },
  {
    quote:
      "After high winds tore shingles off our back slope, another company tried to sell us a whole new roof. Simmons Roofing Maintenance inspected it honestly, replaced the damaged shingles and flashing, and charged a very fair price. Straight-shooting people.",
    author: "Brenda & Tom K.",
    role: "Homeowners",
    location: "Fort Wayne, IN",
  },
  {
    quote:
      "We called SRM for a persistent leak around our chimney and skylight that two other contractors couldn't solve. Their technician traced the moisture, resealed the flashing properly, and left the yard spotless. Dependable from the first phone call.",
    author: "David R.",
    role: "Homeowner",
    location: "Bloomington, IN",
  },
];

export const INDIANA_SERVICE_AREAS = [
  "Gaston & Muncie",
  "Indianapolis & Carmel",
  "Anderson & Marion",
  "Fort Wayne",
  "Bloomington",
  "Kokomo & Lafayette",
  "Fishers & Noblesville",
  "Central & Statewide Indiana",
];

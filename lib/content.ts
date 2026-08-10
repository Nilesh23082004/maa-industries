export interface PhoneNumberItem {
  label: string;
  number: string;
  whatsapp: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  city: string;
  addressLines: [string, string, string];
  phoneNumbers: PhoneNumberItem[];
  email: string;
  mapsQuery: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CapacityStat {
  value: string;
  unit: string;
  label: string;
}

export interface ProductItem {
  name: string;
  description: string;
}

export interface MachineryItem {
  name: string;
  spec: string;
  detail: string;
  image: string;
}

export interface WhyUsItem {
  title: string;
  body: string;
}

export interface ClientMediaItem {
  id: string;
  label: string;
  src: string;
}

export const company: CompanyInfo = {
  name: "Maa Industries",
  tagline: "Heavy CNC Machining & Precision Engineering",
  city: "Ahmedabad",
  addressLines: [
    "Phase 1, Rakhial Industrial Area",
    "Near Rakhial Cross Road, Rakhial",
    "Ahmedabad, Gujarat 380023, India",
  ],
  phoneNumbers: [
    { label: "", number: "+91 70467 76226", whatsapp: "917046776226" },
    { label: "", number: "+91 63532 28328", whatsapp: "916353228328" },
  ],
  email: "maaindustriesss@gmail.com",
  mapsQuery: "Maa Industries, Rakhial Industrial Area, Rakhial, Ahmedabad, Gujarat 380023",
};

export const navLinks: NavLink[] = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Products", href: "#products" },
  { label: "Facility", href: "#facility" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export const capacityStats: CapacityStat[] = [
  { value: "600", unit: "mm", label: "Max turning diameter" },
  { value: "6000", unit: "mm", label: "Max machining length" },
  { value: "7.5", unit: "T", label: "EOT crane capacity" },
  { value: "6", unit: "machines", label: "Lathe & drill fleet" },
];

export const products: ProductItem[] = [
  {
    name: "Rolls",
    description:
      "Precision-turned industrial rolls engineered for steel mills, paper processing, and heavy conveyor assemblies. Machined to tight runout and concentricity specs across lengths up to 6000mm.",
  },
  {
    name: "Shafts",
    description:
      "Heavy drive shafts, turbine shafts, and multi-stepped power transmission shafts turned from forged alloy steel. Finished with high axial alignment for heavy industrial machinery.",
  },
  {
    name: "Tie Bars",
    description:
      "High-tensile tie bars and column tie rods for hydraulic presses and heavy plastic injection molding machinery. Threaded and turned to withstand extreme cyclic clamping loads.",
  },
  {
    name: "Flanges",
    description:
      "Custom large-diameter industrial pipe flanges, blind flanges, and heavy forged ring components. Turned with exact sealing surface finish and bolt-circle precision.",
  },
  {
    name: "Custom Heavy Components",
    description:
      "Bespoke turned components produced directly from client CAD engineering drawings. Machined for OEM machinery builders, heavy power equipment, and structural industrial projects.",
  },
];

export const machinery: MachineryItem[] = [
  {
    name: "CNC Lathe",
    spec: "600mm × 6000mm",
    detail:
      "Heavy-duty CNC turning center engineered for long-bed precision shaft turning and complex rotational profiles. Delivers repeatable micron-level accuracy across extended workpieces.",
    image: "/images/cnc-lathe-overview.jpg",
  },
  {
    name: "Conventional Lathes",
    spec: "3 units",
    detail:
      "Versatile heavy conventional lathe setup for rapid roughing, secondary operations, custom thread cutting, and specialized single-run heavy components.",
    image: "/images/cnc-lathe-side.jpg",
  },
  {
    name: "Drill Machines",
    spec: "2 units",
    detail:
      "Heavy radial and pillar drilling equipment configured for deep hole drilling, reaming, tapping, and bolt-circle pattern execution on thick flanges and plates.",
    image: "/images/machine-facility.jpg",
  },
  {
    name: "EOT Crane",
    spec: "7.5 Ton",
    detail:
      "Full shop-floor overhead crane coverage ensuring safe, rapid loading and positioning of heavy raw forgings and finished assemblies up to 7.5 metric tons.",
    image: "/images/shaft-machining.jpg",
  },
];

export const whyUs: WhyUsItem[] = [
  {
    title: "Big-Capacity Single-Setup Turning",
    body: "With capability for workpieces up to 600mm diameter and 6000mm length, we reduce repositioning errors by machining long shafts and rolls in minimum setups.",
  },
  {
    title: "CNC Precision + Conventional Flexibility",
    body: "Our facility combines high-accuracy CNC turning for tight tolerances with rugged conventional lathes for heavy roughing and fast job turnarounds.",
  },
  {
    title: "Heavy-Duty Overhead Material Handling",
    body: "Integrated 7.5-ton EOT crane coverage spans the entire bay, allowing safe, swift loading of heavy forgings, castings, and multi-ton raw stocks.",
  },
  {
    title: "Deliberately Built Modern Facility",
    body: "We are a newly established machine shop in Rakhial equipped purposefully with dedicated heavy machinery, clean floor layouts, and rigorous quality inspection tools.",
  },
];

export const clientPhotos: ClientMediaItem[] = [
  {
    id: "photo-1",
    label: "Finished component, ready for dispatch",
    src: "/images/client-photo-1.jpg",
  },
  {
    id: "photo-2",
    label: "Component on the inspection table",
    src: "/images/client-photo-2.jpg",
  },
  {
    id: "photo-3",
    label: "Batch ready for quality check",
    src: "/images/client-photo-3.jpg",
  },
];

export const clientVideos: ClientMediaItem[] = [
  {
    id: "video-1",
    label: "CNC lathe — turning in process",
    src: "/videos/client-video-1.mp4",
  },
  {
    id: "video-2",
    label: "Shaft handling with the EOT crane",
    src: "/videos/client-video-2.mp4",
  },
  {
    id: "video-3",
    label: "Shop floor walkthrough",
    src: "/videos/client-video-3.mp4",
  },
];

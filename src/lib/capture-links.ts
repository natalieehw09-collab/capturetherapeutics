// Centralized link map for Capture Therapeutics rebuild.
// Internal routes use react-router <Link>; external links use <a target="_blank" rel="noopener noreferrer">.

export const BOOK_URL = "https://physiofirst.janeapp.com/";
export const SHOP_URL = "https://www.capturetherapeutics.com/collections/all";
export const GIFT_CARD_URL = "https://www.capturetherapeutics.com/products/gift-card";
export const VOCATIONAL_REFERRAL_PDF =
  "https://cdn.shopify.com/s/files/1/0037/4469/4336/files/Referral_Intake_Form-_Capture_Vocational_Services.pdf?v=1762528914";

export const SOCIALS = {
  facebook: "https://www.facebook.com/physiofirstgrandfalls",
  instagram: "https://www.instagram.com/capture.therapeutics/",
  youtube: "https://www.youtube.com/@PhysioFirstProfCorpIncBodyMech",
};

export const EMAILS = {
  admin: "admin@capturetherapeutics.com",
  moncton: "moncton@capturetherapeutics.com",
  truro: "truro@capturetherapeutics.com",
  woodstock: "woodstock@capturetherapeutics.com",
  people: "people@capturetherapeutics.com",
  alannah: "alannah.hansen@capturetherapeutics.com",
};

export const MAILTO = {
  employers: `mailto:${EMAILS.alannah}?subject=${encodeURIComponent("Corporate Health and Ergonomics Inquiry")}`,
  clinicOwners: `mailto:${EMAILS.alannah}?subject=${encodeURIComponent("Clinic Transition Inquiry")}`,
  careers: `mailto:${EMAILS.people}?subject=${encodeURIComponent("Career Inquiry - Capture Therapeutics")}`,
  community: `mailto:${EMAILS.admin}?subject=${encodeURIComponent("Community Partnership Inquiry")}`,
};

export const BLOG_POSTS = [
  {
    slug: "5-factors-that-can-delay-recovery-time",
    title: "5 factors that can delay recovery time",
    tag: "Recovery",
    excerpt: "Small habits and overlooked obstacles that quietly slow your healing — and how to move past them.",
    img: "1571019613454-1cb2f99b2d8b",
    url: "https://www.capturetherapeutics.com/blogs/your-health-matters/5-factors-that-can-delay-recovery-time",
  },
  {
    slug: "mental-health-how-can-an-ot-help",
    title: "Mental Health — how can an OT help?",
    tag: "Mental Health",
    excerpt: "Occupational therapists bring a unique lens to mental wellness. Here’s how they support everyday life.",
    img: "1559757148-5c350d0d3c56",
    url: "https://www.capturetherapeutics.com/blogs/your-health-matters/mental-health-how-can-an-ot-help",
  },
  {
    slug: "self-care",
    title: "Self-Care",
    tag: "Wellness",
    excerpt: "Practical, sustainable self-care rituals that actually fit into a busy life.",
    img: "1506905925346-21bda4d32df4",
    url: "https://www.capturetherapeutics.com/blogs/your-health-matters/self-care",
  },
];

export type Location = {
  city: string;
  address: string;
  phone: string;
  phoneHref: string;
  fax: string;
  email: string;
  mapUrl: string;
};

export const LOCATIONS: Location[] = [
  {
    city: "Moncton, NB",
    address: "171 Lutz St, Suite 102, Moncton, NB E1C 5E8",
    phone: "(506) 856-9380",
    phoneHref: "tel:+15068569380",
    fax: "(506) 856-9388",
    email: EMAILS.moncton,
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=171%20Lutz%20St%20Suite%20102%20Moncton%20NB%20E1C%205E8",
  },
  {
    city: "Truro, NS",
    address: "1 Commercial St, Unit 104, Truro, NS B2N 3H8",
    phone: "(902) 843-9681",
    phoneHref: "tel:+19028439681",
    fax: "(902) 843-9683",
    email: EMAILS.truro,
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=1%20Commercial%20St%20Unit%20104%20Truro%20NS%20B2N%203H8",
  },
  {
    city: "Woodstock, NB",
    address: "100 Jones St, Suite 201, Woodstock, NB E7M 0H6",
    phone: "(506) 325-1565",
    phoneHref: "tel:+15063251565",
    fax: "(506) 325-0738",
    email: EMAILS.woodstock,
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=100%20Jones%20St%20Suite%20201%20Woodstock%20NB%20E7M%200H6",
  },
  {
    city: "Kedgwick, NB",
    address: "116A Rue Notre Dame, Kedgwick, NB E8B 1H8",
    phone: "(506) 473-7064",
    phoneHref: "tel:+15064737064",
    fax: "(506) 473-6936",
    email: EMAILS.admin,
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=116A%20Rue%20Notre%20Dame%20Kedgwick%20NB%20E8B%201H8",
  },
  {
    city: "Grand Falls, NB",
    address: "68 Ouellette St, Suite 100, Grand Falls, NB E3Z 1A6",
    phone: "(506) 473-7064",
    phoneHref: "tel:+15064737064",
    fax: "(506) 473-6936",
    email: EMAILS.admin,
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=68%20Ouellette%20St%20Suite%20100%20Grand%20Falls%20NB%20E3Z%201A6",
  },
];

export const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Vocational", to: "/vocational-services" },
  { label: "Employers", to: "/employers" },
  { label: "Clinic Owners", to: "/clinic-owners" },
  { label: "Careers", to: "/careers" },
  { label: "Community", to: "/community" },
  { label: "Locations", to: "/locations" },
  { label: "Capture Talks", to: "/blog" },
];

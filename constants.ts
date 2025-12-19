import { Wrench, Hammer, Lightbulb, Droplets, PaintRoller, PackageOpen } from 'lucide-react';
import { BusinessInfo, Category } from './types';

// Ensure assets resolve in dev ("/") and on GitHub Pages ("/Delhi47webpage/")
const ASSET_BASE = (import.meta as any).env?.BASE_URL ?? '/';

export const BUSINESS_DETAILS: BusinessInfo = {
  name: "Delhi 47 Traders",
  owner: "Rajiv Chauhan",
  phone: "9711436932", // Raw number for tel links
  address: "Aya Nagar, New Delhi",
  fullAddress: [
    "H-154, Main Street, H Block, Phase 6,",
    "Block H, Aya Nagar,",
    "New Delhi, Delhi 110047"
  ],
  googleMapsUrl: "https://maps.google.com/maps?q=H-154%2C%20Main%20Street%20H%20Block%2C%20H%20Block%2C%20Phase%206%2C%20Block%20H%2C%20Aya%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110047&t=&z=15&ie=UTF8&iwloc=&output=embed",
  established: "2017",
  rating: 5.0
};

export const PRODUCT_CATEGORIES: Category[] = [
  {
    id: 'hardware',
    title: "Hardware Fittings",
    description: "Premium locks, hinges, handles, and door security solutions.",
    icon: Wrench,
    image: `${ASSET_BASE}categories/hardware.png`
  },
  {
    id: 'tools',
    title: "Tools & Accessories",
    description: "Hand tools, power tool accessories, and precision equipment.",
    icon: Hammer,
    image: `${ASSET_BASE}categories/tools.png`
  },
  {
    id: 'electrical',
    title: "Electrical Items",
    description: "Switches, wires, sockets, and basic electrical fittings.",
    icon: Lightbulb,
    image: `${ASSET_BASE}categories/electrical.png`
  },
  {
    id: 'plumbing',
    title: "Plumbing & Sanitary",
    description: "Pipes, faucets, valves, and bathroom essentials.",
    icon: Droplets,
    image: `${ASSET_BASE}categories/plumbing.png`
  },
  {
    id: 'paints',
    title: "Paints & Supplies",
    description: "Interior/exterior paints, brushes, rollers, and construction chemicals.",
    icon: PaintRoller,
    image: `${ASSET_BASE}categories/paint.png`
  },
  {
    id: 'wholesale',
    title: "Wholesale Bulk Supply",
    description: "Special pricing for contractors and bulk orders.",
    icon: PackageOpen,
    image: `${ASSET_BASE}categories/wholesale.png`
  }
];

export const WHATSAPP_MESSAGE = "Hi, I am interested in buying hardware supplies from Delhi 47 Traders.";
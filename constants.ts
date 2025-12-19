import { Wrench, Hammer, Lightbulb, Droplets, PaintRoller, PackageOpen } from 'lucide-react';
import { BusinessInfo, Category } from './types';

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
    image: "https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80&w=800" // Close up of door handle/lock
  },
  {
    id: 'tools',
    title: "Tools & Accessories",
    description: "Hand tools, power tool accessories, and precision equipment.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=800" // Tools on workbench
  },
  {
    id: 'electrical',
    title: "Electrical Items",
    description: "Switches, wires, sockets, and basic electrical fittings.",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?auto=format&fit=crop&q=80&w=800" // Wires and electrical tools
  },
  {
    id: 'plumbing',
    title: "Plumbing & Sanitary",
    description: "Pipes, faucets, valves, and bathroom essentials.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1585704083642-8d8040639013?auto=format&fit=crop&q=80&w=800" // Plumbing pipes and valves
  },
  {
    id: 'paints',
    title: "Paints & Supplies",
    description: "Interior/exterior paints, brushes, rollers, and construction chemicals.",
    icon: PaintRoller,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800" // Paint cans and brushes
  },
  {
    id: 'wholesale',
    title: "Wholesale Bulk Supply",
    description: "Special pricing for contractors and bulk orders.",
    icon: PackageOpen,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" // Warehouse boxes
  }
];

export const WHATSAPP_MESSAGE = "Hi, I am interested in buying hardware supplies from Delhi 47 Traders.";
import { Wrench, Hammer, Lightbulb, Droplets, PaintRoller, PackageOpen, Home, Palette } from 'lucide-react';
import { BusinessInfo, Category } from './types';

export const BUSINESS_DETAILS: BusinessInfo = {
  name: "Delhi 47 Traders",
  owner: "Rajiv Chauhan",
  phone: "9711436932", // Raw number for tel links
  phoneNumbers: {
    main: "9999747085",
    alternate1: "9711436932",
    alternate2: "9873776574",
    customerCare: "9971846318"
  },
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
    image: "categories/hardware.png"
  },
  {
    id: 'tools',
    title: "Tools & Accessories",
    description: "Hand tools, power tool accessories, and precision equipment.",
    icon: Hammer,
    image: "categories/tools.png"
  },
  {
    id: 'electrical',
    title: "Electrical Items",
    description: "Switches, wires, sockets, and basic electrical fittings.",
    icon: Lightbulb,
    image: "categories/electrical.png"
  },
  {
    id: 'plumbing',
    title: "Plumbing & Sanitary",
    description: "Pipes, faucets, valves, and bathroom essentials.",
    icon: Droplets,
    image: "categories/plumbing.png"
  },
  {
    id: 'paints',
    title: "Paints & Supplies",
    description: "Interior/exterior paints, brushes, rollers, and construction chemicals.",
    icon: PaintRoller,
    image: "categories/paint.png"
  },
  {
    id: 'homedecor',
    title: "Home Decor",
    description: "Decorative items, furnishings, and interior design accessories.",
    icon: Home,
    image: "categories/homedecor.png"
  },
  {
    id: 'artframes',
    title: "Art & Frames",
    description: "Picture frames, art supplies, canvas, and custom framing solutions.",
    icon: Palette,
    image: "categories/artframes.png"
  },
  {
    id: 'wholesale',
    title: "Wholesale Bulk Supply",
    description: "Special pricing for contractors and bulk orders.",
    icon: PackageOpen,
    image: "categories/wholesale.png"
  }
];

export const WHATSAPP_MESSAGE = "Hi, I am interested in buying hardware supplies from Delhi 47 Traders.";
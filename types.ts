import { LucideIcon } from "lucide-react";

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface BusinessInfo {
  name: string;
  owner: string;
  phone: string;
  phoneNumbers: {
    main: string;
    alternate1: string;
    alternate2: string;
    customerCare: string;
  };
  address: string;
  fullAddress: string[];
  googleMapsUrl: string;
  email?: string;
  established: string;
  rating: number;
}
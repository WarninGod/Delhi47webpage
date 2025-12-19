import React from 'react';
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Delhi 47 Traders</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Trusted hardware partner in South Delhi since 2017. Serving retailers, contractors, and homeowners with genuine products and wholesale prices.
            </p>
            <div className="flex items-center gap-2 text-brand-accent">
              <span>★★★★★</span>
              <span className="text-white text-sm">5.0 Rating (Local Dealer)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Our Products', path: '/products' },
                { label: 'Why Choose Us', path: '/why-us' },
                { label: 'About Company', path: '/about' },
                { label: 'Contact Support', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-accent transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Visit Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_DETAILS.fullAddress.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <a href={`tel:+91${BUSINESS_DETAILS.phone}`} className="hover:text-white transition-colors">
                  +91 {BUSINESS_DETAILS.phone.replace(/(\d{5})(\d{5})/, '$1 $2')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-primary shrink-0" />
                <span>Open Mon-Sun (Till 8:00 PM)</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Delhi 47 Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
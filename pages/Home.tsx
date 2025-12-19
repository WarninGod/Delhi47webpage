import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, ShieldCheck, Truck, Users } from 'lucide-react';
import { BUSINESS_DETAILS, WHATSAPP_MESSAGE } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-brand-primary/20 text-brand-accent px-4 py-1 rounded-full text-sm font-bold mb-6 border border-brand-primary/30">
              EST. {BUSINESS_DETAILS.established} • SOUTH DELHI
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Your Trusted <span className="text-brand-primary">Hardware Partner</span> in South Delhi
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Retail & Wholesale supplier of hardware, tools, fittings & construction essentials. Serving homeowners and contractors since 2017.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:+91${BUSINESS_DETAILS.phoneNumbers.main}`}
                className="inline-flex justify-center items-center gap-2 bg-brand-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a 
                href={`https://wa.me/91${BUSINESS_DETAILS.phoneNumbers.main}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Enquiry
              </a>
              <a 
                 href="https://www.google.com/maps/search/?api=1&query=Delhi+47+Traders+Aya+Nagar"
                 target="_blank"
                 rel="noreferrer"
                 className="inline-flex justify-center items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                <MapPin className="w-5 h-5" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
              <div className="bg-brand-primary/10 p-3 rounded-full">
                <ShieldCheck className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">8+ Years in Business</h3>
                <p className="text-sm text-gray-600">Established trust since 2017</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
              <div className="bg-brand-primary/10 p-3 rounded-full">
                <Users className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Local Dealer</h3>
                <p className="text-sm text-gray-600">Rated 5.0 Stars by Locals</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
              <div className="bg-brand-primary/10 p-3 rounded-full">
                <Truck className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Local delivery & Pickup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini About Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Welcome to Delhi 47 Traders</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Founded by Rajiv Chauhan, we have been serving the Aya Nagar community for over 8 years. We specialize in providing high-quality hardware at honest retail and wholesale prices.
          </p>
          <Link to="/products" className="text-brand-primary font-bold hover:underline flex items-center justify-center gap-2 text-lg">
            View Our Products <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
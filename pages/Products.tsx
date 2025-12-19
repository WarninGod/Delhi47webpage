import React from 'react';
import { PRODUCT_CATEGORIES, WHATSAPP_MESSAGE, BUSINESS_DETAILS } from '../constants';
import { MessageCircle } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Products & Categories</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We stock a wide range of premium hardware, tools, and construction supplies for both retail and wholesale needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCT_CATEGORIES.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 z-20 bg-white p-2 rounded-full shadow-lg">
                  <category.icon className="w-6 h-6 text-brand-primary" />
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{category.description}</p>
                
                <a 
                  href={`https://wa.me/91${BUSINESS_DETAILS.phoneNumbers.main}?text=${encodeURIComponent(WHATSAPP_MESSAGE + " Specifically regarding " + category.title)}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full block text-center py-3 border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Enquire Price
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand-dark rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Looking for Bulk Wholesale Supply?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We offer special pricing for contractors, builders, and large orders. Get in touch with us directly for a quote.
          </p>
          <a 
            href={`tel:+91${BUSINESS_DETAILS.phoneNumbers.main}`}
            className="inline-block bg-brand-accent hover:bg-amber-600 text-slate-900 font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Call Owner Directly
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
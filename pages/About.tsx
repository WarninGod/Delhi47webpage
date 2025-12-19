import React from 'react';
import { CheckCircle2, User } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Choose Us Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Us?</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "8+ years local experience in Aya Nagar",
              "Retail + Wholesale competitive pricing",
              "Trusted by local contractors & residents",
              "Quick availability & local delivery",
              "Genuine branded products",
              "Customer-first approach"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <span className="font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">About Delhi 47 Traders</h1>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Delhi 47 Traders is a trusted hardware supplier based in Aya Nagar, New Delhi. 
                Founded in <span className="text-brand-accent font-bold">2017</span> by <span className="text-brand-accent font-bold">Rajiv Chauhan</span>, 
                we began with a simple mission: to serve both retail customers and wholesale buyers with quality products, 
                honest pricing, and reliable service.
              </p>
              <p className="text-gray-400 mb-8">
                Over the last 8+ years, we have grown into a go-to destination for construction materials, 
                plumbing solutions, and electrical fittings in South Delhi. Whether you are fixing a door handle 
                or building a new floor, we have the supplies you need.
              </p>
              
              <div className="flex items-center gap-4 border-t border-slate-700 pt-6">
                <div className="bg-slate-800 p-3 rounded-full">
                  <User className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Owner & Proprietor</p>
                  <p className="text-xl font-bold">{BUSINESS_DETAILS.owner}</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto bg-slate-800">
               <img 
                src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2670&auto=format&fit=crop" 
                alt="Hardware Store Interior Abstract" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent lg:bg-gradient-to-t"></div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to start your project?</h3>
            <Link to="/contact" className="inline-block bg-brand-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-blue-500/30">
              Contact Us Today
            </Link>
        </div>

      </div>
    </div>
  );
};

export default About;
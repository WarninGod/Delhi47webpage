import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react';
import { BUSINESS_DETAILS, WHATSAPP_MESSAGE } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600">Visit our store or contact us for home delivery.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Contact Information Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-light p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Store Address</h3>
                    {BUSINESS_DETAILS.fullAddress.map((line, i) => (
                      <p key={i} className="text-gray-600">{line}</p>
                    ))}
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Delhi+47+Traders+Aya+Nagar"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-brand-primary text-sm font-bold mt-2 hover:underline"
                    >
                      <Navigation className="w-3 h-3" /> Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-light p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone Numbers</h3>
                    <p className="text-gray-600 mb-2">Call for orders or stock availability.</p>
                    <div className="space-y-1">
                      <a href={`tel:+91${BUSINESS_DETAILS.phoneNumbers.main}`} className="block text-lg font-bold text-brand-primary hover:text-blue-800">
                        +91 {BUSINESS_DETAILS.phoneNumbers.main}
                      </a>
                      <a href={`tel:+91${BUSINESS_DETAILS.phoneNumbers.alternate1}`} className="block text-lg font-bold text-brand-primary hover:text-blue-800">
                        +91 {BUSINESS_DETAILS.phoneNumbers.alternate1}
                      </a>
                      <a href={`tel:+91${BUSINESS_DETAILS.phoneNumbers.customerCare}`} className="block text-sm font-semibold text-gray-600 hover:text-brand-primary">
                        +91 {BUSINESS_DETAILS.phoneNumbers.customerCare} <span className="text-xs">(Customer Care)</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-light p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Sunday</p>
                    <p className="text-gray-600 font-medium">9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col gap-3">
               <a 
                href={`tel:+91${BUSINESS_DETAILS.phone}`}
                className="w-full bg-brand-primary hover:bg-blue-800 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-colors"
              >
                <Phone className="w-5 h-5" /> Call Store Now
              </a>
              <a 
                href={`https://wa.me/91${BUSINESS_DETAILS.phone}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Map Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-96 lg:h-auto min-h-[400px]">
            <iframe 
              src={BUSINESS_DETAILS.googleMapsUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Delhi 47 Traders Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
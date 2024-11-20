import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/70 z-10" />
      
      <div className="absolute inset-0">
        <img
          src="https://laexoticcarrentalsandsales.com/cdn/shop/files/0FDA0ADD-ADB7-4188-B9A2-CE9D4E8CDBF1.jpg?v=1716627018&width=2048"
          alt="Luxury Vehicle Customization at Kustom Auto Wrx"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Premium Auto Customization in Gainesville, GA
          </h1>
          <h2 className="text-xl text-gray-300 mb-8">
            Transform your vehicle with expert wraps, custom paint, and professional auto body services. Gainesville's trusted automotive customization specialists.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              aria-label="Schedule a consultation for your vehicle customization"
              onClick={() => setIsAppointmentOpen(true)}
            >
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="flex items-center space-x-3 text-blue-400">
              <Shield className="w-5 h-5" />
              <span>5-Year Warranty</span>
            </div>
            <div className="flex items-center space-x-3 text-blue-400">
              <Shield className="w-5 h-5" />
              <span>Premium Materials</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Check, Shield, Star } from 'lucide-react';

interface PricingPageProps {
  onOpenAppointment: () => void;
}

export default function PricingPage({ onOpenAppointment }: PricingPageProps) {
  const packages = [
    {
      name: 'Basic Wrap',
      price: 2800,
      description: 'Quality vinyl wrap with solid colors',
      features: [
        'Premium Cast Vinyl',
        'Solid Color Options',
        '3-Year Warranty',
        'Professional Installation',
        'Surface Preparation',
      ],
    },
    {
      name: 'Premium Wrap',
      price: 3500,
      description: 'Advanced wraps with premium finishes',
      popular: true,
      features: [
        'Premium Cast Vinyl',
        'Color Shift Options',
        'Chrome & Metallic Finishes',
        '5-Year Warranty',
        'Paint Correction',
        'Professional Installation',
        'Surface Preparation',
        'Door Jambs Coverage',
      ],
    },
    {
      name: 'Custom Paint',
      price: 4500,
      description: 'Full custom paint job with premium finish',
      features: [
        'Premium Paint Materials',
        'Custom Color Mixing',
        'Multi-stage Paint Process',
        '5-Year Warranty',
        'Paint Correction',
        'Clear Coat Protection',
        'Surface Preparation',
        'Complete Coverage',
      ],
    },
  ];

  const additionalServices = [
    {
      name: 'Paint Protection Film',
      price: 1500,
      description: 'Protect your vehicle from scratches and chips',
    },
    {
      name: 'Ceramic Coating',
      price: 1200,
      description: 'Long-lasting protection and shine',
    },
    {
      name: 'Window Tinting',
      price: 400,
      description: 'Premium ceramic window tint',
    },
    {
      name: 'Chrome Delete',
      price: 800,
      description: 'Replace chrome trim with black finish',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Transparent Pricing for Quality Service
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose from our carefully crafted packages or customize a solution that fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-white/10 rounded-xl p-8 backdrop-blur-sm ${
                pkg.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center bg-blue-500 px-4 py-1 rounded-full">
                    <Star className="w-4 h-4 text-white mr-1" />
                    <span className="text-sm font-medium text-white">Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="flex items-center justify-center text-gray-300 mb-4">
                  <span className="text-3xl font-bold">${pkg.price}</span>
                  <span className="ml-2">starting at</span>
                </div>
                <p className="text-gray-400">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={onOpenAppointment}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                aria-label={`Get started with ${pkg.name} package`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div key={service.name} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                  <Shield className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-xl font-bold text-blue-400">
                  ${service.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center text-gray-400">
          <p>* Prices may vary based on vehicle size and condition. Contact us for a detailed quote.</p>
        </div>
      </div>
    </div>
  );
}
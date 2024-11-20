import React from 'react';
import { Shield, Paintbrush, Car, Wrench, Palette, Layers } from 'lucide-react';

interface ServicesPageProps {
  onOpenAppointment: () => void;
}

export default function ServicesPage({ onOpenAppointment }: ServicesPageProps) {
  const services = [
    {
      id: 'full-wraps',
      title: 'Full Vehicle Wraps',
      icon: <Car className="w-8 h-8" />,
      description: 'Complete vehicle transformation with premium vinyl wraps',
      features: [
        'Premium Cast Vinyl',
        'Color Change Wraps',
        'Custom Designs',
        'Paint Protection',
      ],
      image: 'https://i.pinimg.com/736x/b8/4b/ca/b84bcafc80c59678ed6ebbd385e3fe27.jpg'
    },
    {
      id: 'custom-graphics',
      title: 'Custom Graphics',
      icon: <Palette className="w-8 h-8" />,
      description: 'Personalized designs and commercial branding solutions',
      features: [
        'Logo Design',
        'Racing Stripes',
        'Commercial Fleet Graphics',
        'Custom Decals',
      ],
      image: 'https://graphics.averydennison.com/content/dam/averydennison/graphics/na/en/images/home/About-US/press-release/top15-2016/GS-Top-15-PG-Nola-345x345.png'
    },
    {
      id: 'custom-paint',
      title: 'Custom Paint',
      icon: <Paintbrush className="w-8 h-8" />,
      description: 'Professional paint services with premium finishes',
      features: [
        'Custom Color Mixing',
        'Metallic Finishes',
        'Pearl Effects',
        'Multi-tone Paint',
      ],
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'paint-protection',
      title: 'Paint Protection',
      icon: <Shield className="w-8 h-8" />,
      description: 'Advanced protection solutions for your vehicle',
      features: [
        'Ceramic Coating',
        'Paint Protection Film',
        'Anti-scratch Protection',
        'UV Protection',
      ],
      image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'color-change',
      title: 'Color Change',
      icon: <Layers className="w-8 h-8" />,
      description: 'Complete color transformation services',
      features: [
        'Full Color Changes',
        'Two-tone Paint',
        'Color Matching',
        'Specialty Finishes',
      ],
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20200804/pngtree-bright-color-gradient-gradation-change-background-image_377133.jpg'
    },
    {
      id: 'autobody',
      title: 'Auto Body Services',
      icon: <Wrench className="w-8 h-8" />,
      description: 'Professional auto body repair and modification',
      features: [
        'Collision Repair',
        'Panel Replacement',
        'Custom Modifications',
        'Structural Repairs',
      ],
      image: 'https://images.salvagereseller.com/v1/AUTH_svc.pdoc00001/lpp/0624/1ac06e9ed3454131a937ae11afd4e70e_hrs.jpg'
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience unparalleled craftsmanship with our comprehensive range of automotive customization services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white flex items-center space-x-2">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    {React.cloneElement(service.icon, { className: 'w-6 h-6' })}
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-400">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={onOpenAppointment}
                  className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  aria-label={`Book appointment for ${service.title}`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
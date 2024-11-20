import React from 'react';
import { ArrowLeft, ArrowRight, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
  const showcaseVehicles = [
    {
      id: 1,
      title: 'Dodge Challenger',
      description: 'American muscle with custom finish',
      image: 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&w=800&q=80',
      category: 'Muscle'
    },
    {
      id: 2,
      title: 'Mercedes-AMG GT',
      description: 'German engineering meets luxury',
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80',
      category: 'Luxury'
    },
    {
      id: 3,
      title: 'Ferrari',
      description: 'Italian masterpiece with custom wrap',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80',
      category: 'Exotic'
    },
    {
      id: 4,
      title: 'Mercedes G63',
      description: 'Luxury SUV with premium finish',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
      category: 'Luxury'
    },
    {
      id: 5,
      title: 'Porsche 911',
      description: 'Classic sports car in sleek black',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80',
      category: 'Sports'
    },
    {
      id: 6,
      title: 'BMW M4',
      description: 'Performance meets luxury',
      image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=800&q=80',
      category: 'Sports'
    },
    {
      id: 7,
      title: 'Audi R8 V10',
      description: 'Sleek supercar with motorsport heritage',
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
      category: 'Exotic'
    },
    {
      id: 8,
      title: 'Nissan GT-R',
      description: 'Japanese performance icon',
      image: 'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&w=800&q=80',
      category: 'Sports'
    },
    {
      id: 9,
      title: 'Mercedes-AMG GT Black Series',
      description: 'Ultimate performance with striking aesthetics',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
      category: 'Luxury'
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const categories = ['All', 'Exotic', 'Sports', 'Luxury', 'Muscle'];

  const filteredVehicles = selectedCategory === 'All'
    ? showcaseVehicles
    : showcaseVehicles.filter(vehicle => vehicle.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Exotic Car Showcase
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our gallery of exceptional vehicles that inspire our passion for automotive excellence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group relative bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm"
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {vehicle.title}
                    </h3>
                    <p className="text-gray-300">{vehicle.description}</p>
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inspiration Note */}
        <div className="mt-16 text-center text-gray-400">
          <p>These stunning vehicles showcase the possibilities in automotive customization and inspire our work.</p>
        </div>
      </div>
    </div>
  );
}
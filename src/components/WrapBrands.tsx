import React from 'react';
import { Shield, Star, Check } from 'lucide-react';

export default function WrapBrands() {
  const brands = [
    {
      name: '3M',
      logo: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=600&q=80',
      description: '3M offers a comprehensive range of high-quality vinyl wrap films known for durability and ease of application. Their 2080 Series includes various finishes such as gloss, matte, satin, and carbon fiber.',
      features: ['Durability', 'Easy Application', '2080 Series', 'Multiple Finishes'],
      popular: true
    },
    {
      name: 'Avery Dennison',
      logo: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80',
      description: 'Avery Dennison provides the Supreme Wrapping Film series, recognized for its extensive color palette and superior conformability, making it a favorite among professional installers.',
      features: ['Supreme Series', 'Color Variety', 'Conformability', 'Professional Grade']
    },
    {
      name: 'Oracal',
      logo: 'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&w=600&q=80',
      description: 'Oracal, a brand under Orafol, offers the 970RA and 975RA series, featuring a variety of colors and textures, including unique options like honeycomb and crocodile patterns.',
      features: ['970RA Series', '975RA Series', 'Unique Textures', 'Pattern Options']
    },
    {
      name: 'KPMF',
      logo: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80',
      description: 'KPMF specializes in high-quality vehicle wrap films with unique finishes such as iridescent and pearlescent, providing distinctive visual effects.',
      features: ['Iridescent Finish', 'Pearlescent Options', 'Visual Effects', 'Premium Quality']
    },
    {
      name: 'Hexis',
      logo: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?auto=format&fit=crop&w=600&q=80',
      description: 'Hexis offers a wide range of cast vinyl films suitable for full vehicle wraps, known for their durability and vibrant color options.',
      features: ['Cast Vinyl', 'Vibrant Colors', 'Full Wraps', 'Durability']
    },
    {
      name: 'Arlon Graphics',
      logo: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
      description: 'Arlon provides the SLX Cast Wrap series, designed for easy installation and long-term durability, suitable for both personal and commercial vehicles.',
      features: ['SLX Series', 'Easy Install', 'Long-term Use', 'Versatile']
    },
    {
      name: 'VViViD Vinyls',
      logo: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=600&q=80',
      description: 'VViViD offers a variety of affordable vinyl wrap films, including gloss, matte, and textured finishes, catering to both DIY enthusiasts and professionals.',
      features: ['Affordable', 'DIY Friendly', 'Multiple Finishes', 'Professional Grade']
    },
    {
      name: 'Ritrama',
      logo: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80',
      description: 'Ritrama produces high-quality cast vinyl films suitable for vehicle wraps, known for their excellent conformability and color retention.',
      features: ['Color Retention', 'Conformability', 'Cast Vinyl', 'High Quality']
    },
    {
      name: 'APA',
      logo: 'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&w=600&q=80',
      description: 'APA specializes in premium car wrapping films with a focus on unique colors and finishes, including super candy and chrome effects.',
      features: ['Super Candy', 'Chrome Effects', 'Premium Films', 'Unique Colors']
    },
    {
      name: 'TeckWrap',
      logo: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80',
      description: 'TeckWrap offers a wide range of vinyl wrap films, including gloss, matte, and carbon fiber finishes, known for their affordability and quality.',
      features: ['Affordable', 'Quality Films', 'Multiple Finishes', 'Carbon Fiber']
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Our Premium Wrap Brands
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We partner with the world's leading vinyl wrap manufacturers to ensure the highest quality results
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="relative bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm"
            >
              {brand.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-blue-600 px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-white" />
                    <span className="text-sm text-white">Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="relative h-48">
                <img
                  src={brand.logo}
                  alt={`${brand.name} Wrap Example`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{brand.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-6">{brand.description}</p>
                
                <div className="space-y-2">
                  {brand.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
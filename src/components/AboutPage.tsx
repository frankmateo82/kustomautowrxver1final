import React from 'react';
import { Shield, Users, Award, Wrench } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quality First',
      description: 'We never compromise on quality, using only premium materials and proven techniques.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'Our certified professionals bring years of experience and passion to every project.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Customer Satisfaction',
      description: 'Your vision and satisfaction are our top priorities, guaranteed.'
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Innovation',
      description: 'We stay ahead with the latest techniques and technologies in automotive customization.'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            About Kustom Auto Wrx
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are passionate about transforming vehicles into works of art. With years of experience and dedication to excellence, we've become the trusted name in automotive customization.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    {React.cloneElement(value.icon, { className: 'w-6 h-6 text-white' })}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                </div>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600706432502-77a0e2e32771?auto=format&fit=crop&w=800&q=80"
              alt="Our Professional Auto Customization Workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded with a vision to redefine automotive aesthetics, Kustom Auto Wrx has grown from a passionate dream into a leading force in vehicle customization. Our journey began with a simple belief: every vehicle has the potential to be extraordinary.
              </p>
              <p>
                Today, we're proud to be the go-to destination for car enthusiasts and owners who demand the very best. Our state-of-the-art facility in Gainesville, combined with our team of certified professionals, allows us to deliver exceptional results that exceed expectations.
              </p>
              <p>
                We don't just modify vehicles; we create masterpieces that reflect our clients' personalities and preferences. Our commitment to quality, attention to detail, and customer satisfaction has earned us a reputation as the premier automotive customization specialist in the region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
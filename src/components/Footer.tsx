import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://lh3.googleusercontent.com/JrfHUooYKBIw5QMd7Zb1v9PB8uqBqVv5mwpFUtGWjDRCcFAK96--l8RTgnBsVF53IlkVG7F0psXTIXKwz6aGlgkau5wMULIov-E-rHM=s192"
                alt="Kustom Auto Wrx - Vehicle Customization Specialists"
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-xl font-bold text-white">Kustom Auto Wrx</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Gainesville's premier destination for vehicle wraps, custom paint, and professional auto body services. Transform your vision into reality.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-blue-400 hover:text-blue-300 transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="text-blue-400 hover:text-blue-300 transition-colors" aria-label="Follow us on Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-blue-400 hover:text-blue-300 transition-colors" aria-label="Follow us on Twitter">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-1" />
                <span>2445 Hilton Dr, Ste 105<br />Gainesville, GA 30501</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <span>(470) 545-0570</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <span>info@kustomautowrx.com</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-400">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Kustom Auto Wrx - Gainesville's Premier Auto Customization Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
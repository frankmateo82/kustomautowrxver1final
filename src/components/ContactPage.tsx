import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for inquiries, quotes, or to schedule your appointment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1 shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-gray-300">2445 Hilton Dr, Ste 105<br />Gainesville, GA 30501</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-400 mt-1 shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">(470) 545-0570</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-400 mt-1 shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-300">info@kustomautowrx.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-400 mt-1 shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                    <div className="text-gray-300">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Connect With Us</h2>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="p-3 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-blue-400" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-blue-400" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors"
                >
                  <Twitter className="w-6 h-6 text-blue-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <div className="bg-white/10 rounded-xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.741297424618!2d-83.8183873!3d34.2991247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5f64014c8b2f9%3A0x9b37f2f3891bbf12!2s2445%20Hilton%20Dr%20Suite%20105%2C%20Gainesville%2C%20GA%2030501!5e0!3m2!1sen!2sus!4v1647894521584!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
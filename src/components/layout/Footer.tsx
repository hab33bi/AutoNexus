import React from 'react';
import { Car, Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Container from './Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 backdrop-blur-lg text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Car className="h-8 w-8 text-primary-500 mr-2" />
              <span className="text-xl font-bold">Auto Nexus</span>
            </div>
            <p className="text-white/70 mb-6">
              Revolutionizing car dealership operations through digital automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-500 mr-3 mt-0.5" />
                <span className="text-white/70">contact@autonexus.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary-500 mr-3 mt-0.5" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mr-3 mt-0.5" />
                <span className="text-white/70">123 Auto Drive, San Francisco, CA 94158</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">System Status</h3>
            <div className="flex items-center mb-2">
              <div className="h-3 w-3 rounded-full bg-success-500 mr-2 animate-pulse-slow"></div>
              <span className="text-white/70">All systems operational</span>
            </div>
            <p className="text-white/70 text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {currentYear} Auto Nexus. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
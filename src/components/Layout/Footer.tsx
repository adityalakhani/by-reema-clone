/*
 * PATH: src/components/Layout/Footer.tsx
 */
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-piano-dark text-piano-cream/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Raama Music School Logo" className="w-12 h-12 rounded-full bg-white p-1" loading="lazy" />
              <h3 className="font-serif text-xl text-white">Raama Music School</h3>
            </div>
            <p className="text-[15px] leading-relaxed">
              Transform your musical dreams into reality with our innovative and inspiring music education. Expert piano instruction by Reema Gupta with 10+ years of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-[15px]">
              <li><Link to="/" className="hover:text-piano-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-piano-gold transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-piano-gold transition-colors">Courses</Link></li>
              <li><Link to="/gallery" className="hover:text-piano-gold transition-colors">Gallery</Link></li>
              <li><Link to="/faq" className="hover:text-piano-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-piano-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl text-white mb-4">Contact Info</h4>
            <ul className="space-y-4 text-[15px]">
              <li className="flex items-start gap-3">
                <a
                  href="https://maps.app.goo.gl/2uKEHSW9kqQgFPBZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-piano-gold transition-colors"
                >
                  <MapPin className="w-5 h-5 text-piano-gold mt-1 flex-shrink-0" />
                  <span>9/13, Punjabi Bagh West,
                    New Delhi, India</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-piano-gold mt-1 flex-shrink-0" />
                <a href="tel:+917827444093" className="hover:text-piano-gold transition-colors">+91 7827444093</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-piano-gold mt-1 flex-shrink-0" />
                <a href="mailto:raamamusic2025@gmail.com" className="hover:text-piano-gold transition-colors break-all">raamamusic2025@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl text-white mb-4">Follow Us</h4>
            <p className="text-[15px]">Stay connected with us on social media for the latest updates and musical inspiration.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-piano-gold hover:text-piano-dark transition-all duration-300"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/raamamusicschool/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-piano-gold hover:text-piano-dark transition-all duration-300"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-piano-gold hover:text-piano-dark transition-all duration-300"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 text-center text-[15px] text-piano-cream/60">
          <p>© 2024 RAAMA MUSIC SCHOOL. All rights reserved. | Music is the Ultimate Bliss</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
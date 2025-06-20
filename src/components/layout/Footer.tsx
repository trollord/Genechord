import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-4">
              <span className="text-primary-200 font-display text-2xl font-bold">Gene</span>
              <span className="text-white font-display text-2xl font-bold">chord</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Genechord Pharmaceuticals Private Limited</h3>
            <p className="text-gray-300">
              Advancing reproductive healthcare through innovation and research. Committed to improving lives, one fertility journey at a time.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.linkedin.com/company/genechord-pharmaceuticals/about/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-200 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.me/917977612659" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-200 transition-all">
                <svg 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20" 
                  fill="currentColor"
                  className="text-white hover:text-primary-200 transition-all"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/genechord?igsh=YXdsODNieWo3ajZo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-200 transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/genechord" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-200 transition-all">
                <Twitter size={20} />
              </a>
              <a href="https://www.facebook.com/share/1Bd1h8PYCn/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-200 transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/@GenechordPharma" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-200 transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-200 transition-all">Home</Link>
              </li>
              <li>
                <Link to="/mission" className="text-gray-300 hover:text-primary-200 transition-all">Mission & Vision</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary-200 transition-all">Products</Link>
              </li>
              <li>
                <Link to="/for-doctors" className="text-gray-300 hover:text-primary-200 transition-all">For Doctors</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-primary-200 transition-all">Our Team</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-200 transition-all">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-200">Contact Us</h4>
            <address className="not-italic space-y-2 text-gray-300">
              <p>Genechord Pharmaceuticals Private Limited</p>
              <p>B-811, Damji Shamji Corporate Square</p>
              <p>Laxmi Nagar, Ghatkopar East</p>
              <p>Mumbai – 400075, Maharashtra, India</p>
              <p>Email: <a href="mailto:info@genechord.com" className="hover:text-primary-200 transition-all">info@genechord.com</a></p>
              <p>Phone: <a href="tel:+917977612659" className="hover:text-primary-200 transition-all">+91 7977 612 659</a></p>
              <p>Phone: <a href="tel:+918169292112" className="hover:text-primary-200 transition-all">+91 8169 292 112</a></p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Genechord Pharmaceuticals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
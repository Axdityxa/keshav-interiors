import { Facebook, Youtube, Instagram, Mail, Pointer as Pinterest } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Keshav Interiors</h3>
            <p className="text-gray-300 mb-4">
              We believe that homes are a reflection of the people who live within and our interior services are tailored to help you design interiors that imbibe your personality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Pinterest className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">What We Do</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">HOME</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">ABOUT US</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">HOW IT WORKS</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">PORTFOLIO</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">CONTACT</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">HOME DECOR</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">BLOGS</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">Phone: +91 9731766082</p>
            <p className="text-gray-300">
              3 Syno. 10/4B Balagere Main Road<br />
              Mathrushree Nilaya SSVR Tridax<br />
              Varthur, Bengaluru Urban<br />
              Karnataka 560087
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© All rights reserved. Powered by Keshav Interiors</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
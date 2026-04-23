import { Car, Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = ({ setPage }) => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center">
            <Car className="text-blue-500 mr-2" size={24} />
            <h3 className="text-xl font-bold">Elite Motors</h3>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Redefining the automotive experience with a curated selection of world-class premium vehicles. Excellence in every mile.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 glass rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all"><FaFacebook size={18} /></a>
            <a href="#" className="p-2 glass rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all"><FaTwitter size={18} /></a>
            <a href="#" className="p-2 glass rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all"><FaInstagram size={18} /></a>
            <a href="#" className="p-2 glass rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all"><FaYoutube size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><button onClick={() => setPage('home')} className="hover:text-blue-500 transition-colors">Home</button></li>
            <li><button onClick={() => setPage('vehicles')} className="hover:text-blue-500 transition-colors">Inventory</button></li>
            <li><button onClick={() => setPage('about')} className="hover:text-blue-500 transition-colors">About Us</button></li>
            <li><button onClick={() => setPage('services')} className="hover:text-blue-500 transition-colors">Services</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><button onClick={() => setPage('contact')} className="hover:text-blue-500 transition-colors">Contact Us</button></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Warranty</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Service Center</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li className="flex items-center"><MapPin size={16} className="mr-3 text-blue-500" /> 123 Automotive Ave, Detroit, MI</li>
            <li className="flex items-center"><Phone size={16} className="mr-3 text-blue-500" /> (555) 123-4567</li>
            <li className="flex items-center"><Mail size={16} className="mr-3 text-blue-500" /> info@elitemotors.com</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
        <p>© 2024 Elite Motors. Engineered for Perfection.</p>
      </div>
    </footer>
  );
};

export default Footer;

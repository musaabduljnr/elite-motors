import { useState, useEffect } from 'react';
import { Car, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ currentPage, setPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Vehicles', id: 'vehicles' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => setPage('home')}>
          <Car className="text-blue-500 mr-2" size={32} />
          <h1 className="text-2xl font-bold tracking-tight">Elite <span className="text-blue-500">Motors</span></h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${currentPage === link.id ? 'text-blue-500' : 'text-gray-300'}`}
            >
              {link.name}
            </button>
          ))}
          <button className="btn-primary py-2 px-5 text-sm" onClick={() => setPage('contact')}>Book Test Drive</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setPage(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-lg font-medium ${currentPage === link.id ? 'text-blue-500' : 'text-gray-300'}`}
                >
                  {link.name}
                </button>
              ))}
              <button className="btn-primary w-full py-3" onClick={() => { setPage('contact'); setIsMobileMenuOpen(false); }}>Book Test Drive</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

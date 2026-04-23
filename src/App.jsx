import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import VehicleModal from './components/VehicleModal';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleDetails = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const handleBook = (vehicle) => {
    setIsModalOpen(false);
    setCurrentPage('contact');
    // In a real app, we might pass the vehicle ID to the contact form state
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage} onDetails={handleDetails} />;
      case 'vehicles':
        return <Vehicles onDetails={handleDetails} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setPage={setCurrentPage} onDetails={handleDetails} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setCurrentPage} />

      <VehicleModal 
        vehicle={selectedVehicle} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onBook={handleBook}
      />
    </div>
  );
}

export default App;

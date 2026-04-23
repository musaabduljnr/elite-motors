import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Zap, Award } from 'lucide-react';
import VehicleCard from '../components/VehicleCard';
import { vehicles } from '../data/vehicles';

const Home = ({ setPage, onDetails }) => {
  const featuredVehicles = vehicles.slice(0, 3);

  const services = [
    { title: 'Vehicle Sales', desc: 'Curated selection of new and pre-owned premium automobiles.', icon: Award },
    { title: 'Expert Service', desc: 'World-class maintenance by certified technicians.', icon: Shield },
    { title: 'Global Warranty', desc: 'Comprehensive coverage for total peace of mind.', icon: Zap },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/20 via-[#0a0a0c]/50 to-[#0a0a0c]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 glass rounded-full text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            Engineering Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-gradient"
          >
            Experience The <br /> Pinnacle of Driving
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            Discover a legacy of performance and luxury. Our collection represents the finest in automotive engineering and design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button onClick={() => setPage('vehicles')} className="btn-primary py-4 px-8 text-lg flex items-center justify-center">
              Explore Collection <ArrowRight className="ml-2" size={20} />
            </button>
            <button onClick={() => setPage('contact')} className="btn-outline py-4 px-8 text-lg">
              Book Appointment
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="bg-transparent">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Current Showcase</span>
            <h2 className="text-4xl font-bold mt-4">Featured Inventory</h2>
          </div>
          <button onClick={() => setPage('vehicles')} className="text-blue-500 font-bold flex items-center hover:underline mt-4 md:mt-0">
            View Full Inventory <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVehicles.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} onDetails={onDetails} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#101014]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-8 glass rounded-2xl hover:border-blue-500/30 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Excellence Matters</span>
          <h2 className="text-4xl font-bold mt-4">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: 'Michael Johnson', role: 'Elite Sedan X7 Owner', text: "The buying experience at Elite Motors was exceptional. Their team helped me find the perfect vehicle and the after-sales service has been outstanding." },
            { name: 'Sarah Williams', role: 'Sport SUV Pro Owner', text: "I've owned my Sport SUV Pro for over a year now and it's been flawless. The performance and luxury features exceed my expectations." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 glass rounded-2xl relative">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 font-bold text-lg">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-blue-500 text-xs">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-400 italic">"{item.text}"</p>
              <div className="flex mt-6 text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

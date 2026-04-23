import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, Settings, ShieldCheck } from 'lucide-react';

const VehicleModal = ({ vehicle, isOpen, onClose, onBook }) => {
  if (!vehicle) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] glass rounded-3xl overflow-hidden overflow-y-auto"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 glass rounded-full hover:bg-white/10 z-10"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-[300px] lg:h-full">
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">{vehicle.type}</span>
                    <h2 className="text-4xl font-bold mt-2">{vehicle.name}</h2>
                  </div>
                  <div className="text-3xl font-bold text-blue-500">{vehicle.price}</div>
                </div>

                <p className="text-gray-400 mb-8 text-lg leading-relaxed">{vehicle.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="flex items-center text-white font-bold mb-4">
                      <Settings className="mr-2 text-blue-500" size={20} /> Specifications
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(vehicle.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-white/5 pb-2 text-sm">
                          <span className="text-gray-500">{key}</span>
                          <span className="text-gray-200 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center text-white font-bold mb-4">
                      <ShieldCheck className="mr-2 text-blue-500" size={20} /> Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {vehicle.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-400">
                          <Check size={16} className="mr-2 text-blue-500 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => onBook(vehicle)}
                    className="flex-1 btn-primary py-4 flex items-center justify-center"
                  >
                    <Calendar className="mr-2" size={20} /> Book Test Drive
                  </button>
                  <button className="flex-1 btn-outline py-4">Contact Specialist</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default VehicleModal;

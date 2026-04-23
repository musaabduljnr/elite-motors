import { motion } from 'framer-motion';
import { ArrowRight, Fuel, Gauge, Zap } from 'lucide-react';

const VehicleCard = ({ vehicle, onDetails }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass rounded-2xl overflow-hidden group border border-white/5"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-400">
          {vehicle.type}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{vehicle.name}</h3>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Premium Collection</p>
          </div>
          <div className="text-2xl font-bold text-blue-500">{vehicle.price}</div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="flex flex-col items-center p-2 bg-white/5 rounded-lg">
            <Gauge size={16} className="text-gray-400 mb-1" />
            <span className="text-[10px] text-gray-500">HP</span>
            <span className="text-xs font-bold">{vehicle.specifications.Horsepower.split(' ')[0]}</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-white/5 rounded-lg">
            <Fuel size={16} className="text-gray-400 mb-1" />
            <span className="text-[10px] text-gray-500">Type</span>
            <span className="text-xs font-bold">{vehicle.type}</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-white/5 rounded-lg">
            <Zap size={16} className="text-gray-400 mb-1" />
            <span className="text-[10px] text-gray-500">Fuel</span>
            <span className="text-xs font-bold">{vehicle.specifications['Fuel Economy'].split(' ')[0]}</span>
          </div>
        </div>

        <button 
          onClick={() => onDetails(vehicle)}
          className="w-full btn-outline py-3 flex items-center justify-center group/btn"
        >
          View Details
          <ArrowRight size={18} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default VehicleCard;

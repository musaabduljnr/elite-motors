import { useState } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import VehicleCard from '../components/VehicleCard';
import { vehicles } from '../data/vehicles';

const Vehicles = ({ onDetails }) => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVehicles = vehicles.filter(v => {
    const matchesFilter = filter === 'All' || v.type === filter;
    const matchesSearch = v.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['All', 'Sedan', 'SUV', 'Hybrid', 'Sports Car', 'Truck', 'Minivan'];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Unmatched Selection</span>
          <h1 className="text-5xl font-bold mt-4 mb-6">Our Inventory</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Browse our exclusive collection of high-performance vehicles and luxury automobiles.</p>
        </div>

        {/* Filter Bar */}
        <div className="glass p-6 rounded-3xl mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="relative w-full lg:w-1/3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Search by model name..."
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            <Filter size={20} className="text-blue-500 shrink-0" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors shrink-0">
            <SlidersHorizontal size={18} />
            Advanced Filters
          </button>
        </div>

        {/* Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map(v => (
              <VehicleCard key={v.id} vehicle={v} onDetails={onDetails} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No vehicles found</h3>
            <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
            <button onClick={() => {setFilter('All'); setSearchTerm('');}} className="btn-primary mt-8">Reset All Filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vehicles;

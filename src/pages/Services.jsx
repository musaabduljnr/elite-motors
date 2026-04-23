import { Car, Toolbox, Shield, Fuel, PaintRoller, Disc, ArrowRight } from 'lucide-react';

const Services = () => {
  const serviceList = [
    { icon: Car, title: 'Vehicle Sales', desc: 'New and pre-owned premium vehicles curated for enthusiasts.' },
    { icon: Toolbox, title: 'Maintenance', desc: 'Precision service and repair by factory-trained specialists.' },
    { icon: Shield, title: 'Warranty', desc: 'Comprehensive protection plans for every vehicle we sell.' },
    { icon: Fuel, title: 'Efficiency', desc: 'Fuel system optimization and performance tuning services.' },
    { icon: PaintRoller, title: 'Detailing', desc: 'Professional body work and aesthetic restoration services.' },
    { icon: Disc, title: 'Tire Care', desc: 'Premium tire selection, balancing, and alignment services.' }
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Total Care</span>
          <h1 className="text-5xl font-bold mt-4 mb-6">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">We provide a comprehensive ecosystem of services to ensure your driving experience remains flawless.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {serviceList.map((service, idx) => (
            <div key={idx} className="group p-8 glass rounded-3xl hover:bg-blue-500/5 transition-all">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
              <button className="text-xs font-bold uppercase tracking-widest text-blue-500 flex items-center hover:gap-2 transition-all">
                Learn More <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
          ))}
        </div>

        <div className="glass p-12 rounded-[2.5rem] relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Perfection?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Schedule a service appointment or consult with our specialists today.</p>
            <button className="btn-primary py-4 px-10">Book a Service Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

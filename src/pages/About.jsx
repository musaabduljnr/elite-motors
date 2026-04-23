import { History, Globe, Trophy } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Our Legacy</span>
            <h1 className="text-5xl font-bold mt-4 mb-8">Three Decades of <br /> Automotive Mastery</h1>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Founded in 1993, Elite Motors began as a small family-owned dealership with a vision to provide premium vehicles with exceptional customer service.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Throughout our journey, we've remained committed to our core values of integrity, quality, and customer satisfaction. We believe that owning a vehicle should be an enjoyable experience from purchase through ownership.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">30+</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">150+</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">Models Available</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1562141982-c59998850617?q=80&w=2070&auto=format&fit=crop" 
              alt="Elite Motors Showroom" 
              className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: History, title: 'Heritage', desc: 'A rich history of delivering excellence since 1993.' },
            { icon: Globe, title: 'Global Presence', desc: 'Serving clients across 50+ countries worldwide.' },
            { icon: Trophy, title: 'Award Winning', desc: 'Recognized for superior service and inventory quality.' }
          ].map((item, idx) => (
            <div key={idx} className="p-10 glass rounded-3xl text-center hover:border-blue-500/30 transition-all">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-500">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

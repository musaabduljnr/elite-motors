import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Get In Touch</span>
            <h1 className="text-5xl font-bold mt-4 mb-8">Let's Talk Performance</h1>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Have questions about our collection or services? Our specialists are here to provide expert guidance and support.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-6 text-blue-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Showroom</h4>
                  <p className="text-gray-500 text-sm">123 Automotive Avenue, Detroit, MI 48201</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-6 text-blue-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <p className="text-gray-500 text-sm">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-6 text-blue-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-gray-500 text-sm">concierge@elitemotors.com</p>
                </div>
              </div>
            </div>

            <div className="p-8 glass rounded-3xl">
              <h4 className="flex items-center text-white font-bold mb-6">
                <Clock className="mr-3 text-blue-500" size={20} /> Showroom Hours
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">Mon — Fri</span>
                  <span className="text-gray-200">9:00 AM — 7:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">Saturday</span>
                  <span className="text-gray-200">10:00 AM — 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sunday</span>
                  <span className="text-gray-200">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full"></div>
            <div className="relative glass p-10 rounded-[2.5rem]">
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-gray-500">Our team will get back to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="btn-outline mt-8">Send Another</button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2 font-bold">Full Name</label>
                        <input type="text" required placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 focus:outline-none focus:border-blue-500 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2 font-bold">Email Address</label>
                        <input type="email" required placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 focus:outline-none focus:border-blue-500 transition-colors" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2 font-bold">Subject</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                        <option className="bg-[#0a0a0c]">Vehicle Inquiry</option>
                        <option className="bg-[#0a0a0c]">Test Drive Request</option>
                        <option className="bg-[#0a0a0c]">Service Appointment</option>
                        <option className="bg-[#0a0a0c]">General Question</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2 font-bold">Your Message</label>
                      <textarea rows="5" required placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center group">
                      Send Message <Send size={18} className="ml-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

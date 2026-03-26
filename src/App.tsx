import React from 'react';
import { 
  Heart, 
  Droplets, 
  ShieldAlert, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import ChatBot from './components/ChatBot';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-bottom border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#EE1C25] flex items-center justify-center rounded-sm">
                <div className="w-6 h-2 bg-white absolute"></div>
                <div className="w-2 h-6 bg-white absolute"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#EE1C25]">Red Cross</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium hover:text-[#EE1C25] transition-colors">Our Mission</a>
              <a href="#" className="text-sm font-medium hover:text-[#EE1C25] transition-colors">Donate Blood</a>
              <a href="#" className="text-sm font-medium hover:text-[#EE1C25] transition-colors">Disaster Relief</a>
              <a href="#" className="text-sm font-medium hover:text-[#EE1C25] transition-colors">Training</a>
              <button className="bg-[#EE1C25] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#d11920] transition-all shadow-md hover:shadow-lg">
                Donate Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=2070" 
            alt="Red Cross Volunteers" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Humanity in <span className="text-[#EE1C25]">Action.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              The Red Cross prevents and alleviates human suffering in the face of emergencies by mobilizing the power of volunteers and the generosity of donors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#EE1C25] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#d11920] transition-all flex items-center justify-center gap-2 group">
                Find a Blood Drive <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all">
                Volunteer Today
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#EE1C25] mb-2">90%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Volunteer Workforce</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#EE1C25] mb-2">40%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider font-semibold">US Blood Supply</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#EE1C25] mb-2">60k+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Disasters Responded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#EE1C25] mb-2">4.6M</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider font-semibold">People Trained Yearly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Help</h2>
            <div className="w-20 h-1.5 bg-[#EE1C25] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplets className="text-[#EE1C25]" size={40} />,
                title: "Blood Services",
                desc: "We collect and distribute blood to hospitals across the nation, saving millions of lives every year.",
                image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?auto=format&fit=crop&q=80&w=800"
              },
              {
                icon: <ShieldAlert className="text-[#EE1C25]" size={40} />,
                title: "Disaster Relief",
                desc: "From house fires to hurricanes, we provide food, shelter, and emotional support to those in need.",
                image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800"
              },
              {
                icon: <Heart className="text-[#EE1C25]" size={40} />,
                title: "Training & Certification",
                desc: "We offer world-class CPR, First Aid, and AED training to empower individuals to save lives.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                  <a href="#" className="text-[#EE1C25] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#EE1C25] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Be the hero they need.</h2>
          <p className="text-xl mb-12 opacity-90">Your donation helps us provide critical services to those affected by disasters and emergencies.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-[#EE1C25] px-10 py-5 rounded-full text-xl font-black hover:bg-gray-100 transition-all shadow-xl">
              Donate $25
            </button>
            <button className="bg-white text-[#EE1C25] px-10 py-5 rounded-full text-xl font-black hover:bg-gray-100 transition-all shadow-xl">
              Donate $50
            </button>
            <button className="bg-white text-[#EE1C25] px-10 py-5 rounded-full text-xl font-black hover:bg-gray-100 transition-all shadow-xl">
              Custom Amount
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#EE1C25] flex items-center justify-center rounded-sm">
                  <div className="w-5 h-1.5 bg-white absolute"></div>
                  <div className="w-1.5 h-5 bg-white absolute"></div>
                </div>
                <span className="text-xl font-bold tracking-tight">Red Cross</span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                The American Red Cross is a non-profit humanitarian organization that provides emergency assistance, disaster relief, and health and safety education.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Find a Blood Drive</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Volunteer Opportunities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CPR Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">International Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3"><Phone size={18} /> 1-800-RED-CROSS</li>
                <li className="flex items-center gap-3"><Mail size={18} /> support@redcross.org</li>
                <li className="flex items-center gap-3"><MapPin size={18} /> Washington, D.C.</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© 2026 American Red Cross. All rights reserved. This is a mockup website for demonstration purposes.</p>
          </div>
        </div>
      </footer>

      {/* ChatBot Component */}
      <ChatBot />
    </div>
  );
}

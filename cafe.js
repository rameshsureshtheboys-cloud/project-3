import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter, 
  Star, 
  Menu as MenuIcon, 
  X, 
  ChevronUp, 
  ArrowRight,
  Clock
} from 'lucide-react';

// --- MOCK DATA ---

const MENU_ITEMS = [
  {
    id: 1,
    category: 'Coffee',
    name: 'Artisan Latte',
    description: 'Rich espresso with velvety steamed milk and latte art.',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Coffee',
    name: 'Cold Brew',
    description: 'Steeped for 12 hours for a smooth, non-acidic finish.',
    price: '$5.00',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Desserts',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with espresso-soaked ladyfingers.',
    price: '$6.50',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Snacks',
    name: 'Avocado Toast',
    description: 'Sourdough bread topped with smashed avocado and spices.',
    price: '$8.00',
    image: 'https://images.unsplash.com/photo-1588137372308-15f75323ca8d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    category: 'Drinks',
    name: 'Matcha Green Tea',
    description: 'Premium ceremonial grade matcha with oat milk.',
    price: '$5.50',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    category: 'Desserts',
    name: 'Blueberry Muffin',
    description: 'Freshly baked every morning with organic blueberries.',
    price: '$3.50',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=800&auto=format&fit=crop'
  }
];

const REVIEWS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    rating: 5,
    text: "The best coffee spot in the city. The ambiance is perfect for working or catching up with friends.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    text: "Their cold brew is absolutely legendary. Friendly staff and great fast wifi!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: 'Emma Wilson',
    rating: 4,
    text: "Love the avocado toast! A bit crowded on weekends but worth the wait.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600&auto=format&fit=crop"
];

// --- COMPONENTS ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-bold flex items-center gap-2 ${scrolled ? 'text-stone-800' : 'text-white'}`}>
          <Coffee className={scrolled ? 'text-amber-700' : 'text-amber-400'} />
          Serene Brew
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium hover:text-amber-500 transition-colors ${scrolled ? 'text-stone-600' : 'text-stone-200'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full transition-all">
            Book Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-stone-800' : 'text-white'} /> : <MenuIcon className={scrolled ? 'text-stone-800' : 'text-white'} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-8 space-y-6 animate-fadeIn">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-stone-800 font-medium text-lg hover:text-amber-600"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-amber-600 text-white px-8 py-3 rounded-full">
              Book Table
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop" 
          alt="Cafe Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-white max-w-3xl mx-auto space-y-6">
        <h2 className="text-amber-400 font-medium tracking-widest uppercase text-sm md:text-base animate-slideUp">
          Welcome to Serene Brew
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight animate-slideUp delay-100">
          Experience the Perfect <br />
          <span className="text-amber-400">Cup of Joy</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto animate-slideUp delay-200">
          Where artisanal beans meet cozy vibes. Join us for a moment of tranquility in the heart of the city.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-slideUp delay-300">
          <a href="#menu" className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-all transform hover:scale-105">
            View Menu
          </a>
          <a href="#contact" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-stone-900 text-white rounded-full transition-all transform hover:scale-105">
            Book a Table
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop" 
                alt="Barista pouring coffee" 
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-100 rounded-lg -z-10 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-amber-600 rounded-lg -z-10 hidden md:block"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-amber-600 font-medium tracking-wide">OUR STORY</h3>
            <h2 className="text-4xl font-bold text-stone-900 font-serif">Brewing Passion Since 2015</h2>
            <p className="text-stone-600 leading-relaxed">
              At Serene Brew, we believe coffee is more than just a drink—it's a ritual. 
              Founded by two friends with a shared love for sustainable beans and community, 
              we've created a space where you can pause, reflect, and enjoy the finer things in life.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We source our beans directly from ethical farms in Ethiopia and Colombia, 
              roasting them in small batches to preserve their unique flavor profiles.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-100 rounded-full text-amber-700">
                  <Coffee size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Premium Beans</h4>
                  <p className="text-sm text-stone-500">Ethically sourced</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-100 rounded-full text-amber-700">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Award Winning</h4>
                  <p className="text-sm text-stone-500">Best Cafe 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Coffee', 'Drinks', 'Snacks', 'Desserts'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-amber-600 font-medium tracking-wide mb-2">DISCOVER FLAVORS</h3>
          <h2 className="text-4xl font-bold text-stone-900 font-serif">Our Menu</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === cat 
                  ? 'bg-amber-600 text-white shadow-lg' 
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group border border-stone-100">
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-stone-900">{item.name}</h3>
                  <span className="text-amber-600 font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-stone-500 text-sm mb-4">{item.description}</p>
                <button className="text-amber-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Order Now <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-amber-600 font-medium tracking-wide mb-2">ATMOSPHERE</h3>
          <h2 className="text-4xl font-bold text-stone-900 font-serif">Our Gallery</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer">
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Coffee className="text-white w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <img src="https://www.transparenttextures.com/patterns/coffee.png" alt="" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-amber-500 font-medium tracking-wide mb-2">TESTIMONIALS</h3>
          <h2 className="text-4xl font-bold text-white font-serif">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-stone-800/50 p-8 rounded-2xl backdrop-blur-sm border border-stone-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < review.rating ? "fill-amber-400 text-amber-400" : "text-stone-600"} 
                  />
                ))}
              </div>
              <p className="text-stone-300 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-amber-500" />
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <span className="text-stone-500 text-sm">Coffee Lover</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div>
              <h3 className="text-amber-600 font-medium tracking-wide mb-2">GET IN TOUCH</h3>
              <h2 className="text-4xl font-bold text-stone-900 font-serif mb-6">Visit Us</h2>
              <p className="text-stone-600 mb-8">
                Have a question or want to book a private event? Drop us a message or come say hi!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 rounded-full text-amber-600 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Address</h4>
                  <p className="text-stone-600">123 Espresso Lane, Coffee District<br />New York, NY 10012</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 rounded-full text-amber-600 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Phone</h4>
                  <p className="text-stone-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 rounded-full text-amber-600 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Email</h4>
                  <p className="text-stone-600">hello@serenebrew.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 rounded-full text-amber-600 mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Hours</h4>
                  <p className="text-stone-600">Mon-Fri: 7am - 8pm<br />Sat-Sun: 8am - 9pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form & Map */}
          <div className="w-full lg:w-2/3 bg-stone-50 rounded-3xl p-8 md:p-12 shadow-inner">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="Tell us about your inquiry..."></textarea>
              </div>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl">
                Send Message
              </button>
            </form>

            <div className="mt-8 h-64 bg-stone-200 rounded-xl overflow-hidden flex items-center justify-center text-stone-400">
               {/* Placeholder for Google Maps Embed */}
               <div className="text-center">
                 <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                 <p>Google Maps Embed Placeholder</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Coffee className="text-amber-500" />
              Serene Brew
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Crafting moments of tranquility through exceptional coffee and warm hospitality since 2015.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-500">Quick Links</h4>
            <ul className="space-y-3 text-stone-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-500">Contact</h4>
            <ul className="space-y-3 text-stone-300">
              <li>123 Espresso Lane</li>
              <li>New York, NY 10012</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@serenebrew.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-500">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-amber-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-amber-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-amber-600 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Serene Brew Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 bg-amber-600 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <ChevronUp size={24} />
    </button>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  return (
    <div className="font-sans text-stone-800 bg-white">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
      
      {/* Floating Contact Button */}
      <a href="#contact" className="fixed bottom-8 left-8 bg-white text-amber-700 p-4 rounded-full shadow-2xl z-40 hover:bg-stone-50 transition-all md:hidden border border-amber-100">
        <Mail size={24} />
      </a>
    </div>
  );
}
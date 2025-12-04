import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, ExternalLink, ChevronRight, MapPin } from 'lucide-react';

// /src/assets/img/hero-img.webp
const portfolioItems = [
  {
    id: 1,
    title: "Nopal en la frente",
    category: "Digital Print, 24 × 36”",
    year: "2024",
    image: "/img/works/nopal-frente.webp" 
  },
  {
    id: 2,
    title: "From The Mouth of Death",
    category: "Digital Print, 24 × 36”",
    year: "2023",
    image: "/img/works/from-the-mouth-death.webp"
  },
  {
    id: 3,
    title: "NADATLAXIOTILOJPAMITL",
    category: "Typography Design",
    year: "2023",
    image: "/img/works/nadatlaxiotilojpamiltl.webp"
  },
  {
    id: 4,
    title: "Tilappalotl, Mariposas Monarca, Monarch Butterflies",
    category: "Acrylic on Wood, 20 × 20”",
    year: "2023",
    image: "/img/works/tlitpapalotl.webp"
  },
  {
    id: 5,
    title: "Tonal, Sol, Sun",
    category: "Acrylic on Wood, 30 × 30”",
    year: "2024",
    image: "/img/works/tonal-sol.webp"
  },
  {
    id: 6,
    title: "Pero Nunca Pierdas la Compostura, Never Lose Your Composure",
    category: "Acrylic on Wood, 18 × 14”",
    year: "2025",
    image: "/img/works/pero-nunca-pierdas-la-compostura.webp"
  },
  {
    id: 7,
    title: "Tliltl in My Heart, Fuego En Mi Corazón, Fire in My Heart",
    category: "Acrylic on Wood, 16 × 20”",
    year: "2025",
    image: "/img/works/tlitl-in-my-heart.webp"
  }
];

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lightbox
  const [lightboxItem, setLightboxItem] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const openLightbox = (item) => setLightboxItem(item);
  const closeLightbox = () => setLightboxItem(null);

  const currentIndex = lightboxItem
    ? portfolioItems.findIndex((p) => p.id === lightboxItem.id)
    : -1;

  const showPrev = (e) => {
    if (e) e.stopPropagation();
    if (currentIndex === -1) return;
    const prevIndex =
      currentIndex === 0 ? portfolioItems.length - 1 : currentIndex - 1;
    setLightboxItem(portfolioItems[prevIndex]);
  };

  const showNext = (e) => {
    if (e) e.stopPropagation();
    if (currentIndex === -1) return;
    const nextIndex =
      currentIndex === portfolioItems.length - 1 ? 0 : currentIndex + 1;
    setLightboxItem(portfolioItems[nextIndex]);
  };

  // Cerrar con ESC y navegar con flechas
  useEffect(() => {
    if (!lightboxItem) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxItem, currentIndex]);

  const Navigation = () => (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div 
          onClick={() => navigateTo('home')} 
          className="cursor-pointer font-serif text-2xl tracking-tighter hover:text-gray-600 transition-colors"
        >
          LAIA <span className="font-bold"></span>
        </div>

        <div className="hidden md:flex space-x-12 text-sm font-medium tracking-widest uppercase">
          {['home', 'about', 'portfolio', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => navigateTo(item)}
              className={`hover:text-black transition-colors ${
                currentPage === item ? 'text-black border-b-2 border-black pb-1' : 'text-gray-400'
              }`}
            >
              {item === 'home' ? 'Home' : item === 'about' ? 'About Me' : item === 'portfolio' ? 'Portfolio' : 'Contact'}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white h-screen absolute w-full flex flex-col items-center justify-center space-y-8 z-40">
          {['home', 'about', 'portfolio', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => navigateTo(item)}
              className="text-2xl font-serif uppercase tracking-widest hover:text-gray-500"
            >
              {item === 'home' ? 'Home' : item === 'about' ? 'About Me' : item === 'portfolio' ? 'Portfolio' : 'Contact'}
            </button>
          ))}
        </div>
      )}
    </nav>
  );

  const Home = () => (
    <div className="pt-20 min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 w-full">
        <div className="md:w-1/2 space-y-6 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-serif leading-tight italic text-gray-500">
            <span className="block mb-5 text-5xl md:text-7xl">Decolonizing the Whitexican: </span>
            <span className="italic text-gray-900">Reclaiming Identity Through </span> Nahuatl <span className="italic text-gray-900">And </span>
            Mesoamerican Motifs.
          </h1>
          <p className="text-gray-600 text-lg max-w-md leading-relaxed font-light">
            Through the lens of personal heritage, employing Mesoamerican motifs inspired by family heirlooms and the Nahuatl language to explore themes 
            of cultural reclamation, Nepantla, and decolonial healing.
          </p>
          <button 
            onClick={() => navigateTo('portfolio')}
            className="group flex items-center gap-2 border-b border-black pb-1 text-sm tracking-widest uppercase hover:text-gray-600 hover:border-gray-600 transition-all mt-8"
          >
            Portfolio <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 relative flex flex-col items-center">
          <div className="w-full aspect-[4/3] bg-white overflow-hidden relative">
            <img 
              src="/img/hero-img.webp" 
              alt="Instalación Myth of Mestizaje" 
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-1000"
            />
          </div>

          <div className="mt-4 text-center md:text-left self-start pl-4 border-l-2 border-black">
            <p className="font-serif text-lg italic leading-none">"Myth of Mestizaje"</p>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Collection 2025 • Mixed Media</p>
          </div>
        </div>
      </div>
    </div>
  );

  const About = () => (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6 ">
      <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">The Artist</h2>
      
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3 w-full">
          <div className="aspect-[3/4] bg-gray-200 grayscale hover:grayscale-0 transition-all duration-500">
            <img 
              src="/img/artist_portrait.webp" 
              alt="Retrato del Artista" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="md:w-2/3 space-y-6 text-gray-700 leading-loose text-lg font-light">
          <p>
            She received the Bachelor of Fine Arts degree in Studio Art from The University of Texas Rio Grande Valley in 2021. In 2022, she entered the School of Art Graduate Program at The University of Texas Rio Grande Valley to pursue a Master of Fine Arts degree in Graphic Design.
          </p>
          <p>
            Her creative research examines the intersections of language, identity, and decolonial reconstruction through the lens of Mesoamerican motifs and Nahuatl expression. Merging Indigenous Nahuatl language from the Huasteca Hidalguense region with contemporary visual systems such as step fret (xicalcoliuhqui) motifs, digital illustration, and mixed media installation.
          </p>
        </div>
      </div>
    </div>
  );

  const Portfolio = () => (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <h2 className="text-4xl md:text-5xl font-serif">
          EXHIBITION: <br /> DECOLONIZING THE WHITEXICAN
        </h2>
        <p className="text-gray-400 mt-4 md:mt-0 text-sm tracking-widest uppercase">
          Showing {portfolioItems.length} Works
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            onClick={() => openLightbox(item)}
          >
            <div className="aspect-square bg-gray-100 overflow-hidden mb-4 relative">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 duration-300"></div>
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-serif text-gray-900 group-hover:text-gray-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{item.category}</p>
              </div>
              <span className="text-xs font-mono text-gray-400 border border-gray-200 px-2 py-1 rounded-full">
                {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Contact = () => (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 min-h-screen flex flex-col md:flex-row gap-16">
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">Let's talk.</h2>
        <p className="text-gray-600 mb-12 text-lg font-light"></p>
        
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <Instagram className="text-gray-700" size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">Social</p>
              <a href="https://www.instagram.com/lavitei/" className="text-lg font-serif hover:underline">@lavitei</a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 bg-gray-50 p-8 md:p-12">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
            <input type="text" className="w-full bg-white border-b border-gray-300 p-3 focus:outline-none focus:border-black transition-colors" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
            <input type="email" className="w-full bg-white border-b border-gray-300 p-3 focus:outline-none focus:border-black transition-colors" placeholder="email@example.com" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
            <textarea rows="4" className="w-full bg-white border-b border-gray-300 p-3 focus:outline-none focus:border-black transition-colors" placeholder="Your Message..."></textarea>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors w-full md:w-auto">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-lg">LAIA</p>
          <p className="text-xs text-gray-400 mt-1">© 2025 All Rights Reserved.</p>
        </div>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/lavitei/" className="text-gray-400 hover:text-black transition-colors"><Instagram size={20}/></a>
          <a href="#" className="text-gray-400 hover:text-black transition-colors"><ExternalLink size={20}/></a>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-black selection:text-white">
      <Navigation />
      <main className="fade-in">
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'contact' && <Contact />}
      </main>
      <Footer />

      {/* LIGHTBOX */}
      {lightboxItem && (
        <div
          className="fixed inset-0 bg-black/80 z-[999] flex items-center justify-center px-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-10 right-0 text-white/70 hover:text-white"
            >
              <X size={28} />
            </button>

            <div className="bg-white p-4 md:p-6">
              <div className="w-full max-h-[70vh] flex items-center justify-center bg-gray-100">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="max-h-[65vh] w-auto object-contain"
                />
              </div>
              <div className="mt-4 flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif">
                    {lightboxItem.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {lightboxItem.category}
                  </p>
                </div>
                <span className="text-xs font-mono text-gray-400 border border-gray-200 px-2 py-1 rounded-full">
                  {lightboxItem.year}
                </span>
              </div>
            </div>

            {portfolioItems.length > 1 && (
              <>
                <button
                  onClick={showPrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-black/60 text-white text-xs md:text-sm px-3 py-2 rounded-full hover:bg-black/80"
                >
                  ← Prev
                </button>
                <button
                  onClick={showNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-black/60 text-white text-xs md:text-sm px-3 py-2 rounded-full hover:bg-black/80"
                >
                  Next →
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;

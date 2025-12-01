import React, { useState } from 'react';
import { Menu, X, Instagram, Mail, ExternalLink, ChevronRight, MapPin } from 'lucide-react';

// Datos de ejemplo para el Portafolio (Puedes editar esto con tus propias obras)
const portfolioItems = [
  {
    id: 1,
    title: "Ecos del Silencio",
    category: "Óleo sobre Lienzo",
    year: "2023",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Geometría Urbana",
    category: "Fotografía Digital",
    year: "2024",
    image: "https://lipsum.app/random/1600x900"
  },
  {
    id: 3,
    title: "Fragmentación Azul",
    category: "Acrílico y Medios Mixtos",
    year: "2022",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Retrato en Sombra",
    category: "Carboncillo",
    year: "2023",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Naturaleza Muerta #4",
    category: "Acuarela",
    year: "2021",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Horizontes",
    category: "Instalación",
    year: "2024",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1000&auto=format&fit=crop"
  }
];

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para navegación
  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Componente de Navegación
  const Navigation = () => (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo / Nombre */}
        <div 
          onClick={() => navigateTo('home')} 
          className="cursor-pointer font-serif text-2xl tracking-tighter hover:text-gray-600 transition-colors"
        >
          ALEXANDRA <span className="font-bold">VOIGHT</span>
        </div>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-12 text-sm font-medium tracking-widest uppercase">
          {['home', 'about', 'portfolio', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => navigateTo(item)}
              className={`hover:text-black transition-colors ${
                currentPage === item ? 'text-black border-b-2 border-black pb-1' : 'text-gray-400'
              }`}
            >
              {item === 'home' ? 'Inicio' : item === 'about' ? 'Sobre Mí' : item === 'portfolio' ? 'Portafolio' : 'Contacto'}
            </button>
          ))}
        </div>

        {/* Menú Móvil Botón */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú Móvil Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white h-screen absolute w-full flex flex-col items-center justify-center space-y-8 z-40">
          {['home', 'about', 'portfolio', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => navigateTo(item)}
              className="text-2xl font-serif uppercase tracking-widest hover:text-gray-500"
            >
              {item === 'home' ? 'Inicio' : item === 'about' ? 'Sobre Mí' : item === 'portfolio' ? 'Portafolio' : 'Contacto'}
            </button>
          ))}
        </div>
      )}
    </nav>
  );

  // Página: INICIO
  const Home = () => (
    <div className="pt-20 min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 w-full">
        <div className="md:w-1/2 space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif leading-tight text-gray-900">
            Capturando el <br/>
            <span className="italic text-gray-500">Silencio</span> en <br/>
            el Caos.
          </h1>
          <p className="text-gray-600 text-lg max-w-md leading-relaxed font-light">
            Explorando la intersección entre la realidad tangible y la emoción abstracta a través de texturas, luz y composición.
          </p>
          <button 
            onClick={() => navigateTo('portfolio')}
            className="group flex items-center gap-2 border-b border-black pb-1 text-sm tracking-widest uppercase hover:text-gray-600 hover:border-gray-600 transition-all mt-8"
          >
            Ver Obras Recientes <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=1000&auto=format&fit=crop" 
              alt="Obra destacada" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl hidden md:block">
            <p className="font-serif text-xl italic">"Estudio en Rojo"</p>
            <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Colección 2024</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Página: SOBRE MÍ
  const About = () => (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6 min-h-screen">
      <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">El Artista</h2>
      
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3 w-full">
           <div className="aspect-[3/4] bg-gray-200 grayscale hover:grayscale-0 transition-all duration-500">
             <img 
               src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" 
               alt="Retrato del Artista" 
               className="w-full h-full object-cover"
             />
           </div>
        </div>
        
        <div className="md:w-2/3 space-y-6 text-gray-700 leading-loose text-lg font-light">
          <p>
            Soy Alexandra Voight, una artista visual radicada en Barcelona. Mi trabajo se centra en la belleza de lo efímero. Comencé mi carrera en el diseño gráfico, lo que influyó profundamente en mi enfoque pragmático hacia la composición y el equilibrio visual.
          </p>
          <p>
            Mi filosofía es simple: <span className="italic font-serif text-black">el arte debe evocar, no solo decorar.</span>
          </p>
          <p>
            Trabajo principalmente con óleos y medios mixtos, buscando texturas que inviten al espectador a acercarse. Mis obras han sido expuestas en galerías de Madrid, Berlín y Nueva York, y forman parte de colecciones privadas alrededor del mundo.
          </p>
          
          <div className="pt-8 border-t border-gray-200 grid grid-cols-2 gap-8 mt-8">
             <div>
               <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Exposiciones</h4>
               <ul className="text-sm space-y-1 text-gray-500">
                 <li>2024 - Galería Sol, Madrid</li>
                 <li>2023 - Art Basel, Miami (Colectiva)</li>
                 <li>2022 - Espacio Mínimo, CDMX</li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Educación</h4>
               <ul className="text-sm space-y-1 text-gray-500">
                 <li>MFA Bellas Artes, U. de Barcelona</li>
                 <li>BFA Artes Visuales, UNAM</li>
               </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Página: PORTAFOLIO
  const Portfolio = () => (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <h2 className="text-4xl md:text-5xl font-serif">Obras Seleccionadas</h2>
        <p className="text-gray-400 mt-4 md:mt-0 text-sm tracking-widest uppercase">Mostrando {portfolioItems.length} Obras</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <div key={item.id} className="group cursor-pointer">
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
                <h3 className="text-xl font-serif text-gray-900 group-hover:text-gray-600 transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.category}</p>
              </div>
              <span className="text-xs font-mono text-gray-400 border border-gray-200 px-2 py-1 rounded-full">{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Página: CONTACTO
  const Contact = () => (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 min-h-screen flex flex-col md:flex-row gap-16">
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">Hablemos.</h2>
        <p className="text-gray-600 mb-12 text-lg font-light">
          ¿Interesado en adquirir una obra, proponer una colaboración o simplemente saludar? Me encantaría escucharte.
        </p>
        
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <Mail className="text-gray-700" size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">Email</p>
              <a href="mailto:contacto@artista.com" className="text-lg font-serif hover:underline">contacto@alexandravoight.com</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <Instagram className="text-gray-700" size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">Social</p>
              <a href="#" className="text-lg font-serif hover:underline">@alexandra.art</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <MapPin className="text-gray-700" size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">Estudio</p>
              <p className="text-lg font-serif">Calle del Arte 123, Barcelona</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 bg-gray-50 p-8 md:p-12">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nombre</label>
            <input type="text" className="w-full bg-white border-b border-gray-300 p-3 focus:outline-none focus:border-black transition-colors" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
            <input type="email" className="w-full bg-white border-b border-gray-300 p-3 focus:outline-none focus:border-black transition-colors" placeholder="tu@email.com" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Mensaje</label>
            <textarea rows="4" className="w-full bg-white border-b border-gray-300 p-3 focus:outline-none focus:border-black transition-colors" placeholder="Escribe tu mensaje aquí..."></textarea>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors w-full md:w-auto">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-lg">ALEXANDRA VOIGHT</p>
          <p className="text-xs text-gray-400 mt-1">© 2024 Todos los derechos reservados.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-black transition-colors"><Instagram size={20}/></a>
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
      
      {/* Estilos globales simples para animación */}
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
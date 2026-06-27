import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { IMAGES } from '../config/images';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center z-10">
            <img src={IMAGES.logo} alt="Kedai Ichichi Logo" className="h-12 w-auto object-contain" />
          </div>
          
          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
            <div className="flex items-center space-x-8 pointer-events-auto">
              <a href="#menu" className="text-gray-700 hover:text-primary font-medium transition-all duration-300">Menu</a>
              <a href="#topping" className="text-gray-700 hover:text-primary font-medium transition-all duration-300">Topping</a>
              <a href="#testimoni" className="text-gray-700 hover:text-primary font-medium transition-all duration-300">Testimoni</a>
              <a href="#lokasi" className="text-gray-700 hover:text-primary font-medium transition-all duration-300">Lokasi</a>
            </div>
          </div>

          <div className="hidden md:flex items-center z-10">
            <a href="#kontak" className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Pesan Sekarang
            </a>
          </div>

          <div className="md:hidden flex items-center z-10">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary p-2 transition-all duration-300 hover:bg-gray-100 rounded-full">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#menu" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-center text-gray-700 hover:text-primary hover:bg-accent rounded-xl transition-all duration-300">Menu</a>
            <a href="#topping" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-center text-gray-700 hover:text-primary hover:bg-accent rounded-xl transition-all duration-300">Topping</a>
            <a href="#testimoni" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-center text-gray-700 hover:text-primary hover:bg-accent rounded-xl transition-all duration-300">Testimoni</a>
            <a href="#lokasi" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-center text-gray-700 hover:text-primary hover:bg-accent rounded-xl transition-all duration-300">Lokasi</a>
            <a href="#kontak" onClick={() => setIsOpen(false)} className="block mx-3 my-2 px-4 py-3 text-base font-semibold text-center text-white bg-primary hover:bg-primary/95 rounded-xl transition-all duration-300 shadow-md">Pesan Sekarang</a>
          </div>
        </div>
      )}
    </nav>
  );
}

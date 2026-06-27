import { Instagram, MessageCircle, MapPin } from 'lucide-react';
import { IMAGES } from '../config/images';

export default function Footer() {
  return (
    <footer id="kontak" className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Left Column: Brand, Description, and Socials */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-between">
            <div>
              <img src={IMAGES.logo} alt="Kedai Ichichi Logo" className="h-16 w-auto object-contain mb-4" />
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed text-sm">
                Destinasi kuliner terbaik untuk menikmati sensasi Mie Dower pedas berjenjang, aneka dimsum premium, dan camilan lezat lainnya.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              {/* Social Icons Row */}
              <div className="flex items-center gap-6 text-gray-400">
                <a 
                  href="https://instagram.com/kedai_ichichi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://tiktok.com/@kedai_ichichi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="TikTok"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column: Site Map */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-white font-semibold tracking-wider text-xs mb-4 uppercase">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <a href="#menu" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Menu
                </a>
              </li>
              <li>
                <a href="#topping" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Topping
                </a>
              </li>
              <li>
                <a href="#testimoni" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Testimoni
                </a>
              </li>
              <li>
                <a href="#lokasi" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Lokasi
                </a>
              </li>
              <li>
                <a href="#kontak" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Hubungi Kami */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-white font-semibold tracking-wider text-xs mb-4 uppercase">Hubungi Kami</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/6283162123784" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-md w-full"
              >
                <MessageCircle size={16} />
                WhatsApp Admin 1
              </a>
              <a 
                href="https://wa.me/62895363175801" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-md w-full"
              >
                <MessageCircle size={16} />
                WhatsApp Admin 2
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Kedai Ichichi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { ArrowRight, Flame } from 'lucide-react';
import { IMAGES } from '../config/images';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              <Flame size={20} className="text-primary" />
              <span>Pedasnya Bikin Nagih!</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Mie Dower Pedas <br className="hidden lg:block"/>
              <span className="text-primary">Kedai Ichichi!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Pecinta pedas wajib coba! Rasakan sensasi Mie Dower level 0-7 dengan aneka topping lezat.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#menu" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-primary rounded-full hover:bg-primary-hover shadow-lg hover:shadow-xl transition-all w-full sm:w-auto gap-2">
                Lihat Menu
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl transform scale-110"></div>
            <img 
              src={IMAGES.hero} 
              alt="Mie Pedas Menggugah Selera" 
              className="relative z-10 w-full max-w-md mx-auto rounded-[2rem] shadow-2xl border-8 border-white object-cover aspect-square rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

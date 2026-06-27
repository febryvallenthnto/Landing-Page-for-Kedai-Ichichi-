import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../config/images';

export default function Pricing() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Harga Menu <span className="text-primary">Mie Dower</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Pilih porsi Kecil atau Jumbo, dan tentukan level pedas favoritmu!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Card Kecil */}
          <div className="bg-accent rounded-3xl p-8 border-2 border-transparent hover:border-primary/20 transition-all shadow-sm hover:shadow-md relative overflow-hidden group flex flex-col">
            <div className="absolute top-0 right-0 bg-gray-200 text-gray-700 px-4 py-1.5 rounded-bl-xl font-bold text-sm z-10">
              Pas di perut
            </div>
            <div className="h-48 -mx-8 -mt-8 mb-6 overflow-hidden relative">
              <img src={IMAGES.pricing.kecil} alt="Porsi Kecil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Porsi Kecil</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-primary">Rp7.000</span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                <span>Porsi standar yang bikin kenyang</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                <span>Bebas pilih level pedas</span>
              </li>
            </ul>
          </div>

          {/* Card Jumbo */}
          <div className="bg-primary text-white rounded-3xl p-8 shadow-xl relative overflow-hidden transform md:-translate-y-4 group flex flex-col">
            <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-bl-xl font-bold text-sm z-10">
              Paling Puas!
            </div>
            <div className="h-48 -mx-8 -mt-8 mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 z-10"></div>
              <img src={IMAGES.pricing.jumbo} alt="Porsi Jumbo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-2">Porsi Jumbo</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-yellow-400">Rp10.000</span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-yellow-400 w-6 h-6 flex-shrink-0" />
                <span className="text-white font-medium">Porsi ekstra besar, puas maksimal</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-yellow-400 w-6 h-6 flex-shrink-0" />
                <span className="text-white font-medium">Cocok buat yang lagi lapar banget</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Level Pedas */}
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 sm:mt-1 hidden sm:block" />
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 sm:hidden" />
                <h4 className="text-xl font-bold text-gray-900">Tambahan Biaya Level Pedas (Noodle Level)</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between sm:flex-col sm:justify-start items-center sm:items-start text-center sm:text-left">
                  <div className="font-bold text-gray-900 sm:mb-1">Level 0 - 3</div>
                  <div className="text-green-600 font-bold text-sm bg-green-50 px-2 py-0.5 rounded">Gratis</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between sm:flex-col sm:justify-start items-center sm:items-start text-center sm:text-left">
                  <div className="font-bold text-gray-900 sm:mb-1">Level 4 - 5</div>
                  <div className="text-primary font-bold text-sm bg-primary/10 px-2 py-0.5 rounded">+ Rp1.000</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between sm:flex-col sm:justify-start items-center sm:items-start text-center sm:text-left">
                  <div className="font-bold text-gray-900 sm:mb-1">Level 6 - 7</div>
                  <div className="text-primary font-bold text-sm bg-primary/10 px-2 py-0.5 rounded">+ Rp2.000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

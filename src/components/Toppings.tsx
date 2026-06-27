import { PlusCircle } from 'lucide-react';
import { IMAGES } from '../config/images';

const toppings = [
  { name: 'Dimsum', price: '3.000', img: IMAGES.toppings.dimsum },
  { name: 'Udang Keju', price: '3.000', img: IMAGES.toppings.udangKeju },
  { name: 'Bola Rambutan', price: '3.000', img: IMAGES.toppings.bolaRambutan },
  { name: 'Pangsit Rebus', price: '3.000', img: IMAGES.toppings.pangsitRebus },
  { name: 'Dumpling', price: '3.000', img: IMAGES.toppings.dumpling },
  { name: 'Chikuwa', price: '2.000', img: IMAGES.toppings.chikuwa },
];

export default function Toppings() {
  return (
    <section id="topping" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Pilihan Extra <span className="text-primary">Topping</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Sempurnakan Mie Dower kamu dengan aneka pilihan topping pelengkap yang gurih.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {toppings.map((topping, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all border border-gray-100 group hover:-translate-y-1 flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img src={topping.img} alt={topping.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{topping.name}</h3>
              <div className="text-primary font-bold text-sm sm:text-base">Rp{topping.price}</div>
              <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlusCircle className="w-6 h-6 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

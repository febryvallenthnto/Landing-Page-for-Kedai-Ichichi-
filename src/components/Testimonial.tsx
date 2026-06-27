import { Star } from 'lucide-react';
import { IMAGES } from '../config/images';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Pecinta Pedas',
    content: 'Mie Dower level 7 beneran bikin dower! Pedasnya nendang tapi bumbunya tetap gurih dan terasa. Ditambah topping udang keju, the best banget buat makan siang.',
    rating: 5,
    avatar: IMAGES.testimonials.avatar1,
  },
  {
    name: 'Siti Aminah',
    role: 'Food Vlogger',
    content: 'Dimsum mentainya juara sih, melted banget di mulut. Cireng ayam suwir pedasnya juga wajib coba, isiannya full dan pedasnya nagih. Harganya sangat bersahabat!',
    rating: 5,
    avatar: IMAGES.testimonials.avatar2,
  },
  {
    name: 'Andi Pratama',
    role: 'Mahasiswa',
    content: 'Porsi jumbonya bener-bener ngenyangin! Cocok banget buat anak kos pas lagi pengen makan enak tapi budget ngepas. Ayam gepreknya juga krispi dan pedes pol.',
    rating: 5,
    avatar: IMAGES.testimonials.avatar3,
  }
];

export default function Testimonial() {
  return (
    <section id="testimoni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Apa Kata <span className="text-primary">Pelanggan Kami?</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Ribuan porsi terjual! Simak pengalaman pelanggan kami.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testi, idx) => (
            <div 
              key={idx}
              className="bg-accent rounded-3xl p-8 relative shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 mt-8"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-lg">
                  <img src={testi.avatar} alt={`Review ${testi.name}`} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="pt-10 text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testi.content}"</p>
                <div className="mt-auto">
                  <h4 className="font-bold text-gray-900">{testi.name}</h4>
                  <p className="text-sm text-gray-500">{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

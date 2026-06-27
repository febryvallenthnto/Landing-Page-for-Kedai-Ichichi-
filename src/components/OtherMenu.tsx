import { IMAGES } from '../config/images';

const snacks = [
  { name: 'Pangsit Dower', price: '10.000', desc: 'Per porsi', img: IMAGES.otherMenu.pangsitDower },
  { name: 'Pangsit Goreng', price: '10.000', desc: 'Per porsi', img: IMAGES.otherMenu.pangsitGoreng },
  { name: 'Udang Keju', price: '10.000', desc: 'Per porsi', img: IMAGES.otherMenu.udangKeju },
  { name: 'Tahu Crispy', price: '10.000', desc: 'Per porsi', img: IMAGES.otherMenu.tahuCrispy },
  { name: 'Bola-Bola Rambutan', price: '10.000', desc: 'Per porsi', img: IMAGES.otherMenu.bolaBolaRambutan },
];

export default function OtherMenu() {
  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Ayam Geprek & <span className="text-primary">Camilan Gurih</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Nikmati juga ayam geprek krispi dan camilan gurih pilihan kami.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Chicken Pok-Pok */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between group">
            <div className="h-48 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden relative rounded-t-3xl">
              <img src={IMAGES.otherMenu.chickenPokPok} alt="Chicken Pok-Pok" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Chicken Pok-Pok</h3>
                  <p className="text-gray-500 text-sm">Gurih renyah dengan siraman saus nikmat</p>
                </div>
                <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-bold text-sm self-start whitespace-nowrap">
                  Rp8.000 / porsi
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <p className="text-sm text-gray-700 font-bold mb-3">Pilihan Saus:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 shadow-sm">Spicy Sauce</span>
                <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 shadow-sm">Blackpepper Sauce</span>
                <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 shadow-sm">Cheese Sauce</span>
              </div>
            </div>
          </div>

          {/* Ayam Geprek */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 group flex flex-col">
            <div className="h-48 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden relative rounded-t-3xl">
              <img src={IMAGES.otherMenu.ayamGeprek} alt="Ayam Geprek" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Ayam Geprek</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <div className="font-bold text-gray-900 border-b border-gray-200 pb-2">Tanpa Nasi</div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-gray-600">Sayap</span>
                  <span className="font-bold text-primary text-base">Rp9.000</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-gray-600">Paha Atas</span>
                  <span className="font-bold text-primary text-base">Rp10.000</span>
                </div>
              </div>
              <div className="space-y-4 bg-orange-50 p-5 rounded-2xl border border-orange-100">
                <div className="font-bold text-gray-900 border-b border-orange-200 pb-2">Paket + Nasi</div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-gray-700">Sayap</span>
                  <span className="font-bold text-primary text-base">Rp12.000</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-gray-700">Paha Atas</span>
                  <span className="font-bold text-primary text-base">Rp13.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Snacks Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {snacks.map((snack, idx) => (
            <div key={idx} className="bg-white p-4 sm:p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col justify-center h-full group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-100">
                <img src={snack.img} alt={snack.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1 leading-tight">{snack.name}</h4>
              <div className="text-xs font-medium text-gray-500 mb-3 bg-gray-50 py-1 px-2 rounded-md inline-block mx-auto">{snack.desc}</div>
              <div className="text-primary font-bold text-lg mt-auto">Rp{snack.price}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

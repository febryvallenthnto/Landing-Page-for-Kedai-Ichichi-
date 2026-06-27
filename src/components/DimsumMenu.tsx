import { IMAGES } from '../config/images';

const dimsumVariants = [
  { name: 'Dimsum Mentai', price3: '15.000', price6: '28.000', img: IMAGES.dimsumMenu.mentai },
  { name: 'Dimsum Mentai Spicy', price3: '15.000', price6: '28.000', img: IMAGES.dimsumMenu.mentaiSpicy },
  { name: 'Dimsum Spicy Sauce', price3: '15.000', price6: '28.000', img: IMAGES.dimsumMenu.spicySauce },
  { name: 'Dimsum Carbonara', price3: '15.000', price6: '28.000', img: IMAGES.dimsumMenu.carbonara },
  { name: 'Dimsum Mix Sauce', price3: '15.000', price6: '28.000', img: IMAGES.dimsumMenu.mixSauce },
  { name: 'Dimsum Bolognese', price3: '15.000', price6: '28.000', img: IMAGES.dimsumMenu.bolognese },
  { name: 'Dimsum Tar-Tar Sauce', price3: '15.000', price6: '28.000', img: IMAGES.dimsumMenu.tartarSauce },
  { name: 'Dimsum Spicy Cheese', price3: '15.000', price6: '28.000', img: IMAGES.dimsumMenu.spicyCheese },
  { name: 'Dimsum Cheese Sauce', price3: '15.000', price6: '28.000', img: IMAGES.dimsumMenu.cheeseSauce },
];

export default function DimsumMenu() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Dimsum Enak & <span className="text-primary">Cireng Mercon</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Cicipi dimsum lembut dan cireng mercon renyah khas Kedai Ichichi.</p>
        </div>

        {/* Dimsum Ori Highlight */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-[#5A0000] rounded-3xl p-8 sm:p-12 text-white mb-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
          <div className="absolute -right-20 -bottom-20 opacity-10">
            <svg className="w-80 h-80" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
          </div>
          
          <div className="flex-1 relative z-10 w-full">
            <div className="aspect-square max-w-sm mx-auto rounded-full overflow-hidden border-8 border-white/20 shadow-xl">
              <img src={IMAGES.dimsumMenu.original} alt="Dimsum Original" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 relative z-10 text-center md:text-left">
            <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-medium tracking-wide mb-4 inline-block">BEST SELLER</span>
            <h3 className="text-3xl sm:text-4xl font-display font-bold mb-8">Dimsum Original</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 min-w-[120px] border border-white/20 shadow-lg">
                <div className="text-sm font-medium text-primary-100 mb-1">2 pcs</div>
                <div className="text-2xl font-bold">Rp7.000</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 min-w-[120px] border border-white/20 shadow-lg transform sm:-translate-y-2">
                <div className="text-sm font-medium text-primary-100 mb-1">3 pcs</div>
                <div className="text-2xl font-bold">Rp10.000</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 min-w-[120px] border border-white/20 shadow-lg">
                <div className="text-sm font-medium text-primary-100 mb-1">6 pcs</div>
                <div className="text-2xl font-bold text-yellow-400">Rp20.000</div>
              </div>
            </div>
          </div>
        </div>

        {/* Variants Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Varian Dimsum Saus</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dimsumVariants.map((item, idx) => (
              <div key={idx} className="bg-accent rounded-2xl p-4 sm:p-6 border border-transparent hover:border-primary/20 transition-all hover:shadow-md group flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-gray-200">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">{item.name}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-gray-600">3 pcs</span>
                      <span className="font-bold text-primary">Rp{item.price3}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-gray-600">6 pcs</span>
                      <span className="font-bold text-primary">Rp{item.price6}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cireng Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Aneka Cireng</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden relative">
                <img src={IMAGES.dimsumMenu.cirengAyamSuwirPedas} alt="Cireng Ayam Suwir Pedas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center space-y-4">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Cireng Ayam Suwir Pedas</h4>
                <div className="flex justify-between items-center border-b border-dashed border-gray-200 pb-4">
                  <span className="font-medium text-gray-600">4 pcs</span>
                  <span className="font-bold text-primary text-xl">Rp8.000</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-medium text-gray-600">8 pcs</span>
                  <span className="font-bold text-primary text-xl">Rp15.000</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden relative">
                <img src={IMAGES.dimsumMenu.cirengJamurMercon} alt="Cireng Jamur Mercon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center space-y-4">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Cireng Jamur Mercon</h4>
                <div className="flex justify-between items-center border-b border-dashed border-gray-200 pb-4">
                  <span className="font-medium text-gray-600">4 pcs</span>
                  <span className="font-bold text-primary text-xl">Rp8.000</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-medium text-gray-600">8 pcs</span>
                  <span className="font-bold text-primary text-xl">Rp15.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

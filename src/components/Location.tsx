import { MapPin, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="lokasi" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Kunjungi <span className="text-primary">Kedai Kami</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Makan langsung di tempat lebih nikmat! Kunjungi Kedai Ichichi dan rasakan sensasi pedasnya langsung dari dapur kami.</p>
        </div>

        <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-sm border border-gray-100 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display">Informasi Lokasi</h3>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Alamat Kedai</h4>
                  <p className="text-gray-600">Klenggukan, RT.02/RW.31, Tirtomartani, Kalasan, Sleman, Yogyakarta</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Jam Buka</h4>
                  <p className="text-gray-600">Senin - Minggu<br/>10.00 - 22.00 WIB</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 h-64 sm:h-80 lg:h-auto min-h-[350px] rounded-2xl overflow-hidden border border-gray-200 relative group">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors pointer-events-none z-10"></div>
              <iframe 
                src="https://maps.google.com/maps?q=-7.7345993,110.4638289&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kedai Ichichi"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

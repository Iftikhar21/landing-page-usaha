function Gallery() {
    return (
        <section id="portfolio" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Galeri Template</h2>
                    <p class="text-xl text-gray-600">Kumpulan desain dan website siap pakai yang modern & profesional</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* 1 */}
                    <TemplateCard 
                        color="from-yellow-400 to-yellow-600"
                        title="Landing Page UMKM"
                        desc="Website simple & cepat untuk promosi produk lokal dan jasa."
                        price="Rp 90.000"
                        stack="HTML/CSS"
                    />
                    {/* 2 */}
                    <TemplateCard 
                        color="from-blue-400 to-blue-600"
                        title="Portofolio Kreator"
                        desc="Tampilkan karya & project secara profesional dalam satu link."
                        price="Rp 100.000"
                        stack="React"
                    />
                    {/* 3 */}
                    <TemplateCard 
                        color="from-green-400 to-green-600"
                        title="Branding Personal"
                        desc="Desain website untuk personal branding, cocok untuk freelancer & pekerja kreatif."
                        price="Rp 85.000"
                        stack="Vue.js"
                    />
                    {/* 4 */}
                    <TemplateCard 
                        color="from-red-400 to-red-600"
                        title="Website Bisnis"
                        desc="Tingkatkan kepercayaan pelanggan dengan website company profile."
                        price="Rp 120.000"
                        stack="Next.js"
                    />
                    {/* 5 */}
                    <TemplateCard 
                        color="from-purple-400 to-purple-600"
                        title="Website Event"
                        desc="Desain website untuk pendaftaran & publikasi acara seperti seminar, workshop, dll."
                        price="Rp 95.000"
                        stack="HTML/CSS"
                    />
                    {/* 6 */}
                    <TemplateCard 
                        color="from-indigo-400 to-indigo-600"
                        title="Dashboard Admin"
                        desc="Template UI untuk backend, admin panel, atau sistem informasi internal."
                        price="Rp 130.000"
                        stack="React + Tailwind"
                    />
                </div>
            </div>
        </section>
    );
}

function TemplateCard({ color, title, desc, price, stack }) {
    return (
        <div class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div class={`h-64 bg-gradient-to-br ${color}`}></div>
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <button class="bg-white text-primary px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Lihat Detail
                </button>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p class="text-gray-600 mb-4">{desc}</p>
                <div class="flex justify-between items-center">
                    <span class="text-primary font-semibold">{price}</span>
                    <span class="text-sm text-gray-500">{stack}</span>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
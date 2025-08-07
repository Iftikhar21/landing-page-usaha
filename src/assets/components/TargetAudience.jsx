function TargetAudience() {
    return (
        <section class="py-20 bg-accent">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Siapa yang Cocok dengan Layanan Kami?</h2>
                    <p class="text-xl text-gray-600">Desain & website profesional untuk bantu bisnismu tumbuh lebih cepat!</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AudienceCard 
                        iconColor="bg-yellow-100" 
                        iconTextColor="text-yellow-600"
                        title="UMKM & Brand Lokal"
                        desc="Bangun kepercayaan pelanggan lewat website & desain promosi yang profesional dan menarik."
                    />
                    <AudienceCard 
                        iconColor="bg-red-100" 
                        iconTextColor="text-red-600"
                        title="Freelancer & Kreator"
                        desc="Tampilkan portofolio dan layananmu lewat personal website dan desain feed yang keren."
                    />
                    <AudienceCard 
                        iconColor="bg-blue-100" 
                        iconTextColor="text-blue-600"
                        title="Startup & Usaha Baru"
                        desc="Mulai dari nol? Tenang. Kami bantu branding dan desain web profesional sejak hari pertama."
                    />
                    <AudienceCard 
                        iconColor="bg-green-100" 
                        iconTextColor="text-green-600"
                        title="Mahasiswa & Pelajar"
                        desc="Ingin tampil beda dengan personal branding? Kami bantu buat portofolio digital yang unik dan stylish."
                    />
                    <AudienceCard 
                        iconColor="bg-purple-100" 
                        iconTextColor="text-purple-600"
                        title="Organisasi & Komunitas"
                        desc="Butuh media digital untuk kegiatan, event, atau publikasi komunitas? Desain dan web-nya kami bantu."
                    />
                    <AudienceCard 
                        iconColor="bg-indigo-100" 
                        iconTextColor="text-indigo-600"
                        title="Content Creator"
                        desc="Boost tampilan kontenmu dengan desain template IG, banner, thumbnail, dan website portofolio keren."
                    />
                </div>
            </div>
        </section>
    );
}

function AudienceCard({ iconColor, iconTextColor, title, desc }) {
    return (
        <div class={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300`}>
            <div class={`w-12 h-12 ${iconColor} rounded-lg flex items-center justify-center mb-4`}>
                <svg class={`w-6 h-6 ${iconTextColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                    </path>
                </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p class="text-gray-600">{desc}</p>
        </div>
    );
}

export default TargetAudience;
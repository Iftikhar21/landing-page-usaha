function Hero() {
    return (
        <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 mt-[65px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                            <span className="text-primary">Wixizz</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-600 mb-4 font-medium">
                            Solusi Website & Desain Grafis untuk Semua!
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            Kami bantu kamu tampil profesional secara digital—mulai dari landing page bisnis sampai desain brosur, spanduk, & poster.
                            Cocok untuk UMKM, freelancer, guru, pelajar, dan lainnya.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#services"
                                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transform hover:scale-105 transition-all duration-300 text-center">
                                Lihat Layanan
                            </a>
                            <a href="#contact"
                                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-center">
                                Konsultasi Gratis
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div
                                className="w-full h-96 bg-primary from-primary to-secondary rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            </div>
                            <div className="absolute inset-4 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <img src="logo putih wixiz.png" alt="Wixiz Logo" className="rounded-full" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">Website & Desain Siap Pakai</h3>
                                    <p className="text-gray-600 mt-2">Desain profesional & bisa custom sesuai kebutuhanmu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
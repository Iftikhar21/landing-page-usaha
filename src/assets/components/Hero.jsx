function Hero() {
    return (
        <section id="home" class="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 mt-[65px]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col lg:flex-row items-center">
                    <div class="lg:w-1/2 mb-10 lg:mb-0">
                        <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                            <span class="text-primary">EduXpace</span>
                        </h1>
                        <p class="text-xl lg:text-2xl text-gray-600 mb-8 font-medium">
                            Template Edukatif dan Siap Pakai untuk Semua!
                        </p>
                        <p class="text-lg text-gray-600 mb-8">
                            Solusi terbaik untuk pelajar, guru, developer pemula, dan UMKM yang membutuhkan template
                            berkualitas dengan harga terjangkau.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="#gallery"
                                class="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transform hover:scale-105 transition-all duration-300 text-center">
                                Lihat Template
                            </a>
                            <a href="#contact"
                                class="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-center">
                                Hubungi Kami
                            </a>
                        </div>
                    </div>
                    <div class="lg:w-1/2">
                        <div class="relative">
                            <div
                                class="w-full h-96 bg-primary from-primary to-secondary rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            </div>
                            <div class="absolute inset-4 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h3 class="text-xl font-semibold text-gray-800">Template Siap Pakai</h3>
                                    <p class="text-gray-600 mt-2">Desain profesional untuk semua kebutuhan</p>
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
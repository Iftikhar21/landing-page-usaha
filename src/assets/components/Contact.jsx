function Contact() {
    return (
        <section id="contact" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
                    <p class="text-xl text-gray-600">Siap membantu kebutuhan template Anda</p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">Mari Berkonsultasi</h3>
                        <p class="text-gray-600 mb-8">Wixiz siap membantu Anda memilih template yang tepat sesuai
                            kebutuhan. Konsultasi gratis dan tanpa komitmen!</p>
                        <div class="space-y-6">
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Email</h4>
                                    <p class="text-gray-600">wixiz.co@gmail.com</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-900">WhatsApp</h4>
                                    <p class="text-gray-600">+62 819-0547-8802</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M16.5 7.5h.01" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M12 9a3 3 0 100 6 3 3 0 000-6z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Instagram</h4>
                                    <p class="text-gray-600">@wixiz.io</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                        </path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Alamat</h4>
                                    <p class="text-gray-600">Jakarta, Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-accent p-8 rounded-xl">
                        <form class="space-y-6">
                            <div>
                                <label class="block text-sm font-semibold text-gray-900 mb-2">Nama Lengkap</label>
                                <input type="text"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                    placeholder="Masukkan nama lengkap" />
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                                <input type="email"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                    placeholder="Masukkan email" />
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-gray-900 mb-2">Jenis Layanan</label>
                                <select
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                                    <option>Pilih layanan yang diinginkan</option>
                                    <option>Desain Visual</option>
                                    <option>Website Portfolio</option>
                                    <option>Landing Page</option>
                                    <option>Layanan Custom</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-gray-900 mb-2">Pesan</label>
                                <textarea rows="4"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                    placeholder="Ceritakan kebutuhan Anda..."></textarea>
                            </div>
                            <button type="submit"
                                class="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transform hover:scale-105 transition-all duration-300">
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
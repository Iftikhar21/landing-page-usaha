'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ModalsEdu() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Data gambar dan deskripsi (Anda bisa mengganti dengan gambar dan deskripsi sesuai kebutuhan)
  const galleryData = [
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      title: "Ruang Kelas Modern",
      description: "Template edukasi ini dirancang untuk memudahkan institusi pendidikan, guru, maupun pelajar dalam menyampaikan informasi secara interaktif dan menarik. Dengan tampilan modern yang mendukung pembelajaran digital."
    },
    {
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
      title: "Laboratorium Digital",
      description: "Fitur galeri yang interaktif memungkinkan siswa dan guru untuk mengeksplorasi materi pembelajaran dengan cara yang lebih visual dan engaging. Cocok untuk presentasi dan demonstrasi."
    },
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
      title: "Perpustakaan Online",
      description: "Kemudahan akses informasi menjadi prioritas utama dalam template ini. Website sangat cocok untuk promosi sekolah, kursus, atau kegiatan edukatif lainnya dengan tampilan yang profesional."
    },
    {
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
      title: "Aktivitas Pembelajaran",
      description: "Dapatkan pengalaman belajar yang lebih menyenangkan dan informatif dengan template edukasi yang responsif dan mudah digunakan di berbagai perangkat."
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryData.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  };

  return (
    <div id="static-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-4xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Template Edukasi
            </h3>
            <button 
              type="button" 
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
              data-modal-hide="static-modal"
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          
          <div className="p-4 md:p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bagian Kiri - Galeri Gambar */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-600">
                  <img 
                    src={galleryData[currentImageIndex].image} 
                    alt={galleryData[currentImageIndex].title}
                    className="w-full h-64 object-cover transition-all duration-300"
                  />
                  
                  {/* Tombol Previous */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  {/* Tombol Next */}
                  <button 
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Indikator Gambar */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {galleryData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex 
                            ? 'bg-white' 
                            : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Bagian Kanan - Deskripsi */}
              <div className="flex flex-col justify-center space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {galleryData[currentImageIndex].title}
                </h4>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {galleryData[currentImageIndex].description}
                </p>
                
                {/* Counter gambar */}
                <div className="text-sm text-gray-400 dark:text-gray-500">
                  {currentImageIndex + 1} dari {galleryData.length} gambar
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            {/* Anda bisa menambahkan tombol aksi di sini jika diperlukan */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalsEdu;
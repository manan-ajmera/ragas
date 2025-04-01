"use client";
import Image from 'next/image';
import { useState } from 'react';
import FadeIn from '@/components/animations/FadeIn';

export default function GalleryPage() {
  // Add categories to your images for filtering
  const galleryItems = [
    {
      src: '/images/gallery/image1.jpg',
      alt: 'Fabric printing process',
      category: 'process'
    },
    {
      src: '/images/gallery/image2.jpg',
      alt: 'Completed fabric project',
      category: 'products'
    },
    {
      src: '/images/gallery/image3.jpg',
      alt: 'Design creation',
      category: 'design'
    },
    {
      src: '/images/gallery/image4.jpg',
      alt: 'Workshop environment',
      category: 'workshop'
    },
    {
      src: '/images/gallery/image5.jpg',
      alt: 'Printed fabric samples',
      category: 'products'
    },
    {
      src: '/images/gallery/image6.jpg',
      alt: 'Machine printing setup',
      category: 'process'
    },
  ];
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<{src: string; alt: string; category: string} | null>(null);
  
  const filteredImages = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#F7F9FB] min-h-screen py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <FadeIn>
          <h1 className="text-4xl font-bold text-[#1A535C] mb-2 text-center">Our Gallery</h1>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto mb-6"></div>
          <p className="text-lg text-[#333333] mb-8 text-center max-w-2xl mx-auto">
            Explore our work through this collection of images showcasing our printing techniques, products, and workspace.
          </p>
        </FadeIn>
        
        {/* Category filters */}
        <FadeIn duration={0.6}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === 'all' 
                  ? 'bg-[#1A535C] text-white' 
                  : 'bg-white text-[#1A535C] hover:bg-[#2EC4B6] hover:text-white'
              }`}
            >
              All Images
            </button>
            <button 
              onClick={() => setActiveCategory('products')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === 'products' 
                  ? 'bg-[#1A535C] text-white' 
                  : 'bg-white text-[#1A535C] hover:bg-[#2EC4B6] hover:text-white'
              }`}
            >
              Products
            </button>
            <button 
              onClick={() => setActiveCategory('process')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === 'process' 
                  ? 'bg-[#1A535C] text-white' 
                  : 'bg-white text-[#1A535C] hover:bg-[#2EC4B6] hover:text-white'
              }`}
            >
              Process
            </button>
            <button 
              onClick={() => setActiveCategory('design')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === 'design' 
                  ? 'bg-[#1A535C] text-white' 
                  : 'bg-white text-[#1A535C] hover:bg-[#2EC4B6] hover:text-white'
              }`}
            >
              Design
            </button>
            <button 
              onClick={() => setActiveCategory('workshop')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === 'workshop' 
                  ? 'bg-[#1A535C] text-white' 
                  : 'bg-white text-[#1A535C] hover:bg-[#2EC4B6] hover:text-white'
              }`}
            >
              Workshop
            </button>
          </div>
        </FadeIn>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((item, index) => (
            <FadeIn key={index} duration={0.3 + index * 0.1}>
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={item.src} 
                    alt={item.alt} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 font-medium">{item.alt}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* Show message if no images match the filter */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-[#1A535C]">No images found in this category.</p>
          </div>
        )}
      </div>
      
      {/* Image modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white bg-[#1A535C] w-10 h-10 rounded-full flex items-center justify-center z-10"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <div className="bg-white p-4 rounded-lg shadow-2xl">
              <div className="relative h-[60vh] w-full">
                <Image 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  fill
                  className="object-contain" 
                />
              </div>
              <p className="mt-4 text-lg font-medium text-[#1A535C]">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
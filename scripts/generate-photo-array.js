const fs = require('fs');
const path = require('path');

// Read all photos from the gallery folder
const galleryPath = path.join(__dirname, '..', 'public', 'gallery', 'bitconf-2024');
const photoFiles = fs.readdirSync(galleryPath)
  .filter(file => file.toLowerCase().match(/\.(jpg|jpeg|png|gif|webp)$/))
  .sort();

// Generate photo objects
const photos = photoFiles.map((filename, index) => ({
  id: index + 1,
  src: `/gallery/bitconf-2024/${filename}`,
  alt: `BitConf 2024 - Photo ${index + 1}`,
  filename: filename
}));

// Generate the component code
const componentCode = `'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Gallery2024() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [displayedPhotos, setDisplayedPhotos] = useState<any[]>([]);

  // All BitConf 2024 photos (auto-generated)
  const allPhotos = ${JSON.stringify(photos, null, 4)};

  // Shuffle array function
  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize with shuffled photos
  useEffect(() => {
    setDisplayedPhotos(shuffleArray(allPhotos));
  }, []);

  const reshufflePhotos = () => {
    setDisplayedPhotos(shuffleArray(allPhotos));
  };

  return (
    <section id="gallery2024" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">BitConf 2024 Edition</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Relive the amazing moments from our previous conference - inspiring talks, meaningful connections, and innovative ideas
          </p>
          <button
            onClick={reshufflePhotos}
            className="bg-bitconf-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-bitconf-accent/80 transition-colors"
          >
            🔀 Shuffle Photos
          </button>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {displayedPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(photo.src)}
            >
              <div className="aspect-square bg-gray-800 flex items-center justify-center">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-bitconf-dark/50 rounded-lg p-8 border border-bitconf-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-bitconf-accent mb-2">450+</div>
              <div className="text-gray-300">Attendees</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-bitconf-accent mb-2">${photos.length}</div>
              <div className="text-gray-300">Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-bitconf-accent mb-2">18</div>
              <div className="text-gray-300">Speakers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-bitconf-accent mb-2">12</div>
              <div className="text-gray-300">Sessions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage}
              alt="Gallery Image"
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}`;

// Write the component file
fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'components', 'Gallery2024.tsx'),
  componentCode
);

console.log(`✅ Generated Gallery2024.tsx with ${photos.length} photos!`);
console.log('🔀 Photos will be randomly shuffled on each page load');
console.log('📸 Users can click "Shuffle Photos" to reorder them');
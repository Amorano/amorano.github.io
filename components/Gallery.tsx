'use client';
import React, { useState, useCallback } from 'react';
import { Image as ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
  tags: string[];
}

import rawGalleryData from '../data/gallery-data.json';
const galleryData = rawGalleryData as GalleryItem[];

const GallerySection = () => {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const [activeTag, setActiveTag] = useState('All');

  const allTags = ['All', ...new Set(galleryData.flatMap(item => item.tags))].sort((a, b) => {
    if (a === 'All') return -1;
    if (b === 'All') return 1;
    return a.localeCompare(b);
  });

  const filteredItems = activeTag === 'All'
    ? galleryData
    : galleryData.filter(item => item.tags.includes(activeTag));

  const selectedImage = selectedImageId !== null
    ? filteredItems.find(item => item.id === selectedImageId)
    : null;

  const currentIndex = selectedImage
    ? filteredItems.findIndex(item => item.id === selectedImage.id)
    : -1;

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setSelectedImageId(filteredItems[newIndex].id);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    setSelectedImageId(filteredItems[newIndex].id);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedImageId === null) return;

    if (e.key === 'ArrowLeft') {
      const newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
      setSelectedImageId(filteredItems[newIndex].id);
    } else if (e.key === 'ArrowRight') {
      const newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
      setSelectedImageId(filteredItems[newIndex].id);
    } else if (e.key === 'Escape') {
      setSelectedImageId(null);
    }
  }, [currentIndex, filteredItems, selectedImageId]);

  React.useEffect(() => {
    if (selectedImageId !== null) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImageId, handleKeyDown]);

  return (
    <section id="gallery" className="pt-16 pb-12 px-4">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-6">Images</h2>
        <div className="mb-8 flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-lg transition ${
                activeTag === tag
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedImageId(item.id)}
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-contain bg-gray-900 p-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 space-y-2">
                {/* <h3 className="text-lg font-semibold text-white">#{item.id} - {item.title}</h3> */}
                <h3 className="text-lg font-semibold text-white">#{item.id}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-500 text-xs text-white rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImageId(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-xl p-2 hover:bg-gray-800 rounded-full z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageId(null);
            }}
          >
            ×
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white z-10"
            onClick={handlePrevious}
          >
            <ArrowLeft size={24} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white z-10"
            onClick={handleNext}
          >
            <ArrowRight size={24} />
          </button>

          <div className="relative w-full max-w-6xl h-[90vh]">
            <Image
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              fill
              className="object-contain p-4"
              sizes="100vw"
              priority
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center bg-black/50 p-4 rounded-lg">
              <div className="flex flex-wrap gap-2">
                {selectedImage.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-500 text-xs text-white rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
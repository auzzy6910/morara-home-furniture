import { useState } from 'react';
import { ZoomIn, ZoomOut, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  mainImage: string;
  productName: string;
}

const additionalAngles = [
  '&q=80&blur=0',
  '&q=80&sat=-100',
  '&q=80&crop=entropy',
  '&q=80&crop=faces',
];

export default function ImageGallery({ mainImage, productName }: ImageGalleryProps) {
  const images = [
    mainImage,
    ...additionalAngles.map(suffix => mainImage.replace('&fit=crop', suffix + '&fit=crop')),
  ].slice(0, 4);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
    setZoomLevel(isZoomed ? 1 : 2);
  };

  const navigate = (dir: 'prev' | 'next') => {
    setSelectedIndex(prev => {
      if (dir === 'prev') return prev > 0 ? prev - 1 : images.length - 1;
      return prev < images.length - 1 ? prev + 1 : 0;
    });
    setIsZoomed(false);
    setZoomLevel(1);
  };

  return (
    <div className="space-y-3">
      {/* Main Image */}
      <div
        className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-crosshair group"
        onMouseMove={handleMouseMove}
        onClick={toggleZoom}
      >
        <div className="overflow-hidden" style={{ height: '400px' }}>
          <img
            src={images[selectedIndex]}
            alt={`${productName} - View ${selectedIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-300"
            style={isZoomed ? {
              transform: `scale(${zoomLevel})`,
              transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
            } : undefined}
            loading="lazy"
          />
        </div>

        {/* Zoom indicator */}
        <div className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={e => { e.stopPropagation(); navigate('prev'); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow hover:bg-white dark:hover:bg-gray-700 transition-colors opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={18} className="text-gray-700 dark:text-gray-300" />
        </button>
        <button
          onClick={e => { e.stopPropagation(); navigate('next'); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow hover:bg-white dark:hover:bg-gray-700 transition-colors opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={18} className="text-gray-700 dark:text-gray-300" />
        </button>

        {/* Image counter */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => { setSelectedIndex(i); setIsZoomed(false); setZoomLevel(1); }}
            className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              selectedIndex === i ? 'border-red-600 ring-2 ring-red-200' : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            <img src={img} alt={`${productName} thumbnail ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isZoomed && zoomLevel > 2 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={() => { setIsZoomed(false); setZoomLevel(1); }}>
          <button className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors">
            <X size={24} />
          </button>
          <img src={images[selectedIndex]} alt={productName} className="max-w-[90vw] max-h-[90vh] object-contain" />
        </div>
      )}
    </div>
  );
}

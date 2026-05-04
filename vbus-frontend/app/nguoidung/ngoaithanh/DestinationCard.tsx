"use client";
import React, { useState } from 'react';

interface DestinationCardProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  icon?: string;
  featured?: boolean;
  onClick?: () => void;
}

export default function DestinationCard({
  name,
  description,
  price,
  image,
  icon = '📍',
  
  featured = false,
  onClick
}: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Different gradient backgrounds for variety
  const gradients = [
    'from-emerald-400 to-teal-600',
    'from-blue-400 to-cyan-600',
    'from-amber-400 to-orange-600',
    'from-pink-400 to-rose-600',
    'from-violet-400 to-purple-600',
    'from-yellow-400 to-yellow-600'
  ];

  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  const baseClasses = featured ? 'col-span-1 md:col-span-2 md:row-span-2 min-h-[360px]' : 'h-64';

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${baseClasses} ${
        isHovered ? 'shadow-2xl scale-105' : 'shadow-lg'
      }`}
    >
      {/* Background Image or Gradient */}
      <div className={`absolute inset-0 transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${randomGradient}`}></div>
        )}

        {/* Dark overlay */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isHovered ? 'opacity-40' : 'opacity-20'}`}></div>

        {/* Pin marker */}
        <div className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-pink-400 text-white shadow-lg">{icon}</div>

        {/* Featured decorative badges */}
        {featured && (
          <>
            <div className="absolute bottom-6 left-6 bg-pink-400 text-white px-2 py-1 rounded-md text-xs font-semibold">15</div>
            <div className="absolute bottom-6 right-20 bg-pink-400 text-white px-2 py-1 rounded-md text-xs font-semibold">16</div>
            <div className="absolute right-6 top-20 bg-pink-400 text-white px-2 py-1 rounded-md text-xs font-semibold">14</div>
          </>
        )}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        {/* Gradient fade at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent"></div>

        {/* Text Content */}
        <div className="relative z-10">
          <h3 className={`font-bold mb-2 ${featured ? 'text-3xl' : 'text-2xl'} transition-all duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-0'
          }`}>
            {name}
          </h3>

          <p className={`text-white/90 mb-4 line-clamp-2 ${featured ? 'text-base' : 'text-sm'}`}>
            {description}
          </p>

          {/* Price and Button */}
          {price && (
            <div className="flex items-center justify-between gap-3 mt-4">
              <div>
                <p className="text-white/70 text-xs uppercase tracking-wider">Từ</p>
                <p className="text-xl font-bold text-white">{price}</p>
              </div>
              <button
                className={`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
              >
                Đặt vé
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hover Effect Border */}
      {isHovered && (
        <div className="absolute inset-0 border-4 border-white/50 rounded-3xl pointer-events-none animate-pulse"></div>
      )}
    </div>
  );
}

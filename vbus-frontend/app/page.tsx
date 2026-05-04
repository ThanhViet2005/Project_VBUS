"use client";
import React from 'react';
import HeroSection from './nguoidung/ngoaithanh/HeroSection';
import SearchForm from './nguoidung/ngoaithanh/SearchForm';
import DestinationCard from './nguoidung/ngoaithanh/DestinationCard';
import ScheduleSection from './nguoidung/ngoaithanh/ScheduleSection';
import ChatBot from '@/components/chatbot/ChatBot';

const destinations = [
  {
    name: 'Đà Lạt',
    description: 'Thành phố hoa lâu đời với khí hậu mát mẻ',
    price: '250.000đ',
    icon: '🏔️',
    image: 'https://images.unsplash.com/photo-1504945005722-3c8f73b23f4b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9c9b2b1d1f0f5b1f7b2e5b3c6d7a8e9f',
    featured: true
  },
  {
    name: 'Nha Trang',
    description: 'Bãi biển đẹp và thành phố biển sôi động',
    price: '280.000đ',
    icon: '🏖️',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd1234ef567890abcdef1234567890',
    featured: false
  },
  {
    name: 'Sapa',
    description: 'Chuyến xe hiểm ác từ Sài Gòn đến Đà Lạt',
    price: '320.000đ',
    icon: '🌾',
    image: 'https://images.unsplash.com/photo-1472586662442-3eec04b9248a?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1234abcd5678ef901234abcd5678ef90',
    featured: false
  },
  
];

export default function HomePage() {
  return (
    <>
      <ChatBot />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Search Form */}
      <SearchForm />

      {/* Destinations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">CÓ Y HÀNH TRÌNH</p>
            <h2 className="text-4xl font-bold text-gray-900">
              Điểm Đến <span className="text-red-400">Nổi Bật</span>
            </h2>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
            {destinations.map((dest, idx) => (
              <DestinationCard
                key={idx}
                name={dest.name}
                description={dest.description}
                price={dest.price}
                  icon={dest.icon}
                  image={dest.image}
                featured={dest.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section (itinerary) */}
      <ScheduleSection />


      {/* Removed Features and CTA as requested */}
    </>
  );
}

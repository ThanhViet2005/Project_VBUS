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
    image: '/Image/banner/dalat.png',
    featured: true
  },
  {
    name: 'Nha Trang',
    description: 'Bãi biển đẹp và thành phố biển sôi động',
    price: '280.000đ',
    icon: '🏖️',
    image: '/Image/banner/nhatrang.png',
    featured: false
  },
  {
    name: 'Sapa',
    description: 'Chuyến xe hiểm ác từ Sài Gòn đến Đà Lạt',
    price: '320.000đ',
    icon: '🌾',
    image: '/Image/banner/sapa.png',
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
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">GỢI Ý HÀNH TRÌNH</p>
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

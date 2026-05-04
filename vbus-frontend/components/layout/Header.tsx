"use client";
import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <span className="text-2xl font-bold text-sky-700">VBUS</span>
          </a>

          <nav className="hidden md:flex space-x-8 mx-auto">
            <a href="#" className="text-sky-700 border-b-2 border-sky-700 pb-1">Tuyến ngoại thành</a>
            <a href="#" className="text-gray-600 hover:text-sky-700">Tuyến nội thành</a>
            <a href="#" className="text-gray-600 hover:text-sky-700">Tra cứu vé</a>
            <a href="#" className="text-gray-600 hover:text-sky-700">Chính sách & Ưu đãi</a>
            <a href="#" className="text-gray-600 hover:text-sky-700">Đánh giá</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="bg-sky-700 text-white px-4 py-2 rounded-full text-sm">Đăng ký/Đăng nhập</button>
          </div>
        </div>
      </div>
    </header>
  );
}

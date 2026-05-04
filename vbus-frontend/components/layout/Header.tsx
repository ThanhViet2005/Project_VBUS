"use client";
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-bold text-sky-700">VBUS</span>
          </Link>

          <nav className="hidden md:flex space-x-8 mx-auto">
            <Link href="/" className="text-sky-700 border-b-2 border-sky-700 pb-1">Tuyến ngoại thành</Link>
            <Link href="/" className="text-gray-600 hover:text-sky-700">Tuyến nội thành</Link>
            <Link href="/" className="text-gray-600 hover:text-sky-700">Tra cứu vé</Link>
            <Link href="/" className="text-gray-600 hover:text-sky-700">Chính sách & Ưu đãi</Link>
            <Link href="/" className="text-gray-600 hover:text-sky-700">Đánh giá</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/auth/dang-nhap"
              className="text-sky-700 hover:text-sky-800 font-semibold text-sm transition-colors"
            >
              Đăng nhập
            </Link>
            <Link
              href="/auth/dang-ky"
              className="bg-sky-700 hover:bg-sky-800 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

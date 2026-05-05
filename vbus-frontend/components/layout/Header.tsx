"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Tuyến ngoại thành' },
    { href: '/nguoidung/noi-thanh', label: 'Tuyến nội thành' },
    { href: '/nguoidung/tra-cuu-ve', label: 'Tra cứu vé' },
    { href: '/nguoidung/chinh-sach', label: 'Chính sách & Ưu đãi' },
    { href: '/nguoidung/danh-gia', label: 'Đánh giá' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/' || 
             pathname.startsWith('/nguoidung/ngoaithanh') || 
             pathname.startsWith('/nguoidung/datve');
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-bold text-sky-700 tracking-tight">VBUS</span>
          </Link>

          <nav className="hidden md:flex space-x-8 mx-auto h-full items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-200 h-full flex items-center px-1 border-b-2 ${
                  isActive(link.href)
                    ? 'text-sky-700 border-sky-700 font-medium'
                    : 'text-gray-600 border-transparent hover:text-sky-700 hover:border-sky-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="bg-sky-700 hover:bg-sky-800 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
              Đăng ký/Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<{ fullName: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    router.push('/auth/dang-nhap');
  };

  const navLinks = [
    { href: '/', label: 'Tuyến ngoại thành' },
    { href: '/nguoidung/noi-thanh', label: 'Tuyến nội thành' },
    { href: '/nguoidung/tracuuve', label: 'Tra cứu vé' },
    { href: '/nguoidung/chinhsachuudai', label: 'Chính sách & Ưu đãi' },
    { href: '/nguoidung/danhgia', label: 'Đánh giá' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/' ||
        pathname.startsWith('/nguoidung/ngoaithanh') ||
        pathname.startsWith('/nguoidung/datve') ||
        pathname.startsWith('/nguoidung/huyve');
    }
    return pathname === path || pathname.startsWith(path + '/');
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
                className={`transition-all duration-200 h-full flex items-center px-1 border-b-2 ${isActive(link.href)
                    ? 'text-sky-700 border-sky-700 font-medium'
                    : 'text-gray-600 border-transparent hover:text-sky-700 hover:border-sky-200'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">Chào, {user.fullName}</span>
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-700 font-semibold text-sm transition-colors"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </header>
  );
}


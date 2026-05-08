"use client";
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sky-700 font-semibold text-lg">VBUS</h3>
            <p className="mt-3 text-sm text-gray-500">NexRoute Indigo Professional Series. Đơn vị cung cấp giải pháp vận tải hàng đầu khu vực.</p>
            <p className="mt-6 text-xs text-gray-400">© 2024 VBUS Modern Navigator. All rights reserved.</p>
          </div>

          <div className="flex flex-col">
            <a href="#" className="text-gray-500 hover:text-sky-700 mb-2">Về chúng tôi</a>
            <a href="#" className="text-gray-500 hover:text-sky-700 mb-2">Liên hệ</a>
          </div>

          <div className="flex flex-col">
            <a href="#" className="text-gray-500 hover:text-sky-700 mb-2">Điều khoản</a>
            <a href="#" className="text-gray-500 hover:text-sky-700 mb-2">Bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

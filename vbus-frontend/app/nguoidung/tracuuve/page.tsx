"use client";

import React from 'react';

export default function TraCuuVePage() {
  return (
    <div className="bg-[#F8FAFC] pb-20">
      {/* Hero Section */}
      <div className="pt-16 pb-8 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">
          Tra cứu thông tin vé
        </h1>
        <p className="text-[#64748B] max-w-2xl mx-auto text-lg leading-relaxed">
          Vui lòng nhập mã vé và số điện thoại để tra cứu hành trình của bạn một cách nhanh chóng và chính xác.
        </p>
      </div>

      {/* Search Card */}
      <div className="max-w-xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 md:p-10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mã số vé */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#1E293B] ml-1">
                  Mã số vé
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="VBS123456"
                    className="w-full bg-[#F1F5F9] border-none rounded-2xl py-4 pl-12 pr-4 text-[#1E293B] placeholder:text-[#94A3B8] focus:ring-2 focus:ring-sky-500 transition-all"
                  />
                </div>
              </div>

              {/* Số điện thoại */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#1E293B] ml-1">
                  Số điện thoại
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="09xxxxxxxx"
                    className="w-full bg-[#F1F5F9] border-none rounded-2xl py-4 pl-12 pr-4 text-[#1E293B] placeholder:text-[#94A3B8] focus:ring-2 focus:ring-sky-500 transition-all"
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#005288] hover:bg-[#003D66] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-sky-900/20"
            >
              Tra cứu ngay
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            <div className="flex items-center justify-center gap-2 text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <span className="text-gray-500">Quên mã vé?</span>
              <a href="tel:19006067" className="text-sky-600 font-bold hover:underline">Liên hệ tổng đài 1900 6067</a>
            </div>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#F1F5F9] rounded-3xl p-8 transition-all hover:shadow-md">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v.01"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1E293B] mb-3">Vé điện tử tiện lợi</h3>
            <p className="text-[#64748B] leading-relaxed">
              Sử dụng mã QR hoặc mã vé để lên xe mà không cần in vé giấy phức tạp.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#F1F5F9] rounded-3xl p-8 transition-all hover:shadow-md">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1E293B] mb-3">Theo dõi hành trình</h3>
            <p className="text-[#64748B] leading-relaxed">
              Cập nhật thời gian thực về vị trí xe và thời gian dự kiến đến trạm dừng.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#F1F5F9] rounded-3xl p-8 transition-all hover:shadow-md">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                <path d="M12 7v4"/><path d="M12 11h.01"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1E293B] mb-3">Hỗ trợ 24/7</h3>
            <p className="text-[#64748B] leading-relaxed">
              Đội ngũ chăm sóc khách hàng luôn sẵn sàng giải đáp mọi thắc mắc về vé của bạn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-[#F8FAFC] min-h-[70vh] flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-[50px] p-8 lg:p-16 shadow-sm border border-gray-100">
          {/* Left Side: Image with Badge */}
          <div className="relative bg-[#F1F5F9] rounded-[40px] p-12 flex items-center justify-center min-h-[400px]">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/Image/banner/loi404/Bus missing stop.png" 
                  alt="Bus Missing Stop" 
                  className="w-full max-w-md object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#005288] text-white px-6 py-3 rounded-2xl flex items-center gap-3 shadow-lg transform hover:scale-105 transition-transform cursor-default">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <span className="font-bold text-sm">Sai lộ trình</span>
              </div>
            </div>
          </div>

          {/* Right Side: Error Content */}
          <div className="space-y-8 lg:pl-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-xs font-black uppercase tracking-widest">
                Lỗi hệ thống
              </div>
              <h1 className="text-6xl font-black text-[#1E293B] leading-tight">
                Chuyến đi <br /> không tìm thấy
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Có vẻ như bạn đã đi nhầm trạm hoặc trang này không còn tồn tại trong mạng lưới VBUS của chúng tôi.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link href="/">
                <button className="w-full bg-[#005288] hover:bg-[#003D66] text-white font-bold py-4 rounded-2xl shadow-lg shadow-sky-900/20 transition-all flex items-center justify-center gap-3 group">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  Quay lại Trang chủ
                </button>
              </Link>
              
              <div className="grid grid-cols-2 gap-4">
                <Link href="/nguoidung/tracuuve" className="flex-1">
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                    </svg>
                    Tra cứu vé
                  </button>
                </Link>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  Hỗ trợ
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Shortcut Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            {
              title: "Mạng lưới",
              desc: "Xem tất cả các tuyến đang vận hành",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>
                </svg>
              )
            },
            {
              title: "Lịch trình",
              desc: "Tra cứu thời gian xe đến trạm",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              )
            },
            {
              title: "Ưu đãi",
              desc: "Khám phá các chương trình giảm giá",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 15 2 2 4-4"/><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M17 21v-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2"/><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/>
                </svg>
              )
            },
            {
              title: "Tin tức",
              desc: "Cập nhật thông tin giao thông mới nhất",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8Z"/>
                </svg>
              )
            }
          ].map((card, idx) => (
            <div key={idx} className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group cursor-pointer">
              <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

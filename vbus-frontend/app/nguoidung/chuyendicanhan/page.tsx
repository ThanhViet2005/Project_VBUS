"use client";

import React from 'react';

export default function ChuyenDiCuaToiPage() {
  const trips = [
    {
      id: 1,
      status: "Sắp tới",
      code: "VBS99210",
      from: "TP. HCM",
      fromTime: "20:30, 24 Th10",
      to: "Đà Lạt",
      toTime: "05:00, 25 Th10",
      busType: "Limousine 22 Phòng",
      seats: "Ghé A12, A14",
      total: "850.000đ"
    },
    {
      id: 2,
      status: "Sắp tới",
      code: "VBS11042",
      from: "Đà Nẵng",
      fromTime: "08:00, 28 Th10",
      to: "Huế",
      toTime: "10:30, 28 Th10",
      busType: "Ghế ngồi cao cấp",
      seats: "Ghé A12, A14",
      total: "120.000đ"
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Header Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-black text-[#004A77]">Chuyến đi của tôi</h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Quản lý các hành trình của bạn, xem lại lịch sử và tra cứu thông tin vé một cách nhanh chóng nhất.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-2xl bg-[#005288] text-white font-bold shadow-lg shadow-sky-900/20 transition-all">
              Sắp tới
            </button>
            <button className="px-8 py-3 rounded-2xl bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold transition-all">
              Đã hoàn thành
            </button>
            <button className="px-8 py-3 rounded-2xl bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold transition-all">
              Đã hủy
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content: Trip Cards */}
          <div className="lg:col-span-8 space-y-6">
            {trips.map((trip) => (
              <div key={trip.id} className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 group hover:shadow-xl transition-all">
                <div className="flex-1 space-y-6 w-full">
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {trip.status}
                    </span>
                    <span className="text-xs text-gray-400 font-bold">Mã vé: {trip.code}</span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-black text-[#1E293B]">{trip.from}</h3>
                      <p className="text-xs text-gray-400 font-bold">{trip.fromTime}</p>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full h-[2px] bg-gray-100 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005288" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h10c0 1.1.9 2 2 2s2-.9 2-2Z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="text-right space-y-1">
                      <h3 className="text-2xl font-black text-[#1E293B]">{trip.to}</h3>
                      <p className="text-xs text-gray-400 font-bold">{trip.toTime}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h10c0 1.1.9 2 2 2s2-.9 2-2Z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
                      </svg>
                      <span className="text-xs font-bold">{trip.busType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                      <span className="text-xs font-bold">{trip.seats}</span>
                    </div>
                  </div>
                </div>

                <div className="md:border-l border-gray-100 md:pl-8 flex flex-col items-center md:items-end gap-4 min-w-[200px]">
                  <div className="text-center md:text-right">
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Tổng thanh toán</p>
                    <p className="text-3xl font-black text-[#005288]">{trip.total}</p>
                  </div>
                  <button className="w-full md:w-fit px-8 py-3 bg-[#005288] hover:bg-[#003D66] text-white font-bold rounded-2xl transition-all shadow-lg shadow-sky-900/20">
                    Chi tiết vé
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Promo Banner */}
            <div className="relative rounded-[40px] overflow-hidden group aspect-[4/5] lg:aspect-auto lg:h-[400px]">
              <img 
                src="/Image/banner/danhgia/luxury modern bus interior.png" 
                alt="Promo" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004A77] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-4">
                <h3 className="text-3xl font-black leading-tight">Ưu đãi độc quyền</h3>
                <p className="text-sm text-sky-100 opacity-80 leading-relaxed">
                  Giảm 15% cho hành trình tiếp theo của bạn khi đặt vé qua ứng dụng.
                </p>
                <button className="flex items-center gap-2 font-bold hover:gap-4 transition-all">
                  Khám phá ngay 
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-gray-100 rounded-[40px] p-8 space-y-6">
              <h3 className="text-xl font-black text-[#1E293B]">Cần hỗ trợ?</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-3xl p-4 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1E293B]">Tổng đài 24/7</p>
                    <p className="text-xs text-gray-400">1900 6067</p>
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-4 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1E293B]">Trợ lý ảo VBUS</p>
                    <p className="text-xs text-gray-400">Phản hồi ngay lập tức</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

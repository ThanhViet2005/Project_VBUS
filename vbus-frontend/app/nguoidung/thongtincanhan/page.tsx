"use client";

import React from 'react';

export default function ThongTinCaNhanPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-[#004A77]">Hồ sơ cá nhân</h1>
            <p className="text-gray-400 text-sm max-w-md">
              Quản lý thông tin tài khoản, bảo mật và tùy chỉnh trải nghiệm du lịch của bạn cùng VBUS.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-8 py-3 rounded-2xl bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold transition-all">
              Hủy thay đổi
            </button>
            <button className="px-8 py-3 rounded-2xl bg-[#005288] hover:bg-[#003D66] text-white font-bold transition-all shadow-lg shadow-sky-900/20">
              Lưu thông tin
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Avatar Card */}
            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-[32px] overflow-hidden border-4 border-sky-50 shadow-inner">
                  <img 
                    src="/Image/banner/thongtincanhan/z7785587050488_45bc9fa47372847a8599638865bc826f.jpg" 
                    alt="Avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute -bottom-2 -right-2 bg-[#005288] text-white p-2.5 rounded-xl shadow-lg border-4 border-white hover:scale-110 transition-transform">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
                  </svg>
                </button>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-[#1E293B]">Tài khoản</h3>
                <p className="text-gray-400 text-sm font-medium">Thành viên VBUS Gold</p>
              </div>
              <div className="w-full grid grid-cols-2 gap-4 bg-[#F8FAFC] rounded-3xl p-4">
                <div className="text-center">
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Chuyến đi</p>
                  <p className="text-xl font-black text-[#005288]">24</p>
                </div>
                <div className="text-center border-l border-gray-200">
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Điểm V-POINT</p>
                  <p className="text-xl font-black text-[#005288]">1.250</p>
                </div>
              </div>
            </div>

            {/* Shortcut Card */}
            <div className="bg-[#D9EAF5] rounded-[32px] p-8 space-y-6">
              <p className="text-[10px] font-black text-[#005288] uppercase tracking-[0.2em]">Lối tắt</p>
              <div className="space-y-4">
                <button className="w-full flex items-center gap-4 text-[#005288] hover:translate-x-2 transition-transform group">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <span className="font-bold text-sm">Lịch sử đặt vé</span>
                </button>
                <button className="w-full flex items-center gap-4 text-[#005288] hover:translate-x-2 transition-transform group">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
                    </svg>
                  </div>
                  <span className="font-bold text-sm">Phương thức thanh toán</span>
                </button>
                <button className="w-full flex items-center gap-4 text-[#005288] hover:translate-x-2 transition-transform group">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m20.66 17-5.62-5.62V4h-6v7.38L3.42 17A2 2 0 0 0 5 20h14a2 2 0 0 0 1.66-3z"/>
                    </svg>
                  </div>
                  <span className="font-bold text-sm">Ưu đãi của tôi</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8">
            {/* Personal Info Section */}
            <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#005288] rounded-full"></div>
                <h2 className="text-xl font-black text-[#1E293B]">Thông tin cá nhân</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Họ và tên</label>
                  <input 
                    type="text" 
                    defaultValue="Tài khoản" 
                    className="w-full bg-[#F1F5F9] border-none rounded-2xl p-4 font-bold text-[#1E293B] focus:ring-2 focus:ring-[#005288] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Số điện thoại</label>
                  <input 
                    type="text" 
                    defaultValue="090 123 4567" 
                    className="w-full bg-[#F1F5F9] border-none rounded-2xl p-4 font-bold text-[#1E293B] focus:ring-2 focus:ring-[#005288] transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Email</label>
                  <input 
                    type="email" 
                    defaultValue="minhquan.vbus@gmail.com" 
                    className="w-full bg-[#F1F5F9] border-none rounded-2xl p-4 font-bold text-[#1E293B] focus:ring-2 focus:ring-[#005288] transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Địa chỉ</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      defaultValue="Số 123 Đường Lê Lợi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh" 
                      className="w-full bg-[#F1F5F9] border-none rounded-2xl p-4 pr-12 font-bold text-[#1E293B] focus:ring-2 focus:ring-[#005288] transition-all text-sm"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Section */}
            <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#005288] rounded-full"></div>
                <h2 className="text-xl font-black text-[#1E293B]">Bảo mật & Tài khoản</h2>
              </div>

              <div className="space-y-4">
                {/* Password Row */}
                <div className="flex items-center justify-between p-4 bg-[#F1F5F9] rounded-3xl group hover:bg-[#E2E8F0] transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#005288] shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3m-3-3l-2.5-2.5"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#1E293B]">Mật khẩu</p>
                      <p className="text-[10px] text-gray-400 font-medium">Cập nhật lần cuối 3 tháng trước</p>
                    </div>
                  </div>
                  <button className="text-sm font-black text-[#005288] hover:underline">Thay đổi</button>
                </div>

                {/* 2FA Row */}
                <div className="flex items-center justify-between p-4 bg-[#F1F5F9] rounded-3xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#005288] shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12a10 10 0 0 1 10-10c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12z"/><path d="M7 12a5 5 0 0 1 5-5c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5z"/><circle cx="12" cy="12" r="1"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#1E293B]">Xác thực 2 lớp</p>
                      <p className="text-[10px] text-gray-400 font-medium">Tăng cường bảo mật cho tài khoản của bạn</p>
                    </div>
                  </div>
                  <div className="relative inline-block w-12 h-6 rounded-full bg-[#005288] cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-2 text-red-500 font-black text-sm hover:scale-105 transition-transform">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Đăng xuất khỏi mọi thiết bị
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

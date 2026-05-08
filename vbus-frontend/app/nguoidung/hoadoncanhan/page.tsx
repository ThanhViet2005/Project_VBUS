"use client";

import React from 'react';

export default function MyInvoicesPage() {
  const invoices = [
    {
      id: "#VBS-99281-XM",
      date: "07/05/2026",
      route: { from: "TP. HCM", to: "Đà Lạt" },
      amount: "670.000đ",
      status: "PAID",
    },
    {
      id: "#VBS-88712-HN",
      date: "05/05/2026",
      route: { from: "Hà Nội", to: "Sapa" },
      amount: "420.000đ",
      status: "PAID",
    },
    {
      id: "#VBS-77102-DN",
      date: "02/05/2026",
      route: { from: "Đà Nẵng", to: "Huế" },
      amount: "150.000đ",
      status: "PENDING",
    },
    {
      id: "#VBS-66192-NT",
      date: "28/04/2026",
      route: { from: "Nha Trang", to: "Phan Thiết" },
      amount: "280.000đ",
      status: "PAID",
    },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-12">
        {/* Header Section */}
        <div className="mb-10 border-l-4 border-sky-600 pl-6">
          <h1 className="text-4xl font-bold text-[#1E293B] mb-2">Hóa đơn của tôi</h1>
          <p className="text-[#64748B] text-lg">
            Quản lý và tra soát tất cả các giao dịch đặt vé của bạn một cách minh bạch và nhanh chóng.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Tổng chi tiêu tháng</p>
            <p className="text-2xl font-bold text-sky-700">2.450.000đ</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Số hóa đơn</p>
            <p className="text-2xl font-bold text-[#1E293B]">08</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Điểm tích lũy</p>
            <p className="text-2xl font-bold text-[#1E293B]">450 pts</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-600">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                </svg>
                <h2 className="font-bold text-[#1E293B]">Bộ lọc tìm kiếm</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Khoảng thời gian</p>
                  <div className="space-y-1">
                    <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-sky-50 text-sky-700 font-semibold text-sm">
                      Tháng này
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 font-medium text-sm transition-colors">
                      3 tháng qua
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 font-medium text-sm transition-colors">
                      Năm nay
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Trạng thái hóa đơn</p>
                  <div className="space-y-1">
                    <button className="w-full text-left px-4 py-3 rounded-xl text-sky-700 bg-sky-50/50 font-semibold text-sm">
                      Tất cả hóa đơn
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 font-medium text-sm transition-colors">
                      Đã thanh toán
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 font-medium text-sm transition-colors">
                      Chờ thanh toán
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Promo Banner */}
            <div className="bg-gradient-to-br from-sky-600 to-sky-800 rounded-2xl p-6 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2">Ưu đãi thanh toán</h3>
                <p className="text-sky-100 text-xs leading-relaxed mb-4">
                  Hoàn tiền 5% khi thanh toán qua ví VBUS Pay cho mọi chuyến đi nội thành.
                </p>
                <button className="bg-white text-sky-700 px-4 py-2 rounded-lg text-xs font-bold hover:bg-sky-50 transition-colors">
                  Khám phá ngay
                </button>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Main Content (Table) */}
          <div className="lg:col-span-9">
            {/* Table Header */}
            <div className="grid grid-cols-5 bg-gray-200/50 rounded-xl px-6 py-4 mb-4 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
              <div>Mã hóa đơn</div>
              <div className="text-center">Ngày đặt</div>
              <div className="text-center">Hành trình</div>
              <div className="text-center">Tổng tiền</div>
              <div className="text-right">Trạng thái</div>
            </div>

            {/* Table Body */}
            <div className="space-y-4">
              {invoices.map((invoice, idx) => (
                <div 
                  key={idx}
                  className="grid grid-cols-5 items-center bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-5 hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <div className="font-bold text-sky-700">{invoice.id}</div>
                  <div className="text-center text-sm text-gray-500 font-medium">{invoice.date}</div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-[#1E293B]">{invoice.route.from}</div>
                    <div className="flex justify-center my-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                        <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
                      </svg>
                    </div>
                    <div className="text-sm font-bold text-[#1E293B]">{invoice.route.to}</div>
                  </div>
                  
                  {/* Cột Tổng tiền - Căn giữa và ngang hàng với trạng thái */}
                  <div className="text-center font-black text-[#1E293B] text-lg">
                    {invoice.amount}
                  </div>

                  {/* Cột Trạng thái - Căn phải */}
                  <div className="flex items-center justify-end gap-3">
                    {invoice.status === "PAID" ? (
                      <div className="bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-[10px] font-bold border border-emerald-100 flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        ĐÃ THANH TOÁN
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-[10px] font-bold border border-orange-100 flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                          CHỜ THANH TOÁN
                        </div>
                        <button className="bg-[#005288] text-white px-3 py-1.5 rounded-lg text-[10px] font-bold hover:bg-[#003D66] transition-colors shadow-sm">
                          Thanh toán
                        </button>
                      </div>
                    )}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-sky-600 transition-colors">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-lg bg-[#005288] text-white font-bold shadow-lg shadow-sky-900/20">1</button>
              <button className="w-10 h-10 rounded-lg hover:bg-white border border-transparent hover:border-gray-200 text-gray-600 font-bold transition-all">2</button>
              <button className="w-10 h-10 rounded-lg hover:bg-white border border-transparent hover:border-gray-200 text-gray-600 font-bold transition-all">3</button>
              <span className="text-gray-400 mx-1">...</span>
              <button className="w-10 h-10 rounded-lg hover:bg-white border border-transparent hover:border-gray-200 text-gray-600 font-bold transition-all">8</button>
              <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React from 'react';

export default function RouteDetailPage() {
  const stops = [
    { name: 'Bến xe Chợ Lớn', desc: 'Điểm đầu tuyến - Quận 5', active: true },
    { name: 'Bệnh viện Hùng Vương', desc: 'Hồng Bàng, Phường 12', active: false },
    { name: 'Đại học Y Dược', desc: 'Hồng Bàng, Quận 5', active: false },
    { name: 'Nhà Văn hóa Quận 5', desc: 'An Dương Vương', active: false },
    { name: 'Chợ An Đông', desc: 'Giao lộ Nguyễn Duy Dương', active: false },
    { name: 'Ngã 3 Tân Vạn', desc: 'Điểm cuối tuyến - TP. Dĩ An', active: false, last: true },
  ];

  const connectingRoutes = [
    { id: '15', type: 'Nội thành', name: 'Chợ Lớn - Tân Sơn Nhất', desc: 'Kết nối tại Bến xe Chợ Lớn' },
    { id: '06', type: 'Nội thành', name: 'Chợ Lớn - Đại học Nông Lâm', desc: 'Dọc trục Võ Văn Ngân' },
    { id: '56', type: 'Nội thành', name: 'Chợ Lớn - ĐH GTVT', desc: 'Dọc trục Xa lộ Hà Nội' },
    { id: '45', type: 'Nội thành', name: 'Bến xe Quận 8 - Chợ Lớn', desc: 'Tăng cường giờ cao điểm' },
  ];

  return (
    <div className="flex flex-col">
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb / Tag */}
        <div className="mb-6">
          <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
            ● TUYẾN NỘI THÀNH
          </span>
        </div>

        {/* Title and Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-[#1E293B] leading-tight">
              Chi tiết Tuyến 150: <br />
              <span className="text-sky-600">Chợ Lớn – Ngã 3 Tân Vạn</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
              Tuyến huyết mạch kết nối trung tâm thương mại Chợ Lớn với khu vực cửa ngõ phía Đông thành phố, phục vụ hàng ngàn lượt khách mỗi ngày.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-sky-50 rounded-lg flex items-center justify-center">
                   <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Giờ hoạt động</span>
              </div>
              <p className="text-xl font-black text-gray-800">5:00 - 21:00</p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-sky-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Giãn cách</span>
              </div>
              <p className="text-xl font-black text-gray-800">10-15 phút</p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-sky-50 rounded-lg flex items-center justify-center">
                   <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Cự ly</span>
              </div>
              <p className="text-xl font-black text-gray-800">28.5 km</p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-sky-50 rounded-lg flex items-center justify-center">
                   <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Giá vé</span>
              </div>
              <p className="text-xl font-black text-gray-800">7.000 VNĐ</p>
            </div>
          </div>
        </div>

        {/* Map and Route Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Visual Placeholder (Image/Map) */}
          <div className="lg:col-span-3 relative">
            <div className="bg-gray-200 w-full lg:h-full min-h-[550px] rounded-[32px] overflow-hidden border border-gray-100 shadow-lg group">
              {/* This is the placeholder for the map image */}
              <div className="w-full h-full flex items-center justify-center bg-sky-50/50">
                <p className="text-sky-300 font-bold uppercase tracking-widest text-sm">Bản đồ lộ trình chi tiết</p>
              </div>
              
              {/* Floating Real-time Badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-[10px] font-black text-gray-800 uppercase leading-none">Trực tuyến (Real-time)</p>
                    <p className="text-[9px] text-gray-400 font-medium mt-1">Hiện có 12 xe đang hoạt động</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Itinerary List */}
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-gray-800">Lộ trình chi tiết</h3>
              <span className="bg-sky-50 text-sky-600 px-3 py-1 rounded-full text-[10px] font-bold">64 điểm dừng</span>
            </div>

            <div className="space-y-0 relative">
              {/* Vertical Line */}
              <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-gray-100"></div>

              {stops.map((stop, idx) => (
                <div key={idx} className="relative pl-12 pb-8 last:pb-0">
                  <div className={`absolute left-0 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center z-10 shadow-sm ${
                    stop.active ? 'bg-sky-600 text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <span className="text-[10px] font-black">{idx === stops.length - 1 ? '64' : idx + 1}</span>
                  </div>
                  <div>
                    <h4 className={`text-sm font-black ${stop.active ? 'text-gray-900' : 'text-gray-700'}`}>{stop.name}</h4>
                    <p className="text-[11px] text-gray-400 font-medium mt-0.5">{stop.desc}</p>
                  </div>
                  {!stop.last && idx === 4 && (
                    <div className="mt-4 mb-4 flex items-center gap-2">
                       <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                       <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                       <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                       <span className="text-[9px] text-gray-300 font-bold uppercase tracking-widest italic ml-2">58 điểm dừng tiếp theo ...</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Info */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-2xl font-black text-gray-800">Thông tin giá vé</h3>
            <div className="h-0.5 flex-grow bg-gray-100"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">VÉ LƯỢT THƯỜNG</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-gray-900">7.000</span>
                  <span className="text-xs font-bold text-gray-400 uppercase">VNĐ</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-200">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">VÉ HSSV / ƯU TIÊN</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-gray-900">3.000</span>
                  <span className="text-xs font-bold text-gray-400 uppercase">VNĐ</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-200">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" fill="currentColor"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Connecting Routes */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-2xl font-black text-gray-800">Tuyến đường kết nối</h3>
            <div className="h-0.5 flex-grow bg-gray-100"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {connectingRoutes.map((route, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 hover:border-sky-200 transition-colors group cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-sky-100 text-sky-700 px-3 py-1 rounded-lg text-xs font-bold">
                    {route.id}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">{route.type}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1 group-hover:text-sky-700 transition-colors">{route.name}</h4>
                <p className="text-[10px] text-gray-400 font-medium">{route.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";
import React from 'react';
import Link from 'next/link';

export default function TripDetail() {
  const reviews = [
    {
      name: 'Minh Hoàng',
      date: 'Đã đi 3 ngày trước',
      rating: 5,
      content: 'Xe limousine cực kỳ hiện đại, phòng riêng tư nên tôi ngủ rất ngon suốt chuyến đi. Nhân viên phục vụ nhiệt tình.',
      avatar: 'MH'
    },
    {
      name: 'Linh Anh',
      date: 'Đã đi 1 tuần trước',
      rating: 5,
      content: 'Xe chạy rất êm, không bị xóc dù đường đèo. Nước uống và khăn lạnh được chuẩn bị sẵn sàng. Rất hài lòng.',
      avatar: 'LA'
    },
    {
      name: 'Quốc Trung',
      date: 'Đã đi 2 tuần trước',
      rating: 5,
      content: 'Mọi thứ đều ổn, từ khâu đặt vé đến khi xuống xe. Xe đúng giờ và ghế ngồi rất thoải mái cho người cao to.',
      avatar: 'QT'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
              TUYẾN ĐƯỜNG PHỔ BIẾN
            </span>
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Chi tiết chuyến xe <br />
              <span className="text-sky-600">Sài Gòn – Đà Lạt</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              Trải nghiệm hành trình êm ái trên dòng xe Limousine 22 phòng cao cấp nhất hiện nay. Không gian riêng tư, tiện nghi chuẩn 5 sao.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <div>
                <p className="text-gray-400 text-sm">Giá vé chỉ từ</p>
                <p className="text-3xl font-bold text-sky-700">450.000đ</p>
              </div>
              <Link 
                href="/nguoidung/datve"
                className="bg-sky-700 hover:bg-sky-800 text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-sky-200 transition-all transform hover:scale-105 active:scale-95 text-center"
              >
                Đặt vé ngay
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-sky-100 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative bg-white p-4 rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
              <img 
                src="/Image/banner/white_bus_detail.png" 
                alt="White Bus" 
                className="w-full h-[400px] object-cover rounded-[32px]"
              />
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Lịch trình chi tiết */}
          <div className="lg:col-span-2 bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-50 rounded-lg">
                <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Lịch trình chi tiết</h2>
            </div>
            
            <div className="flex items-start justify-between relative px-4">
              <div className="text-center w-1/3">
                <p className="text-3xl font-bold text-gray-900">22:30</p>
                <p className="text-sm font-semibold text-gray-700 mt-1">Sài Gòn</p>
                <p className="text-xs text-gray-400 mt-2 leading-tight">Bến xe Miền Đông mới, <br /> TP. Thủ Đức</p>
              </div>
              
              <div className="flex-1 px-4 mt-4 relative">
                <div className="h-px bg-gray-200 w-full relative border-dashed border-t-2">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold whitespace-nowrap uppercase tracking-tighter">
                    6 TIẾNG 30 PHÚT
                  </div>
                </div>
              </div>
              
              <div className="text-center w-1/3">
                <p className="text-3xl font-bold text-gray-900">05:00</p>
                <p className="text-sm font-semibold text-gray-700 mt-1">Đà Lạt</p>
                <p className="text-xs text-gray-400 mt-2 leading-tight">Bến xe Liên tỉnh Đà Lạt, <br /> Lâm Đồng</p>
              </div>
            </div>
          </div>

          {/* Loại xe */}
          <div className="bg-sky-900 text-white p-8 rounded-[32px] shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-6">Loại xe</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <p className="text-lg font-semibold">Limousine 22 phòng</p>
                </div>
                <ul className="space-y-3 pt-2">
                  {[
                    'Khoang phòng riêng tư',
                    'Giường massage hiện đại',
                    'Màn hình giải trí LCD'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/80 text-sm">
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 opacity-10">
              <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18,11H6V6H18M16.5,17A1.5,1.5 0 0,1 15,15.5A1.5,1.5 0 0,1 16.5,14A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 16.5,17M7.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,14A1.5,1.5 0 0,1 9,15.5A1.5,1.5 0 0,1 7.5,17M4,16c0,0.88 0.39,1.67 1,2.22V20a1,1 0 0,0 1,1h1a1,1 0 0,0 1-1v-1h8v1a1,1 0 0,0 1,1h1a1,1 0 0,0 1-1v-1.78c0.61,-0.55 1,-1.34 1,-2.22V6c0,-3.5 -3.58,-4 -8,-4c-4.42,0 -8,0.5 -8,4V16Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-8 px-2">Tiện ích đi kèm</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: '📶', label: 'Wifi miễn phí' },
              { icon: '❄️', label: 'Máy lạnh 2 chiều' },
              { icon: '💧', label: 'Nước uống & Khăn' },
              { icon: '🛏️', label: 'Chăn đắp sạch' },
              { icon: '🔌', label: 'Cổng sạc USB' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow">
                <span className="text-2xl">{item.icon}</span>
                <p className="text-xs font-semibold text-gray-600 text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pickup and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Điểm đón & Trả khách</h2>
            
            <div className="space-y-6">
              {/* Pickup */}
              <div className="flex gap-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <div className="p-3 bg-blue-50 rounded-2xl h-fit">
                  <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Điểm đón: Sài Gòn</h3>
                  <p className="text-sm text-gray-500 mt-1">292 Đinh Bộ Lĩnh, Phường 26, Quận Bình Thạnh, TP. Hồ Chí Minh</p>
                  <a href="#" className="text-sky-600 text-xs font-bold mt-2 inline-flex items-center gap-1 hover:underline">
                    Xem trên bản đồ
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Drop-off */}
              <div className="flex gap-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <div className="p-3 bg-sky-50 rounded-2xl h-fit">
                  <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Điểm trả: Đà Lạt</h3>
                  <p className="text-sm text-gray-500 mt-1">Số 1 Tô Hiến Thành, Phường 3, TP. Đà Lạt, Lâm Đồng</p>
                  <a href="#" className="text-sky-600 text-xs font-bold mt-2 inline-flex items-center gap-1 hover:underline">
                    Xem trên bản đồ
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white h-[500px]">
              <img 
                src="/Image/banner/map_route_detail.png" 
                alt="Map Route" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl flex items-center justify-between border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18,11H6V6H18M16.5,17A1.5,1.5 0 0,1 15,15.5A1.5,1.5 0 0,1 16.5,14A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 16.5,17M7.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,14A1.5,1.5 0 0,1 9,15.5A1.5,1.5 0 0,1 7.5,17M4,16c0,0.88 0.39,1.67 1,2.22V20a1,1 0 0,0 1,1h1a1,1 0 0,0 1-1v-1h8v1a1,1 0 0,0 1,1h1a1,1 0 0,0 1-1v-1.78c0.61,-0.55 1,-1.34 1,-2.22V6c0,-3.5 -3.58,-4 -8,-4c-4.42,0 -8,0.5 -8,4V16Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Trạm trung chuyển</p>
                    <p className="text-sm font-bold text-gray-800">Hỗ trợ đưa đón tận nơi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-10 px-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Đánh giá hành khách</h2>
              <div className="flex items-center gap-4 mt-2">
                <p className="text-4xl font-extrabold text-gray-900">4.9</p>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400">
                    {'★★★★★'.split('').map((s, idx) => <span key={idx} className="text-lg">{s}</span>)}
                  </div>
                  <p className="text-xs text-gray-400 font-medium">Dựa trên 1,240 đánh giá</p>
                </div>
              </div>
            </div>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-xl font-bold text-sm transition-colors">
              Tất cả đánh giá
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500 text-xs">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                      <p className="text-[10px] text-gray-400">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 text-xs">
                    {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

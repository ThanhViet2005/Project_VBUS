"use client";
import React from 'react';
import Link from 'next/link';

const CityBusPage = () => {
  const routes = [
    {
      id: '01',
      name: 'Bến Thành - Chợ Lớn',
      path: 'Lộ trình chính: Lê Lợi - Hàm Nghi - Trần Hưng Đạo - Hải Thượng Lãn Ông',
      frequency: '15 phút / chuyến',
      status: 'Đang hoạt động',
      image: '/Image/banner/bus_01.png',
      color: 'blue'
    },
    {
      id: '150',
      name: 'Chợ Lớn - Ngã 3 Tân Vạn',
      path: 'Hồng Bàng - Điện Biên Phủ - Xa lộ Hà Nội - QL1A',
      frequency: '10 phút / chuyến',
      status: 'Đang hoạt động',
      image: '/Image/banner/bus_150.png',
      color: 'blue'
    },
    {
      id: '08',
      name: 'Bến xe Q.8 - ĐH Quốc Gia',
      path: 'Phạm Thế Hiển - Nguyễn Văn Linh - CMT8 - Xa lộ Hà Nội',
      frequency: '12 phút / chuyến',
      status: 'Đang hoạt động',
      image: '/Image/banner/bus_08.png',
      color: 'blue'
    },
    {
      id: '56',
      name: 'Chợ Lớn - ĐH GTVT',
      path: 'Hồng Bàng - Võ Văn Kiệt - Hầm Thủ Thiêm - Lê Văn Việt',
      frequency: '15 phút / chuyến',
      status: 'Mật độ cao',
      image: '/Image/banner/bus_56.png',
      color: 'orange'
    }
  ];

  return (
    <>
      <main className="flex-grow">
        {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-widest">
              HỆ THỐNG GIAO THÔNG CÔNG CỘNG
            </span>
            <h1 className="text-6xl font-black text-gray-900 leading-tight">
              Mạng Lưới <br />
              <span className="text-sky-600 font-extrabold italic">Tuyến Nội Thành</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
              Kết nối mọi ngõ ngách thành phố với tần suất cao, dịch vụ hiện đại và mức giá cố định thân thiện cho mọi hành khách.
            </p>
          </div>
          
          <div className="flex justify-end">
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Giá vé cố định</p>
                <p className="text-2xl font-black text-sky-700">7.000 VNĐ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {routes.map((route, idx) => (
            <div key={idx} className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:border-sky-200 hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row h-full">
              {/* Image side */}
              <div className="relative w-full md:w-52 h-48 md:h-full shrink-0 overflow-hidden">
                <img 
                  src={route.image} 
                  alt={route.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-sky-700 text-white px-3 py-1 rounded-lg font-bold text-sm">
                  {route.id}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3">
                  <p className="text-white text-[10px] flex items-center gap-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {route.frequency}
                  </p>
                </div>
              </div>
              
              {/* Content side */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-sky-700 transition-colors">
                    {route.name}
                  </h3>
                  <div className="mt-3 flex items-start gap-2">
                    <svg className="w-4 h-4 text-sky-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Lộ trình chính</p>
                      <p className="text-xs text-gray-600 line-clamp-2 mt-0.5">{route.path}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-between border-t border-gray-50 pt-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${route.color === 'blue' ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`}></div>
                    <p className={`text-[10px] font-bold ${route.color === 'blue' ? 'text-green-600' : 'text-orange-600'}`}>
                      {route.status}
                    </p>
                  </div>
                  <Link 
                    href="/nguoidung/noi-thanh/ctnoithanh"
                    className="text-sky-600 text-[10px] font-extrabold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Chi tiết
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-8 py-3 rounded-2xl font-bold text-sm flex items-center gap-3 transition-colors">
            Xem thêm 12 tuyến khác
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Visual Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative rounded-[48px] overflow-hidden bg-gray-900 aspect-[21/9] md:aspect-auto md:h-[450px]">
          <img 
            src="/Image/banner/city_map_bg.png" 
            alt="Visual Map" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16">
            <div className="max-w-md space-y-6">
              <h2 className="text-4xl font-black text-white leading-tight">
                Bản đồ lộ trình <br />
                <span className="text-sky-400">trực quan</span>
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Theo dõi trực tiếp vị trí xe buýt và xem chi tiết các trạm dừng trên toàn hệ thống mạng lưới nội thành.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-xl font-bold transition-transform active:scale-95">
                  Xem bản đồ lớn
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-xl font-bold transition-transform active:scale-95">
                  Tìm trạm gần nhất
                </button>
              </div>
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block">
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl space-y-6 w-72">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M18,11H6V6H18M16.5,17A1.5,1.5 0 0,1 15,15.5A1.5,1.5 0 0,1 16.5,14A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 16.5,17M7.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,14A1.5,1.5 0 0,1 9,15.5A1.5,1.5 0 0,1 7.5,17M4,16c0,0.88 0.39,1.67 1,2.22V20a1,1 0 0,0 1,1h1a1,1 0 0,0 1-1v-1h8v1a1,1 0 0,0 1,1h1a1,1 0 0,0 1-1v-1.78c0.61,-0.55 1,-1.34 1,-2.22V6c0,-3.5 -3.58,-4 -8,-4c-4.42,0 -8,0.5 -8,4V16Z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">342 Xe buýt</p>
                  <p className="text-sm font-extrabold text-gray-900">Đang lưu thông</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold">
                  <span className="text-gray-400">Đúng lộ trình</span>
                  <span className="text-sky-600">85%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-sky-600 rounded-full"></div>
                </div>
                <p className="text-[9px] text-gray-400 font-medium">85% Tuyến đang đúng lộ trình</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
};

export default CityBusPage;

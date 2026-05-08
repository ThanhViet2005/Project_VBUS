"use client";

import React from 'react';

export default function ChinhSachUuDaiPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">
          <p className="text-sky-400 font-bold uppercase tracking-widest mb-4">Trung tâm hỗ trợ</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Mọi hành trình đều <br /> được <span className="text-sky-400">bảo vệ</span>.
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mb-8 leading-relaxed">
            Khám phá các chính sách linh hoạt và ưu đãi đặc quyền được thiết kế để mang lại trải nghiệm di chuyển an tâm và tiết kiệm nhất cho bạn.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-sky-900/40">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7l5 5-5 5M13 7l5 5-5 5"/>
              </svg>
              Xem khuyến mãi
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2">
              Liên hệ tư vấn
            </button>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-2 h-8 bg-sky-600 rounded-full"></div>
          <div>
            <h2 className="text-3xl font-bold text-[#1E293B]">Chính sách hành khách</h2>
            <p className="text-gray-500 mt-1">Quyền lợi và cam kết về sự an toàn của bạn trên mỗi chuyến xe</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Policy Card */}
          <div className="lg:col-span-8 bg-[#F8FAFC] rounded-[40px] p-10 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Chính sách hoàn vé linh hoạt</h3>
            <p className="text-gray-500 mb-10 max-w-xl">
              Thay đổi kế hoạch? Không sao. Chúng tôi hỗ trợ hoàn tiền nhanh chóng và minh bạch cho mọi hành trình của bạn.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm group hover:border-sky-200 transition-colors">
                <p className="text-4xl font-black text-sky-600 mb-2">90%</p>
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Hoàn trả trước 24h</p>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm group hover:border-sky-200 transition-colors">
                <p className="text-4xl font-black text-sky-600 mb-2">50%</p>
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Hoàn trả trước 12h</p>
              </div>
            </div>
          </div>

          {/* Insurance Card */}
          <div className="lg:col-span-4 bg-[#004A77] rounded-[40px] p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Bảo hiểm hành khách</h3>
              <p className="text-sky-100 leading-relaxed mb-12">
                Mọi vé xe đều bao gồm bảo hiểm tai nạn toàn diện lên đến 100 triệu VNĐ.
              </p>
            </div>
            <button className="relative z-10 w-fit flex items-center gap-2 font-bold text-sky-300 hover:text-white transition-colors group">
              Xem chi tiết điều khoản
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <div className="absolute -right-20 -bottom-20 opacity-5">
              <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
          </div>

          {/* Small Info Cards */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-600">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/><path d="M12 7v5l3 3"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#1E293B]">Hỗ trợ 24/7</p>
              <p className="text-gray-400 text-xs">Giải quyết mọi khiếu nại trong vòng 15 phút.</p>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-sky-100 flex items-center justify-center text-sky-600 text-[10px] font-bold">
                  +2k
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Hơn <span className="font-bold text-[#1E293B]">2,000+</span> hành khách hài lòng với dịch vụ bảo hiểm mỗi tháng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="bg-[#F8FAFC] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-sm font-bold text-[#1E293B] uppercase tracking-wider">Ưu đãi độc quyền</span>
            </div>
            <p className="text-gray-500 max-w-lg mx-auto">Tận hưởng hành trình tiết kiệm hơn với các chương trình khuyến mãi hiện có dành riêng cho bạn.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Promo Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-80 rounded-[40px] overflow-hidden mb-6">
                <img 
                  src="/Image/banner/dacquyensinhvien.png" 
                  alt="Students Promo" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-[#1E293B]">
                  Ưu đãi giáo dục
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-2">Đặc quyền Sinh viên & Học sinh</h3>
              <p className="text-gray-500 mb-6">Giảm trực tiếp 15% cho tất cả các tuyến ngoại thành khi xuất trình thẻ sinh viên hợp lệ.</p>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Mã:</span>
                <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-lg text-xs font-bold font-mono">VBUSSTUDENT</span>
              </div>
            </div>

            {/* Promo Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative h-80 rounded-[40px] overflow-hidden mb-6">
                <img 
                  src="/Image/banner/vouchernew.png" 
                  alt="Voucher Promo" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-[#004A77] px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                  Người mới
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-2">Voucher "Chuyến đầu tiên"</h3>
              <p className="text-gray-500 mb-6">Nhận ngay ưu đãi 20.000 VNĐ cho lần đặt vé đầu tiên qua ứng dụng VBUS.</p>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Mã:</span>
                <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-lg text-xs font-bold font-mono">HELLO_VBUS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-50 rounded-3xl text-sky-600 mb-8">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
            </svg>
          </div>
          <h2 className="text-3xl font-black text-[#1E293B] mb-4">Bạn chưa tìm thấy ưu đãi phù hợp?</h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed">
            Để lại số điện thoại hoặc email để nhận ngay các thông báo khuyến mãi mới nhất định kỳ hàng tuần.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input 
              type="text" 
              placeholder="Nhập địa chỉ email của bạn" 
              className="flex-1 bg-gray-50 border-none rounded-2xl px-6 py-4 text-[#1E293B] placeholder:text-gray-400 focus:ring-2 focus:ring-sky-500 transition-all"
            />
            <button className="bg-[#005288] hover:bg-[#003D66] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-sky-900/20 transition-all whitespace-nowrap">
              Đăng ký ngay
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

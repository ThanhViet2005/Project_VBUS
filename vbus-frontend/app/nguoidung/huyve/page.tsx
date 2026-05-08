"use client";

import React from 'react';
import Link from 'next/link';
export default function CancelTicketPage() {
  return (
    <div className="bg-white font-sans min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-12 w-full">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Quay lại
          </Link>
        </div>

        {/* Page Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-sky-900 mb-4 tracking-tight">Hủy đặt vé</h1>
          <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
            Chúng tôi rất tiếc khi bạn không thể thực hiện chuyến đi này. Vui lòng xác nhận thông tin dưới đây để hoàn tất thủ tục hủy vé.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (8/12) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Section 1: Ticket Info */}
            <section className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Thông tin vé muốn hủy</h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Chuyến đi</span>
                    <h3 className="text-2xl font-black text-gray-900">TP. Hồ Chí Minh → Đà Lạt</h3>
                  </div>
                  <div className="md:text-right">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Mã đặt vé</span>
                    <span className="text-xl font-bold text-sky-600">VB-889201</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">KHỞI HÀNH</p>
                    <p className="text-lg font-bold text-gray-800">08:00, 24/05/2024</p>
                    <p className="text-sm text-gray-500">Bến xe Miền Đông</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">VỊ TRÍ GHẾ</p>
                    <p className="text-lg font-bold text-gray-800">A12, A13</p>
                    <p className="text-sm text-gray-500">Giường nằm cao cấp</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-dashed border-gray-200 flex justify-between items-center">
                  <span className="text-gray-500 font-semibold text-lg">Tổng thanh toán</span>
                  <span className="text-3xl font-black text-sky-800 tracking-tight">450.000đ</span>
                </div>
              </div>
            </section>

            {/* Section 2: Cancellation Reason */}
            <section className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Lý do hủy</h2>
              </div>

              <div className="space-y-4">
                <label className="flex items-center p-5 border-2 border-sky-600 bg-sky-50/50 rounded-2xl cursor-pointer group transition-all">
                  <div className="relative flex items-center justify-center w-6 h-6">
                    <input type="radio" name="reason" className="peer absolute opacity-0 w-full h-full cursor-pointer" defaultChecked />
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full peer-checked:border-sky-600 transition-all"></div>
                    <div className="absolute w-3 h-3 bg-sky-600 rounded-full scale-0 peer-checked:scale-100 transition-all"></div>
                  </div>
                  <span className="ml-4 font-bold text-gray-800 group-hover:text-sky-700 transition-colors">Thay đổi kế hoạch</span>
                </label>

                <label className="flex items-center p-5 border border-gray-200 hover:border-sky-300 rounded-2xl cursor-pointer group transition-all">
                  <div className="relative flex items-center justify-center w-6 h-6">
                    <input type="radio" name="reason" className="peer absolute opacity-0 w-full h-full cursor-pointer" />
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full peer-checked:border-sky-600 transition-all"></div>
                    <div className="absolute w-3 h-3 bg-sky-600 rounded-full scale-0 peer-checked:scale-100 transition-all"></div>
                  </div>
                  <span className="ml-4 font-bold text-gray-600 group-hover:text-sky-700 transition-colors">Tìm thấy giá tốt hơn</span>
                </label>

                <label className="flex items-center p-5 border border-gray-200 hover:border-sky-300 rounded-2xl cursor-pointer group transition-all">
                  <div className="relative flex items-center justify-center w-6 h-6">
                    <input type="radio" name="reason" className="peer absolute opacity-0 w-full h-full cursor-pointer" />
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full peer-checked:border-sky-600 transition-all"></div>
                    <div className="absolute w-3 h-3 bg-sky-600 rounded-full scale-0 peer-checked:scale-100 transition-all"></div>
                  </div>
                  <span className="ml-4 font-bold text-gray-600 group-hover:text-sky-700 transition-colors">Lý do cá nhân</span>
                </label>
              </div>

              <div className="mt-8">
                <textarea 
                  className="w-full p-6 bg-gray-50 border-2 border-transparent focus:border-sky-200 focus:bg-white rounded-2xl outline-none transition-all resize-none h-40 text-gray-700 font-medium"
                  placeholder="Chia sẻ thêm chi tiết (không bắt buộc)..."
                ></textarea>
              </div>
            </section>
          </div>

          {/* Right Column (4/12) */}
          <div className="lg:col-span-4">
            <div className="bg-gray-50/80 backdrop-blur-sm rounded-3xl p-8 sticky top-24 border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="text-sky-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Chính sách hoàn tiền</h2>
              </div>

              {/* Timeline Flow */}
              <div className="relative space-y-10 mb-10 pl-8 ml-2">
                {/* Vertical Line */}
                <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gray-200"></div>
                
                {/* Steps */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-[18px] h-[18px] bg-sky-600 rounded-full ring-4 ring-white"></div>
                  <p className="font-extrabold text-sky-800 leading-tight">Hoàn 95% giá vé</p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">Hủy trước 24 giờ khởi hành</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-[18px] h-[18px] bg-gray-300 rounded-full ring-4 ring-white"></div>
                  <p className="font-extrabold text-gray-800 leading-tight">Hoàn 50% giá vé</p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">Hủy từ 12-24 giờ trước khởi hành</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-[18px] h-[18px] bg-gray-300 rounded-full ring-4 ring-white"></div>
                  <p className="font-extrabold text-gray-800 leading-tight">Không hoàn tiền</p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">Hủy dưới 12 giờ trước khởi hành</p>
                </div>
              </div>

              <div className="space-y-4 mb-8 pt-8 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Ước tính hoàn tiền</span>
                  <span className="font-black text-gray-900 text-lg">427.500đ</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Phí dịch vụ</span>
                  <span className="font-black text-gray-900 text-lg">22.500đ</span>
                </div>
              </div>

              <button className="w-full py-5 bg-sky-800 hover:bg-sky-900 text-white font-black text-lg rounded-2xl shadow-xl shadow-sky-800/20 transition-all hover:-translate-y-1 active:translate-y-0 mb-6">
                Xác nhận hủy vé
              </button>
              
              <p className="text-[11px] text-center text-gray-400 leading-relaxed font-medium px-4">
                Bằng cách nhấn xác nhận, bạn đồng ý với <a href="#" className="underline hover:text-sky-600 transition-colors">Điều khoản sử dụng</a> của VBUS.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-16 bg-gradient-to-r from-sky-800 to-sky-700 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group shadow-2xl shadow-sky-900/20">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Cần hỗ trợ trực tiếp?</h3>
              <p className="text-sky-100 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
                Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7 qua tổng đài <span className="text-white font-black underline decoration-2 underline-offset-4">1900 6000</span>.
              </p>
            </div>
            <div className="hidden lg:block shrink-0">
               <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
               </div>
            </div>
          </div>
          
          {/* Subtle patterns */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/4 transition-transform group-hover:translate-x-1/3 duration-1000"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl"></div>
        </div>
      </main>
    </div>
  );
}

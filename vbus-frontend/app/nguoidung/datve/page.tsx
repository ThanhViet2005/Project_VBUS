"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const steps = [
    { id: 1, name: 'Chọn ghế' },
    { id: 2, name: 'Thông tin' },
    { id: 3, name: 'Thanh toán' },
  ];

  const seats = [
    ['A1', 'A2', 'A3'],
    ['A4', 'A5', 'A6'],
    ['B1', 'B2', 'B3'],
    ['B4', 'B5', 'B6'],
  ];

  const renderStepHeader = () => (
    <div className="max-w-3xl mx-auto mb-12">
      <div className="flex items-center justify-between relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
        <div 
          className="absolute top-1/2 left-0 h-0.5 bg-sky-600 -translate-y-1/2 z-0 transition-all duration-500"
          style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
        ></div>

        {steps.map((s) => (
          <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
              step >= s.id ? 'bg-sky-600 text-white shadow-lg shadow-sky-100' : 'bg-gray-100 text-gray-400'
            }`}>
              {s.id}
            </div>
            <span className={`text-xs font-bold ${step >= s.id ? 'text-sky-700' : 'text-gray-400'}`}>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Seat Map */}
      <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black text-gray-800">Sơ đồ ghế ngồi</h2>
            <p className="text-xs text-gray-400 font-medium mt-1">Limousine 22 chỗ - Giường nằm cao cấp</p>
          </div>
          <div className="flex gap-4 text-[10px] font-bold">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-100 rounded"></div> <span className="text-gray-400">Đã bán</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border border-gray-200 rounded"></div> <span className="text-gray-400">Trống</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-sky-600 rounded"></div> <span className="text-gray-400">Đang chọn</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50/50 rounded-3xl p-12 flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-sm w-full">
            <div className="flex justify-between mb-12">
               <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/></svg>
               </div>
               <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M4,18V15H20V18H4M19,3H5C3.89,3 3,3.89 3,5V13H21V5C21,3.89 20.11,3 19,3M19,11H5V5H19V11Z"/></svg>
               </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {seats.map((row, rIdx) => row.map((seat, sIdx) => (
                <button
                  key={seat}
                  onClick={() => setSelectedSeat(seat)}
                  className={`aspect-square rounded-xl flex items-center justify-center font-bold text-xs transition-all ${
                    selectedSeat === seat 
                      ? 'bg-sky-600 text-white shadow-lg shadow-sky-200' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {seat}
                </button>
              )))}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="space-y-6">
        <div className="bg-sky-700 text-white rounded-3xl p-8 shadow-xl shadow-sky-100">
          <div className="flex justify-between items-start mb-8">
            <h3 className="text-lg font-bold">Chi tiết hành trình</h3>
            <svg className="w-5 h-5 text-sky-300" fill="currentColor" viewBox="0 0 24 24"><path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg>
          </div>

          <div className="space-y-6 relative">
            <div className="absolute left-[3px] top-2 bottom-2 w-0.5 bg-sky-500/30"></div>
            <div className="pl-6 relative">
              <div className="absolute left-0 top-1.5 w-2 h-2 bg-white rounded-full"></div>
              <p className="text-[10px] text-sky-200 font-bold uppercase">Sài Gòn - 15/05</p>
              <p className="text-xl font-black">05:00</p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute left-0 top-1.5 w-2 h-2 border-2 border-white rounded-full"></div>
              <p className="text-[10px] text-sky-200 font-bold uppercase">Đà Lạt - 15/05</p>
              <p className="text-xl font-black">11:30</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-sky-600/50 space-y-4">
            <div className="flex gap-2">
              <input type="text" placeholder="NHẬP MÃ CỦA BẠN" className="bg-sky-800/50 border border-sky-500/30 rounded-lg px-4 py-2 text-sm outline-none w-full placeholder:text-sky-400" />
              <button className="bg-white text-sky-700 px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap">Áp dụng</button>
            </div>

            <div className="space-y-2 pt-4">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-sky-200 uppercase">Số ghế</span>
                <span>{selectedSeat || 'Chưa chọn'}</span>
              </div>
              <div className="flex justify-between text-xs font-bold">
                <span className="text-sky-200 uppercase">Giá vé</span>
                <span>450.000đ</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-green-300">
                <span className="uppercase">Giảm giá</span>
                <span>-50.000đ</span>
              </div>
            </div>

            <div className="pt-6 border-t border-sky-600 flex justify-between items-center">
               <span className="text-sm font-bold text-sky-100 uppercase">Tổng cộng</span>
               <span className="text-2xl font-black">400.000đ</span>
            </div>
          </div>
        </div>

        <button 
          disabled={!selectedSeat}
          onClick={() => setStep(2)}
          className={`w-full py-5 rounded-2xl font-black text-sm transition-all ${
            selectedSeat ? 'bg-sky-600 text-white shadow-xl shadow-sky-100 hover:bg-sky-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Tiếp tục đặt vé
        </button>
        <p className="text-[10px] text-gray-400 text-center leading-relaxed">
          Bằng việc nhấn "Tiếp tục", bạn đồng ý với các Điều khoản dịch vụ và Chính sách bảo mật của VBUS.
        </p>

        <div className="bg-gray-100 rounded-3xl p-6 flex flex-col gap-4 overflow-hidden group">
          <div className="h-28 bg-gray-200 rounded-2xl overflow-hidden relative">
             <img 
               src="/Image/banner/datve/AB6AXuBgLv1xhYWPNoWhzgL8rIW4P4EIe1-uPmm-COjekKFQMY_vwbjCxtCQzuHxeUzdLdQlNsf0v9grCyl5PJkD2Csu87PQeoYN1vsuQ-eURzEao6lQrdhE4awZ-nDU3X3qIyEQI6ibgL_Rbv6L_yGEm8pEAch3HhLbxycJVvANu0phwHuuM-NJit1ZJmmxV3BRNHLJkRS_EMzMtu5RBXxrp-U7ukFHSnhYjXmT_hmd0-1Ac___yze8.png" 
               alt="Limousine Navigator" 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div>
            <p className="text-[10px] font-black text-sky-600 uppercase">DỊCH VỤ CAO CẤP</p>
            <h4 className="text-sm font-black text-gray-800 mt-1">Trải nghiệm Limousine Navigator</h4>
            <p className="text-[10px] text-gray-400 font-medium mt-1">Wifi miễn phí, sạc USB và nước suối dọc hành trình.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/></svg>
            </div>
            <h2 className="text-2xl font-black text-gray-800">Thông tin hành khách</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Họ và tên</label>
              <input type="text" placeholder="Nguyễn Văn A" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-sky-500/20" />
            </div>
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Số điện thoại</label>
              <input type="text" placeholder="0901 234 567" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-sky-500/20" />
            </div>
            <div className="md:col-span-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Email (để nhận vé điện tử)</label>
              <input type="email" placeholder="example@email.com" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-sky-500/20" />
            </div>
          </div>

          <div className="mt-10 pt-10 border-t border-gray-50">
             <div className="flex items-center gap-3 mb-6">
               <h3 className="text-lg font-black text-gray-800">Lộ trình di chuyển</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Điểm đón</label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-sky-500/20 appearance-none">
                    <option>Bến xe Miền Đông mới</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Điểm trả</label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-sky-500/20 appearance-none">
                    <option>Bến xe Liên tỉnh Đà Lạt</option>
                  </select>
                </div>
             </div>
          </div>

          <div className="mt-8 bg-sky-50 rounded-2xl p-4 flex gap-4 items-start border border-sky-100">
             <div className="w-6 h-6 bg-sky-600 text-white rounded-full flex items-center justify-center shrink-0 text-xs">!</div>
             <p className="text-xs text-sky-800 leading-relaxed font-medium">Vui lòng nhập chính xác thông tin cá nhân. Vé điện tử và mã đặt chỗ sẽ được gửi qua Email và Số điện thoại đã đăng ký.</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-[40px] p-12 overflow-hidden relative group">
           <div className="relative z-10">
             <p className="text-[10px] font-black text-sky-400 uppercase tracking-widest">DỊCH VỤ CHUẨN 5 SAO</p>
             <h3 className="text-2xl font-black text-white mt-4">Wifi miễn phí, nước uống, khăn lạnh và cổng sạc USB tại mỗi ghế ngồi.</h3>
           </div>
           <div className="absolute inset-0 opacity-60">
              <img src="/Image/banner/datve/step2.png" alt="Service" className="w-full h-full object-cover" />
              <div className="w-full h-full bg-gradient-to-br from-sky-600/10 to-black/40"></div>
           </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-lg font-black text-gray-800 mb-8">Tóm tắt chuyến đi</h3>
          <div className="space-y-6 relative mb-8">
            <div className="absolute left-[3px] top-2 bottom-2 w-0.5 bg-gray-100"></div>
            <div className="pl-6 relative">
              <div className="absolute left-0 top-1.5 w-2 h-2 bg-sky-600 rounded-full"></div>
              <p className="text-[10px] text-gray-400 font-bold uppercase">KHỞI HÀNH</p>
              <p className="text-sm font-black text-gray-800">TP. Hồ Chí Minh</p>
              <p className="text-[10px] text-gray-400 mt-1">22:00 • 15 Thg 10, 2024</p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute left-0 top-1.5 w-2 h-2 border-2 border-sky-600 rounded-full bg-white"></div>
              <p className="text-[10px] text-gray-400 font-bold uppercase">ĐẾN NƠI</p>
              <p className="text-sm font-black text-gray-800">Đà Lạt</p>
              <p className="text-[10px] text-gray-400 mt-1">04:30 • 16 Thg 10, 2024</p>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-gray-50">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-400 font-bold uppercase">Loại xe</span>
              <span className="text-gray-800 font-black">Limousine 24 Phòng</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-400 font-bold uppercase">Số ghế</span>
              <span className="bg-sky-50 text-sky-700 px-3 py-1 rounded-lg font-black">{selectedSeat}</span>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-50 flex justify-between items-center">
            <span className="text-xs font-bold text-gray-400 uppercase">Tổng thanh toán</span>
            <span className="text-2xl font-black text-sky-700">350.000đ</span>
          </div>
        </div>

        <button 
          onClick={() => setStep(3)}
          className="w-full bg-sky-700 text-white py-5 rounded-2xl font-black text-sm shadow-xl shadow-sky-100 hover:bg-sky-800 transition-all flex items-center justify-center gap-2"
        >
          Tiếp tục thanh toán 
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
        <p className="text-[10px] text-gray-400 text-center leading-relaxed mt-4">
          Bằng cách nhấn tiếp tục, bạn đồng ý với <span className="text-sky-600 underline">Điều khoản & Chính sách</span> của VBUS.
        </p>
        <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm overflow-hidden group">
           <div className="h-24 bg-gray-100 rounded-2xl overflow-hidden relative">
              <img 
                src="/Image/banner/datve/AB6AXuBgLv1xhYWPNoWhzgL8rIW4P4EIe1-uPmm-COjekKFQMY_vwbjCxtCQzuHxeUzdLdQlNsf0v9grCyl5PJkD2Csu87PQeoYN1vsuQ-eURzEao6lQrdhE4awZ-nDU3X3qIyEQI6ibgL_Rbv6L_yGEm8pEAch3HhLbxycJVvANu0phwHuuM-NJit1ZJmmxV3BRNHLJkRS_EMzMtu5RBXxrp-U7ukFHSnhYjXmT_hmd0-1Ac___yze8.png" 
                alt="Promotion" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
           </div>
           <p className="text-[10px] font-bold text-sky-700 mt-3 uppercase text-center">Ưu đãi độc quyền cho bạn</p>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-4">
        <h2 className="text-2xl font-black text-gray-800 mb-8">Phương thức thanh toán</h2>
        
        <div className="space-y-4">
           {/* Card Payment */}
           <div className="bg-white rounded-[32px] p-8 border-2 border-sky-600 shadow-xl shadow-sky-50 relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-4">
                    <div className="w-6 h-6 border-4 border-sky-600 rounded-full flex items-center justify-center">
                       <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                    </div>
                    <span className="font-black text-gray-800 text-lg">Thẻ tín dụng / Ghi nợ</span>
                 </div>
                 <div className="flex gap-2">
                    <span className="text-[10px] font-bold text-gray-300">VISA</span>
                    <span className="text-[10px] font-bold text-gray-300">MC</span>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                 <div className="col-span-2 md:col-span-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">SỐ THẺ</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-sky-500/20" />
                 </div>
                 <div className="col-span-2 md:col-span-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">TÊN TRÊN THẺ</label>
                    <input type="text" placeholder="NGUYEN VAN A" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-sky-500/20" />
                 </div>
                 <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">NGÀY HẾT HẠN</label>
                    <input type="text" placeholder="MM/YY" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-sky-500/20" />
                 </div>
                 <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">CVV</label>
                    <input type="password" placeholder="***" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-sky-500/20" />
                 </div>
              </div>
           </div>

           {/* Other Methods */}
           {[
             { name: 'Ví điện tử MoMo / ZaloPay', icons: ['https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Square.png', 'https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png'] },
             { name: 'Quét mã QR VNPAY', icons: ['https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR-1.png'] },
             { name: 'Chuyển khoản ngân hàng', icons: ['https://cdn-icons-png.flaticon.com/512/2830/2830284.png'] }
           ].map((method, idx) => (
             <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-center justify-between group cursor-pointer hover:bg-white hover:border-sky-200 transition-all">
                <div className="flex items-center gap-4">
                   <div className="w-5 h-5 border-2 border-gray-200 rounded-full bg-white"></div>
                   <span className="font-bold text-gray-600 group-hover:text-gray-800">{method.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {method.icons.map((icon, i) => (
                    <img key={i} src={icon} alt="Payment Icon" className="w-8 h-8 object-contain bg-white rounded-md p-1 border border-gray-100" />
                  ))}
                </div>
             </div>
           ))}
        </div>

        <div className="mt-8 bg-gray-50 rounded-2xl p-5 flex items-center gap-4 border border-gray-100">
           <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
           <p className="text-[11px] text-gray-500 font-medium">Dữ liệu của bạn được mã hóa và bảo mật tuyệt đối. Chúng tôi không lưu trữ thông tin thẻ của bạn.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-black text-gray-800">Tóm tắt đơn hàng</h3>
              <span className="bg-sky-50 text-sky-700 px-3 py-1 rounded-lg text-[10px] font-black uppercase">Giường nằm</span>
           </div>

           <div className="space-y-4 mb-8">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">CHUYẾN ĐI</p>
              <p className="text-sm font-black text-gray-800">TP. Hồ Chí Minh → Đà Lạt</p>
              <div className="space-y-3 relative">
                 <div className="absolute left-[3px] top-1 bottom-1 w-0.5 bg-gray-100"></div>
                 <div className="pl-6 relative">
                    <div className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                    <p className="text-xs text-gray-600 font-medium">Bến xe Miền Đông (22:30, 24/10)</p>
                 </div>
                 <div className="pl-6 relative">
                    <div className="absolute left-0 top-1.5 w-1.5 h-1.5 border border-sky-600 bg-white rounded-full"></div>
                    <p className="text-xs text-gray-600 font-medium">Bến xe Đà Lạt (05:30, 25/10)</p>
                 </div>
              </div>
           </div>

           <div className="space-y-3 pt-6 border-t border-gray-50 mb-10">
              <div className="flex justify-between text-xs">
                 <span className="text-gray-400 font-bold">Số ghế:</span>
                 <span className="text-gray-800 font-black">{selectedSeat || 'A12, A13'} (2 vé)</span>
              </div>
              <div className="flex justify-between text-xs">
                 <span className="text-gray-400 font-bold">Mã giảm giá:</span>
                 <span className="text-sky-600 font-black uppercase">VBUS_FIRST (-50,000đ)</span>
              </div>
           </div>

           <div className="pt-8 border-t border-gray-100 flex flex-col items-end">
              <span className="text-[10px] text-gray-400 font-bold line-through">650,000đ</span>
              <div className="flex justify-between w-full items-center mt-1">
                 <span className="text-xs font-bold text-gray-400 uppercase">Tổng thanh toán:</span>
                 <span className="text-2xl font-black text-sky-700">600,000đ</span>
              </div>
           </div>
        </div>

        <button 
          onClick={() => setStep(4)}
          className="w-full bg-sky-700 text-white py-5 rounded-2xl font-black text-sm shadow-xl shadow-sky-100 hover:bg-sky-800 transition-all"
        >
          Thanh toán ngay
        </button>

        <div className="flex justify-center gap-6 pt-4">
           <div className="flex flex-col items-center gap-1">
              <div className="w-5 h-5 text-gray-300">
                 <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L5,12L6.41,10.59L10,14.17L17.59,6.58L19,8L10,17Z"/></svg>
              </div>
              <span className="text-[8px] font-bold text-gray-400">PCI DSS</span>
           </div>
           <div className="flex flex-col items-center gap-1">
              <div className="w-5 h-5 text-gray-300">
                 <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.1,7 14,7.9 14,9V10H15V15H9V10H10V9C10,7.9 10.9,7 12,7M12,8C11.45,8 11,8.45 11,9V10H13V9C13,8.45 12.55,8 12,8Z"/></svg>
              </div>
              <span className="text-[8px] font-bold text-gray-400">SSL SECURE</span>
           </div>
           <div className="flex flex-col items-center gap-1">
              <div className="w-5 h-5 text-gray-300">
                 <svg fill="currentColor" viewBox="0 0 24 24"><path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"/></svg>
              </div>
              <span className="text-[8px] font-bold text-gray-400">RELIABLE</span>
           </div>
        </div>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="max-w-4xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
           <div className="w-16 h-16 bg-sky-600 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-sky-200">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
           </div>
           <h1 className="text-5xl font-black text-gray-900 leading-tight">Đặt vé <br />thành công!</h1>
           <p className="text-gray-500 text-lg leading-relaxed max-w-sm">Cảm ơn bạn đã tin tưởng VBUS. Vé điện tử của bạn đã sẵn sàng để khởi hành.</p>
           
           <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 space-y-6">
              <div className="flex justify-between items-center mb-2">
                 <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">BOOKING ID</p>
                    <p className="text-lg font-black text-gray-800">VBS-2024-889012</p>
                 </div>
                 <span className="bg-sky-50 text-sky-700 px-3 py-1 rounded-lg text-[10px] font-black uppercase">Đã thanh toán</span>
              </div>

              <div className="grid grid-cols-2 gap-8">
                 <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">KHỞI HÀNH</p>
                    <p className="font-black text-gray-800">TP. Hồ Chí Minh</p>
                    <p className="text-[10px] text-gray-400">Bến xe Miền Đông</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">ĐIỂM ĐẾN</p>
                    <p className="font-black text-gray-800">Đà Lạt</p>
                    <p className="text-[10px] text-gray-400">Bến xe Liên tỉnh Đà Lạt</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">THỜI GIAN</p>
                    <p className="font-black text-gray-800">22:30, 15/10/2024</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">SN GHẾ</p>
                    <p className="font-black text-gray-800">{selectedSeat || 'A12, A14'}</p>
                 </div>
              </div>

              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18,11H6V6H18M16.5,17A1.5,1.5 0 0,1 15,15.5A1.5,1.5 0 0,1 16.5,14A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 16.5,17M7.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,14A1.5,1.5 0 0,1 9,15.5A1.5,1.5 0 0,1 7.5,17M4,16c0,0.88 0.39,1.67 1,2.22V20a1,1 0 0,0 1,1h1a1,1 0 0,0 1-1v-1h8v1a1,1 0 0,0 1,1h1a1,1 0 0,0 1-1v-1.78c0.61,-0.55 1,-1.34 1,-2.22V6c0,-3.5 -3.58,-4 -8,-4c-4.42,0 -8,0.5 -8,4V16Z"/></svg>
                    </div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-medium uppercase">Xe giường nằm Premium</p>
                       <p className="text-xs font-bold text-gray-800">Tuyến 43B-0192</p>
                    </div>
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] text-gray-400 font-medium uppercase">Tổng thanh toán</p>
                    <p className="text-lg font-black text-sky-700">560.000đ</p>
                 </div>
              </div>
           </div>

           <div className="flex gap-4">
              <button className="flex-1 bg-sky-700 text-white py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                 Tải vé điện tử (PDF)
              </button>
              <Link href="/" className="flex-1 bg-gray-100 text-gray-600 py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                 Về trang chủ
              </Link>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-sky-600"></div>
              <div className="text-center mb-10">
                 <h3 className="text-xl font-black text-gray-800">Mã QR lên xe</h3>
                 <p className="text-[10px] text-gray-400 font-medium mt-2">Vui lòng xuất trình mã này cho nhân viên khi lên xe</p>
              </div>

              <div className="bg-gray-900 aspect-square rounded-3xl p-8 mb-10 flex items-center justify-center">
                 <div className="w-full h-full bg-white rounded-xl flex items-center justify-center p-4">
                    <img src="/Image/banner/datve/Qrdatvethanhvong.jpg" alt="QR Code" className="w-full h-full object-contain" />
                 </div>
              </div>

              <div className="bg-sky-50 rounded-2xl p-4 flex gap-4 items-center border border-sky-100">
                 <div className="w-5 h-5 text-sky-600">
                    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/></svg>
                 </div>
                 <p className="text-[10px] text-sky-800 font-bold">Mã vé đã được gửi đến email <span className="underline italic">nguyen.van@example.com</span> và tin nhắn SMS.</p>
              </div>
           </div>

           <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex items-center justify-between">
              <div className="space-y-1">
                 <h4 className="text-sm font-black text-gray-800">Quản lý chuyến đi dễ dàng hơn?</h4>
                 <p className="text-[10px] text-gray-400 font-medium">Tải ứng dụng VBUS để theo dõi vị trí xe thời gian thực.</p>
              </div>
              <div className="w-10 h-10 bg-white rounded-xl border border-gray-100 flex items-center justify-center text-gray-400">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17,1H7C5.89,1 5,1.89 5,3V21C5,22.11 5.89,23 7,23H17C18.11,23 19,22.11 19,21V3C19,1.89 18.11,1 17,1M17,19H7V5H17V19Z"/></svg>
              </div>
           </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {step < 4 && renderStepHeader()}
        
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderSuccess()}
      </main>
    </div>
  );
}

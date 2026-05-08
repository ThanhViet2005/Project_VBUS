"use client";

import React from 'react';

export default function DanhGiaPage() {
  const reviews = [
    {
      id: 1,
      name: "Thanh Việt",
      avatar: "/Image/banner/danhgia/headshot of a middle aged man.png",
      route: "Tuyến Hà Nội - Sapa",
      time: "2 ngày trước",
      rating: 5,
      content: "Xe rất mới và sạch sẽ. Wifi ổn định suốt hành trình giúp mình làm việc được ngay trên xe. Tài xế lái rất êm, cảm giác rất an toàn.",
      images: [
        "/Image/banner/danhgia/interior of a sleeper bus.png",
        "/Image/banner/danhgia/exterior of a modern bus.png"
      ]
    },
    {
      id: 2,
      name: "Khánh Linh",
      avatar: "/Image/banner/danhgia/smiling young woman outdoors.png",
      route: "Tuyến Đà Nẵng - Huế",
      time: "Hôm qua",
      rating: 5,
      isHighlight: true,
      content: "Dịch vụ chuyên nghiệp nhất mình từng trải nghiệm. Từ khâu đặt vé đến lúc xuống xe đều hoàn hảo.",
      subContent: "Nhân viên nhà xe cực kỳ nhiệt tình, hỗ trợ mình mang hành lý nặng rất chu đáo. Không gian xe thông thoáng, không hề có mùi khó chịu. Chắc chắn sẽ quay lại ủng hộ VBUS lần sau!",
      image: "/Image/banner/danhgia/luxury modern bus interior.png"
    },
    {
      id: 3,
      name: "Phú Nguyễn",
      avatar: "/Image/banner/danhgia/portrait of a young man.png",
      route: "Tuyến HCM - Vũng Tàu",
      time: "3 ngày trước",
      rating: 5,
      content: "Xe đón đúng giờ, không bắt khách dọc đường. Khoang chứa đồ rộng rãi, yên tâm để đồ đạc. Giá vé hợp lý so với chất lượng nhận được.",
      image: "/Image/banner/danhgia/view down a bus aisle.png"
    },
    {
      id: 4,
      name: "Tiên",
      avatar: "/Image/banner/danhgia/smiling young woman outdoors (1).png",
      route: "Tuyến Đà Lạt",
      time: "1 tuần trước",
      rating: 5,
      content: "Xe giường nằm cực kỳ êm ái, có rèm che riêng tư. Chăn gối sạch sẽ, thơm tho. Một trải nghiệm vượt mong đợi.",
      images: [
        "/Image/banner/danhgia/interior of a sleeper bus (1).png",
        "/Image/banner/danhgia/interior view of bus.png"
      ]
    },
    {
      id: 5,
      name: "Minh Quân",
      avatar: "/Image/banner/danhgia/portrait of a young man.png",
      route: "Tuyến HCM - Cần Thơ",
      time: "4 ngày trước",
      rating: 5,
      content: "Dịch vụ rất tốt, nhân viên hỗ trợ nhiệt tình. Xe chạy đúng giờ và rất an toàn.",
      image: "/Image/banner/danhgia/exterior of a modern bus.png"
    },
    {
      id: 6,
      name: "Hương Giang",
      avatar: "/Image/banner/danhgia/smiling young woman outdoors.png",
      route: "Tuyến Nha Trang",
      time: "1 tuần trước",
      rating: 5,
      content: "Không gian xe rộng rãi, thoáng mát. Chuyến đi rất thoải mái, mình sẽ tiếp tục ủng hộ.",
      image: "/Image/banner/danhgia/luxury modern bus interior.png"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1E293B] leading-tight">
              Cảm nhận từ <span className="text-sky-600 italic">hành trình</span> của bạn.
            </h1>
            <p className="text-gray-500 text-lg max-w-lg">
              Sự hài lòng của khách hàng là kim chỉ nam cho mọi nỗ lực của VBUS. Hãy chia sẻ trải nghiệm của bạn để chúng tôi phục vụ tốt hơn mỗi ngày.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                  <img src={`/Image/banner/danhgia/${i === 1 ? 'headshot of a middle aged man.png' : i === 2 ? 'portrait of a young man.png' : 'smiling young woman outdoors.png'}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-sky-600 flex items-center justify-center text-white text-xs font-bold">
                +1.8k
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-400 font-bold">4.9/5 từ hành khách</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[40px] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <img
              src="/Image/banner/danhgia/luxury modern bus interior.png"
              alt="Bus Interior"
              className="w-full h-[450px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-3xl shadow-xl hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-black text-[#1E293B]">Đã kiểm chứng</p>
                <p className="text-[10px] text-gray-400">100% đánh giá thực tế</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-[#F8FAFC] rounded-[50px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-sm border border-gray-100 min-h-[600px]">
          <div className="p-12 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#1E293B] mb-2">Gửi phản hồi của bạn</h2>
              <p className="text-gray-400 text-sm">Chúng tôi luôn lắng nghe. Ý kiến của bạn giúp nâng cao chất lượng dịch vụ vận chuyển chuyên nghiệp.</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Đánh giá sao</p>
                <div className="flex gap-2 text-gray-300">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer hover:text-yellow-400 transition-colors">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Họ và tên" className="w-full bg-white border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-sky-500" />
                <input type="email" placeholder="Email (không bắt buộc)" className="w-full bg-white border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-sky-500" />
              </div>

              <textarea placeholder="Chia sẻ trải nghiệm chuyến đi của bạn..." rows={4} className="w-full bg-white border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-sky-500 resize-none"></textarea>

              <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center space-y-2 cursor-pointer hover:bg-white transition-colors">
                <div className="flex justify-center text-gray-400">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <p className="text-xs text-gray-400">Tải lên ảnh chụp thực tế (tối đa 5 ảnh)</p>
              </div>

              <button className="w-full bg-[#005288] hover:bg-[#003D66] text-white font-bold py-4 rounded-2xl shadow-lg shadow-sky-900/20 transition-all transform active:scale-95">
                Gửi phản hồi ngay
              </button>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <img
              src="/Image/banner/danhgia/scenic view from a bus window.png"
              alt="View from window"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Reviews List Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-[#1E293B]">Đánh giá từ khách hàng</h2>
          <p className="text-gray-400 text-sm">Cập nhật mới nhất từ những chuyến đi gần đây</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`rounded-3xl p-8 space-y-6 ${review.isHighlight ? 'bg-[#004A77] text-white lg:scale-105 shadow-2xl relative z-10' : 'bg-white border border-gray-100 shadow-sm'
                }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-sky-100" />
                  <div>
                    <h4 className="font-bold text-sm">{review.name}</h4>
                    <p className={`text-[10px] ${review.isHighlight ? 'text-sky-200' : 'text-gray-400'}`}>{review.route} • {review.time}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className={`text-sm leading-relaxed ${review.isHighlight ? 'font-bold text-lg italic' : 'text-gray-500'}`}>
                  "{review.content}"
                </p>
                {review.subContent && (
                  <p className="text-sm text-sky-100 leading-relaxed opacity-80">
                    {review.subContent}
                  </p>
                )}
              </div>

              {review.image && (
                <div className="rounded-2xl overflow-hidden h-48">
                  <img src={review.image} alt="Review" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              )}

              {review.images && (
                <div className="grid grid-cols-2 gap-2">
                  {review.images.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden h-24">
                      <img src={img} alt="Review" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-8 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
            Xem thêm đánh giá
          </button>
        </div>
      </section>
    </div>
  );
}

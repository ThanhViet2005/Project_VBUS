const notifications = [
  {
    title: "500+ Khách hàng mới đăng ký",
    desc: "Chiến dịch khuyến mãi Hè Rực Rỡ đang đạt hiệu quả cao.",
  },
  {
    title: "500+ Khách hàng mới đăng ký",
    desc: "Chiến dịch khuyến mãi Hè Rực Rỡ đang đạt hiệu quả cao.",
  },
  {
    title: "Cảnh báo độ trễ cổng thanh toán",
    desc: "Giao dịch qua thẻ VISA đang gặp gián đoạn nhẹ tại khu vực phía Bắc.",
  },
];

export default function SystemNotifications() {
  return (
    <div className="bg-[#121B2F] border border-[#1E2A45] rounded-3xl p-7 relative overflow-hidden">
      <h2 className="text-3xl font-bold mb-8">Thông Báo Hệ Thống</h2>

      <div className="space-y-8 relative z-10">
        {notifications.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="w-11 h-11 rounded-full bg-[#163047]" />

            <div>
              <h3 className="font-semibold text-sm mb-2">{item.title}</h3>

              <p className="text-xs text-gray-400 leading-6">{item.desc}</p>

              <span className="text-[11px] text-gray-500 uppercase">
                2 giờ trước
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 right-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          className="w-[260px]"
        />
      </div>
    </div>
  );
}

import { CheckCircle2, UserPlus, AlertCircle } from "lucide-react";

const notifications = [
  {
    title: "500+ Khách hàng mới đăng ký",
    desc: "Chiến dịch khuyến mãi Hè Rực Rỡ đang đạt hiệu quả cao.",
    icon: CheckCircle2,
    iconColor: "text-emerald-400 bg-emerald-500/10",
    time: "2 GIỜ TRƯỚC"
  },
  {
    title: "500+ Khách hàng mới đăng ký",
    desc: "Chiến dịch khuyến mãi Hè Rực Rỡ đang đạt hiệu quả cao.",
    icon: UserPlus,
    iconColor: "text-cyan-400 bg-cyan-500/10",
    time: "2 GIỜ TRƯỚC"
  },
  {
    title: "Cảnh báo độ trễ cổng thanh toán",
    desc: "Giao dịch qua thẻ VISA đang gặp gián đoạn nhẹ tại khu vực phía Bắc.",
    icon: AlertCircle,
    iconColor: "text-rose-400 bg-rose-500/10",
    time: "5 GIỜ TRƯỚC"
  },
];

export default function SystemNotifications() {
  return (
    <div className="bg-[#0B1739]/50 border border-cyan-500/10 rounded-[32px] p-8 relative overflow-hidden backdrop-blur-md h-full">
      <h2 className="text-2xl font-bold mb-10 text-white">Thông Báo Hệ Thống</h2>

      <div className="space-y-10 relative z-10">
        {notifications.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex gap-5 group cursor-pointer">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:scale-110 ${item.iconColor} border border-white/5 shadow-lg`}>
                <Icon size={22} />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-sm text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-2 font-medium">{item.desc}</p>
                <span className="text-[10px] text-slate-500 font-bold tracking-widest">
                  {item.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          className="w-[300px] grayscale"
          alt="decoration"
        />
      </div>
    </div>
  );
}

import { MoreVertical } from "lucide-react";

const routes = [
  {
    name: "Hà Nội - TP. Hồ Chí Minh",
    width: "95%",
    color: "bg-cyan-500"
  },
  {
    name: "Đà Nẵng - Hội An",
    width: "78%",
    color: "bg-blue-500"
  },
  {
    name: "Sài Gòn - Đà Lạt",
    width: "64%",
    color: "bg-indigo-500"
  },
  {
    name: "Hà Nội - Sapa",
    width: "49%",
    color: "bg-cyan-400"
  },
  {
    name: "Huế - Đà Nẵng",
    width: "36%",
    color: "bg-blue-400"
  },
];

export default function RouteProgress() {
  return (
    <div className="bg-[#0B1739]/50 border border-cyan-500/10 rounded-[32px] p-8 h-full backdrop-blur-md">
      <div className="flex items-start justify-between mb-10">
        <div className="max-w-[80%]">
          <h2 className="text-2xl font-bold mb-3 text-white">Tuyến Đường Phổ Biến</h2>
          <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
            Dự báo: Doanh thu tháng tới dự kiến tăng 15% dựa trên dữ liệu lịch
            sử và xu hướng mùa hè.
          </p>
        </div>

        <button className="text-slate-500 hover:text-white transition-colors p-1">
          <MoreVertical size={20} />
        </button>
      </div>

      <div className="space-y-9">
        {routes.map((route) => (
          <div key={route.name} className="group">
            <div className="flex justify-between mb-3 text-xs font-bold tracking-wide">
              <span className="text-slate-200 group-hover:text-cyan-400 transition-colors">{route.name}</span>
              <span className="text-cyan-400 font-black italic">lượt</span>
            </div>

            <div className="h-2 rounded-full bg-slate-800/50 overflow-hidden relative">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${route.color} shadow-[0_0_10px_rgba(34,211,238,0.2)]`}
                style={{
                  width: route.width,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Bus } from "lucide-react";

export default function BookingMapInfo() {
  return (
    <div className="absolute left-6 top-6 w-[280px] bg-[#344150]/90 backdrop-blur-xl rounded-[32px] p-6 border border-white/5 shadow-2xl z-20">
      <p className="text-cyan-400 text-[10px] font-black tracking-[4px] uppercase mb-6 opacity-80">
        Hành trình đang theo dõi
      </p>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-full bg-[#0B1739] flex items-center justify-center border border-cyan-500/20 text-cyan-400">
          <Bus size={24} />
        </div>

        <div>
          <h3 className="font-black text-xl text-white tracking-tight">VB-2024-X9</h3>
          <p className="text-[10px] text-slate-400 font-bold tracking-wider">SÀI GÒN - ĐÀ LẠT</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-[11px] font-bold text-slate-400 tracking-wide">Tài xế</span>
          <span className="text-xs font-bold text-slate-100 tracking-tight">Nguyễn Văn A</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[11px] font-bold text-slate-400 tracking-wide">Trạng thái</span>
          <div className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
             <span className="text-xs font-bold text-emerald-400">Đang di chuyển</span>
          </div>
        </div>
      </div>
    </div>
  );
}

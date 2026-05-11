import { Calendar, Filter, Search, ChevronDown } from "lucide-react";

export default function BookingFilters() {
  return (
    <div className="bg-[#0B1739]/50 border border-cyan-500/10 rounded-[20px] p-4 flex items-center gap-4 backdrop-blur-md">
      <div className="relative flex-1 group">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors"
        />

        <input
          placeholder="Lọc theo Tên/SĐT..."
          className="w-full h-11 bg-[#020817] border border-cyan-500/10 rounded-xl pl-12 pr-4 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500/40 transition-all"
        />
      </div>

      <div className="relative">
        <select className="appearance-none h-11 pl-4 pr-10 bg-[#020817] border border-cyan-500/10 rounded-xl text-sm text-slate-300 outline-none focus:border-cyan-500/40 transition-all cursor-pointer">
          <option>Tất cả trạng thái</option>
          <option>Đang chờ</option>
          <option>Đã xác nhận</option>
          <option>Đã hủy</option>
        </select>
        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
      </div>

      <div className="relative">
        <select className="appearance-none h-11 pl-4 pr-10 bg-[#020817] border border-cyan-500/10 rounded-xl text-sm text-slate-300 outline-none focus:border-cyan-500/40 transition-all cursor-pointer">
          <option>Chuyến gần đây</option>
          <option>Chuyến hôm nay</option>
          <option>Chuyến tuần này</option>
        </select>
        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
      </div>

      <button className="w-11 h-11 rounded-xl bg-[#020817] border border-cyan-500/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
        <Calendar size={18} />
      </button>

      <button className="w-11 h-11 rounded-xl bg-[#020817] border border-cyan-500/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
        <Filter size={18} />
      </button>
    </div>
  );
}

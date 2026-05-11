import { Calendar, ChevronDown } from "lucide-react";

export default function PaymentFilters() {
  return (
    <div className="flex items-center gap-6">
      {/* Method Tabs */}
      <div className="flex items-center gap-3 bg-[#020817]/50 p-1 rounded-2xl border border-cyan-500/5">
        <button className="h-10 px-6 rounded-xl bg-cyan-400 text-black font-black text-[11px] uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]">
          Tất cả
        </button>

        <button className="h-10 px-6 rounded-xl text-slate-400 font-bold text-[11px] uppercase tracking-wider hover:text-white hover:bg-white/5 transition-all">
          Momo
        </button>

        <button className="h-10 px-6 rounded-xl text-slate-400 font-bold text-[11px] uppercase tracking-wider hover:text-white hover:bg-white/5 transition-all">
          Visa/Master
        </button>
      </div>

      {/* Date Picker Mock */}
      <div className="h-11 px-5 rounded-2xl bg-[#020817] border border-cyan-500/10 flex items-center gap-3 text-slate-300 text-xs font-bold group cursor-pointer hover:border-cyan-500/30 transition-all">
        <Calendar size={16} className="text-cyan-400" />
        <span>15 Th05, 2024 - 22 Th05, 2024</span>
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-3 ml-2">
        <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">Sắp xếp theo:</p>

        <div className="relative">
          <select className="appearance-none h-11 pl-5 pr-12 rounded-2xl bg-[#020817] border border-cyan-500/10 outline-none text-xs font-bold text-white focus:border-cyan-500/40 transition-all cursor-pointer">
            <option>Mới nhất</option>
            <option>Cũ nhất</option>
            <option>Giá trị cao</option>
          </select>
          <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

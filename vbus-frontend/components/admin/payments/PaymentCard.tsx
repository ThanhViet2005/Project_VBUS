import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  sub?: string;
  icon: LucideIcon;
  growth?: string;
  isBank?: boolean;
}

export default function PaymentCard({ title, value, sub, icon: Icon, growth, isBank }: Props) {
  return (
    <div className="flex-1 bg-[#0B1739]/50 border border-cyan-500/10 rounded-[32px] p-7 backdrop-blur-xl hover:border-cyan-500/20 transition-all group">
      <div className="flex items-center justify-between mb-8">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${isBank ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20' : 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20'}`}>
          <Icon size={28} />
        </div>

        {growth && (
          <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
            {growth}
          </div>
        )}
        
        {isBank && (
          <div className="text-slate-500 text-xs font-medium">
            Tháng này
          </div>
        )}
      </div>

      <p className="text-slate-400 font-bold text-xs tracking-widest uppercase mb-4">{title}</p>

      <div className="flex items-baseline gap-2">
        <h2 className="text-4xl font-bold text-white tracking-tight">{value}</h2>
        <span className="text-slate-500 text-sm font-bold">VND</span>
      </div>

      {sub && (
        <div className="mt-6 flex items-center gap-3">
          {isBank && (
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-[#0B1739] flex items-center justify-center text-[10px] font-bold text-slate-400">M</div>
              <div className="w-6 h-6 rounded-full bg-cyan-500 border-2 border-[#0B1739] flex items-center justify-center text-[10px] font-bold text-white">V</div>
              <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-[#0B1739] flex items-center justify-center text-[10px] font-bold text-white">C</div>
            </div>
          )}
          <p className="text-slate-500 text-xs font-medium">{sub}</p>
        </div>
      )}

      {!isBank && (
        <div className="h-1.5 bg-slate-800 rounded-full mt-8 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 w-[70%] rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
        </div>
      )}
    </div>
  );
}


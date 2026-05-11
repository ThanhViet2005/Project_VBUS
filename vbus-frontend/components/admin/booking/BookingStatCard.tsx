import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  growth: string;
  color: string;
  icon: LucideIcon;
  growthColor?: string;
}

export default function BookingStatCard({
  title,
  value,
  growth,
  color,
  icon: Icon,
  growthColor = "text-emerald-400"
}: Props) {
  return (
    <div className={`flex-1 bg-[#0B1739]/50 border border-cyan-500/10 rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-500/20 transition-all`}>
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color}`} />
      
      <div className="flex items-center justify-between mb-6">
        <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
          <Icon size={22} />
        </div>

        <div className={`flex items-center gap-1 ${growthColor} text-xs font-bold`}>
          {growth}
          <span className="text-[10px] opacity-70">↝</span>
        </div>
      </div>

      <p className="text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-2">{title}</p>

      <h2 className="text-4xl font-black text-white tracking-tight">{value}</h2>
    </div>
  );
}


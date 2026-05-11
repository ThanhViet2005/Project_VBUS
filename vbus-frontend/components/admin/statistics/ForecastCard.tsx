import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  growth: string;
  color: string;
  icon: LucideIcon;
}

export default function ForecastCard({ title, value, growth, color, icon: Icon }: Props) {
  return (
    <div className={`bg-[#0B1739]/50 border rounded-[32px] p-7 backdrop-blur-xl transition-all hover:scale-[1.02] ${color}`}>
      <div className="flex items-center justify-between mb-8">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
          <Icon size={24} />
        </div>

        <div className="flex items-center gap-1 text-cyan-400 font-bold text-xs">
          <span className="text-[10px]">↗</span>
          {growth}
        </div>
      </div>

      <p className="text-[10px] uppercase text-slate-400 leading-relaxed font-bold tracking-wider mb-6 line-clamp-3">{title}</p>

      <h2 className="text-3xl font-bold text-white tracking-tight">{value}</h2>
    </div>
  );
}


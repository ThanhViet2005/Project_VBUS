import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function BookingBottomStats({ title, value, icon: Icon }: Props) {
  return (
    <div className="bg-[#344150]/90 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/5 shadow-xl flex items-center gap-4 transition-all hover:bg-[#3d4d5e]">
      <div className="w-10 h-10 rounded-xl bg-[#0B1739]/50 flex items-center justify-center text-orange-400 border border-white/5">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 tracking-wider mb-1 uppercase">{title}</p>
        <h3 className="text-xl font-black text-white tracking-tight">{value}</h3>
      </div>
    </div>
  );
}

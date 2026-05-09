import { SummaryStat } from "@/types/promotions";

export const StatCard = ({ label, value, subValue }: SummaryStat) => (
  <div className="bg-[#1a1f2e] border border-slate-800 p-5 rounded-xl">
    <p className="text-slate-400 text-sm mb-1">{label}</p>
    <div className="flex items-baseline gap-2">
      <h3 className="text-xl font-bold text-white">{value}</h3>
      {subValue && <span className="text-xs text-emerald-400">{subValue}</span>}
    </div>
  </div>
);

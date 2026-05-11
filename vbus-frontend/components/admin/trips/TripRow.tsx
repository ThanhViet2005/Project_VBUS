import { MoreVertical } from "lucide-react";
import { Trip } from "@/types/trips";

interface Props {
  item: Trip;
}

export default function TripRow({ item }: Props) {
  const statusStyle = {
    "Sắp tới": "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]",
    "Đang chạy": "text-amber-400 bg-amber-500/10 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]",
    "Hoàn thành": "text-slate-400 bg-slate-500/10 border-slate-500/20",
  };

  return (
    <tr className="border-b border-cyan-500/5 group hover:bg-cyan-500/5 transition-colors">
      <td className="py-6 px-6">
        <span className="text-cyan-400 font-bold text-xs tracking-wider">
          {item.code}
        </span>
      </td>

      <td className="py-6 px-6">
        <div className="flex items-baseline gap-4">
          <div>
            <h3 className="font-bold text-xl text-white tracking-tight">{item.from}</h3>
            <p className="text-slate-500 text-[10px] font-bold mt-1 uppercase tracking-[2px]">{item.road}</p>
          </div>

          <span className="text-slate-600 text-lg font-light">→</span>

          <h3 className="font-bold text-xl text-white tracking-tight">{item.to}</h3>
        </div>
      </td>

      <td className="py-6 px-6">
        <div className="text-sm font-bold text-slate-200">{item.time}</div>
        <div className="text-[10px] text-slate-500 font-medium uppercase mt-1">Lịch trình</div>
      </td>

      <td className="py-6 px-6">
        <div className="flex flex-col">
          <h3 className="font-bold text-sm text-white">{item.plate}</h3>
          <p className="text-slate-500 text-[11px] font-medium mt-0.5">{item.driver}</p>
        </div>
      </td>

      <td className="py-6 px-6">
        <span
          className={`px-4 py-1.5 rounded-full border text-[10px] font-bold tracking-widest uppercase ${
            statusStyle[item.status as keyof typeof statusStyle]
          }`}
        >
          {item.status}
        </span>
      </td>

      <td className="py-6 px-6">
        <button className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg">
          <MoreVertical size={18} />
        </button>
      </td>
    </tr>
  );
}

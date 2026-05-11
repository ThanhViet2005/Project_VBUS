import { MoreVertical, Wallet, CreditCard, Banknote, Smartphone } from "lucide-react";
import { Payment } from "@/types/payments";

interface Props {
  item: Payment;
}

export default function PaymentRow({ item }: Props) {
  const statusStyle = {
    "Thành công": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]",
    "Đang xử lý": "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]",
    "Thất bại": "bg-red-500/10 text-red-400 border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]",
  };

  const getMethodIcon = (method: string) => {
    const m = method.toLowerCase();
    if (m.includes("momo")) {
      return (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center">
            <Smartphone size={16} className="text-white" />
          </div>
          <span className="text-slate-300 font-medium">Ví MoMo</span>
        </div>
      );
    }
    if (m.includes("visa") || m.includes("master")) {
      return (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <CreditCard size={16} className="text-white" />
          </div>
          <span className="text-slate-300 font-medium">Thẻ Visa/Master</span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center">
          <Banknote size={16} className="text-slate-300" />
        </div>
        <span className="text-slate-300 font-medium">{method}</span>
      </div>
    );
  };

  return (
    <tr className="border-b border-cyan-500/5 group hover:bg-cyan-500/5 transition-colors">
      <td className="py-6 px-7">
        <span className="text-cyan-400 font-bold text-xs tracking-wider">
          {item.code}
        </span>
      </td>

      <td className="py-6 px-7">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-[#0B1739] border border-cyan-500/20 flex items-center justify-center text-xs font-bold text-cyan-400">
            {item.initials}
          </div>

          <div>
            <h3 className="font-bold text-sm text-white">{item.customer}</h3>
            <p className="text-slate-500 text-[11px] font-medium">{item.email}</p>
          </div>
        </div>
      </td>

      <td className="py-6 px-7">
        {getMethodIcon(item.method)}
      </td>

      <td className="py-6 px-7">
        <div className="flex items-baseline gap-1">
          <span className="font-bold text-base text-white">{item.amount}</span>
          <span className="text-[10px] font-bold text-slate-500">VND</span>
        </div>
      </td>

      <td className="py-6 px-7 text-slate-400 text-xs font-medium">
        <div>Hôm nay</div>
        <div className="text-[10px] text-slate-500">{item.time}</div>
      </td>

      <td className="py-6 px-7">
        <span
          className={`px-4 py-1.5 rounded-full border text-[10px] font-bold tracking-wider uppercase ${
            statusStyle[item.status as keyof typeof statusStyle]
          }`}
        >
          {item.status}
        </span>
      </td>

      <td className="py-6 px-7">
        <button className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg">
          <MoreVertical size={18} />
        </button>
      </td>
    </tr>
  );
}

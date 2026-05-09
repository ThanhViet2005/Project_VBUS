import { MoreVertical } from "lucide-react";
import { Payment } from "@/types/payments";

interface Props {
  item: Payment;
}

export default function PaymentRow({ item }: Props) {
  const statusStyle = {
    "Thành công": "bg-green-500/10 text-green-400 border-green-400/20",

    "Đang xử lý": "bg-yellow-500/10 text-yellow-400 border-yellow-400/20",

    "Thất bại": "bg-red-500/10 text-red-400 border-red-400/20",
  };

  return (
    <tr className="border-b border-[#1A2740]">
      <td className="py-5 px-7 text-cyan-400 font-semibold text-[11px]">
        {item.code}
      </td>

      <td className="py-5 px-7">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[#1B2C49] flex items-center justify-center text-base">
            {item.initials}
          </div>

          <div>
            <h3 className="font-semibold text-[11px]">{item.customer}</h3>

            <p className="text-gray-500 text-[11px]">{item.email}</p>
          </div>
        </div>
      </td>

      <td className="py-5 px-7 text-[20px]">{item.method}</td>

      <td className="py-5 px-7 font-bold text-base">{item.amount}</td>

      <td className="py-5 px-7 text-gray-400 text-[11px]">{item.time}</td>

      <td className="py-5 px-7">
        <span
          className={`px-5 py-3 rounded-full border text-[11px] ${
            statusStyle[item.status as keyof typeof statusStyle]
          }`}
        >
          {item.status}
        </span>
      </td>

      <td className="py-5 px-7">
        <button>
          <MoreVertical />
        </button>
      </td>
    </tr>
  );
}

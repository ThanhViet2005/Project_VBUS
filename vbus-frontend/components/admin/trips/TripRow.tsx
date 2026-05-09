import { MoreHorizontal } from "lucide-react";
import { Trip } from "@/types/trips";

interface Props {
  item: Trip;
}

export default function TripRow({ item }: Props) {
  const statusStyle = {
    "Sắp tới": "text-cyan-400 border-cyan-400/30",
    "Đang chạy": "text-yellow-400 border-yellow-400/30",
    "Hoàn thành": "text-gray-400 border-gray-400/30",
  };

  return (
    <tr className="border-b border-[#1E2A45]">
      <td className="py-6 px-5 text-cyan-400 font-medium">{item.code}</td>

      <td className="py-6 px-5">
        <div className="flex items-center gap-4">
          <div>
            <h3 className="font-semibold text-xl">{item.from}</h3>

            <p className="text-gray-500 text-sm">{item.road}</p>
          </div>

          <span className="text-gray-500">→</span>

          <h3 className="font-semibold text-xl">{item.to}</h3>
        </div>
      </td>

      <td className="py-6 px-5">{item.time}</td>

      <td className="py-6 px-5">
        <h3>{item.plate}</h3>
        <p className="text-gray-500 text-sm">{item.driver}</p>
      </td>

      <td className="py-6 px-5">
        <span
          className={`px-4 py-2 rounded-full border text-sm ${
            statusStyle[item.status as keyof typeof statusStyle]
          }`}
        >
          {item.status}
        </span>
      </td>

      <td className="py-6 px-5">
        <button>
          <MoreHorizontal />
        </button>
      </td>
    </tr>
  );
}

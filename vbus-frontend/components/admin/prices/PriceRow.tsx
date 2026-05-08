import { PriceRoute } from "@/types/prices";

interface Props {
  item: PriceRoute;
}

export default function PriceRow({ item }: Props) {
  return (
    <tr className="border-b border-[#1E2A45] hover:bg-[#131F36] transition">
      <td className="py-5 px-4">
        <div>
          <h3 className="font-medium text-white">{item.route}</h3>
          <p className="text-sm text-gray-500">Khoảng cách: {item.distance}</p>
        </div>
      </td>

      <td className="py-5 px-4">
        <span className="px-3 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-400">
          {item.vehicle}
        </span>
      </td>

      <td className="py-5 px-4 font-semibold text-white">
        {item.price.toLocaleString()}đ
      </td>

      <td className="py-5 px-4 text-cyan-400 font-semibold">
        +{item.surcharge}%
      </td>

      <td className="py-5 px-4 text-green-400">● {item.status}</td>

      <td className="py-5 px-4">
        <button className="px-4 py-2 border border-cyan-500 rounded-lg text-cyan-400 hover:bg-cyan-500/10 transition">
          Edit
        </button>
      </td>
    </tr>
  );
}

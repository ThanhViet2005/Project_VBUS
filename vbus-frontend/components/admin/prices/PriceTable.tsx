import { priceRoutes } from "@/data/prices";
import Pagination from "./Pagination";
import PriceRow from "./PriceRow";

export default function PriceTable() {
  return (
    <div className="bg-[#121C33] border border-[#1F2B45] rounded-2xl p-6 mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Bảng Giá Chi Tiết</h2>

        <select className="bg-[#0F172A] border border-[#1F2B45] px-4 py-2 rounded-lg text-sm outline-none">
          <option>Tất cả loại xe</option>
        </select>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-400 border-b border-[#1E2A45]">
            <th className="pb-4 px-4">Tuyến Đường</th>
            <th className="pb-4 px-4">Loại Xe</th>
            <th className="pb-4 px-4">Giá Cơ Bản</th>
            <th className="pb-4 px-4">Phụ Phí</th>
            <th className="pb-4 px-4">Trạng Thái</th>
            <th className="pb-4 px-4">Thao Tác</th>
          </tr>
        </thead>

        <tbody>
          {priceRoutes.map((item) => (
            <PriceRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>

      <Pagination />
    </div>
  );
}

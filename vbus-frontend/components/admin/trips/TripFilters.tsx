import { Filter } from "lucide-react";

export default function TripFilters() {
  return (
    <div className="bg-[#10182B] border border-[#1F2B45] rounded-2xl p-6 flex items-center gap-5">
      <div className="flex-1">
        <p className="text-gray-500 text-sm mb-2">TUYẾN ĐƯỜNG</p>

        <select className="w-full bg-[#0B1324] border border-[#1F2B45] rounded-xl px-4 py-3 outline-none">
          <option>Tất cả các tuyến</option>
        </select>
      </div>

      <div className="flex-1">
        <p className="text-gray-500 text-sm mb-2">NGÀY KHỞI HÀNH</p>

        <input
          type="date"
          className="w-full bg-[#0B1324] border border-[#1F2B45] rounded-xl px-4 py-3 outline-none"
        />
      </div>

      <button className="w-14 h-14 bg-[#18253F] rounded-xl flex items-center justify-center mt-6">
        <Filter className="text-cyan-400" />
      </button>
    </div>
  );
}

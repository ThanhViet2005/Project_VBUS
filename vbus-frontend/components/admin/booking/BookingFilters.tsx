import { Calendar, Filter, Search } from "lucide-react";

export default function BookingFilters() {
  return (
    <div className="bg-[#121B2F] border border-[#1C2943] rounded-2xl p-5 flex items-center gap-4 mb-6">
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          placeholder="Lọc theo Tên/SĐT..."
          className="w-full h-11 bg-[#0E1729] border border-[#1D2943] rounded-xl pl-12 pr-4 text-sm outline-none"
        />
      </div>

      <select className="h-11 px-4 bg-[#0E1729] border border-[#1D2943] rounded-xl text-sm outline-none">
        <option>Tất cả trạng thái</option>
      </select>

      <select className="h-11 px-4 bg-[#0E1729] border border-[#1D2943] rounded-xl text-sm outline-none">
        <option>Chuyến gần đây</option>
      </select>

      <button className="w-11 h-11 rounded-xl bg-[#0E1729] border border-[#1D2943] flex items-center justify-center">
        <Calendar size={18} />
      </button>

      <button className="w-11 h-11 rounded-xl bg-[#0E1729] border border-[#1D2943] flex items-center justify-center">
        <Filter size={18} />
      </button>
    </div>
  );
}

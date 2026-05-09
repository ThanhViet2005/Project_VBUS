export default function PaymentFilters() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <button className="h-12 px-8 rounded-xl bg-cyan-400 text-black font-semibold text-xs">
          Tất cả
        </button>

        <button className="h-12 px-8 rounded-xl bg-[#111A2D] border border-[#1A2740] text-lg">
          Momo
        </button>

        <button className="h-12 px-8 rounded-xl bg-[#111A2D] border border-[#1A2740] text-lg">
          Visa/Master
        </button>

        <div className="h-12 px-6 rounded-xl bg-[#111A2D] border border-[#1A2740] flex items-center text-gray-400 text-lg">
          15 Th05, 2024 - 22 Th05, 2024
        </div>
      </div>

      <div className="flex items-center gap-4">
        <p className="text-gray-500 text-lg">Sắp xếp theo:</p>

        <select className="h-12 px-6 rounded-xl bg-[#111A2D] border border-[#1A2740] outline-none text-lg">
          <option>Mới nhất</option>
        </select>
      </div>
    </div>
  );
}

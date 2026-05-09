"use client";

export default function PromotionFilter() {
  return (
    <div
      className="
      bg-[#081028]
      border border-cyan-500/10
      rounded-2xl
      p-5
    "
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select className="bg-[#0B1739] border border-cyan-500/10 rounded-xl p-3 text-white">
          <option>Tất cả trạng thái</option>
        </select>

        <select className="bg-[#0B1739] border border-cyan-500/10 rounded-xl p-3 text-white">
          <option>Tất cả dạng ưu đãi</option>
        </select>

        <input
          placeholder="Lượt dùng tối thiểu"
          className="bg-[#0B1739] border border-cyan-500/10 rounded-xl p-3 text-white"
        />

        <button
          className="
          bg-cyan-500
          hover:bg-cyan-400
          rounded-xl
          text-black
          font-semibold
        "
        >
          Áp dụng lọc
        </button>
      </div>
    </div>
  );
}

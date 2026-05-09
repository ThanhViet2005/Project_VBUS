"use client";

import { Plus } from "lucide-react";

export default function PromotionHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-cyan-400 uppercase tracking-widest">
          Hệ thống chiến dịch
        </p>

        <h1 className="text-3xl font-bold text-white mt-2">
          Quản lý ưu đãi & khuyến mãi
        </h1>

        <p className="text-slate-400 mt-3 max-w-2xl">
          Theo dõi và quản lý các mã giảm giá, chiến dịch ưu đãi và chương trình
          khuyến mãi theo thời gian thực.
        </p>
      </div>

      <button
        className="
        flex items-center gap-2
        bg-cyan-500 hover:bg-cyan-400
        text-black font-semibold
        px-5 py-3 rounded-xl
        transition-all duration-300
      "
      >
        <Plus size={18} />
        Tạo ưu đãi mới
      </button>
    </div>
  );
}

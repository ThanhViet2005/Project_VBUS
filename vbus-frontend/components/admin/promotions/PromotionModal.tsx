"use client";

import PromotionForm from "./PromotionForm";

export default function PromotionModal() {
  return (
    <div
      className="
      fixed inset-0
      bg-black/60
      flex items-center justify-center
    "
    >
      <div
        className="
        bg-[#081028]
        rounded-3xl
        p-6
        w-full max-w-lg
      "
      >
        <h2 className="text-2xl font-bold text-white mb-6">Tạo ưu đãi mới</h2>

        <PromotionForm />
      </div>
    </div>
  );
}

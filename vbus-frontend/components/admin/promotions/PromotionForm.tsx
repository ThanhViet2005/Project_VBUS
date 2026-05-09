"use client";

export default function PromotionForm() {
  return (
    <form className="space-y-4">
      <input
        placeholder="Mã ưu đãi"
        className="w-full p-3 rounded-xl bg-[#0B1739] text-white"
      />

      <input
        placeholder="Giá trị giảm"
        className="w-full p-3 rounded-xl bg-[#0B1739] text-white"
      />

      <button
        className="
        w-full
        bg-cyan-500
        text-black
        font-semibold
        py-3
        rounded-xl
      "
      >
        Lưu ưu đãi
      </button>
    </form>
  );
}

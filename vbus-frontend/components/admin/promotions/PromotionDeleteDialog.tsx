"use client";

export default function PromotionDeleteDialog() {
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
        w-full max-w-md
      "
      >
        <h2 className="text-xl font-bold text-white">Xóa ưu đãi?</h2>

        <p className="text-slate-400 mt-3">Hành động này không thể hoàn tác.</p>

        <div className="flex gap-3 mt-6">
          <button
            className="
            flex-1
            bg-red-500
            py-3
            rounded-xl
            text-white
          "
          >
            Xóa
          </button>

          <button
            className="
            flex-1
            bg-slate-700
            py-3
            rounded-xl
            text-white
          "
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

type Props = {
  code: string;
  discount: string;
  expired: string;
  used: number;
  total: number;
};

export default function PromotionCard({
  code,
  discount,
  expired,
  used,
  total,
}: Props) {
  return (
    <div
      className="
      bg-[#081028]
      border border-cyan-500/10
      rounded-3xl
      p-5
      hover:border-cyan-400/30
      transition-all duration-300
    "
    >
      <div className="flex items-center justify-between">
        <span className="text-xs text-cyan-400 uppercase">Mã giảm giá</span>

        <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
          🎁
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-4">{code}</h2>

      <p className="text-cyan-400 text-3xl font-bold mt-4">{discount}</p>

      <div className="mt-5 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-400">Hạn dùng</span>
          <span className="text-white">{expired}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Đã dùng</span>
          <span className="text-white">
            {used}/{total}
          </span>
        </div>
      </div>

      <button
        className="
        mt-6 w-full
        bg-cyan-500/10
        hover:bg-cyan-500/20
        border border-cyan-500/20
        rounded-xl
        py-3
        text-cyan-400
        transition-all
      "
      >
        Quản lý chi tiết
      </button>
    </div>
  );
}

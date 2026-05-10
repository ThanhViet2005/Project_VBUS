"use client";

import { revenueData } from "@/data/dashboard";

export default function RevenueChart() {
  return (
    <div
      className="
      bg-[#111827]
      rounded-3xl
      p-6
      h-[420px]
      relative overflow-hidden
    "
    >
      <div className="flex items-center justify-between">
        <h2 className="text-3xl text-white font-semibold">
          Xu hướng doanh thu
        </h2>

        <div className="flex items-center gap-3 text-cyan-400">
          <div className="w-4 h-4 rounded-full bg-cyan-400" />7 ngày qua
        </div>
      </div>

      {/* Fake Chart */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[320px]"
        viewBox="0 0 800 300"
        fill="none"
      >
        <path
          d="M0 250 C100 100, 200 220, 300 180 S500 20, 600 200 S750 280, 800 80"
          stroke="#22D3EE"
          strokeWidth="5"
          fill="transparent"
        />
      </svg>

      {/* Bottom labels */}
      <div className="absolute bottom-5 left-5 right-5 flex justify-between text-slate-500">
        <span>Thứ 2</span>
        <span>Thứ 3</span>
        <span>Thứ 4</span>
        <span>Thứ 5</span>
        <span>Thứ 6</span>
        <span>Thứ 7</span>
        <span>Chủ Nhật</span>
      </div>
    </div>
  );
}

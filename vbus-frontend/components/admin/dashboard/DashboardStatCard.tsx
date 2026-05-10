"use client";

import { StatItem } from "@/types/dashboard";

export default function DashboardStatCard({
  title,
  value,
  percent,
  icon: Icon,
}: StatItem) {
  return (
    <div
      className="
      bg-[#111827]
      border border-cyan-500/20
      rounded-3xl
      p-6
      relative overflow-hidden
    "
    >
      <div className="flex items-center justify-between">
        <p className="text-slate-400 text-sm">{title}</p>

        <div
          className="
          w-12 h-12
          rounded-2xl
          bg-cyan-500/10
          flex items-center justify-center
        "
        >
          <Icon className="text-cyan-400" />
        </div>
      </div>

      <h2 className="text-5xl font-bold text-cyan-400 mt-5">{value}</h2>

      <p className="text-red-400 mt-4">{percent}</p>
    </div>
  );
}

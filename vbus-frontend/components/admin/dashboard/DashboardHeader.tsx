"use client";

import { Bell, FileText, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="text-5xl font-bold text-white">Tổng quan</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div
          className="
          flex items-center gap-3
          bg-[#0B1739]
          border border-cyan-500/10
          rounded-2xl
          px-5
          h-14
          w-[320px]
        "
        >
          <Search className="text-slate-500" />

          <input
            placeholder="Tìm kiếm dữ liệu..."
            className="
            bg-transparent
            outline-none
            text-white
            w-full
          "
          />
        </div>

        <button className="w-14 h-14 rounded-2xl bg-[#0B1739] border border-cyan-500/10 flex items-center justify-center">
          <FileText className="text-slate-400" />
        </button>

        <button className="w-14 h-14 rounded-2xl bg-[#0B1739] border border-cyan-500/10 flex items-center justify-center">
          <Bell className="text-slate-400" />
        </button>

        {/* Avatar */}
        <div
          className="
          flex items-center gap-4
          px-5 h-14
          rounded-2xl
          bg-[#0B1739]
          border border-cyan-500/10
        "
        >
          <div>
            <p className="text-cyan-400 font-semibold">Admin</p>
          </div>

          <div className="w-10 h-10 rounded-full bg-cyan-400" />
        </div>
      </div>
    </div>
  );
}

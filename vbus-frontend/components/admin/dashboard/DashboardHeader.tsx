"use client";

import { Bell, FileText, Settings, HelpCircle, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="h-[72px] border-b border-[#1B2740] px-8 flex items-center justify-between">
      <div className="relative w-[420px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          placeholder="Tìm kiếm đơn đặt, ID, hoặc khách hàng..."
          className="w-full h-11 bg-[#10192B] border border-[#1D2943] rounded-xl pl-12 pr-4 text-sm outline-none"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell size={19} className="text-gray-400" />
        <Settings size={19} className="text-gray-400" />
        <HelpCircle size={19} className="text-gray-400" />

        <div className="w-px h-10 bg-[#1E2A45]" />

        <div className="flex items-center gap-3">
          <div className="text-right">
            <h3 className="font-semibold text-sm">Alex Admin</h3>

            <p className="text-xs text-gray-500">SYSTEM OPS</p>
          </div>

          <img
            src="/avatarAdmin/avaAdmin_01.png"
            className="w-11 h-11 rounded-full border-2 border-cyan-400"
          />
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="flex items-center justify-between">
  //     {/* Left */}
  //     <div>
  //       <h1 className="text-5xl font-bold text-white">Tổng quan</h1>
  //     </div>
  //     {/* Right */}
  //     <div className="flex items-center gap-4">
  //       {/* Search */}
  //       <div
  //         className="
  //         flex items-center gap-3
  //         bg-[#0B1739]
  //         border border-cyan-500/10
  //         rounded-2xl
  //         px-5
  //         h-14
  //         w-[320px]
  //       "
  //       >
  //         <Search className="text-slate-500" />
  //         <input
  //           placeholder="Tìm kiếm dữ liệu..."
  //           className="
  //           bg-transparent
  //           outline-none
  //           text-white
  //           w-full
  //         "
  //         />
  //       </div>
  //       <button className="w-14 h-14 rounded-2xl bg-[#0B1739] border border-cyan-500/10 flex items-center justify-center">
  //         <FileText className="text-slate-400" />
  //       </button>
  //       <button className="w-14 h-14 rounded-2xl bg-[#0B1739] border border-cyan-500/10 flex items-center justify-center">
  //         <Bell className="text-slate-400" />
  //       </button>
  //       {/* Avatar */}
  //       <div
  //         className="
  //         flex items-center gap-4
  //         px-5 h-14
  //         rounded-2xl
  //         bg-[#0B1739]
  //         border border-cyan-500/10
  //       "
  //       >
  //         <div>
  //           <p className="text-cyan-400 font-semibold">Admin</p>
  //         </div>
  //         <div className="w-10 h-10 rounded-full bg-cyan-400" />
  //       </div>
  //     </div>
  //   </div>
  // );
}

"use client";

import React from "react";
import { Bell, Settings, HelpCircle, Search } from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="h-[80px] bg-[#020817] border-b border-slate-800/50 flex items-center justify-between px-8 sticky top-0 z-40">
      {/* Left side: Search bar */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Tìm kiếm dữ liệu..."
            className="bg-[#0B1739] text-sm text-white placeholder-slate-500 rounded-xl pl-10 pr-4 py-2.5 border border-cyan-500/10 focus:outline-none focus:border-cyan-500/30 w-[350px] transition-all"
          />
        </div>
      </div>

      {/* Right side: Icons and Profile */}
      <div className="flex items-center gap-6">
        {/* Action Icons */}
        <div className="flex items-center gap-5 text-slate-400">
          <button className="hover:text-cyan-400 transition-colors relative p-1">
            <Bell size={22} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-[#020817]"></span>
          </button>
          <button className="hover:text-cyan-400 transition-colors p-1">
            <Settings size={22} />
          </button>
          <button className="hover:text-cyan-400 transition-colors p-1">
            <HelpCircle size={22} />
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4 pl-6 border-l border-slate-800/50">
          <div className="text-right">
            <div className="text-[15px] font-bold text-white leading-tight">
              Admin VBus
            </div>
            <div className="text-[10px] text-cyan-400 font-bold tracking-widest uppercase mt-1">
              Hệ thống quản trị
            </div>
          </div>
          
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity blur-[2px]"></div>
            <div className="relative w-11 h-11 rounded-full border-2 border-[#020817] overflow-hidden bg-[#1e293b]">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin&backgroundColor=b6e3f4"
                alt="Admin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

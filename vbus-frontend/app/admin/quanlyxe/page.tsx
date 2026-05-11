"use client";

import React, { useState } from "react";
import {
  Search,
  Bell,
  Globe,
  FileText,
  FileDown,
  Plus,
  Bus,
  Wifi,
  Wind,
  MonitorPlay,
  Plug,
  Wrench,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

// Mock data for vehicles
const vehicles = [
  {
    id: "29A-123.45",
    type: "Limousine Cao Cấp",
    capacity: 22,
    status: "active",
    amenities: ["wifi", "wind", "monitor", "plug"],
  },
  {
    id: "51B-999.88",
    type: "Xe Giường Nằm",
    capacity: 40,
    status: "maintenance",
    amenities: ["wifi", "wind"],
  },
  {
    id: "43A-555.22",
    type: "Xe Ghế Ngồi",
    capacity: 34,
    status: "active",
    amenities: ["wind"],
  },
  {
    id: "75B-001.23",
    type: "Limousine VIP",
    capacity: 11,
    status: "active",
    amenities: ["wifi", "wind", "monitor", "plug"],
  },
  {
    id: "30G-777.89",
    type: "Sleeper Bus",
    capacity: 36,
    status: "active",
    amenities: ["wifi", "wind", "monitor"],
  },
  {
    id: "37C-121.00",
    type: "Xe Ghế Ngồi",
    capacity: 45,
    status: "maintenance",
    amenities: [],
    note: "Đang thay lốp & bảo dưỡng máy",
  },
];

export default function QuanLyXePage() {
  const [activeTab, setActiveTab] = useState("Hôm nay");

  const renderAmenities = (amenities: string[]) => {
    return (
      <div className="flex gap-2 text-cyan-500">
        {amenities.includes("wifi") && <Wifi size={16} />}
        {amenities.includes("wind") && <Wind size={16} />}
        {amenities.includes("monitor") && <MonitorPlay size={16} />}
        {amenities.includes("plug") && <Plug size={16} />}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020817] text-white p-6 relative">
      {/* Top Header Row */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Tìm kiếm phương tiện..."
              className="bg-[#0f172a] text-sm text-white placeholder-slate-400 rounded-full pl-10 pr-4 py-2.5 border border-slate-800 focus:outline-none focus:border-cyan-500 w-[280px]"
            />
          </div>

          {/* Tabs */}
          <div className="flex gap-6 text-sm font-medium">
            {["Hôm nay", "Tuần này", "Tháng này"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-cyan-400 text-cyan-400"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-slate-400">
            <button className="hover:text-white transition-colors">
              <FileDown size={20} />
            </button>
            <button className="hover:text-white transition-colors">
              <FileText size={20} />
            </button>
            <button className="hover:text-white transition-colors">
              <Globe size={20} />
            </button>
            <div className="relative">
              <button className="hover:text-white transition-colors">
                <Bell size={20} />
              </button>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-l border-slate-800 pl-6">
            <div className="text-right">
              <div className="text-sm font-semibold">Admin</div>
              <div className="text-[10px] text-cyan-400 font-medium tracking-wider">
                QUẢN TRỊ VIÊN
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden border border-slate-600">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="Admin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Title Area */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <div className="flex items-center text-sm text-slate-400 mb-2 gap-2">
            <span>Hệ thống</span>
            <span className="text-slate-600">/</span>
            <span className="text-cyan-400">Quản lý xe</span>
          </div>
          <h1 className="text-3xl font-bold">Quản lý đội xe</h1>
        </div>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-colors">
          <Plus size={20} />
          Thêm xe mới
        </button>
      </div>

      {/* Dashboard Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#0f172a] rounded-2xl p-6 border border-slate-800 flex justify-between items-end relative overflow-hidden">
          <div className="z-10">
            <div className="text-slate-400 text-sm mb-2">Tổng số xe</div>
            <div className="text-5xl font-bold text-cyan-400">42</div>
          </div>
          <div className="z-10 text-right">
            <div className="text-slate-400 text-sm mb-2">Đang hoạt động</div>
            <div className="text-3xl font-bold text-emerald-400">38</div>
          </div>
          <div className="z-10 text-right">
            <div className="text-slate-400 text-sm mb-2">Đang bảo trì</div>
            <div className="text-3xl font-bold text-amber-400">4</div>
          </div>
        </div>
        <div className="bg-[#0f172a] rounded-2xl p-6 border border-slate-800 relative overflow-hidden flex flex-col justify-between h-[140px]">
           <div className="text-slate-400 text-sm font-medium z-10">Xu hướng doanh thu</div>
           <div className="text-slate-500 text-xs mt-1 z-10">140.5 tr</div>
           {/* Decorative curved line imitating chart */}
           <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-20 bg-gradient-to-t from-cyan-500 to-transparent"></div>
           <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
             <path d="M0,100 C20,80 40,90 60,30 C80,80 100,50 100,100 Z" fill="rgba(34,211,238,0.2)" />
             <path d="M0,100 C20,80 40,90 60,30 C80,80 100,50 100,100" fill="none" stroke="#22d3ee" strokeWidth="2" />
           </svg>
        </div>
        <div className="bg-[#0f172a] rounded-2xl p-6 border border-slate-800 relative overflow-hidden h-[140px]">
           <div className="text-slate-400 text-sm font-medium z-10 mb-4">Xu hướng booking</div>
           {/* Decorative bar chart */}
           <div className="absolute bottom-4 left-6 right-6 h-12 flex items-end justify-between gap-2">
             {[30, 40, 20, 50, 40, 70, 90, 60, 100].map((h, i) => (
                <div key={i} className="w-full bg-slate-700/50 rounded-t-sm relative group">
                  <div className="absolute bottom-0 left-0 w-full bg-cyan-500/50 rounded-t-sm transition-all" style={{ height: `${h}%` }}></div>
                </div>
             ))}
           </div>
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-[#0f172a] rounded-2xl p-5 border border-slate-800 hover:border-slate-600 transition-colors flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`p-2 rounded-lg ${
                  vehicle.status === "active"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-amber-500/10 text-amber-400"
                }`}
              >
                {vehicle.status === "active" ? <Bus size={20} /> : <Wrench size={20} />}
              </div>
              <div
                className={`text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 ${
                  vehicle.status === "active"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    vehicle.status === "active" ? "bg-emerald-400" : "bg-amber-400"
                  }`}
                ></div>
                {vehicle.status === "active" ? "ĐANG HOẠT ĐỘNG" : "ĐANG BẢO TRÌ"}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-1">{vehicle.id}</h3>
            <p className="text-slate-400 text-sm mb-6">{vehicle.type}</p>

            <div className="space-y-3 mb-6 flex-grow">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Sức chứa</span>
                <span className="font-semibold">{vehicle.capacity} Chỗ</span>
              </div>
              {vehicle.status === "active" ? (
                 <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Tiện nghi</span>
                  {renderAmenities(vehicle.amenities)}
                </div>
              ) : (
                 <div className="text-sm text-slate-400 italic">
                  {vehicle.note || "Đang bảo dưỡng định kỳ"}
                 </div>
              )}
             
            </div>

            <button
              className={`w-full py-3 rounded-lg text-sm font-semibold transition-colors ${
                vehicle.status === "active"
                  ? "bg-transparent border border-cyan-900 text-cyan-400 hover:bg-cyan-950/30"
                  : "bg-transparent border border-amber-900 text-amber-400 hover:bg-amber-950/30"
              }`}
            >
              {vehicle.status === "active" ? "CHI TIẾT PHƯƠNG TIỆN" : "CẬP NHẬT TIẾN ĐỘ"}
            </button>
          </div>
        ))}

        {/* Add New Vehicle Card */}
        <button className="bg-transparent border-2 border-dashed border-slate-700 hover:border-slate-500 hover:bg-slate-800/30 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all group min-h-[300px]">
          <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:bg-slate-700 transition-colors mb-4">
            <Plus size={24} />
          </div>
          <h3 className="text-lg font-bold mb-2">Thêm xe mới</h3>
          <p className="text-slate-500 text-sm max-w-[180px]">
            Cập nhật vào đội ngũ quản lý
          </p>
        </button>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center transition-all transform hover:scale-105 z-50">
        <Plus size={24} />
      </button>
    </div>
  );
}

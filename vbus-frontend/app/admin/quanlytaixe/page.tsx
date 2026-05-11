"use client";

import React, { useState } from "react";
import {
  Search,
  Bell,
  Moon,
  Users,
  Bus,
  Star,
  Pencil,
  Trash2,
  Plus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  RefreshCw,
} from "lucide-react";
import Image from "next/image";

const drivers = [
  {
    id: "VBS-1024",
    name: "Nguyễn Văn An",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=An",
    license: "Hạng E",
    phone: "090 123 4567",
    route: "Tuyến 01: Q1 - Q7",
    status: "Đang chạy",
  },
  {
    id: "VBS-1055",
    name: "Lê Văn Hùng",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hung",
    license: "Hạng E",
    phone: "091 987 6543",
    route: "Tuyến 15: Q2 - Thủ Đức",
    status: "Sẵn sàng",
  },
  {
    id: "VBS-1089",
    name: "Trần Minh Tâm",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tam",
    license: "Hạng D",
    phone: "098 765 4321",
    route: "Chưa phân công",
    status: "Tạm nghỉ",
  },
];

export default function QuanLyTaiXePage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col font-sans">
      {/* Top Header Row */}
      <div className="flex justify-between items-center px-8 py-4 bg-[#020817] border-b border-slate-800/50">
        <h1 className="text-2xl font-semibold">Quản lý tài xế</h1>

        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Tìm kiếm tài xế, mã số..."
              className="bg-[#1e293b] text-sm text-white placeholder-slate-500 rounded-lg pl-10 pr-4 py-2 border border-slate-800 focus:outline-none focus:border-slate-600 w-[300px]"
            />
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <div className="relative">
              <button className="hover:text-white transition-colors">
                <Bell size={20} />
              </button>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <button className="hover:text-white transition-colors">
              <Moon size={20} />
            </button>
          </div>

          <div className="flex items-center gap-3 border-l border-slate-800 pl-6">
            <div className="text-right">
              <div className="text-sm font-semibold">Admin VBus</div>
              <div className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                Hệ thống quản trị
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-slate-700 overflow-hidden border border-slate-600">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
                alt="Admin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 flex-grow">
        {/* Dashboard Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-[#1e293b]/50 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between h-[160px]">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <Users size={20} />
              </div>
              <div className="flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400">
                +2.4% <TrendingUp size={12} />
              </div>
            </div>
            <div>
              <div className="text-slate-400 text-xs font-semibold mb-1 tracking-wider">
                TỔNG SỐ TÀI XẾ
              </div>
              <div className="text-4xl font-bold">150</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1e293b]/50 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between h-[160px]">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <Bus size={20} />
              </div>
              <div className="flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-400">
                80% <RefreshCw size={12} />
              </div>
            </div>
            <div>
              <div className="text-slate-400 text-xs font-semibold mb-1 tracking-wider">
                ĐANG LÀM VIỆC
              </div>
              <div className="text-4xl font-bold">120</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1e293b]/50 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between h-[160px]">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-slate-700/50 text-slate-300 flex items-center justify-center">
                <Moon size={20} />
              </div>
              <div className="flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-md bg-amber-500/10 text-amber-500">
                -5% <TrendingDown size={12} />
              </div>
            </div>
            <div>
              <div className="text-slate-400 text-xs font-semibold mb-1 tracking-wider">
                ĐANG NGHỈ
              </div>
              <div className="text-4xl font-bold">20</div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#1e293b]/50 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between h-[160px]">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <Star size={20} />
              </div>
              <div className="flex items-center gap-1 text-cyan-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={12} fill="currentColor" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-slate-400 text-xs font-semibold mb-1 tracking-wider">
                ĐÁNH GIÁ TRUNG BÌNH
              </div>
              <div className="text-4xl font-bold flex items-baseline gap-2">
                4.8 <span className="text-sm font-normal text-slate-500">/ 5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar & Table Area */}
        <div className="bg-[#1e293b]/30 border border-slate-800/80 rounded-2xl overflow-hidden mb-8">
          {/* Table Toolbar */}
          <div className="p-4 border-b border-slate-800/80 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Tìm tên tài xế..."
                  className="bg-[#0f172a] text-sm text-white placeholder-slate-500 rounded-lg pl-9 pr-4 py-2 border border-slate-800 focus:outline-none focus:border-slate-600 w-[240px]"
                />
              </div>
              <div className="relative">
                <select className="appearance-none bg-[#0f172a] text-sm text-slate-300 rounded-lg pl-4 pr-10 py-2 border border-slate-800 focus:outline-none focus:border-slate-600">
                  <option>Trạng thái: Tất cả</option>
                  <option>Đang chạy</option>
                  <option>Sẵn sàng</option>
                  <option>Tạm nghỉ</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 pointer-events-none"
                  size={16}
                />
              </div>
            </div>
            <button className="bg-cyan-400 hover:bg-cyan-300 text-[#020817] font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors text-sm">
              <Plus size={16} />
              Thêm tài xế mới
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800/80 text-[11px] font-semibold text-slate-400 tracking-wider uppercase bg-[#0f172a]/50">
                  <th className="p-4 font-semibold">Mã tài xế</th>
                  <th className="p-4 font-semibold">Tên tài xế</th>
                  <th className="p-4 font-semibold">Bằng lái</th>
                  <th className="p-4 font-semibold">Số điện thoại</th>
                  <th className="p-4 font-semibold">Tuyến đường</th>
                  <th className="p-4 font-semibold">Trạng thái</th>
                  <th className="p-4 font-semibold text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver, index) => {
                  const getStatusStyle = (status: string) => {
                    switch (status) {
                      case "Đang chạy":
                        return "bg-cyan-400 text-[#020817]";
                      case "Sẵn sàng":
                        return "bg-slate-700 text-slate-200";
                      case "Tạm nghỉ":
                        return "bg-amber-900/50 border border-amber-700/50 text-amber-500";
                      default:
                        return "bg-slate-700 text-slate-200";
                    }
                  };

                  const getDotStyle = (status: string) => {
                    switch (status) {
                      case "Đang chạy":
                        return "bg-[#020817]";
                      case "Sẵn sàng":
                        return "bg-emerald-400";
                      case "Tạm nghỉ":
                        return "bg-amber-500";
                      default:
                        return "bg-slate-400";
                    }
                  };

                  return (
                    <tr
                      key={driver.id}
                      className="border-b border-slate-800/80 hover:bg-[#1e293b]/50 transition-colors"
                    >
                      <td className="p-4">
                        <span className="text-cyan-400 text-xs font-semibold">
                          {driver.id}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={driver.avatar}
                            alt={driver.name}
                            className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700"
                          />
                          <span className="font-semibold text-sm max-w-[120px] leading-tight">
                            {driver.name}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-slate-300">{driver.license}</td>
                      <td className="p-4 text-sm text-slate-300">{driver.phone}</td>
                      <td className="p-4">
                        <div className="text-xs bg-[#0f172a] border border-slate-800 px-3 py-1.5 rounded-md inline-block text-slate-300">
                          {driver.route}
                        </div>
                      </td>
                      <td className="p-4">
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${getStatusStyle(
                            driver.status
                          )}`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${getDotStyle(
                              driver.status
                            )}`}
                          ></div>
                          {driver.status}
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-3 text-slate-500">
                          <button className="hover:text-slate-300 transition-colors">
                            <Pencil size={16} />
                          </button>
                          <button className="hover:text-red-400 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer / Pagination */}
          <div className="p-4 border-t border-slate-800/80 flex justify-between items-center text-sm text-slate-500 bg-[#0f172a]/30">
            <div>Hiển thị 1-10 trên 150 tài xế</div>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-800 transition-colors">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-cyan-400 text-[#020817] font-medium">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-800 transition-colors">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-800 transition-colors">
                3
              </button>
              <span className="px-1">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-800 transition-colors">
                15
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-800 transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Page Footer */}
        <div className="text-center text-[10px] text-slate-500 tracking-wider uppercase mt-8 pb-4">
          © 2024 VBUS LOGISTICS MANAGEMENT SYSTEM - TÀI LIỆU NỘI BỘ
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-cyan-400 hover:bg-cyan-300 text-[#020817] rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center transition-all transform hover:scale-105 z-50">
        <Plus size={24} />
      </button>
    </div>
  );
}

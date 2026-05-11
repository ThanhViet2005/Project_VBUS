"use client";

import React, { useState } from "react";
import {
  Search,
  Users,
  Bus,
  Moon,
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
    <div className="p-8">
      {/* Title Area */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Quản lý tài xế</h1>
        </div>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-colors">
          <Plus size={20} />
          Thêm tài xế mới
        </button>
      </div>

      {/* Dashboard Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-[#0B1739] rounded-2xl p-6 border border-cyan-500/10 flex flex-col justify-between h-[160px]">
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
            <div className="text-4xl font-bold text-white">150</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0B1739] rounded-2xl p-6 border border-cyan-500/10 flex flex-col justify-between h-[160px]">
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
            <div className="text-4xl font-bold text-white">120</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0B1739] rounded-2xl p-6 border border-cyan-500/10 flex flex-col justify-between h-[160px]">
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
            <div className="text-4xl font-bold text-white">20</div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#0B1739] rounded-2xl p-6 border border-cyan-500/10 flex flex-col justify-between h-[160px]">
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
            <div className="text-4xl font-bold text-white flex items-baseline gap-2">
              4.8 <span className="text-sm font-normal text-slate-500">/ 5.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar & Table Area */}
      <div className="bg-[#0B1739]/50 border border-cyan-500/10 rounded-2xl overflow-hidden mb-8 shadow-xl">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-cyan-500/10 flex justify-between items-center bg-[#0B1739]/30">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500"
                size={16}
              />
              <input
                type="text"
                placeholder="Tìm tên tài xế..."
                className="bg-[#020817] text-sm text-white placeholder-slate-500 rounded-lg pl-9 pr-4 py-2 border border-cyan-500/10 focus:outline-none focus:border-cyan-500/50 w-[240px] transition-all"
              />
            </div>
            <div className="relative">
              <select className="appearance-none bg-[#020817] text-sm text-slate-300 rounded-lg pl-4 pr-10 py-2 border border-cyan-500/10 focus:outline-none focus:border-cyan-500/50 transition-all cursor-pointer">
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
          <button className="bg-transparent border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-all text-sm">
            <RefreshCw size={16} />
            Làm mới dữ liệu
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-cyan-500/10 text-[11px] font-bold text-slate-400 tracking-widest uppercase bg-[#0B1739]/80">
                <th className="p-4">Mã tài xế</th>
                <th className="p-4">Tên tài xế</th>
                <th className="p-4">Bằng lái</th>
                <th className="p-4">Số điện thoại</th>
                <th className="p-4">Tuyến đường</th>
                <th className="p-4">Trạng thái</th>
                <th className="p-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-500/5">
              {drivers.map((driver) => {
                const getStatusStyle = (status: string) => {
                  switch (status) {
                    case "Đang chạy":
                      return "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20";
                    case "Sẵn sàng":
                      return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
                    case "Tạm nghỉ":
                      return "bg-amber-500/10 text-amber-400 border border-amber-500/20";
                    default:
                      return "bg-slate-700/10 text-slate-400 border border-slate-500/20";
                  }
                };

                const getDotStyle = (status: string) => {
                  switch (status) {
                    case "Đang chạy":
                      return "bg-cyan-400";
                    case "Sẵn sàng":
                      return "bg-emerald-400";
                    case "Tạm nghỉ":
                      return "bg-amber-400";
                    default:
                      return "bg-slate-400";
                  }
                };

                return (
                  <tr
                    key={driver.id}
                    className="group hover:bg-cyan-500/5 transition-colors"
                  >
                    <td className="p-4">
                      <span className="text-cyan-400 text-xs font-bold">
                        {driver.id}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="absolute -inset-0.5 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-30 blur-[2px] transition-opacity"></div>
                          <img
                            src={driver.avatar}
                            alt={driver.name}
                            className="relative w-10 h-10 rounded-full bg-[#020817] border border-cyan-500/20"
                          />
                        </div>
                        <span className="font-semibold text-sm text-white">
                          {driver.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-300 font-medium">{driver.license}</td>
                    <td className="p-4 text-sm text-slate-300 font-medium">{driver.phone}</td>
                    <td className="p-4">
                      <div className="text-[11px] font-bold bg-[#020817] border border-cyan-500/10 px-3 py-1.5 rounded-full inline-block text-cyan-400/80">
                        {driver.route}
                      </div>
                    </td>
                    <td className="p-4">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider ${getStatusStyle(
                          driver.status
                        )}`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${getDotStyle(
                            driver.status
                          )}`}
                        ></div>
                        {driver.status.toUpperCase()}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-3 text-slate-500">
                        <button className="hover:text-cyan-400 transition-colors p-1.5 hover:bg-cyan-500/10 rounded-lg">
                          <Pencil size={16} />
                        </button>
                        <button className="hover:text-red-400 transition-colors p-1.5 hover:bg-red-500/10 rounded-lg">
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
        <div className="p-4 border-t border-cyan-500/10 flex justify-between items-center text-xs text-slate-500 bg-[#0B1739]/30">
          <div>Hiển thị <span className="text-white font-bold">1-10</span> trên <span className="text-white font-bold">150</span> tài xế</div>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-cyan-500/10 hover:bg-cyan-500/10 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-cyan-500 text-black font-bold">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-cyan-500/10 hover:bg-cyan-500/10 transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-cyan-500/10 hover:bg-cyan-500/10 transition-colors">
              3
            </button>
            <span className="px-2">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-cyan-500/10 hover:bg-cyan-500/10 transition-colors">
              15
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-cyan-500/10 hover:bg-cyan-500/10 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="text-center text-[10px] text-slate-600 tracking-[0.2em] font-bold uppercase mt-8 pb-4">
        © 2024 VBUS LOGISTICS MANAGEMENT SYSTEM - TÀI LIỆU NỘI BỘ
      </div>
    </div>
  );
}

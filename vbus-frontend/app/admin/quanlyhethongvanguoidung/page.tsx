"use client";

import React from "react";
import {
  Search,
  Plus,
  ArrowUpRight,
  ChevronDown,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const users = [
  {
    id: "1",
    initials: "NQ",
    name: "Nguyễn Văn Quốc",
    email: "quoc.nguyen@vbus.com",
    role: "Admin",
    date: "12/05/2023",
    status: "Đang hoạt động",
    avatarColor: "bg-cyan-500",
  },
  {
    id: "2",
    initials: "LT",
    name: "Lê Thị Thu",
    email: "thu.le@vbus.com",
    role: "Quản lý",
    date: "05/08/2023",
    status: "Đang hoạt động",
    avatarColor: "bg-slate-600",
  },
  {
    id: "3",
    initials: "TM",
    name: "Trần Minh",
    email: "minh.tran@vbus.com",
    role: "Nhân viên",
    date: "20/09/2023",
    status: "Đã khóa",
    avatarColor: "bg-slate-600",
  },
];

export default function QuanLyHeThongVaNguoiDungPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full">
      {/* Title Area */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-3xl font-semibold mb-2 text-white">
            Quản lý hệ thống & người dùng
          </h2>
          <p className="text-sm text-slate-400">
            Giám sát và phân quyền truy cập cho toàn bộ hệ thống Command Center.
          </p>
        </div>
        <button className="bg-cyan-400 hover:bg-cyan-300 text-[#020817] font-semibold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-colors text-sm">
          <Plus size={18} />
          Thêm người dùng mới
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#0B1739]/50 rounded-xl p-6 border border-cyan-500/10 flex flex-col justify-center">
          <div className="text-xs font-semibold text-slate-400 mb-2">
            Tổng số người dùng
          </div>
          <div className="flex items-end gap-3">
            <div className="text-3xl font-bold text-white">12,458</div>
            <div className="flex items-center text-xs font-semibold text-cyan-400 mb-1">
              <ArrowUpRight size={14} />
              12%
            </div>
          </div>
        </div>

        <div className="bg-[#0B1739]/50 rounded-xl p-6 border border-cyan-500/10 flex flex-col justify-center">
          <div className="text-xs font-semibold text-slate-400 mb-2">
            Tài khoản quản trị
          </div>
          <div className="flex items-end gap-3">
            <div className="text-3xl font-bold text-white">42</div>
            <div className="text-xs text-slate-400 mb-1">
              Cấp quyền hệ thống
            </div>
          </div>
        </div>

        <div className="bg-[#0B1739]/50 rounded-xl p-6 border border-cyan-500/10 flex flex-col justify-center">
          <div className="text-xs font-semibold text-slate-400 mb-2">
            Yêu cầu phê duyệt mới
          </div>
          <div className="flex items-end gap-3">
            <div className="text-3xl font-bold text-white">18</div>
            <div className="text-xs text-red-400 mb-1">Cần xử lý ngay</div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#0B1739]/30 border border-cyan-500/10 rounded-xl overflow-hidden shadow-xl">
        {/* Toolbar */}
        <div className="p-4 border-b border-cyan-500/10 flex justify-between items-center bg-[#0B1739]/50">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500"
              size={16}
            />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, email..."
              className="bg-[#020817] text-sm text-white placeholder-slate-500 rounded-lg pl-9 pr-4 py-2 border border-cyan-500/10 focus:outline-none focus:border-cyan-500/50 w-[320px] transition-all"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-slate-400">Lọc theo:</span>
            <div className="relative">
              <select className="appearance-none bg-[#020817] text-sm text-slate-300 rounded-lg pl-4 pr-10 py-2 border border-cyan-500/10 focus:outline-none focus:border-cyan-500/50 cursor-pointer">
                <option>Tất cả vai trò</option>
                <option>Admin</option>
                <option>Quản lý</option>
                <option>Nhân viên</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 pointer-events-none"
                size={16}
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-cyan-500/10 text-xs font-bold text-slate-400 bg-[#0B1739]/80 uppercase tracking-widest">
                <th className="p-4 py-3">Tên người dùng</th>
                <th className="p-4 py-3">Email</th>
                <th className="p-4 py-3">Vai trò</th>
                <th className="p-4 py-3">Ngày tham gia</th>
                <th className="p-4 py-3">Trạng thái</th>
                <th className="p-4 py-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-500/5">
              {users.map((user) => {
                const getStatusStyle = (status: string) => {
                  if (status === "Đang hoạt động") {
                    return "border border-cyan-500/30 text-cyan-400 bg-cyan-500/5";
                  }
                  return "bg-slate-700/20 text-slate-400 border border-slate-500/20";
                };

                const getDotStyle = (status: string) => {
                  if (status === "Đang hoạt động") return "bg-cyan-400";
                  return "bg-slate-400";
                };

                return (
                  <tr
                    key={user.id}
                    className="hover:bg-cyan-500/5 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white ${user.avatarColor} shadow-lg`}
                        >
                          {user.initials}
                        </div>
                        <span className="font-semibold text-sm text-slate-200">
                          {user.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-400 font-medium">
                      {user.email}
                    </td>
                    <td className="p-4">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#020817] text-slate-300 border border-cyan-500/10">
                        {user.role.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-400">
                      {user.date}
                    </td>
                    <td className="p-4">
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${getStatusStyle(
                          user.status
                        )}`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${getDotStyle(
                            user.status
                          )}`}
                        ></div>
                        {user.status.toUpperCase()}
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

        {/* Footer Pagination */}
        <div className="p-4 flex justify-between items-center text-xs text-slate-500 bg-[#0B1739]/50 border-t border-cyan-500/10">
          <div>Hiển thị <span className="text-white font-bold">1-10</span> của <span className="text-white font-bold">12,458</span></div>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-cyan-500/10 hover:bg-cyan-500/10 transition-colors text-slate-400">
              <ChevronLeft size={14} />
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-cyan-400 text-[#020817] font-bold">
              1
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-cyan-500/10 hover:bg-cyan-500/10 transition-colors text-slate-400">
              2
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-cyan-500/10 hover:bg-cyan-500/10 transition-colors text-slate-400">
              3
            </button>
            <span className="px-1">...</span>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-cyan-500/10 hover:bg-cyan-500/10 transition-colors text-slate-400">
              124
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-cyan-500/10 hover:bg-cyan-500/10 transition-colors text-slate-400">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

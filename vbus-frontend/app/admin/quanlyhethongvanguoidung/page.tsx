"use client";

import React from "react";
import {
  Search,
  Bell,
  Settings,
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
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col font-sans">
      {/* Top Header */}
      <div className="flex justify-between items-center px-8 py-4 bg-[#0f172a] border-b border-slate-800">
        <h1 className="text-lg font-medium text-slate-200">User Management</h1>
        <div className="flex items-center gap-6">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500"
              size={16}
            />
            <input
              type="text"
              placeholder="Search operations..."
              className="bg-[#1e293b] text-xs text-white placeholder-slate-500 rounded-md pl-9 pr-4 py-1.5 border border-slate-700 focus:outline-none focus:border-slate-500 w-[200px]"
            />
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <div className="relative cursor-pointer hover:text-white transition-colors">
              <Bell size={18} />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </div>
            <div className="cursor-pointer hover:text-white transition-colors">
              <Settings size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 max-w-7xl mx-auto w-full">
        {/* Title Area */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl font-semibold mb-2">
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
          <div className="bg-[#1e293b]/50 rounded-xl p-6 border border-slate-800 flex flex-col justify-center">
            <div className="text-xs font-semibold text-slate-400 mb-2">
              Tổng số người dùng
            </div>
            <div className="flex items-end gap-3">
              <div className="text-3xl font-bold">12,458</div>
              <div className="flex items-center text-xs font-semibold text-cyan-400 mb-1">
                <ArrowUpRight size={14} />
                12%
              </div>
            </div>
          </div>

          <div className="bg-[#1e293b]/50 rounded-xl p-6 border border-slate-800 flex flex-col justify-center">
            <div className="text-xs font-semibold text-slate-400 mb-2">
              Tài khoản quản trị
            </div>
            <div className="flex items-end gap-3">
              <div className="text-3xl font-bold">42</div>
              <div className="text-xs text-slate-400 mb-1">
                Cấp quyền hệ thống
              </div>
            </div>
          </div>

          <div className="bg-[#1e293b]/50 rounded-xl p-6 border border-slate-800 flex flex-col justify-center">
            <div className="text-xs font-semibold text-slate-400 mb-2">
              Yêu cầu phê duyệt mới
            </div>
            <div className="flex items-end gap-3">
              <div className="text-3xl font-bold">18</div>
              <div className="text-xs text-red-400 mb-1">Cần xử lý ngay</div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-[#1e293b]/30 border border-slate-800 rounded-xl overflow-hidden">
          {/* Toolbar */}
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-[#0f172a]/50">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500"
                size={16}
              />
              <input
                type="text"
                placeholder="Tìm kiếm theo tên, email..."
                className="bg-[#0f172a] text-sm text-white placeholder-slate-500 rounded-lg pl-9 pr-4 py-2 border border-slate-800 focus:outline-none focus:border-slate-600 w-[320px]"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-slate-400">Lọc theo:</span>
              <div className="relative">
                <select className="appearance-none bg-[#0f172a] text-sm text-slate-300 rounded-lg pl-4 pr-10 py-2 border border-slate-800 focus:outline-none focus:border-slate-600">
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
                <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400 bg-[#0f172a]/80">
                  <th className="p-4 py-3">Tên người dùng</th>
                  <th className="p-4 py-3">Email</th>
                  <th className="p-4 py-3">Vai trò</th>
                  <th className="p-4 py-3">Ngày tham gia</th>
                  <th className="p-4 py-3">Trạng thái</th>
                  <th className="p-4 py-3 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  const getStatusStyle = (status: string) => {
                    if (status === "Đang hoạt động") {
                      return "border border-cyan-500/50 text-cyan-400 bg-cyan-950/20";
                    }
                    return "bg-slate-700/50 text-slate-400";
                  };

                  const getDotStyle = (status: string) => {
                    if (status === "Đang hoạt động") return "bg-cyan-400";
                    return "bg-slate-400";
                  };

                  return (
                    <tr
                      key={user.id}
                      className="border-b border-slate-800/50 hover:bg-[#1e293b]/50 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold text-white ${user.avatarColor}`}
                          >
                            {user.initials}
                          </div>
                          <span className="font-medium text-sm text-slate-200">
                            {user.name}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-slate-400">
                        {user.email}
                      </td>
                      <td className="p-4">
                        <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">
                          {user.role}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-slate-400">
                        {user.date}
                      </td>
                      <td className="p-4">
                        <div
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium ${getStatusStyle(
                            user.status
                          )}`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${getDotStyle(
                              user.status
                            )}`}
                          ></div>
                          {user.status}
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

          {/* Footer Pagination */}
          <div className="p-4 flex justify-between items-center text-xs text-slate-400 bg-[#0f172a]/50">
            <div>Hiển thị 1-10 của 12,458</div>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 flex items-center justify-center rounded border border-slate-700 hover:bg-slate-800 transition-colors">
                <ChevronLeft size={14} />
              </button>
              <button className="w-7 h-7 flex items-center justify-center rounded bg-cyan-400 text-[#020817] font-medium">
                1
              </button>
              <button className="w-7 h-7 flex items-center justify-center rounded border border-slate-700 hover:bg-slate-800 transition-colors">
                2
              </button>
              <button className="w-7 h-7 flex items-center justify-center rounded border border-slate-700 hover:bg-slate-800 transition-colors">
                3
              </button>
              <span className="px-1">...</span>
              <button className="w-7 h-7 flex items-center justify-center rounded border border-slate-700 hover:bg-slate-800 transition-colors">
                124
              </button>
              <button className="w-7 h-7 flex items-center justify-center rounded border border-slate-700 hover:bg-slate-800 transition-colors">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

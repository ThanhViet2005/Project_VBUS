"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Route,
  Users,
  Bus,
  UserCheck,
  Map as MapIcon,
  ClipboardList,
  WalletCards,
  Tag,
  CreditCard,
  BarChart3,
  Headphones,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Tổng quan",
    href: "/admin",
    icon: LayoutDashboard,
  },
  // {
  //   title: "Quản lý chuyến cá nhân",
  //   href: "/admin/chuyen-ca-nhan",
  //   icon: Route,
  // },
  {
    title: "Quản lý hệ thống & người dùng",
    href: "/admin/quanlyhethongvanguoidung",
    icon: Users,
  },
  {
    title: "Quản lý xe",
    href: "/admin/quanlyxe",
    icon: Bus,
  },
  {
    title: "Quản lý tài xế",
    href: "/admin/quanlytaixe",
    icon: UserCheck,
  },
  {
    title: "Quản lý chuyến xe",
    href: "/admin/dashboard/trip",
    icon: MapIcon,
  },
  {
    title: "Quản lý đặt xe",
    href: "/admin/dashboard/booking",
    icon: ClipboardList,
  },
  {
    title: "Quản lý giá vé",
    href: "/admin/dashboard/price",
    icon: WalletCards,
  },
  {
    title: "Quản lý ưu đãi",
    href: "/admin/dashboard/promotion",
    icon: Tag,
  },
  {
    title: "Quản lý thanh toán",
    href: "/admin/dashboard/payment",
    icon: CreditCard,
  },
  {
    title: "Thống kê & báo cáo",
    href: "/admin/dashboard/statistic",
    icon: BarChart3,
  },
  {
    title: "Hỗ trợ khách hàng",
    href: "/admin/dashboard/support",
    icon: Headphones,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 w-[280px] h-screen bg-[#020817] border-r border-cyan-900/20 flex flex-col justify-between ">
      <div>
        {/* Logo */}
        <div className="px-6 py-8 border-b border-cyan-900/20">
          <h1 className="text-3xl font-bold text-cyan-400">VBus</h1>
          <p className="text-sm text-slate-500 mt-1">Command Center</p>
        </div>

        {/* Menu */}
        <div className="mt-6 px-3">
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200
                  
                  ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.08)]"
                      : "text-slate-400 hover:bg-slate-800/40 hover:text-white"
                  }
                  `}
                >
                  <Icon size={18} />

                  <span className="text-[15px] font-medium">{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Logout */}
      <div className="p-3 border-t border-cyan-900/20">
        <a href="/auth/dang-nhap">
          <button
            className="
            w-full flex items-center gap-3
            px-4 py-3 rounded-xl
            text-slate-400
            hover:bg-red-500/10
            hover:text-red-400
            transition-all duration-200
          "
          >
            <LogOut size={18} />
            <span className="text-[15px] font-medium">Đăng xuất</span>
          </button>
        </a>
      </div>
    </aside>
  );
}

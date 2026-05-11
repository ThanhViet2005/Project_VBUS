"use client";

import BookingFilters from "@/components/admin/booking/BookingFilters";
import BookingMap from "@/components/admin/booking/BookingMap";
import BookingStatCard from "@/components/admin/booking/BookingStatCard";
import { Ticket, DollarSign, Clock, XCircle } from "lucide-react";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white p-8">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="mb-10">
          <BookingFilters />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <BookingStatCard
            title="Tổng lượt đặt"
            value="1,284"
            growth="+12%"
            color="from-cyan-500 to-blue-500"
            icon={Ticket}
          />

          <BookingStatCard
            title="Doanh thu"
            value="$42.5k"
            growth="+8.4%"
            color="from-blue-600 to-indigo-600"
            icon={DollarSign}
          />

          <BookingStatCard
            title="Chuyến đang chạy"
            value="18"
            growth="5 Đang chờ"
            color="from-cyan-400 to-emerald-400"
            icon={Clock}
            growthColor="text-amber-400"
          />

          <BookingStatCard
            title="Lượt hủy"
            value="24"
            growth="-2.1%"
            color="from-rose-500 to-pink-500"
            icon={XCircle}
            growthColor="text-rose-400"
          />
        </div>

        <div className="rounded-[32px] overflow-hidden border border-cyan-500/10 shadow-2xl">
          <BookingMap />
        </div>
      </div>
    </div>
  );
}

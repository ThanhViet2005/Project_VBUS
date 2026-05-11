"use client";

import DashboardTabs from "@/components/admin/dashboard/DashboardTabs";
import RevenueChart from "@/components/admin/dashboard/RevenueChart";
import FleetStatus from "@/components/admin/dashboard/FleetStatus";
import DashboardActivity from "@/components/admin/dashboard/DashboardActivity";
import BookingChart from "@/components/admin/dashboard/BookingChart";
import DashboardStats from "@/components/admin/dashboard/DashboardStats";

export default function Page() {
  return (
    <div className="bg-[#081120] p-6 space-y-6">
      <DashboardTabs />

      <DashboardStats />

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>

        <BookingChart />
      </div>

      <DashboardActivity />

      <FleetStatus />
    </div>
  );
}

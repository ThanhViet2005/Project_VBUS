import AIInsight from "@/components/admin/statistics/AIInsight";
import ForecastCard from "@/components/admin/statistics/ForecastCard";
import RevenueChart from "@/components/admin/statistics/RevenueChart";
import RouteProgress from "@/components/admin/statistics/RouteProgress";
import SystemNotifications from "@/components/admin/statistics/SystemNotifications";
import { DollarSign, Ticket, Users, Star } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <div className="p-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <ForecastCard
              title="Dự báo: doanh thu tháng tới dự kiến tăng 15% dựa trên dữ liệu lịch sử và xu hướng mùa hè."
              value="$2,450,000"
              growth="12.5%"
              color="border-cyan-500/10"
              icon={DollarSign}
            />

            <ForecastCard
              title="Dự báo: doanh thu tháng tới dự kiến tăng 15% dựa trên dữ liệu lịch sử và xu hướng mùa hè."
              value="142,850"
              growth="8.2%"
              color="border-blue-500/10"
              icon={Ticket}
            />

            <ForecastCard
              title="Dự báo: doanh thu tháng tới dự kiến tăng 15% dựa trên dữ liệu lịch sử và xu hướng mùa hè."
              value="3,124"
              growth="0%"
              color="border-indigo-500/10"
              icon={Users}
            />

            <ForecastCard
              title="Dự báo: doanh thu tháng tới dự kiến tăng 15% dựa trên dữ liệu lịch sử và xu hướng mùa hè."
              value="4.8 / 5"
              growth="0.4"
              color="border-cyan-400/10"
              icon={Star}
            />
          </div>

          <div className="mb-10">
            <RevenueChart />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_1fr] gap-8 mb-10">
            <RouteProgress />

            <SystemNotifications />
          </div>

          <AIInsight />
        </div>
      </div>
    </div>
  );
}

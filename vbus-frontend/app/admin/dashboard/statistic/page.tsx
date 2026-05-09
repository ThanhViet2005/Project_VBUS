import AIInsight from "@/components/admin/statistics/AIInsight";
import ForecastCard from "@/components/admin/statistics/ForecastCard";
import ReportsHeader from "@/components/admin/statistics/StatisticsHeader";
import ReportsTopbar from "@/components/admin/statistics/StatisticsTopBar";
import RevenueChart from "@/components/admin/statistics/RevenueChart";
import RouteProgress from "@/components/admin/statistics/RouteProgress";
import SystemNotifications from "@/components/admin/statistics/SystemNotifications";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-[#081120] text-white">
      <ReportsTopbar />

      <div className="p-6">
        <div className="max-w-[1500px] mx-auto">
          <ReportsHeader />

          <div className="grid grid-cols-4 gap-5 mb-6">
            <ForecastCard
              title="Dự báo: doanh thu tháng tới dự kiến tăng 15% dựa trên dữ liệu lịch sử và xu hướng mùa hè."
              value="$2,450,000"
              growth="+12.5%"
              color="border-cyan-400/30"
            />

            <ForecastCard
              title="Dự báo: doanh thu tháng tới dự kiến tăng 15% dựa trên dữ liệu lịch sử và xu hướng mùa hè."
              value="142,850"
              growth="+8.2%"
              color="border-indigo-400/30"
            />

            <ForecastCard
              title="Dự báo: doanh thu tháng tới dự kiến tăng 15% dựa trên dữ liệu lịch sử và xu hướng mùa hè."
              value="3,124"
              growth="0%"
              color="border-violet-400/30"
            />

            <ForecastCard
              title="Dự báo: doanh thu tháng tới dự kiến tăng 15% dựa trên dữ liệu lịch sử và xu hướng mùa hè."
              value="4.8 / 5"
              growth="+0.4"
              color="border-pink-400/30"
            />
          </div>

          <RevenueChart />

          <div className="grid grid-cols-[1.4fr_1fr] gap-6">
            <RouteProgress />

            <SystemNotifications />
          </div>

          <AIInsight />
        </div>
      </div>
    </div>
  );
}

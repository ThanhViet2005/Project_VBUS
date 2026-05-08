import Header from "@/components/admin/prices/Header";
import PriceTable from "@/components/admin/prices/PriceTable";
import SeasonalChart from "@/components/admin/prices/SeasonalChart";
import StatsCard from "@/components/admin/prices/StatsCard";
import TipsCard from "@/components/admin/prices/TipsCard";
import TopBar from "@/components/admin/prices/TopBar";

export default function PricesPage() {
  return (
    <div className="bg-[#081120] min-h-screen text-white p-8">
      <TopBar />

      <Header />

      <div className="grid grid-cols-4 gap-5">
        <StatsCard
          title="Giá Vé TB"
          value="320.000đ"
          sub="+2.4% so với tháng trước"
        />

        <StatsCard
          title="Phụ Phí Cao Điểm"
          value="15%"
          sub="Đang áp dụng cho 12 tuyến"
        />

        <StatsCard
          title="Loại Xe Phổ Biến"
          value="Limousine"
          sub="Chiếm 45% tổng lượt đặt"
        />

        <StatsCard
          title="Cập Nhật Gần Nhất"
          value="2 Giờ Trước"
          sub="Admin: Nguyễn Văn A"
        />
      </div>

      <PriceTable />

      <div className="flex gap-6 mt-8">
        <SeasonalChart />

        <TipsCard />
      </div>
    </div>
  );
}

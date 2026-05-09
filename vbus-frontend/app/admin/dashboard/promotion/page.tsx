import { StatCard } from "@/components/admin/promotions/StatsCard";
import { PromotionCard } from "@/components/admin/promotions/PromotionCard";
import { PromotionFilter } from "@/components/admin/promotions/PromotionFilters";

export default function PromotionPage() {
  return (
    <main className="p-8 bg-[#0f121a] min-h-screen text-white">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-xl font-semibold uppercase tracking-widest text-teal-500">
            Hệ thống chiến dịch
          </h1>
          <p className="text-slate-400 mt-2 max-w-xl">
            Tối ưu hóa doanh thu và thu hút khách hàng thông qua các mã giảm giá
            thông minh.
          </p>
        </div>
        <button className="bg-teal-400 hover:bg-teal-500 text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2">
          <span>+</span> Tạo ưu đãi mới
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4 mb-10">
        <StatCard label="Đang hoạt động" value="14" subValue="+2 tháng này" />
        <StatCard
          label="Tổng lượt sử dụng"
          value="1,284"
          subValue="84% mục tiêu"
        />
        <StatCard label="Doanh thu tiết kiệm" value="45.2M" subValue="VNĐ" />
        <StatCard label="Sắp hết hạn" value="3" subValue="Cần chú ý" />
      </div>

      {/* Promotions Grid */}
      <div className="grid grid-cols-4 gap-6">
        {/* Map through your data/promotions.ts here */}
        {/* <PromotionCard promo={mockData} /> */}
      </div>

      {/* Advanced Filter */}
      <PromotionFilter />
    </main>
  );
}

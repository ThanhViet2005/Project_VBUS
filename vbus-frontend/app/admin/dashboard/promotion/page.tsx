"use client";

import PromotionCardList from "@/components/admin/promotions/PromotionCardList";
import PromotionHeader from "@/components/admin/promotions/PromotionHeader";
import PromotionStats from "@/components/admin/promotions/PromotionStats";
import PromotionFilter from "@/components/admin/promotions/PromotionFilters";
import PromotionTable from "@/components/admin/promotions/PromotionTable";
export default function PromotionPage() {
  return (
    <div className="bg-[#081120] space-y-6 p-6">

      <PromotionStats />

      <PromotionCardList />

      <PromotionFilter />

      <PromotionTable />
    </div>
  );
}

"use client";

import PromotionCardList from "@/components/admin/promotions/PromotionCardList";
import PromotionHeader from "@/components/admin/promotions/PromotionHeader";
import PromotionStats from "@/components/admin/promotions/PromotionStats";
import PromotionFilter from "@/components/admin/promotions/PromotionFilters";
import PromotionTable from "@/components/admin/promotions/PromotionTable";
import PromotionTopBar from "@/components/admin/promotions/PromotionTopBar";
export default function PromotionPage() {
  return (
    <div className="bg-[#081120] space-y-6 p-6">
      <PromotionTopBar />

      <PromotionHeader />

      <PromotionStats />

      <PromotionCardList />

      <PromotionFilter />

      <PromotionTable />
    </div>
  );
}

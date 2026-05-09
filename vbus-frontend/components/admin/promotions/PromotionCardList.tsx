"use client";

import PromotionCard from "./PromotionCard";

const promotions = [
  {
    code: "SUMMER24",
    discount: "-20%",
    expired: "31/08/2024",
    used: 452,
    total: 1000,
  },
  {
    code: "WELCOME50",
    discount: "-50K",
    expired: "Không thời hạn",
    used: 8210,
    total: 10000,
  },
  {
    code: "FLASH15",
    discount: "-15%",
    expired: "2 giờ",
    used: 89,
    total: 100,
  },
  {
    code: "WEEKEND",
    discount: "-30K",
    expired: "28/05/2024",
    used: 1450,
    total: 5000,
  },
];

export default function PromotionCardList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {promotions.map((item, index) => (
        <PromotionCard key={index} {...item} />
      ))}
    </div>
  );
}

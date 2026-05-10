"use client";

import DashboardStatCard from "./DashboardStatCard";
import { stats } from "@/data/dashboard";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((item, index) => (
        <DashboardStatCard key={index} {...item} />
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";

import TopBar from "@/components/admin/trips/TopBar";
import TripStats from "@/components/admin/trips/TripStats";
import TripFilters from "@/components/admin/trips/TripFilters";
import TripManagement from "@/components/admin/trips/TripManagement";

export default function TripsPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-[#081120] min-h-screen text-white">
      <TopBar search={search} setSearch={setSearch} />

      <div className="p-8">
        <div className="grid grid-cols-[1fr_1fr_2fr] gap-5 mb-8">
          <TripStats title="Tổng chuyến hôm nay" value="142" sub="↗ +12%" />

          <TripStats
            title="Đang di chuyển"
            value="28"
            sub="Thời gian thực"
            yellow
          />

          <TripFilters />
        </div>

        <TripManagement search={search} />
      </div>
    </div>
  );
}

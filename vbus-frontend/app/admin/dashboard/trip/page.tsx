import TopBar from "@/components/admin/trips/TopBar";
import TripHero from "@/components/admin/trips/TripHero";
import TripStats from "@/components/admin/trips/TripStats";
import TripFilters from "@/components/admin/trips/TripFilters";
import TripTable from "@/components/admin/trips/TripTable";

export default function TripsPage() {
  return (
    <div className="bg-[#081120] min-h-screen text-white">
      <TopBar />

      <div className="p-8">
        <TripHero />

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

        <TripTable />
      </div>
    </div>
  );
}

import BookingFilters from "@/components/admin/booking/BookingFilters";
import BookingHeader from "@/components/admin/booking/BookingHeader";
import BookingMap from "@/components/admin/booking/BookingMap";
import BookingStatCard from "@/components/admin/booking/BookingStatCard";
import BookingTopBar from "@/components/admin/booking/BookingTopBar";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#081120] text-white">
      <BookingTopBar />

      <div className="p-6">
        <div className="max-w-[1500px] mx-auto">
          <BookingHeader />

          <BookingFilters />

          <div className="grid grid-cols-4 gap-5 mb-6">
            <BookingStatCard
              title="Tổng lượt đặt"
              value="1,284"
              growth="+12%"
              border="border-cyan-400/40"
            />

            <BookingStatCard
              title="Doanh thu"
              value="$42.5k"
              growth="+8.4%"
              border="border-blue-500/40"
            />

            <BookingStatCard
              title="Chuyến đang chạy"
              value="18"
              growth="5 Đang chờ"
              border="border-cyan-300/40"
            />

            <BookingStatCard
              title="Lượt hủy"
              value="24"
              growth="-2.1%"
              border="border-red-400/40"
            />
          </div>

          <BookingMap />
        </div>
      </div>
    </div>
  );
}

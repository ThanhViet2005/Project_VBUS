import PaymentCard from "@/components/admin/payments/PaymentCard";
import PaymentChartCard from "@/components/admin/payments/PaymentChartCard";
import PaymentFilters from "@/components/admin/payments/PaymentFilters";
import PaymentHeader from "@/components/admin/payments/PaymentHeader";
import PaymentTable from "@/components/admin/payments/PaymentTable";
import PaymentTopBar from "@/components/admin/payments/PaymentTopBar";

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-[#081120] text-white">
      <PaymentTopBar />

      <div className="p-6">
        <PaymentHeader />

        <div className="flex gap-6 mb-8">
          <PaymentCard title="Doanh thu hôm nay" value="42.850.000" />

          <PaymentCard
            title="Tổng thanh toán"
            value="1.240.300.000"
            sub="Thanh toán đa kênh tích hợp"
          />

          <PaymentChartCard />
        </div>

        <div className="bg-[#111A2D] border border-[#1A2740] rounded-3xl p-7">
          <PaymentFilters />

          <PaymentTable />
        </div>
      </div>
    </div>
  );
}

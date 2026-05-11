import PaymentCard from "@/components/admin/payments/PaymentCard";
import PaymentChartCard from "@/components/admin/payments/PaymentChartCard";
import PaymentFilters from "@/components/admin/payments/PaymentFilters";
import PaymentTable from "@/components/admin/payments/PaymentTable";
import { Wallet, Landmark } from "lucide-react";

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <div className="p-8 max-w-[1600px] mx-auto">
        <div className="flex gap-6 mb-8">
          <PaymentCard 
            title="Doanh thu hôm nay" 
            value="42.850.000" 
            icon={Wallet}
            growth="+12.5%"
          />

          <PaymentCard
            title="Tổng thanh toán"
            value="1.240.300.000"
            sub="Thanh toán đa kênh tích hợp"
            icon={Landmark}
            isBank
          />

          <PaymentChartCard />
        </div>

        <div className="bg-[#0B1739]/50 border border-cyan-500/10 rounded-[32px] p-8 shadow-2xl backdrop-blur-md">
          <div className="mb-8 flex justify-between items-center px-4">
             <h2 className="text-xl font-bold">Lịch sử giao dịch</h2>
             <PaymentFilters />
          </div>

          <PaymentTable />
        </div>
      </div>
    </div>
  );
}

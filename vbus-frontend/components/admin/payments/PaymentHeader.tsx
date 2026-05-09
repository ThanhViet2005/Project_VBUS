import { Download } from "lucide-react";

export default function PaymentHeader() {
  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold leading-none bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
          Quản lý Thanh toán
        </h1>

        <p className="text-gray-400 text-sm mt-4">
          Theo dõi và quản lý các giao dịch tài chính thời gian thực.
        </p>
      </div>

      <div className="flex gap-4">
        <button className="h-[58px] px-8 rounded-2xl border border-[#2B3A58] bg-[#111B2F] flex items-center gap-3 text-sm">
          <Download size={22} />
          Xuất báo cáo
        </button>

        <button className="h-[58px] px-8 rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 text-black font-semibold text-[22px]">
          Đối soát thủ công
        </button>
      </div>
    </div>
  );
}

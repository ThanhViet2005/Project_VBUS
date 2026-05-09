import { Download, FileText } from "lucide-react";

export default function StatisticsHeader() {
  return (
    <div className="flex items-start justify-between mb-7">
      <div>
        <h1 className="text-4xl font-bold mb-2">Thống kê & Báo cáo</h1>

        <p className="text-sm text-gray-400 max-w-[700px]">
          Phân tích chuyên sâu về doanh thu và hành vi khách hàng của hệ thống
          VBus.
        </p>
      </div>

      <div className="flex gap-4">
        <button className="h-12 px-6 rounded-2xl border border-[#1E2A45] bg-[#121B2F] flex items-center gap-3 text-sm">
          <Download size={18} />
          Xuất báo cáo Excel
        </button>

        <button className="h-12 px-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center gap-3 text-sm font-medium">
          <FileText size={18} />
          Xuất báo cáo PDF
        </button>
      </div>
    </div>
  );
}

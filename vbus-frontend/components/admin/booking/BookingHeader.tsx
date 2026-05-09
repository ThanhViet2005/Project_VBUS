import { Download, PlusCircle } from "lucide-react";

export default function BookingHeader() {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <p className="text-xs text-gray-500 mb-2">
          VBus Admin / Booking Management
        </p>

        <h1 className="text-4xl font-bold">Quản lý Đặt xe</h1>
      </div>

      <div className="flex gap-4">
        <button className="h-12 px-6 rounded-xl border border-[#1F2B45] bg-[#111A2D] text-cyan-400 text-sm flex items-center gap-3">
          <Download size={18} />
          Xuất CSV
        </button>

        <button className="h-12 px-6 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 text-white text-sm font-semibold flex items-center gap-3">
          <PlusCircle size={18} />
          Đặt vé mới
        </button>
      </div>
    </div>
  );
}

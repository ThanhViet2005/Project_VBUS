import { Download, Plus } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Quản lý Giá vé</h1>

        <p className="text-gray-400 max-w-xl">
          Thiết lập và điều chỉnh bảng giá vé cho toàn bộ hệ thống tuyến đường
          VBus.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-6 py-3 border border-cyan-500 rounded-xl flex items-center gap-2 hover:bg-cyan-500/10 transition">
          <Download size={18} />
          Xuất Báo Cáo
        </button>

        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold flex items-center gap-2 hover:opacity-90 transition">
          <Plus size={18} />
          Tạo Giá Mới
        </button>
      </div>
    </div>
  );
}

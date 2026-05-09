import { Bell, HelpCircle, Search, Settings } from "lucide-react";

export default function StatisticsTopBar() {
  return (
    <div className="h-[74px] border-b border-[#1B2740] px-8 flex items-center justify-between">
      <div className="relative w-[360px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          placeholder="Tìm kiếm dữ liệu thống kê..."
          className="w-full h-11 bg-[#0F1728] border border-[#1E2A45] rounded-xl pl-12 pr-4 text-sm outline-none"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell size={18} className="text-gray-400" />
        <Settings size={18} className="text-gray-400" />
        <HelpCircle size={18} className="text-gray-400" />

        <div className="w-px h-10 bg-[#1E2A45]" />

        <div className="flex items-center gap-3">
          <div className="text-right">
            <h3 className="text-sm font-semibold">Admin VBus</h3>

            <p className="text-[11px] text-gray-500 uppercase">
              SUPER ADMINISTRATOR
            </p>
          </div>

          <img
            src="https://i.pravatar.cc/100"
            className="w-11 h-11 rounded-full border-2 border-cyan-400"
          />
        </div>
      </div>
    </div>
  );
}

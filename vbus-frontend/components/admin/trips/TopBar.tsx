import { Bell, HelpCircle, Search, Settings } from "lucide-react";

export default function TopBar() {
  return (
    <div className="h-[76px] border-b border-[#1E2A45] flex items-center justify-between px-8">
      <div className="relative w-[480px]">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          size={18}
        />

        <input
          placeholder="Tìm kiếm chuyến xe..."
          className="w-full bg-[#10182B] border border-[#1F2B45] rounded-xl py-3 pl-12 pr-4 outline-none"
        />
      </div>

      <div className="flex items-center gap-8">
        <div className="flex gap-8">
          <button className="text-cyan-400 border-b-2 border-cyan-400 pb-5">
            Lịch trình
          </button>

          <button className="text-gray-400">Tuyến đường</button>
        </div>

        <div className="flex items-center gap-5 border-l border-[#1E2A45] pl-6">
          <Bell className="text-gray-400" size={20} />
          <Settings className="text-gray-400" size={20} />
          <HelpCircle className="text-gray-400" size={20} />

          <div className="flex items-center gap-3">
            <div>
              <h3 className="font-semibold">Admin VBus</h3>
              <p className="text-xs text-gray-400">HỆ THỐNG QUẢN TRỊ</p>
            </div>

            <img
              src="/vbus-frontend/public/avatarAdmin/avaAdmin_01.png"
              alt="Fail"
              className="w-12 h-12 rounded-full border-2 border-cyan-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { Bell, HelpCircle, Search, Settings } from "lucide-react";

export default function SupportTopbar() {
  return (
    <div className="h-[72px] border-b border-[#18253C] px-7 flex items-center justify-between bg-[#081120]">
      <div className="relative w-[360px]">
        <Search
          size={17}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          placeholder="Tìm kiếm cuộc hội thoại..."
          className="w-full h-11 bg-[#111B31] border border-[#1B2945] rounded-xl pl-11 pr-4 text-sm outline-none"
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell size={18} className="text-gray-400" />

        <Settings size={18} className="text-gray-400" />

        <HelpCircle size={18} className="text-gray-400" />

        <div className="w-px h-10 bg-[#1B2945]" />

        <div className="flex items-center gap-3">
          <div className="text-right">
            <h3 className="text-sm font-semibold">Admin User</h3>

            <p className="text-[11px] text-gray-500 uppercase">
              QUẢN LÝ CẤP CAO
            </p>
          </div>

          <img
            src="/avatarAdmin/avaAdmin_01.png"
            className="w-11 h-11 rounded-full border border-cyan-400"
          />
        </div>
      </div>
    </div>
  );
}

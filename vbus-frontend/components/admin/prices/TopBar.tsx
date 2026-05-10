import { Bell, Search, Settings } from "lucide-react";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="relative w-[420px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

        <input
          type="text"
          placeholder="Tìm kiếm tuyến đường, giá vé..."
          className="w-full bg-[#10182B] border border-[#1E2A45] rounded-full py-3 pl-11 pr-4 text-sm outline-none"
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell className="text-gray-400 w-5 h-5" />
        <Settings className="text-gray-400 w-5 h-5" />

        <div className="flex items-center gap-3 border-l border-[#1E2A45] pl-5">
          <div>
            <p className="text-cyan-400 font-semibold">Administrator</p>
            <p className="text-xs text-gray-400">MASTER CONTROL</p>
          </div>

          <a href="#">
            <img
              src="/avatarAdmin/avaAdmin_01.png"
              alt="Admin Profile"
              className="w-10 h-10 rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

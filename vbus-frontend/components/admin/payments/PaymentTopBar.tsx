import { Bell, HelpCircle, Search, Settings } from "lucide-react";

export default function PaymentTopBar() {
  return (
    <div className="h-[82px] border-b border-[#18233A] px-8 flex items-center justify-between">
      <div className="relative w-[500px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          placeholder="Tìm kiếm giao dịch..."
          className="w-full h-[52px] bg-[#0E1729] border border-[#1B2741] rounded-xl pl-12 pr-4 outline-none text-[15px]"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="text-gray-400" size={20} />
        <Settings className="text-gray-400" size={20} />
        <HelpCircle className="text-gray-400" size={20} />

        <div className="w-px h-10 bg-[#1D2A44]" />

        <div className="flex items-center gap-3">
          <div className="text-right">
            <h3 className="font-semibold text-[20px]">Admin VBus</h3>

            <p className="text-gray-500 text-sm">Super Admin</p>
          </div>

          <img
            src="/avatarAdmin/avaAdmin_01.png"
            className="w-12 h-12 rounded-full border-2 border-cyan-400"
          />
        </div>
      </div>
    </div>
  );
}

import { Info, Phone } from "lucide-react";

export default function ChatHeader() {
  return (
    <div className="h-[72px] border-b border-[#18253C] px-7 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#0E2C3A] flex items-center justify-center text-cyan-400">
          👤
        </div>

        <div>
          <h3 className="font-semibold text-lg">Nguyễn Thành</h3>

          <p className="text-sm text-gray-500">ID khách hàng: #44921</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-xl bg-[#121D34] flex items-center justify-center">
          <Phone size={18} />
        </button>

        <button className="w-10 h-10 rounded-xl bg-[#121D34] flex items-center justify-center">
          <Info size={18} />
        </button>

        <button className="h-11 px-6 rounded-xl bg-cyan-400 text-black text-sm font-medium">
          Đóng yêu cầu
        </button>
      </div>
    </div>
  );
}

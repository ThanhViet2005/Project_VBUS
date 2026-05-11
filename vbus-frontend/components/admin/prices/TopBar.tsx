import { Bell, Search, Settings, HelpCircle } from "lucide-react";

export default function TopBar() {
  return (
    <div className="h-[72px] border-b border-[#1B2740] mb-3 pb-9 flex items-center justify-between">
      <div className="relative w-[420px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          placeholder="Tìm kiếm tuyến đường, giá vé..."
          className="w-full h-11 bg-[#10192B] border border-[#1D2943] rounded-xl pl-12 pr-4 text-sm outline-none"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell size={19} className="text-gray-400" />
        <Settings size={19} className="text-gray-400" />
        <HelpCircle size={19} className="text-gray-400" />

        <div className="w-px h-10 bg-[#1E2A45]" />

        <div className="flex items-center gap-3">
          <div className="text-right">
            <h3 className="font-semibold text-sm">Alex Admin</h3>

            <p className="text-xs text-gray-500">SYSTEM OPS</p>
          </div>

          <img
            src="/avatarAdmin/avaAdmin_01.png"
            className="w-11 h-11 rounded-full border-2 border-cyan-400"
          />
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="flex items-center justify-between mb-8">
  //     <div className="relative w-[420px]">
  //       <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

  //       <input
  //         type="text"
  //         placeholder="Tìm kiếm tuyến đường, giá vé..."
  //         className="w-full bg-[#10182B] border border-[#1E2A45] rounded-full py-3 pl-11 pr-4 text-sm outline-none"
  //       />
  //     </div>

  //     <div className="flex items-center gap-5">
  //       <Bell className="text-gray-400 w-5 h-5" />
  //       <Settings className="text-gray-400 w-5 h-5" />

  //       <div className="flex items-center gap-3 border-l border-[#1E2A45] pl-5">
  //         <div>
  //           <p className="text-cyan-400 font-semibold">Administrator</p>
  //           <p className="text-xs text-gray-400">MASTER CONTROL</p>
  //         </div>

  //         <a href="#">
  //           <img
  //             src="/avatarAdmin/avaAdmin_01.png"
  //             alt="Admin Profile"
  //             className="w-10 h-10 rounded-full"
  //           />
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // );
}

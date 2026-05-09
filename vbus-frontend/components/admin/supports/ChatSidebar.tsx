import { conversations } from "@/data/supports";
import ChatItem from "./ChatItem";

export default function ChatSidebar() {
  return (
    <div className="w-[360px] border-r border-[#18253C] bg-[#0D172B] flex flex-col">
      <div className="p-6 border-b border-[#18253C]">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[30px] font-semibold">Chat đang hoạt động</h2>

          <span className="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-sm">
            24 Online
          </span>
        </div>

        <div className="flex gap-3">
          <button className="px-5 h-11 rounded-xl bg-cyan-400 text-black text-sm font-medium">
            Tất cả
          </button>

          <button className="px-5 h-11 rounded-xl bg-[#121D34] text-sm text-gray-400">
            Chưa đọc
          </button>

          <button className="px-5 h-11 rounded-xl bg-[#121D34] text-sm text-gray-400">
            Đã phân công
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {conversations.map((item) => (
          <ChatItem
            key={item.id}
            name={item.name}
            message={item.message}
            time={item.time}
            active={item.active}
          />
        ))}
      </div>
    </div>
  );
}

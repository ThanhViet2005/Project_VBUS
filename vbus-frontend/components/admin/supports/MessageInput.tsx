export default function MessageInput() {
  return (
    <div className="p-5 border-t border-[#18253C]">
      <div className="h-20 rounded-3xl bg-[#151F38] border border-[#1B2945] px-6 flex items-center justify-between">
        <div className="flex gap-8 text-gray-400">
          <button>Tất cả</button>
          <button>Chưa đọc</button>
          <button>Đã phân công</button>
        </div>

        <input
          placeholder="Nhập tin nhắn..."
          className="flex-1 bg-transparent px-6 outline-none text-sm"
        />

        <button className="h-11 px-7 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium">
          Gửi
        </button>
      </div>
    </div>
  );
}

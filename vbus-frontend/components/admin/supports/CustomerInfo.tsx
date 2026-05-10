export default function CustomerInfo() {
  return (
    <div className="w-[320px] border-l border-[#18253C] bg-[#0D172B] p-6">
      <h3 className="text-sm uppercase tracking-[3px] text-gray-500 mb-8">
        Thông Tin Khách Hàng
      </h3>

      <div className="flex flex-col items-center text-center mb-10">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-5xl font-bold mb-5">
          NT
        </div>

        <h2 className="text-3xl font-semibold mb-2">Phú Nguyễn</h2>

        <p className="text-gray-500">Hà Nội, Việt Nam</p>
      </div>

      <div className="bg-[#121D34] rounded-3xl p-5 mb-5 border border-[#1B2945]">
        <h4 className="text-xs uppercase text-gray-500 mb-4">Đặt vé gần đây</h4>

        <p className="text-cyan-400 font-semibold text-lg mb-2">Vé #VN772</p>

        <p className="text-sm text-gray-400 mb-3">Hà Nội → Đà Nẵng</p>

        <span className="text-xs text-gray-500">
          Khởi hành: Ngày mai, 08:30
        </span>
      </div>

      <div className="bg-[#121D34] rounded-3xl p-5 mb-5 border border-[#1B2945]">
        <h4 className="text-xs uppercase text-gray-500 mb-5">Thao tác nhanh</h4>

        <div className="grid grid-cols-2 gap-3">
          <button className="h-11 rounded-xl bg-[#081120] text-sm">
            Đổi lịch
          </button>

          <button className="h-11 rounded-xl bg-[#081120] text-sm">
            Hoàn tiền
          </button>

          <button className="h-11 rounded-xl bg-[#081120] text-sm">
            Ghi chú
          </button>

          <button className="h-11 rounded-xl bg-[#081120] text-sm">Chặn</button>
        </div>
      </div>

      <div className="bg-[#121D34] rounded-3xl p-5 border border-[#1B2945]">
        <h4 className="text-xs uppercase text-gray-500 mb-4">
          Ghi chú quản trị
        </h4>

        <p className="italic text-gray-400 text-sm leading-7">
          "Thích ghế cửa sổ. Khách hàng rất lịch sự."
        </p>
      </div>
    </div>
  );
}

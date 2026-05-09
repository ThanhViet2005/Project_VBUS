export default function BookingMapInfo() {
  return (
    <div className="absolute left-6 top-6 w-[270px] bg-[#4A5561]/90 backdrop-blur-md rounded-3xl p-5 border border-white/10">
      <p className="text-cyan-300 text-xs tracking-[3px] uppercase mb-5">
        Hành trình đang theo dõi
      </p>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-[#0F1B2D] flex items-center justify-center">
          🚌
        </div>

        <div>
          <h3 className="font-bold text-xl">VB-2024-X9</h3>

          <p className="text-xs text-gray-300">SÀI GÒN - ĐÀ LẠT</p>
        </div>
      </div>

      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-300">Tài xế</span>
          <span>Nguyễn Văn A</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">Trạng thái</span>

          <span className="text-green-400">● Đang di chuyển</span>
        </div>
      </div>
    </div>
  );
}

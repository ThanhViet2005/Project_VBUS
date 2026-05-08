export default function TipsCard() {
  return (
    <div className="bg-[#121C33] border border-[#1F2B45] rounded-2xl p-6 w-[320px] h-[350px]">
      <div className="bg-cyan-500 text-black text-xs px-3 py-1 rounded-full inline-block font-bold mb-5">
        MẸO QUẢN LÝ
      </div>

      <h2 className="text-2xl font-bold mb-4">Cấu hình giá linh hoạt</h2>

      <p className="text-gray-400 leading-7 mb-8">
        Bạn có thể tự động hóa việc tăng giá trong các dịp lễ Tết bằng cách
        thiết lập lịch trình phụ phí cao điểm trước 30 ngày.
      </p>

      <button className="w-full py-4 rounded-xl border border-[#1E2A45] hover:border-cyan-500 transition">
        Tìm hiểu thêm →
      </button>
    </div>
  );
}

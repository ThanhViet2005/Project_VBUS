export default function AIInsight() {
  return (
    <div className="bg-[#121B2F] border border-[#1E2A45] rounded-3xl p-6 flex items-center justify-between mt-6">
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 rounded-full bg-[#163047] flex items-center justify-center text-2xl">
          ✨
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">VBus AI Insight</h3>

          <p className="text-sm text-gray-400">
            Dự báo: Doanh thu tháng tới dự kiến tăng 15% dựa trên dữ liệu lịch
            sử và xu hướng mùa hè.
          </p>
        </div>
      </div>

      <button className="h-12 px-8 rounded-2xl border border-cyan-400 text-cyan-400 text-sm font-medium">
        Xem chi tiết dự báo
      </button>
    </div>
  );
}

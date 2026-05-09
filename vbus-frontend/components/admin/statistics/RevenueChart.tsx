export default function RevenueChart() {
  return (
    <div className="bg-[#121B2F] border border-[#1E2A45] rounded-3xl p-7 mb-6">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Xu Hướng Doanh Thu</h2>

          <p className="text-sm text-gray-400">
            Dự báo: Doanh thu tháng tới dự kiến tăng 15% dựa trên dữ liệu lịch
            sử và xu hướng mùa hè.
          </p>
        </div>

        <div className="flex border border-[#1E2A45] rounded-xl overflow-hidden">
          <button className="px-5 py-3 bg-[#0F1728] text-cyan-400 text-sm font-medium">
            6 Tháng
          </button>

          <button className="px-5 py-3 text-sm text-gray-500">1 Năm</button>
        </div>
      </div>

      <div className="relative h-[340px] rounded-2xl bg-gradient-to-r from-[#081221] to-[#0B1730] overflow-hidden border border-[#1E2A45]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 340">
          <path
            d="M50 290 C150 280, 200 270, 260 285 S400 320, 520 240 S700 160, 820 120"
            stroke="#3EE7F3"
            strokeWidth="4"
            fill="none"
          />

          <path
            d="M50 290 C150 280, 200 270, 260 285 S400 320, 520 240 S700 160, 820 120 L820 340 L50 340 Z"
            fill="url(#paint)"
            opacity="0.25"
          />

          <defs>
            <linearGradient id="paint" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#3EE7F3" />
              <stop offset="1" stopColor="#3EE7F3" stopOpacity="0" />
            </linearGradient>
          </defs>

          <circle
            cx="180"
            cy="280"
            r="7"
            fill="#081221"
            stroke="#3EE7F3"
            strokeWidth="3"
          />

          <circle
            cx="560"
            cy="240"
            r="7"
            fill="#081221"
            stroke="#3EE7F3"
            strokeWidth="3"
          />
        </svg>

        <div className="absolute bottom-4 left-8 right-8 flex justify-between text-[11px] tracking-[2px] text-gray-500 uppercase">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div>
    </div>
  );
}

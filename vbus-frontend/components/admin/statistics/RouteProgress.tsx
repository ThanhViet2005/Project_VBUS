const routes = [
  {
    name: "Hà Nội - TP. Hồ Chí Minh",
    width: "95%",
  },
  {
    name: "Đà Nẵng - Hội An",
    width: "78%",
  },
  {
    name: "Sài Gòn - Đà Lạt",
    width: "64%",
  },
  {
    name: "Hà Nội - Sapa",
    width: "49%",
  },
  {
    name: "Huế - Đà Nẵng",
    width: "36%",
  },
];

export default function RouteProgress() {
  return (
    <div className="bg-[#121B2F] border border-[#1E2A45] rounded-3xl p-7">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Tuyến Đường Phổ Biến</h2>

          <p className="text-sm text-gray-400">
            Dự báo: Doanh thu tháng tới dự kiến tăng 15% dựa trên dữ liệu lịch
            sử và xu hướng mùa hè.
          </p>
        </div>

        <button className="text-gray-500">⋮</button>
      </div>

      <div className="space-y-8">
        {routes.map((route) => (
          <div key={route.name}>
            <div className="flex justify-between mb-3 text-sm">
              <span>{route.name}</span>

              <span className="text-cyan-400">lượt</span>
            </div>

            <div className="h-3 rounded-full bg-[#1A2945] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-200"
                style={{
                  width: route.width,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

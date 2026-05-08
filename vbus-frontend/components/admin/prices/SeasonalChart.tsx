export default function SeasonalChart() {
  const bars = [120, 180, 300, 150, 170, 340];

  return (
    <div className="bg-[#121C33] border border-[#1F2B45] rounded-2xl p-6 flex-1 h-[350px]">
      <h2 className="text-xl font-semibold mb-10">Biến động Giá vé theo Mùa</h2>

      <div className="flex items-end justify-between h-[220px] gap-4">
        {bars.map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-2xl bg-gradient-to-t from-cyan-500/30 to-blue-500/60"
            style={{ height }}
          />
        ))}
      </div>

      <div className="flex justify-between mt-5 text-sm text-gray-400">
        <span>Tháng 1</span>
        <span>Tháng 6</span>
      </div>
    </div>
  );
}

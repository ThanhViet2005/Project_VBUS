"use client";

const stats = [
  {
    title: "Đang hoạt động",
    value: "14",
    desc: "+2 tháng này",
  },
  {
    title: "Tổng lượt sử dụng",
    value: "1,284",
    desc: "84% mục tiêu",
  },
  {
    title: "Doanh thu tiết kiệm",
    value: "45.2M",
    desc: "VNĐ",
  },
  {
    title: "Sắp hết hạn",
    value: "3",
    desc: "Còn 3 ngày",
  },
];

export default function PromotionStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 ">
      {stats.map((item, index) => (
        <div
          key={index}
          className="
          bg-[#081028]
          border border-cyan-500/10
          rounded-2xl
          p-5
        "
        >
          <p className="text-slate-400 text-sm">{item.title}</p>

          <h2 className="text-3xl font-bold text-white mt-3">{item.value}</h2>

          <p className="text-cyan-400 text-sm mt-2">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

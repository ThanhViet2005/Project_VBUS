"use client";

const activities = [
  {
    title: "HOẠT ĐỘNG HÀNG NGÀY",
    value: "1,240",
  },
  {
    title: "HOẠT ĐỘNG HÀNG THÁNG",
    value: "42,800",
  },
  {
    title: "GIÁ TRỊ ĐẶT VÉ TB",
    value: "235,000 đ",
  },
  {
    title: "GIỜ CAO ĐIỂM",
    value: "18:00 - 20:00",
  },
];

export default function DashboardActivity() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {activities.map((item, index) => (
        <div
          key={index}
          className="
          bg-[#111827]
          rounded-3xl
          p-6
        "
        >
          <p className="text-slate-500 text-sm">{item.title}</p>

          <h2 className="text-white text-4xl font-bold mt-5">{item.value}</h2>
        </div>
      ))}
    </div>
  );
}
